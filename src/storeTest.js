//Not done yet: test redux store without UI
//to do: run this wtih babel node....

import { createStore } from 'redux';
import todoApp from './reducers';

import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
  } from './actions';

  const store = createStore(todoApp);

   // Log the initial state
  console.log(store.getState());