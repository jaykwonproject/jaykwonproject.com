import './App.css';
import Banner from './banner';

function resume() {
  return (
    <div className="App">
      {/*header section*/}
      <Banner/>

      {/*body section*/}      
      <div className="body">
        {/*<iframe src="https://i.imgur.com/BBwRKV8.jpg" width="80%" height="850px"></iframe>*/}
        <img src="https://i.imgur.com/AZsOyaZ.jpg" width="80%" title="HyukJoo_Resume" />
      </div>


    </div>
  );
}

export default resume;
