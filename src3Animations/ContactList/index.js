import React, { Component, PropTypes } from 'react';
import {
ListView,
ScrollView,
} from 'react-native';

import ContactItem from './ContactItem';

const { any } = PropTypes;

function joke(){
  return fetch('https://api.icndb.com/jokes/random.json')
  .then((response) => response.json())
  .then((data)=> {return data.type;})
  .catch((error) => {
    console.error(error);
    });
}
const data = [
  {id: 1, name: 'Crysfel Villa'},
  {id: 2, name: 'Stan Bershadskiy'},
  { id: 3, name : () => (joke())},
  { id: 4, name : 'm'},
  { id: 5, name : 'm'},
];



class ContactList extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: this.ds.cloneWithRows(data),
      swiping: false,
    };
  }
  onToggleSwipe = () => {
    this.setState({ swiping: !this.state.swiping });
  }
  onRemoveContact = (contact) => {
    const index = data.findIndex(
      (item) => item.id === contact.id
      );
      data.splice(index, 1);
      this.setState({
      dataSource: this.ds.cloneWithRows(data),
      });
  }
  renderItem = (contact) => (
    <ContactItem
    contact={contact}
    onRemove={this.onRemoveContact}
    onDragEnd={this.onToggleSwipe}
    onDragStart={this.onToggleSwipe}
    />
  );

  render() {
    const { dataSource, swiping } = this.state;
    return (
    <ListView
      key={data}
      enableEmptySections
      dataSource={dataSource}
      renderScrollComponent = {
        (props) => <ScrollView {...props} scrollEnabled = {!swiping}/>
      }
      renderRow = {this.renderItem} />
    );
  }
}
export default ContactList;
