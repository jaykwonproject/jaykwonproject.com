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
        {/*<iframe src="https://i.imgur.com/BBwRKV8.jpg" width="80%" height="850px"></iframe>*/}
        <a href="https://imgur.com/BBwRKV8"><img src="https://i.imgur.com/BBwRKV8.jpg" title="source: imgur.com" /></a>
      </div>


    </div>
  );
}

export default resume;
