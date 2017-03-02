const Provider = ReactRedux.Provider;
const store = Redux.createStore(rootReducer);
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const browserHistory = ReactRouter.browserHistory;

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
