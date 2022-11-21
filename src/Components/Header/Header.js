import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import StyledWrapper from "../Wrapper/StyledWrapper";
import StyledHeader from "./Header.styled";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const headerNav = useRef(null);

  const pathNames = ["/", "/about", "/services", "/gallery", "/contact"];
  const linkNames = ["Home", "About", "Services", "Gallery", "Contact"];
  
  useEffect(()=>{
    const html = document.documentElement;
    if(headerNav.current.classList.contains("active")) {
      html.classList.add('active');
    } else {
      html.classList.remove('active');
    }
  },[isActive]);

  const headerLinks = pathNames.map((path, i) => {
    return (
      <li key={i}>
        <Link to={pathNames[i]} onClick={() => setIsActive(false)} className={location.pathname === path ? "link active" : "link"}>
          {linkNames[i]}
        </Link>
      </li>
    );
  });

  return (
    <StyledHeader>
      <StyledWrapper className="header-wrapper">
        <h1 className="logo">logo</h1>
        <div className={isActive ? "hamburger active" : "hamburger"} onClick={() => setIsActive(!isActive)}>
          <span className={isActive ? "bar active" : "bar"}>bar</span>
        </div>
        <nav className={isActive ? 'active' : ''} ref={headerNav}>
          <ul className="nav-menu">{headerLinks}</ul>
        </nav>
      </StyledWrapper>
    </StyledHeader>
  );
};

export default Header;
