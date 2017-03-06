const bindActionCreators = Redux.bindActionCreators;
const connect = ReactRedux.connect;

class HomeContainer extends React.Component {
  render() {
    const {tutorials} = this.props;
    return (
      <div>
        <NavigationBar/>
        <Header/>
        <Main tutorials={tutorials}/>
        <Footer/>
      </div>
    );
  }
}

HomeContainer.propTypes = {
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

const homeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
