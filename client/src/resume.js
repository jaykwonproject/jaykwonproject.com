import './App.css';
import Banner from './banner';

function resume() {
  return (
    <div className="App">
      {/*header section*/}
      <Banner/>

      {/*body section*/}      
      <div className="body">
        <h1>RESUME</h1>
        <iframe src="HyukJoo_Resume.pdf" width="80%" height="100%"></iframe>
      </div>


    </div>
  );
}

export default resume;
