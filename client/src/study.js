import './App.css';
import Banner from './banner';
import React, {useState, useEffect} from "react";
import Pagination from './pagination';
function Study() {

  const[posts, setPosts] = useState([
    {
      genre: '',
      title: '',
      date:'',
      link: '',
      description: ''
    }
  ])

  const[currentPage, setCurrentPage] = useState(1);
  const[postsPerPage, setPostsPerPage] = useState(2);
  const[postOrder, setPostOrder] = useState("");
  
  useEffect(()=>{
    fetch('/getPosts',{
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }}).then(res=>{
      if(res.ok){
        return res.json() 
      }
    }).then(jsonRes => setPosts(jsonRes))
  },[])
  
  let studyCounter = 0;
  const studyPosts = [];
  posts.map((post)=>{
    if (post.genre==="study"){
      studyPosts.push(post);
      studyCounter++;
    }
  });
  
  studyPosts.reverse();

  if (postOrder ==="upload"){
    studyPosts.reverse();
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = studyPosts.slice(indexOfFirstPost, indexOfLastPost);
  

  //change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  let codingCheck = false;

  return (
    <div className="App">
      {/*header section*/}
      <Banner/>

      {/*body section*/}      
      <div className="body" style={{width: "100%", textAlign:"center"}}>
        <h2>&lt;STUDY LOGS&gt;</h2>
        <label>sort by:  </label>
        <select id="sort" onChange={(e)=>{
          const selectedOrder = e.target.value;
          setPostOrder(selectedOrder);
        }}>
          <option value="recent">Newest</option>
          <option value="upload">Oldest</option>
        </select>
        
        {currentPosts.map((post)=>{
          
          if (post.genre==="study" && post.link!=""){
            return(
              <div style={{textAlign:"center"}}>
                <h3>{post.title}</h3>
                <iframe
                  src={post.link}
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                  width="700"
                  height="500"
                />
                <p className='description' style={{marginBottom:"50px", width:"800px", marginLeft:"auto", marginRight:"auto", marginTop:"20px"}}>
                {post.description.split("\n").map((line)=>{
                  return(
                    <React.Fragment>
                      {line}
                      <br/>
                    </React.Fragment>
                    
                  )
                })}
                </p>
              </div>
              
            )
          }else{
            return(
              <div style={{textAlign:"center"}}>
                <h3> &lt; {post.title} &gt; </h3>
                <h5>{post.date}</h5>
                <p className='study-description' style={{marginBottom:"50px", width:"800px", marginLeft:"auto", marginRight:"auto", marginTop:"20px"}}>
                
                {post.description.split("\n").map((line)=>{
                  if(line.includes('codingStart') || codingCheck===true){
                    codingCheck=true
                    if (line.includes('codingEnd')){
                      codingCheck=false
                    }
                    let codingPart = line.replace(/codingStart/g, '');
                    codingPart = codingPart.replace(/codingEnd/g, '');
                      
                    return(
                      <React.Fragment> 
                        <code>{codingPart}</code> <br/>
                        
                        
                      </React.Fragment>
                    )
                  }
                  return(
                    <React.Fragment>
                      {line}
                      
                      <br/>
                    </React.Fragment>
                  )
                })}
            
                </p>
              </div>
              
            )
          }
        })}
        <Pagination postsPerPage={postsPerPage} totalPosts={studyCounter} paginate={paginate}/>
        
      </div>


    </div>
  );
}

export default Study;
