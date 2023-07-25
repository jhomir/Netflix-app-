import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Header = (props) => {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <div className='logo'>
        <img src='https://assets.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png'
        alt='no internet connection'
        />
      </div>
      <button onClick={()=>navigate(props.login ? '/login' : '/signup')}>
        {props.login ? 'Log In' : 'Sign In'}
      </button>
    </HeaderContainer>
  ) 
}
 const HeaderContainer = styled.div`
 display: flex;
 justify-content:  space-between;
 align-items: center;
 padding: 1rem;
 .logo{
img{
  height: 3rem;
  cursor: pointer;
}
 }
 button{
  padding: 0.5rem 1rem;
  background-color: red;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 0.2rem;
  font-weight: bolder;
  font-size:1.05rem;
 }

 `
export default Header
