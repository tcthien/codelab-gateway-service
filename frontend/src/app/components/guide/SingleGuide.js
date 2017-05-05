class SingleGuide extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    return (
      <div id="mainDiv">
        <div className="row">
          <div className="card">
            <div className="card-content">
              <span className="card-title">{this.props.title} - {this.props.length} min</span>
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SingleGuide.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  length: React.PropTypes.number
};