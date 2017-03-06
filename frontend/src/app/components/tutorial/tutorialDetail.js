class TutorialDetail extends React.Component {
  render() {
    const {tutorial} = this.props;
    return (
      <div className="tutorialDetail col s3">
        <div className="card white">
          <div className={'card-header card-header-' + tutorial.category}>
            <a className="right" href="#"></a>
          </div>
          <div className="card-content">
            <p>{tutorial.title}</p>
          </div>
          <div className="card-action">
            <a className="right" href="#">Start</a>
          </div>
        </div>
      </div>

    );
  }
}

TutorialDetail.propTypes = {
  tutorial: React.PropTypes.object.isRequired
};
