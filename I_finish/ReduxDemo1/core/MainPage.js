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

/*
1. мы написали 1 reducer (counterReducer)
2. из него собрали комбинированный reducer (combinedReducer), т.е. reducer управляющий всем Redux сразу
3. сказали Redux создай Store (хранилище данных), которым управляет combinedReducer
*/

let store=createStore(combinedReducer);
// createStore - СОЗДАТЬ REDUX
class MainPage extends React.PureComponent {

  render() {

    return (
      <Provider store={store}>
      {/* Provider - import { Provider } from 'react-redux'; 
      все свое приложения мы заварачиваем в tag Provider
      и в нем сказать store={store} - (хранилище) т.е. раздел Redux 
      т.е. это хранилище должно быть доступно всему коду, который внутри Provider
      */}
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
