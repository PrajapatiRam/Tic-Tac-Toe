import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import mockStore from 'redux-mock-store';
import Player2 from '../Player2';
Enzyme.configure({adapter: new Adapter()});
it('Player2 renders as expected', () => {
  const initialState = {
    player1name: 'test Player1',
    player2name: 'test Player2',
    player1score: 1,
    player2score: 2,
  };
  const store = mockStore(initialState);

  const wrapper = shallow(<Player2 store={store} />);

  const component = shallow(wrapper.getElements()[0]);

  expect(toJson(component)).toMatchSnapshot();
});
