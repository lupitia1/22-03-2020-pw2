const { React, ReactDOM } = window;
const {Link}  = window.ReactRouterDOM;

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="header-text">
          <ul>
            <p>Agregador de Memes</p>
            <li>
              <Link to="/">MEMES MEMES</Link>
            </li>
            <li>
              <Link to="/meme-form">Añadir meme</Link>
            </li>
            <li>
              <Link to="/meme-view">Meme del día</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
