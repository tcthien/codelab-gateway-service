class Tutorial extends React.Component {
  render() {
    const {tutorials} = this.props;

    return (
      <div id="tutorialDiv" className="row">
        <div className="col s5">
          <ul id="tutorialTab" className="tabs">
            <li className="tab col s2"><a className="active" href="#aToZTab">A-Z</a></li>
            <li className="tab col s2 disabled"><a href="#recentTab">RECENT</a></li>
            <li className="tab col s2 disabled"><a href="#durationTab">DURATION</a></li>
          </ul>
        </div>

        <div className="col s7">
          <div className="row">
            <div className="codelab-input-field input-field col s10">
              <input placeholder="Input your query" id="first_name" type="text" className="validate"/>
            </div>
            <div className="codelab-input-field input-field col s2">
              <select id="catFilter">
                <option value="all">All</option>
                <option value="java">Java</option>
                <option value="angularjs">AngularJS</option>
                <option value="reacjs">ReacJS</option>
              </select>
            </div>
          </div>
        </div>

        <TutorialList tutorials={tutorials}/>
        <div id="recentTab" className="col s12">Test 2</div>
        <div id="durationTab" className="col s12">Test 3</div>
      </div>
    );
  }
}

Tutorial.propTypes = {
  tutorials: React.PropTypes.array.isRequired
};
