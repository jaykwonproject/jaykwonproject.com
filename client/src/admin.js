import './App.css';
import NavBar from './components/NavBar';

function admin() {
  return (
    <div className="App">
      {/*header section*/}
      <NavBar/>

      {/*body section*/}      
      <div className="body">
        <h1>admin page</h1>
        <h3>username</h3>
        <h3>password</h3>
      </div>


    </div>
  );
}

export default admin;
