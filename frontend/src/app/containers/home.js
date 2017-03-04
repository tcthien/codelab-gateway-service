const bindActionCreators = Redux.bindActionCreators;
const connect = ReactRedux.connect;

class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

HomeContainer.propTypes = {
};

function mapStateToProps(state) {
  return {
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

const homeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
