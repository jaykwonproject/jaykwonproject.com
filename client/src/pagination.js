import './App.css';
import React from "react";

const Pagination = ({postsPerPage, totalPosts, paginate}) => {

  const pageNumbers = [];
  for (let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++){
    pageNumbers.push(i);
    
  }

  return (
    <div>
        <nav style={{textAlign:"center"}}>
            <ul style={{display: "inline-block"}}>
                {pageNumbers.map(number=>(
                    <li><a className="pagination" onClick={() => paginate(number)} >{number}</a></li>
                ))}
            </ul>
        </nav>
        
    </div>
  );
}

export default Pagination;
