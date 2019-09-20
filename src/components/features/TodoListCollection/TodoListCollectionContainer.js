import { connect } from 'react-redux';
import { getTodos, getRequest, loadTodosRequest, resetRequest } from '../../../redux/todosReducer';
import TodoListCollection from './TodoListCollection';

const mapStateToProps = state => ({
  items: getTodos(state),
  request: getRequest(state),
})

const mapDispatchToProps = dispatch => ({
  //loadTodos: () => dispatch(loadTodosRequest()),
  //resetRequest: () => dispatch(resetRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListCollection);
