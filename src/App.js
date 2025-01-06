import logo from './logo.svg';
import './App.css';
import ColorBox from './Component/Color';
/*
Props tức là dữ liệu truyền từ dữ liệu tk cha xuống con, và nó thể thay đổi đc ở tk con
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Phước Bình
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <section>
            <ColorBox color='white' />
            <ColorBox color='red'/>
            <ColorBox color='green'/>
          </section>
        </a>
      </header>
    </div>
  );
}

export default App;
