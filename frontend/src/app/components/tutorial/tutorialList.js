class TutorialList extends React.Component {
  render() {
    const {tutorials} = this.props;
    return (
      <div id="aToZTab" className="col s12">
        <div className="row">
          {tutorials.map((object, id) => {
            return <TutorialDetail key={id} tutorial={object}/>;
          })}
        </div>
      </div>
    );
  }
}

TutorialList.propTypes = {
  tutorials: React.PropTypes.array.isRequired
};
