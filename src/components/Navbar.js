import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    useEffect(() => {
        var nav = document.getElementById("nav");
        var gap = document.getElementById("gap");
        window.onscroll = function() {
            if(window.pageYOffset >= gap.offsetHeight) {
                nav.classList.add("sticky");
            } else {
                nav.classList.remove("sticky");
            }
        }
    })

    useEffect(() => {
        var menuIcon = document.getElementById("menuIcon");
        var closeMenu = document.getElementById("closeMenu");
        var navlist = document.getElementById("navlist");
        var overlay = document.getElementById("overlay");

        menuIcon.onclick = () => {
            navlist.classList.add('active');
            overlay.style.display = "block";
            closeMenu.style.display = "block";
        }
        closeMenu.onclick = () => {
            navlist.classList.remove('active');
            overlay.style.display = "none";
            closeMenu.style.display = "none";
        }
        window.onclick = (event) => {
            if(event.target === overlay) {
                navlist.classList.remove('active');
                overlay.style.display = "none";
                closeMenu.style.display = "none";
            }
        }
    })

    return (
        <div id="nav" className="nav">
            <Link className="logo" to="/">
                <img src="images/logo.png" />
                <span>the fun zone</span>
            </Link>
            <div id="navlist" className="navlist">
                <NavLink className={({ isActive }) => (isActive ? "activeLink" : "")} to="/">HOME</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "activeLink" : "")} to="/exp">EXPERIENCE</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "activeLink" : "")} to="/din">LEISURE &amp; DINNING</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "activeLink" : "")} to="/char">PARKS CHARACTERS</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "activeLink" : "")} to="/whatsup">WHATS UP</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "activeLink" : "")} to="/info">PARK INFORMATION</NavLink>
                <FontAwesomeIcon icon={faCircleXmark} id="closeMenu" className="icon fa-solid fa-circle-xmark" />
            </div>

            <FontAwesomeIcon icon={faBars} id="menuIcon" className="icon fa-solid fa-bars" />
        </div>
    )
}