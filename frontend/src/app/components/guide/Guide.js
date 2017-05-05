class Guide extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      steps: [
              {name: '1', component: <SingleGuide title="Step 1" length="5" description="This is Step 1"/>},
              {name: '2', component: <SingleGuide title="Step 2" length="10" description="This is Step 2"/>},
              {name: '3', component: <SingleGuide title="Step 3" length="15" description="This is Step 3"/>},
              {name: '4', component: <SingleGuide title="Step 4" length="20" description="This is Step 4"/>}
            ]
    };
  }

  render() {
    return (
      <div id="mainDiv">
        <MultiStep steps={this.state.steps}/>
      </div>
    );
  }
}

Guide.propTypes = {};