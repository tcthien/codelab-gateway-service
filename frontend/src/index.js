const Provider = ReactRedux.Provider;
const store = Redux.createStore(rootReducer);
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const browserHistory = ReactRouter.browserHistory;

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={homeContainer}/>
      <Route path="/about" component={aboutContainer}/>
      <Route path="/admin" component={adminContainer}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

$(document).ready(() => {
  $('select').material_select();
});
