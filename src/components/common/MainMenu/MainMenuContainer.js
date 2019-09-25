import { connect } from 'react-redux';
import { showTodoForm } from '../../../redux/todosReducer';
import MainMenu from './MainMenu';

const mapDispatchToProps = dispatch => ({
  showTodoForm: () => dispatch(showTodoForm()),
});

export default connect(null, mapDispatchToProps)(MainMenu);
