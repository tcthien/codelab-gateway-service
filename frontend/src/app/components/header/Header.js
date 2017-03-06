class Header extends React.Component {
  render() {
    return (
      <div id="header" className="z-depth-2">
        <div className="container">
          <h3 className="header-title">Welcome to Codelabs!</h3>
          <div className="header-description">
            <p className="header-info">TMA Codelab provide a guided, tutorial, hands-on coding
              experience. Most codelabs will step you through the process of building a small application, or adding a
              new feature to an existing application. They cover a wide range of topics such as Java, AngularJS,
              ReactJS...</p>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {};
