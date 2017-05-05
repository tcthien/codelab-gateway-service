const bindActionCreators = Redux.bindActionCreators;
const connect = ReactRedux.connect;

class GuideContainer extends React.Component {
  render() {
    const {tutorials} = this.props;
    return (
      <div>
        <NavigationBar/>
        <Header/>
        <Guide />
        <Footer/>
      </div>
    );
  }
}

GuideContainer.propTypes = {
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

const guideContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GuideContainer);
