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
        <iframe src="/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf" width="100%" height="500px"></iframe>
      </div>


    </div>
  );
}

export default resume;
