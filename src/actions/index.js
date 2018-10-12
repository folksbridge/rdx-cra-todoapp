/* Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch(). 

Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed. Types should typically be defined as string constants. Once your app is large enough, you may want to move them into a separate module.
*/

//import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actionTypes'
import * as ActionTypes from '../actionTypes';

let nextTodoId = 0

export const addTodo = text => ({
  type: ActionTypes.ADD_TODO,
  id: nextTodoId++,
  text
});

export const deleteTodo = (id) => ({
  type: ActionTypes.REMOVE_TODO,
  id: id
})

export const setVisibilityFilter = filter => ({
  type: ActionTypes.SET_VISIBILITY_FILTER,
  filter
});

export const toggleTodo = id => ({
  type: ActionTypes.TOGGLE_TODO,
  id
});

export const VisibilityFilters =  ActionTypes.VisibilityFilters;

/* export const VisibilityFilters = {
  SHOW_ALL: ActionTypes.VisibilityFilters.SHOW_ALL,
  SHOW_COMPLETED: ActionTypes.VisibilityFilters.SHOW_COMPLETED,
  SHOW_ACTIVE: ActionTypes.VisibilityFilters.SHOW_ACTIVE
}; */

/* bound action creator */
// const boundAddTodo = text => dispatch(addTodo(text))
// const boundCompleteTodo = index => dispatch(completeTodo(index));
/* Now you'll be able to call them directly: */
// boundAddTodo(text)
// boundCompleteTodo(index)

/* The dispatch() function can be accessed directly from the store as store.dispatch(), but more likely you'll access it using a helper like react-redux's connect(). You can use bindActionCreators() to automatically bind many action creators to a dispatch() function.*/
/* redux-actions, redux-thunk
Action creators can also be asynchronous and have side-effects. You can read about async actions in the advanced tutorial to learn how to handle AJAX responses and compose action creators into async control flow.  */