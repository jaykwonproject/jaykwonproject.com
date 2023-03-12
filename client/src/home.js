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
            Automated pipeline to reduce data delivery time by 70% in Linux grid computing system using Bash, Python, and MySQL.
            </li>
            <li>
            Developed AWS data delivery pipeline with detailed logger to handle 20TB+ of weekly uploads with no issues to date.
            </li>
            <li>
            Built Vue.js prototype web app, integrated with REST APIs, in LAMP environment on AWS EC2 server.
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
            Reduced XML sitemap generation time by 50% using AWS EMR in Scala for daily indexing of over 8 million pages.
            </li>
            <li>
            Accelerated daily google indexation from 1,000 to over 1.5 million pages.
            </li>
            <li>
            Implemented live time image resizing and conversion module to reduce file size by 1/30.
            </li>
            <li>
            Constructed ETL pipeline using Airflow to ingest and cleanse 10TB+ data from 5 marketing analytic platforms weekly.
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
            Awarded a commander’s commendation for exceptional excellence in physical and skills tests among more than 550 soliders by the 1st division commander
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
            IB HL Computer Science, Mathematics, Economics
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
