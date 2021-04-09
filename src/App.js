import logo from './logo.svg';
import './App.css';

function App() {

  const blogArr = [
    {
      id: 1,
      title: 'Blog 1',
      description: 'Does the idea of open source excite you but not sure where to begin or which project to choose? Often feel confused and uncomfortable while using GitHub, and can’t think of any available alternative? Well, you have arrived at the correct place " CodeTrophs " is an open source platform targeted solely for beginners to help them contribute to real life projects, from developing new ideas and approaches, to exploring the world of open sourcing.'
    },
    {
      id: 2,
      title: 'Blog 2',
      description: 'Does the idea of open source excite you but not sure where to begin or which project to choose? Often feel confused and uncomfortable while using GitHub, and can’t think of any available alternative? Well, you have arrived at the correct place " CodeTrophs " is an open source platform targeted solely for beginners to help them contribute to real life projects, from developing new ideas and approaches, to exploring the world of open sourcing.'
    },
    {
      id: 3,
      title: 'Blog 3',
      description: 'Does the idea of open source excite you but not sure where to begin or which project to choose? Often feel confused and uncomfortable while using GitHub, and can’t think of any available alternative? Well, you have arrived at the correct place " CodeTrophs " is an open source platform targeted solely for beginners to help them contribute to real life projects, from developing new ideas and approaches, to exploring the world of open sourcing.'
    }
  ]

  const style1 = {
    margin : '8px 12px 8px 12px',
    boxShadow: '0 2px 5px #ccc',
    boderRadius: '5px',
    boxSizing: 'border-box',
    padding : '1px 5px 5px 5px'
  }

  const blogDisplay = blogArr.map((value, id) => {
    console.log(value);

    return(
      <div className="outerBox" key={value.id} style={style1}>
        <h3>{value.title}</h3>
        <i>{value.description}</i>
      </div>
    )
  });

  return (
    <div className="App">

    {blogDisplay}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
