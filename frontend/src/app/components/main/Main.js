class Main extends React.Component {
  render() {
    const {tutorials} = this.props;
    return (
      <div id="mainDiv">
        <div className="container">
          <Tutorial tutorials={tutorials}/>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  tutorials: React.PropTypes.array.isRequired
};
