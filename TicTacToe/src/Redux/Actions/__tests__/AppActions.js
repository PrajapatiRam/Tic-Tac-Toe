import mockStore from 'redux-mock-store';
import {
  savePlayer1Name,
  savePlayer2Name,
  savePlayer1Score,
  savePlayer2Score,
} from '../../Actions/AppActions';

const store = mockStore();

beforeEach(() => {
  store.clearActions();
});

it('savePlayer1Name', async () => {
  await store.dispatch(savePlayer1Name('Test user 1'));
  expect(store.getActions()).toMatchSnapshot();
});

it('savePlayer2Name', async () => {
  await store.dispatch(savePlayer2Name('Test user 2'));
  expect(store.getActions()).toMatchSnapshot();
});

it('savePlayer1Score', async () => {
  await store.dispatch(savePlayer1Score(1));
  expect(store.getActions()).toMatchSnapshot();
});

it('savePlayer2Score', async () => {
  await store.dispatch(savePlayer2Score(2));
  expect(store.getActions()).toMatchSnapshot();
});
