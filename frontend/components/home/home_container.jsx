import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = (state) => ({
  currentUser: state.session.id
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)