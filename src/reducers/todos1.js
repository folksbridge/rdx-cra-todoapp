import * as ActionTypes from '../actionTypes';

export const todos = createReducer([], {
    [ActionTypes.ADD_TODO]: (state, action) => {
      const text = action.text.trim()
      return [
        ...state,
        {
          id: action.id,
          text: text,
          completed: false
        }
      ]
    },
    [ActionTypes.ADD_TODO]: (state, action) => {
        return state.map(todo =>
            (todo.id === action.id)
              ? {...todo, completed: !todo.completed}
              : todo
          )
    }
  })

function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
      if (handlers.hasOwnProperty(action.type)) {
        return handlers[action.type](state, action)
      } else {
        return state
      }
    }
  }