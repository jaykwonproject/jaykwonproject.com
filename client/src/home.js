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
        <h1>👋Hi. I'm HyukJoo Kwon</h1>
        <div style={{marginBottom:"50px", width:"1000px", marginLeft:"auto", marginRight:"auto", marginTop:"20px"}}>
        <Chrono items={data}  
        theme={{
          primary: '#282c34',
          secondary: 'White',
          cardBgColor: 'White',
          cardForeColor: '#282c34',
          titleColor: '#282c34',
          titleColorActive: '#282c34',
        }}
        mode="VERTICAL_ALTERNATING" hideControls >
          
          <div className="chrono-icons">
      <img className='icons'
        src="https://media.glassdoor.com/sqll/3966655/psomagen-squarelogo-1631274267407.png"
        alt="Psomagen"
      />
      <img
        src="https://www.buffalo.edu/content/www/brand/resources-tools/downloads/_jcr_content/par/image_1.img.209.auto.png/1632232420604.png"
        alt="SUNY University at Buffalo"
      />
      <img
        src="https://d1fdloi71mui9q.cloudfront.net/cFb2zXDFTIuy6vufog8f_8CbpU1Vp0rvK1T1o"
        alt="Metric Studio. NNT."
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/ROKA_1st_Infantry_Division_Insignia.svg/1200px-ROKA_1st_Infantry_Division_Insignia.svg.png"
        alt="1st division. ROKA Army"
      />
      <img
        src="https://resources.finalsite.net/images/f_auto,q_auto/v1588659246/aesacin/kmaphlbpb2mlj4c5qqux/Tiger.png"
        alt="American Embassy School, New Delhi"
      />
    </div>
        <div>
          <ul>
            <li>
            Developed an automated pipeline to reduce the data delivery time by 9 hours using Bash, Python, SQL in Linux.
            </li>
            <li>
            Upgraded AWS file transferring method to log accurate upload progress of over 500 orders using Python and Bash.
            </li>
            <li>
            Analyzed data QC, ran analysis pipelines, and delivered results to clients daily.
            </li>
            <li>
            Introduced git version control system to safely modify, test and deploy pipelines.
            </li>
            <li>
            Programmed a sample swap detection script to locate switched samples using Python and Bash.
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
            Received the distinction of being on the Dean's List for my academic excellence in the Fall 2021 semester
            </li>
            <li>
            Relevant Coursework: Data Structure, Algo. and Complexity, Web application, Software Engineering
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
            Received the distinction of being on the Dean's List for my academic excellence in the Fall 2021 semester
            </li>
            <li>
            Relevant Coursework: Data Structure, Algo. and Complexity, Web application, Software Engineering
            </li>
          </ul>
        </div>
        </Chrono>
        </div>
        
      </div>


    </div>
  );
}

export default home;
