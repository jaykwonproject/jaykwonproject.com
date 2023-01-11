import './App.css';
import Banner from './banner';

function home() {
  return (
    <div className="App">
      {/*header section*/}
      <Banner/>

      {/*body section*/}
      
      <div className="body">
        
        <div className="thumbnail">
          <div className="title">project american dream</div>
          <iframe
          src="https://www.youtube.com/embed/videoseries?list=PLzM9K5-Ude6jv2bMoPcZuGjajTauM1LuK"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
          width="700"
          height="500"
          />
        </div>

        
        <div className="thumbnail">
          <div className="title">misc</div>
          <iframe
          src="https://www.youtube.com/embed/videoseries?list=PLzM9K5-Ude6iYw0rhkg-h0PtbLACzeR3d"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
          width="700"
          height="500"
          />
        </div>
      </div>


    </div>
  );
}

export default home;
