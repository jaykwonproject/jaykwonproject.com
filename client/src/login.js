import './App.css';
import Banner from './banner';
import React, {useState} from "react";
import axios from 'axios';

function Login() {

    const [input, setInput] = useState({
        genre:'',
        link:'',
        title: '',
        description: ''
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
        const newPost = {
            genre: input.genre,
            link: input.link,
            title: input.title,
            description: input.description
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
        <br/><br/><br/><br/><br/>
        <form>
            <div className="form-group">
                <input onChange={handleChange} name="username" value={input.genre} className="form-control" placeholder='username'></input>
            </div>
            <br/>
            <div className="form-group">
                <input onChange={handleChange} name="password" value={input.link} className="form-control" placeholder='password'></input>
            </div>
            <br/>
            <button onClick={addPost}>login</button>
        </form>

      </div>


    </div>
  );
}

export default Login;
