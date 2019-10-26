import React, {Component} from 'react';
import {connect} from 'react-redux';

import {StyleSheet, View, TextInput, Button, Text} from 'react-native';
import Header from './Header';
import {StackActions, NavigationActions} from 'react-navigation';
import {savePlayer2Name} from '../Redux/Actions/AppActions';

class Player2 extends Component {
  constructor() {
    super();
    this.state = {
      player2Name: 'Player 2',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title={'Welcome'} />
        <Text style={styles.text}>{'Player 2'}</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'Your name?'}
          onChangeText={player2Name => {
            this.setState({player2Name});
          }}
        />
        <Button
          title={'Start'}
          onPress={() => {
            this.saveName();
            const resetAction = StackActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({routeName: 'HomeScene'})],
            });
            this.props.navigation.dispatch(resetAction);
          }}
        />
      </View>
    );
  }

  saveName() {
    this.props.savePlayer2Name(this.state.player2Name);
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
    savePlayer2Name: savePlayer2Name,
  },
)(Player2);
