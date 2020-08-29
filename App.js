class App extends React.Component {
  state = {
    sex: 'all'
  }

  filterHandler = (sex) => {
    this.state.sex !== sex && this.setState({ sex })
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="button-container">
            <ButtonFilter
              title="Show All"
              filterEvent={() => this.filterHandler('all')}
            />
            <ButtonFilter
              title="Show Male"
              filterEvent={() => this.filterHandler('male')}
            />
            <ButtonFilter
              title="Show Female"
              filterEvent={() => this.filterHandler('female')}
            />
          </div>

          <ListFilter
            list={listData}
            sex={this.state.sex}
          />
        </div>
      </React.Fragment>
    )
  }
}

const ButtonFilter = ({ title, filterEvent }) => {
  return (
    <button
      className="button"
      onClick={filterEvent}
    >
      {title}
    </button>
  )
}

const ListFilter = ({ list, sex }) => {
  let filteredList = '';

  if (sex !== 'all') {
    filteredList = list.filter(el => el.sex === sex);
  } else {
    filteredList = list.filter(el => el);
  }
  const newList = filteredList.map(el => {
    return (
      <ListFilterElement
        key={el.id}
        name={el.name}
        sex={el.sex}
        age={el.age}
      />
    )
  });

  return (
    <ul className="result-container">
      {newList}
    </ul>
  )
}

const ListFilterElement = ({ name, sex, age }) => {
  return (
    <li className="result-box">
      <h2>{name}</h2>
      <p>Sex: {sex}</p>
      <p>Age: {age}</p>
    </li>
  )
}

const listData = [
  { id: 1, name: 'Tom', age: 10, sex: 'male' },
  { id: 2, name: 'Matt', age: 4, sex: 'male' },
  { id: 3, name: 'Katie', age: 19, sex: 'female' },
  { id: 4, name: 'Chris', age: 32, sex: 'male' },
  { id: 5, name: 'Susan', age: 12, sex: 'female' },
  { id: 6, name: 'Jennifer', age: 50, sex: 'female' },
  { id: 7, name: 'Tom', age: 10, sex: 'male' },
  { id: 8, name: 'Luis', age: 11, sex: 'male' },
  { id: 9, name: 'Henry', age: 27, sex: 'male' },
  { id: 10, name: 'Adele', age: 21, sex: 'female' },
];

ReactDOM.render(<App />, document.getElementById('root'));
