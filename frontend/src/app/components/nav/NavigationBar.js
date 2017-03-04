class NavigationBar extends React.Component {
  render() {
    return (
      <nav id="navigation">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {/*<li><a href="/">Home</a></li>*/}
            <li><a href="/about">About</a></li>
            <li><a href="/admin">Admin</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

NavigationBar.propTypes = {};
