import React, {Component} from 'react';
import {connect} from 'react-redux';
import range from 'lodash.range';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
  BackHandler,
} from 'react-native';
import {savePlayer1Score, savePlayer2Score} from '../Redux/Actions/AppActions';

class Board extends Component {
  constructor() {
    super();

    this.generateRows = this.generateRows.bind(this);
    this.generateBlocks = this.generateBlocks.bind(this);

    this.possible_combinations = [
      [0, 3, 6],
      [1, 4, 7],
      [0, 1, 2],
      [3, 4, 5],
      [2, 5, 8],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    this.ids = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

    this.rows = [range(3).fill(''), range(3).fill(''), range(3).fill('')];

    this.state = {
      moves: range(9).fill(''),
      firstPlayer: true,
    };
  }

  updateScores(moves) {
    function isInArray(moves, piece, element, index, array) {
      return moves[element] && moves[element] == piece;
    }
    this.possible_combinations.forEach(p_row => {
      if (p_row.every(isInArray.bind(null, moves, 'X'))) {
        this.props.savePlayer1Score(this.props.player1score + 1);
        this.showAlert(this.props.player1name);
      } else if (p_row.every(isInArray.bind(null, moves, 'O'))) {
        this.props.savePlayer2Score(this.props.player2score + 1);
        this.showAlert(this.props.player2name);
      }
    });
    if (moves.indexOf('') == -1) {
      this.showAlert('No one');
    }
  }

  showAlert(playerName) {
    Alert.alert(
      `${playerName} won the match!`,
      'Play again?',
      [
        {
          text: 'Nah',
          onPress: () => {
            BackHandler.exitApp();
          },
          style: 'cancel',
        },
        {
          text: 'Yeah!',
          onPress: () => {
            this.setState({
              moves: range(9).fill(''),
              firstPlayer: true,
            });
          },
        },
      ],
      {cancelable: false},
    );
  }

  render() {
    const playerName = this.state.firstPlayer
      ? this.props.player1name
      : this.props.player2name;
    return (
      <View style={styles.board_container}>
        <View style={styles.board}>{this.generateRows()}</View>
        <Text style={styles.bottomText}>{`${playerName}'s turn`}</Text>
      </View>
    );
  }

  generateRows() {
    return this.rows.map((row, index) => {
      return (
        <View style={styles.row} key={index}>
          {this.generateBlocks(row, index)}
        </View>
      );
    });
  }

  generateBlocks(row, row_index) {
    return row.map((block, index) => {
      let id = this.ids[row_index][index];
      return (
        <TouchableHighlight
          key={index}
          onPress={this.onMakeMove.bind(this, row_index, index)}
          underlayColor={'#CCC'}
          style={styles.block}>
          <Text style={styles.block_text}>{this.state.moves[id]}</Text>
        </TouchableHighlight>
      );
    });
  }

  onMakeMove(row_index, index) {
    let moves = this.state.moves;
    let id = this.ids[row_index][index];

    if (!moves[id]) {
      moves[id] = this.state.firstPlayer ? 'X' : 'O';
      this.setState({
        moves,
        firstPlayer: !this.state.firstPlayer,
      });
      this.updateScores.call(this, moves);
    }
  }
}

const styles = StyleSheet.create({
  board_container: {
    flex: 9,
  },
  board: {
    flex: 7,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  block: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  block_text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  bottomText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default connect(
  state => ({
    player1score: state.player1score || 0,
    player2score: state.player2score || 0,
    player1name: state.player1name,
    player2name: state.player2name,
  }),
  {
    savePlayer1Score: savePlayer1Score,
    savePlayer2Score: savePlayer2Score,
  },
)(Board);
