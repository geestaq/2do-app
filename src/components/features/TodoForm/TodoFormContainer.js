import { connect } from 'react-redux';
import { getTodoModalVisibility, getTodoFormVisibility, getTodoMessageVisibility, getTodoMessage, hideTodoForm, saveTodoForm } from '../../../redux/todosReducer';
import TodoForm from './TodoForm';

const mapStateToProps = state => ({
  modalVisibility: getTodoModalVisibility(state),
  formVisibility: getTodoFormVisibility(state),
  messageVisibility: getTodoMessageVisibility(state),
  message: getTodoMessage(state),
})

const mapDispatchToProps = dispatch => ({
  hideForm: () => dispatch(hideTodoForm()),
  saveList: (name) => dispatch(saveTodoForm(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
