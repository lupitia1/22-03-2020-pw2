const { React, ReactDOM } = window;

class MemeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: null,
        caption: null,
        src: null
      }
    };
  }

  sendForm = e => {
    e.preventDefault();

    fetch("http://url.url/a/confirmar", {
      method: "POST",
      body: JSON.stringify(this.state.form)
    })
      .then(() => alert("Meme created"))
      .catch(() => alert("Problem uploading meme"));
  };

  onFormChange = e => {
    const id = e.target.id,
      value = e.target.value;

    this.setState(prevState => ({
      form: {
        ...prevState.form,
        [id]: value
      }
    }));
  };

  render() {
    return (
      <div style={{ width: "90%" }}>
        <h1>Add a meme!</h1>
        <form className="add-form">
          <div>
            <label htmlFor="name">Meme name: </label>
            <input type="text" id="name" onChange={this.onFormChange} />
          </div>
          <div>
            <label htmlFor="name">Meme caption: </label>
            <input type="text" id="caption" onChange={this.onFormChange} />
          </div>
          <input type="file" id="src" onChange={this.onFormChange}></input>
          <button type="submit" onClick={this.sendForm}>
            Send
          </button>
        </form>
      </div>
    );
  }
}
