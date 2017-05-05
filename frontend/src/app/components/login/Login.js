class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

    handleLoginClick() {
        console.log('Login click');
        
    }

  render() {
    return (
      <div id="mainDiv">
          <div className="row">
            <div className="col s6 offset-s3">
                <div className="card white">
                <div className="card-header card-header-Login">
                    <h4>Login</h4>
                </div>
                <div className="card-content row">
                    <div className="column">
                        <div className="input-field col s12">
                            <label htmlFor="username">Username</label>
                            <input id="username" type="text" className="validate"/>
                        </div> 
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate"/>
                            <label htmlFor="password">Password</label>
                        </div>        
                    </div>     
                </div>
                <div className="card-action row">
                    <button className="right btn waves-effect waves-light" onClick={this.handleLoginClick}>Login</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
  }
}

Login.propTypes = {};