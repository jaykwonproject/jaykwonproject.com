import './App.css';
import {Link} from "react-router-dom";

const banner = () =>{
    
        return <div className="banner">
                <div className="navBar">
                    <ul className='ul_banner'>
                        <li className='li_banner'><Link className="link" to="/">home</Link></li>
                        <li className='li_banner'><Link className="link" to="/resume">résumé</Link></li>
                        <li className='li_banner'><Link className="link" to="/study">study</Link></li>
                    </ul>
                </div>
            </div>;
};

export default banner