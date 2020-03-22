const { React, ReactDOM, Header,
  SideBar, MemeForm, MemeView, MemesList } = window;
const {
  BrowserRouter: Router,
  Switch,
  Route
} = window.ReactRouterDOM;

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
            <Switch>
              <div className={"content"}>
                {/* <Route path="/meme-view" component={MemeView} />
                <Route path="/meme-form" component={MemeForm} />
                <Route path="/" component={MemesList} /> */}
              </div>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
