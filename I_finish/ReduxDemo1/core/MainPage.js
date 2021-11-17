import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import CounterButtons from './CounterButtons';
import CounterDisplay from './CounterDisplay';
import counterReducer from "./counterReducer";

let combinedReducer=combineReducers({
    // combinedReducer - собрать несколько Reducer в один
    // редьюсер counterReducer отвечает за раздел state под именем counter
    counter: counterReducer, 
    // counter - название раздела Redux и им будет управлять ruducer - counterReducer
    // + другие редьюсеры
});
let store=createStore(combinedReducer);
// createStore - СОЗДАТЬ REDUX
class MainPage extends React.PureComponent {

  render() {

    return (
      <Provider store={store}>
          <div>
              <h1>демо работы Redux</h1>
              <CounterButtons />
              <hr />
              <CounterDisplay />
          </div>
      </Provider>
    );

  }

}

export default MainPage;
