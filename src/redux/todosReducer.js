import todos from '../data/todos';

/* SELECTORS */
export const getTodos = ({ todos }) => todos.data;
export const getRequest = ({ todos }) => todos.request;
export const getTodoModalVisibility = ({ todos }) => todos.showTodoModal;
export const getTodoFormVisibility = ({ todos }) => todos.showTodoForm;
export const getTodoMessageVisibility = ({ todos }) => todos.showTodoMessage;
export const getTodoMessage = ({ todos }) => todos.todoFormMessage;

//ACTION NAME CREATOR
const reducerName = 'todos';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTIONS */
export const LOAD_TODOS = createActionName('LOAD_TODOS');
export const SHOW_TODO_FORM = createActionName('SHOW_TODO_FORM');
export const showTodoForm = () => ({ type: SHOW_TODO_FORM });
export const HIDE_TODO_FORM = createActionName('HIDE_TODO_FORM');
export const hideTodoForm = () => ({ type: HIDE_TODO_FORM });
export const SAVE_TODO_FORM = createActionName('SAVE_TODO_FORM');
export const saveTodoForm = (payload) => ({ payload, type: SAVE_TODO_FORM });
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
  showTodoModal: false,
  showTodoForm: false,
  showTodoMessage: false,
  todoFormMessage: {
    className: '',
    text: '',
  },
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
    case SHOW_TODO_FORM:
      return { ...statePart,
        showTodoModal: true,
        showTodoForm: true,
        showTodoMessage: false,
      };
    case HIDE_TODO_FORM:
      return { ...statePart,
        showTodoModal: false,
        showTodoForm: false,
        showTodoMessage: false,
      };
    case SAVE_TODO_FORM:
      return { ...statePart,
        data: [...statePart.data, { id: 5, title: action.payload } ],
        showTodoModal: true,
        showTodoForm: false,
        showTodoMessage: true,
        todoFormMessage: {
          className: 'text-success',
          text: 'Lista została utworzona',
        },
      };
    default:
      return statePart;
  }
};
