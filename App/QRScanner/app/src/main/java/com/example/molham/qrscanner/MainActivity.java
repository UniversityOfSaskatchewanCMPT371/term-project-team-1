package com.example.molham.qrscanner;

import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.hardware.Camera;
import android.net.Uri;
import android.os.Build;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import com.google.zxing.Result;

import me.dm7.barcodescanner.zxing.ZXingScannerView;

import static android.Manifest.permission.CAMERA;

public class MainActivity extends AppCompatActivity implements ZXingScannerView.ResultHandler {

    // The variable that is used to request the camera being opened.
    private static final int REQUEST_CAMERA = 1 ;
    private ZXingScannerView scannerView;
    private static int camId = Camera.CameraInfo.CAMERA_FACING_BACK;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        scannerView = new ZXingScannerView(this);
        setContentView(scannerView);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M){
            if (checkPermission()){     // Do we have permission to display the message ?
                Toast.makeText(MainActivity.this, "You have permission !" , Toast.LENGTH_LONG).show();
            }
            else {
                requestPermission();
            }
        }
    }
    /*
    @Pre: Nothing
    @Post: Returns true or false.Function will check if the current activity has the permission granted to use the camera. True meaning
           it has the permission.
     */
    private boolean checkPermission() {
        return (ContextCompat.checkSelfPermission(getApplicationContext(), CAMERA) == PackageManager.PERMISSION_GRANTED);
    }

    /*
    @Pre: Nothing
    @Post: Allows permission for the user to use the camera.
     */
    private void requestPermission(){
        ActivityCompat.requestPermissions(this, new String[]{CAMERA}, REQUEST_CAMERA);
    }

    /*
    @Pre: requestCode is an integer if it is equal to REQUEST_CAMERA (which is 1) then it is allowed permission

    @Post: Allows permission for the user to use the camera.
     */
    public void onRequestPermissionResult(int requestCode, String permission[], int grantResults[]){

        switch (requestCode){
            case REQUEST_CAMERA :
                if (grantResults.length > 0){
                    // If the first spot in the array is granted than cameraAccepted turns true meaning permission was granted.
                    boolean cameraAccepted = grantResults[0] == PackageManager.PERMISSION_GRANTED ;
                    if (cameraAccepted){
                        Toast.makeText(getApplicationContext(), "Permission was granted!", Toast.LENGTH_LONG).show();
                    }
                    else{
                        Toast.makeText(getApplicationContext(), "Permission was denied!", Toast.LENGTH_LONG).show();
                        //Checks for the current buildo of SDK to not be outdated.
                        if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.M){
                            if(shouldShowRequestPermissionRationale(CAMERA)){
                                //Calls our alert messages function which then awaits the user to click on the screen.
                                displayAlertMessage("You must allow Permission!",
                                        new DialogInterface.OnClickListener() {
                                    @Override
                                    public void onClick(DialogInterface dialog, int which) {
                                        // checks for api
                                        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                                            requestPermissions(new String []{CAMERA}, REQUEST_CAMERA);
                                        }
                                    }
                                });
                                return;
                            }
                        }
                    }
                    break ;
                }
        }


    }

    /*
    @Pre:

    @Post: If the app was installed then it resumes and does not need to ask for permissions, this then displays the scannerView
    which then starts the camera
     */
    @Override
    public void onResume(){
        super.onResume();
        //checking for current version
        if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.M){
           //double checking for permissions for camera if allowed change scannerview to current.
            if(checkPermission()){
                if(scannerView == null){
                    scannerView = new ZXingScannerView(this);
                    setContentView(scannerView);
                }
                scannerView.setResultHandler(this);
                scannerView.startCamera();

            }else{
                requestPermission();
            }
        }
    }

    /*
        @Pre:
        @Post: when app is closed stop using the camera.
         */
    @Override
    public void onDestroy(){
        super.onDestroy();
        scannerView.stopCamera();
    }

    /*
    @Pre:
    @Post: Allows the user to see an alert message that then prompts them to allow permission for not allowing their camera to be used
           onto their screen, Can choose ok turning the permissions on automatically.
     */
    public void displayAlertMessage(String msg, DialogInterface.OnClickListener listener){
        new android.support.v7.app.AlertDialog.Builder(MainActivity.this)
                .setMessage(msg)
                .setPositiveButton("OK", listener) // If Ok is clicked then we need a listener to request the permission.
                .setNegativeButton("Cancel", null) // Nothing happens
                .create()
                .show();
    }

    @Override
    public void handleResult(final Result result){
        final String scanResults = result.getText();
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle("Scan Result");
        //After Scanning the title of what is shown is scan result which then has two buttons, One being okay that will then return
        // to the camera view, or a neutral button which then visits that link that the user put.
        builder.setPositiveButton("OK", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                scannerView.resumeCameraPreview(MainActivity.this);

            }
        });
        builder.setNeutralButton("visit", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(scanResults));
            }
        });
        //Display the result and show.
        builder.setMessage(scanResults);
        AlertDialog alert = builder.create();
        alert.show();
    }
}
