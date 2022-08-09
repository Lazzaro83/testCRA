import './App.css';
import logo from './logo.svg';

function App() {

  const onSearchSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div className='app'>
      <header className="appHeader">
        <img src={logo} className="appLogo" alt="logo" />
        <form className='appForm' onSubmit={onSearchSubmit}>
        <label htmlFor='search'>Search for the posts by title or author's name: </label>
        <input name='search' type='search' placeholder='Search for...' />
        <button type='submit'>Submit</button>
      </form>
      </header>
    </div>
  );
}

export default App;
