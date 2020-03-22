const {
  React,
  ReactDOM,
  Header,
  SideBar,
  MemeForm,
  MemeView,
  MemesList
} = window;
const { BrowserRouter: Router, Switch, Route } = window.ReactRouterDOM;

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="master-flex">
          <SideBar />
          <div className="child-flex">
            <Header />
            <div className="content">
              <Switch>
                <Route exact path="/meme-view" component={MemeView} />
                <Route exact path="/meme-form" component={MemeForm} />
                <Route exact path="/" component={MemesList} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
