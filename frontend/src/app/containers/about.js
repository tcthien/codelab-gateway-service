const bindActionCreators = Redux.bindActionCreators;
const connect = ReactRedux.connect;

class AboutContainer extends React.Component {
  render() {
    const {todos, actions} = this.props;
    return (
      <div>
        <Header addTodo={actions.addTodo}/>
        <MainSection todos={todos} actions={actions}/>
      </div>
    );
  }
}

AboutContainer.propTypes = {
  todos: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos
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

const aboutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutContainer);
