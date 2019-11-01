import mockStore from 'redux-mock-store';
import {
  savePlayer1Name,
  savePlayer2Name,
  savePlayer1Score,
  savePlayer2Score,
} from '../../Actions/AppActions';
import AppReducer from '../AppReducer';

const store = mockStore();

beforeEach(() => {
  store.clearActions();
});

it('INITIAL STATE', () => {
  const action = {type: 'DUMMY'};
  expect(AppReducer(undefined, action)).toMatchSnapshot();
});

it('savePlayer1Name: ', () => {
  expect(
    AppReducer(undefined, savePlayer1Name('Test User 1')),
  ).toMatchSnapshot();
});
it('savePlayer2Name: ', () => {
  expect(
    AppReducer(undefined, savePlayer2Name('Test User 2')),
  ).toMatchSnapshot();
});
it('savePlayer1Score: ', () => {
  expect(AppReducer(undefined, savePlayer1Score(1))).toMatchSnapshot();
});
it('savePlayer2Score: ', () => {
  expect(AppReducer(undefined, savePlayer2Score(1))).toMatchSnapshot();
});
