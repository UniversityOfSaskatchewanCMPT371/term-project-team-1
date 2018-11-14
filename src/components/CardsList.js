import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { fetchMyCards } from '../actions';
import ListItem from './ListItem';

//Display the items that were retrieved as an object and splice them information
// rows and adds styling to each one to allow the user to seperate between every card
class CardsList extends Component {
  componentWillMount() {
    this.props.fetchMyCards();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    //NextProps are the set of props that will come in Next render cycle
    //this.props is the old set of props of this class
    this.createDataSource(nextProps);
  }
//Expected to call with a set of properties with myCards
createDataSource({ myCards }) {
   const ds = new ListView.DataSource({
     rowHasChanged: (r1, r2) => r1 !== r2
   });

   this.dataSource = ds.cloneWithRows(myCards);
 }

renderRow(myCards) {
  return <ListItem myCards={myCards} />;
}

  render () {

    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const myCards = _.map(state.myCards, (val,uid) => {
    return { ...val, uid } ;
    //For each value pair we are running this function for each value
    // using the key of uid and pushing it all into one object to result
    // into an object of card + its Id
  });
  return {myCards} ;
};

export default connect(mapStateToProps, {fetchMyCards}) (CardsList);
