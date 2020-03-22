const { React, ReactDOM } = window;

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="side-category">
        <div className="side-text">
          <p>Categorías</p>
        </div>
      </div>
    );
  }
}
