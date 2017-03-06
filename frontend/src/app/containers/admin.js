const bindActionCreators = Redux.bindActionCreators;
const connect = ReactRedux.connect;

class AdminContainer extends React.Component {
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

AdminContainer.propTypes = {
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

const adminContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminContainer);
