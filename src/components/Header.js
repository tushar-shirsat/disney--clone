import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import { selectUserName, selectUserPhoto, setSignOut, setUserLogin } from "../features/user/userSlice";
import {auth,provider} from '../firebase'

const Header = () => {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  const history = useHistory();
  const signIn = () =>{
    auth.signInWithPopup(provider)
        .then(result =>{
          let user = result.user;
          dispatch(setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
          }))
          history.push('/');
        })
  }
  useEffect(() =>{
    auth.onAuthStateChanged(async user=>{
      if(user){
        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }))
        history.push('/');
      }
    })
  },[])
  const signOut = () =>{
    auth.signOut()
        .then(() =>{
          dispatch(setSignOut());
          history.push('/login')
        })
  }
  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="disney-pluse" />
      {
        !userName ? (
          <LogInContainer>
            <LogIn onClick={signIn}>Login</LogIn>
          </LogInContainer>) :
        (
        <>
          <NavMenu>
        <NavLink to="/">
          <img src="/images/home-icon.svg" alt="home-icon" />
          <span>HOME</span>
        </NavLink>
        <a href="#">
          <img src="/images/search-icon.svg" alt="search-icon" />
          <span>SEARCH</span>
        </a>
        <a href="#">
          <img src="/images/watchlist-icon.svg" alt="watchlist-icon" />
          <span>WATCHLIST</span>
        </a>
        <a href="#">
          <img src="/images/original-icon.svg" alt="originals-icon" />
          <span>ORIGINALS</span>
        </a>
        <a href="#">
          <img src="/images/movie-icon.svg" alt="movie-icon" />
          <span>MOVIES</span>
        </a>
        <a href="#">
          <img src="/images/series-icon.svg" alt="series-icon" />
          <span>SERIES</span>
        </a>
      </NavMenu>

      <UserImg 
        src={userPhoto}
        alt="user-img"
        onClick={signOut}
        />
        </>
        )
      }
    </Nav>
  );
};

export default Header;

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    color: #fff;
    text-decoration: none;

    img {
      height: 20px;
      object-fit: contain;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after{
          content: "";
          height: 2px;
          background: #fff;
          position: absolute;
          bottom: -6px;
          left: 0;
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left center;
          width: 100%;
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45,0.94) 0s;
      }
    }

    &:hover{
        span:after{
            transform: scaleX(1);
            opacity: 1;
        }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
const LogInContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
const LogIn = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background: rgba(0,0,0,0.6);
  cursor: pointer;
  transition: all 250ms linear;
  &:hover{
    background: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;