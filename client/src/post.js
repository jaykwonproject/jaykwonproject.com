import './App.css';
import Banner from './banner';
import React, {useState} from "react";
import axios from 'axios';

function Post() {

    const [input, setInput] = useState({
        genre:'',
        link:'',
        title: '',
        description: '',
        createdAt: ''
    })


    function handleChange(event){
        const {name, value} = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function addPost(event){
        event.preventDefault();
        alert('added!');
        const date =  new Date();
        //let time = date.toString();
        let time = 'plz'
        const newPost = {
            genre: input.genre,
            link: input.link,
            title: input.title,
            description: input.description,
            createdAt: time
        }
        console.log(newPost);
        axios.post('/newPost', newPost);
    }
    
  
    return (
    <div className="App">
      {/*header section*/}
      <Banner/>

      {/*body section*/}      
      <div className="body">
        <h1>create a post</h1>
        <form>
            <div className="form-group">
                <input onChange={handleChange} name="genre" value={input.genre} className="form-control" placeholder='enter study or misc'></input>
            </div>
            <div className="form-group">
                <input onChange={handleChange} name="link" value={input.link} className="form-control" placeholder='link'></input>
            </div>
            <div className="form-group">
                <input onChange={handleChange} name="title" value={input.title} className="form-control" placeholder='title'></input>
            </div>
            <div className="form-group">
                <textarea onChange={handleChange} name ="description" value={input.description} className="form-control" style={{width:"700px", height:"200px"}}></textarea>
            </div>
            <button onClick={addPost}>post</button>
        </form>

      </div>


    </div>
  );
}

export default Post;
