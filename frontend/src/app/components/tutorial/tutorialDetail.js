class TutorialDetail extends React.Component {
  render() {
    const {tutorial} = this.props;
    return (
      <div className="tutorialDetail col s3">
        {tutorial.title}
      </div>
    );
  }
}

TutorialDetail.propTypes = {
  tutorial: React.PropTypes.object.isRequired
};
