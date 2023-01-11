import './App.css';
import {Link} from "react-router-dom";

const banner = () =>{
    
        return <div className="banner">
                <div className="navBar">
                    <ul>
                        <li><Link className="link" to="/">home</Link></li>
                        <li><Link className="link" to="/resume">résumé</Link></li>
                        <li><Link className="link" to="/study">study</Link></li>
                        <li><Link className="link" to="/misc">misc.</Link></li>
                    </ul>
                </div>
            </div>;
};

export default banner