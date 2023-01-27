import './App.css';
import Banner from './banner';
import { Chrono } from "react-chrono";
import data from "./data";

function home() {
  return (
    <div className="App">
      {/*header section*/}
      <Banner/>

      {/*body section*/}
      
      <div className="body">
        <h1>Hi. I'm HyukJoo Kwon</h1>
        <div style={{marginBottom:"50px", width:"1000px", marginLeft:"auto", marginRight:"auto", marginTop:"20px"}}>
        <Chrono items={data} mode="VERTICAL_ALTERNATING" />
        </div>
        
      </div>


    </div>
  );
}

export default home;
