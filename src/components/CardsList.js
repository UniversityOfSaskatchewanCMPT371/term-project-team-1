import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import CardDetail from './CardDetail';

//class based component
class CardsList extends Component {
  // Initial state
  state = { cards : [] };
  //Instantly called when this component is called
  componentWillMount() {
    {/* Get request for hhtps we can maybe use this to load all the cards?*/}
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ cards: response.data }));
  }
  //{card.title} is how you get a variable from jsx between the text tags
  renderCards() {
    {/* The key in the text tag is how we keep track of what we are rendering! this can be useful
      for when we have a database ready to choose what cards to render on the screen*/}
  return this.state.cards.map(card =>
    <CardDetail key={card.title} card={card} />
    );
  }
  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderCards()}
      </ScrollView>
    );
  }
}

export default CardsList;
