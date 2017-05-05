const bindActionCreators = Redux.bindActionCreators;
const connect = ReactRedux.connect;

class LoginContainer extends React.Component {
  render() {
    const {tutorials} = this.props;
    return (
      <div>
        <NavigationBar/>
        <Header/>
        <Login/>
        <Footer/>
      </div>
    );
  }
}

LoginContainer.propTypes = {
  tutorials: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    tutorials: state.tutorials
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      addTodo,
      deleteTodo,
      editTodo,
      completeTodo,
      completeAll,
      clearCompleted
    }, dispatch)
  };
}

const loginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
