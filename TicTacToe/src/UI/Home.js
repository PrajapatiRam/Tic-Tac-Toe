import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';

import Header from './Header';
import Board from './Board';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title={'Tic Tac Toe'} />
        <View style={styles.scores_container}>
          <View style={styles.score}>
            <Text style={styles.user_score}>
              {this.props.player1score ? this.props.player1score : '0'}
            </Text>
            <Text style={styles.username}>{this.props.player1name} (X)</Text>
          </View>
          <View style={styles.score}>
            <Text style={styles.user_score}>
              {this.props.player2score ? this.props.player2score : '0'}
            </Text>
            <Text style={styles.username}>{this.props.player2name} (O)</Text>
          </View>
        </View>
        <Board />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCc0',
  },
  scores_container: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  score: {
    flex: 1,
    alignItems: 'center',
  },
  user_score: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 20,
  },
});

export default connect(state => ({
  player1score: state.player1score,
  player2score: state.player2score,
  player1name: state.player1name,
  player2name: state.player2name,
}))(Home);
