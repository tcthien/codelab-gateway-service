class NavigationBar extends React.Component {
  render() {
    return (
      <nav id="navigation">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">DC9</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {/* <li><a href="/">Home</a></li> */}
            <li><a href="/">About</a></li>
            <li><a href="/">Admin</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

NavigationBar.propTypes = {};
