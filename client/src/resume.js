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
        <object data="http://africau.edu/images/default/sample.pdf" type="application/pdf" width="100%" height="100%">
          <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
        </object>
      </div>


    </div>
  );
}

export default resume;
