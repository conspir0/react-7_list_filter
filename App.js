class App extends React.Component {
  state = {}

  render() {
    const { qty, avaliableItems } = this.state;

    return (
      <React.Fragment>
        <div className="container">
          Hello World!
        </div>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
