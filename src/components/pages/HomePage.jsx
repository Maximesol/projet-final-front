import React from 'react'
import styled from 'styled-components'
import HeaderHomePage from '../pages/HeaderHomePage'
import FooterHomePage from '../pages/FooterHomePage'

export default function HomePage() {
  return (
    <HomePageStyled>
      <HeaderHomePage />
      <FooterHomePage />
    </HomePageStyled>
  )
}

const HomePageStyled = styled.div`
background-color: #343541;
height: 100vh;
display: flex;
flex-direction: column;
  
`;
