import '../App.css';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import { FaBars } from 'react-icons/fa';

const NavBar = ({ isCollapsed, setIsCollapsed }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [username, setUsername] = useState(null);
    const [loggedin, setLoggedin] = useState(false);
    const [collapsed, setCollapsed] = useState(false); // Initially collapsed
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3001/profile', {
            credentials: 'include'
        }).then(response => {
            if (response.ok) {
                response.json().then(userInfo => {
                    if (userInfo.username) {
                        setUsername(userInfo.username);
                        setLoggedin(true);
                    } else {
                        setUsername(null);
                        setLoggedin(false);
                        removeCookie('token');
                    }
                })
            } else {
                setUsername(null);
                setLoggedin(false);
                removeCookie('token');
            }
        });
    }, [removeCookie]);

    function logout() {
        fetch('http://localhost:3001/logout', {
            credentials: 'include',
            method: 'POST',
        });
        removeCookie('token');
        setLoggedin(false);
        setUsername(null);
        navigate("/");
    }

    const toggleNavbar = () => {
      setIsCollapsed(!isCollapsed);
  }

    return (
      <>
            <FaBars className={`menu-icon ${isCollapsed ? 'collapsed' : ''}`} onClick={toggleNavbar} />
            <div className={`banner ${isCollapsed ? 'collapsed' : ''}`}>
                <div className={`navBar ${isCollapsed ? 'collapsed' : ''}`}>
                    <ul className={`ul_banner ${isCollapsed ? 'collapsed' : ''}`}>
                        <li className='li_banner'><Link className="link" to="/">home</Link></li>
                        <li className='li_banner'><Link className="link" to="/resume">résumé</Link></li>
                        <li className='li_banner'><Link className="link" to="/study">study</Link></li>
                        {loggedin && (
                            <>
                                <li className='li_banner'><Link className="link" to="/post">post</Link></li>
                                <li className='li_banner'><a className="link" onClick={logout}>logout</a></li>
                                <li className='li_banner'><a className="link">Hello {username}</a></li>
                            </>
                        )}
                        {!loggedin && (
                            <li className='li_banner'><Link className="link_login" to="/login">login</Link></li>
                        )}
                    </ul>
                </div>
            </div>
        </>

        
    );
};

export default NavBar;
