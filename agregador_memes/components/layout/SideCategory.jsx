const { React, ReactDOM } = window;

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", email: "", isSubmitting: false };
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