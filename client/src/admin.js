import './App.css';
import Banner from './banner';

function admin() {
  return (
    <div className="App">
      {/*header section*/}
      <Banner/>

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
