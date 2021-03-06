import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (state) => ({
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);