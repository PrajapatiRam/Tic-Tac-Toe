import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';
import Header from './Header';
import {savePlayer1Name} from '../Redux/Actions/AppActions';

class Player1 extends Component {
  constructor() {
    super();
    this.state = {
      player1Name: 'Player 1',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title={'Welcome'} />
        <Text style={styles.text}>{'Player 1'}</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'Your name?'}
          onChangeText={player1Name => {
            this.setState({player1Name});
          }}
        />
        <Button
          title={'Next'}
          onPress={() => {
            this.saveName();
            this.props.navigation.navigate('Player2Scene');
          }}
        />
      </View>
    );
  }
  saveName() {
    this.props.savePlayer1Name(this.state.player1Name);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCee',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 25,
  },
  text: {
    marginTop: 25,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default connect(
  null,
  {
    savePlayer1Name: savePlayer1Name,
  },
)(Player1);
