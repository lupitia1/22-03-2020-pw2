const { React, ReactDOM } = window;
const { BrowserRouter: Router, Link, Switch, withRouter, Route } = window.ReactRouterDOM;

class Index extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Router>
        <Header />
        <SideBar />
          <Switch className={"body-content wallpaper"}>
            <Route path="/meme-view" component={withRouter(MemeView)}/>
            <Route path="/meme-form" component={withRouter(MemeForm)}/>
            <Route path="/" component={withRouter(MemesList)}/>
          </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));