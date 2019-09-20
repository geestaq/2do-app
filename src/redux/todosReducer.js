import todos from '../data/todos';

/* SELECTORS */
export const getTodos = ({ todos }) => todos.data;
export const getRequest = ({ todos }) => todos.request;

//ACTION NAME CREATOR
const reducerName = 'todos';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTIONS */
export const LOAD_TODOS = createActionName('LOAD_TODOS');
//export const START_REQUEST = createActionName('START_REQUEST');
//export const END_REQUEST = createActionName('END_REQUEST');
//export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
//export const RESET_REQUEST = createActionName('RESET_REQUEST');
//export const startRequest = () => ({ type: START_REQUEST });
//export const endRequest = () => ({ type: END_REQUEST });
//export const errorRequest = error => ({ error, type: ERROR_REQUEST });
//export const resetRequest = () => ({ type: RESET_REQUEST });

/* THUNKS */

/* INITIAL STATE */
const initialState = {
  data: [...todos],
  request: {
    pending: false,
    error: null,
    success: null,
  },
};

/* REDUCER */
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_TODOS:
      return { ...statePart, data: action.payload };
    default:
      return statePart;
  }
};
