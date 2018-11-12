import React from 'react';
import { Text,View,Image, Linking  } from 'react-native';
/*import CardStyle from './CardStyle';
import CardSectionStyle from './CardSectionStyle';
import Button from './Button';*/
import {CardStyle,CardSectionStyle,Button} from './index.js';

//What details are we going to render on the screen ?
const CardDetail = ({card}) => {
  const { title, artist, thumbnail_image, image, url } = card ;
  const {
    thumbnailStyle, headerContentStyle,
    thumbnailContainerStyle, headerTextStyle ,mainImageStyle
  } = styles;

  return (
    <CardStyle>

      <CardSectionStyle>

        <View style={thumbnailContainerStyle}>
          <Image
           style ={thumbnailStyle}
           source={{uri: thumbnail_image}}
            />
        </View>

        <View style={headerContentStyle}>
        <Text style={headerTextStyle}>{title}</Text>
        <Text>{artist}</Text>
        </View>
      </CardSectionStyle>

      <CardSectionStyle>
        <Image
         style ={mainImageStyle}
         source= {{uri: image }}
         />
      </CardSectionStyle>

      <CardSectionStyle>
        <Button onPress={ () => Linking.openURL(url)}>
          Takes you to
        </Button>
      </CardSectionStyle>
    </CardStyle>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  //when you give width null and flex 1 this takes from one side of the phone to the other
  mainImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }

};


export {CardDetail};
