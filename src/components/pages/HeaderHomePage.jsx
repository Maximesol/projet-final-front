import React from 'react'
import styled from 'styled-components'

export default function HeaderHomePage() {
    return (
        <HeaderHomePageStyled>
            <button>Launch App</button>

        </HeaderHomePageStyled>
    )
}

const HeaderHomePageStyled = styled.div`

  flex: 0.65;
  position: relative; 


  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/src/assets/imagedao.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  button {
background: #FF9F1B;
width: 100px;
height: 30px;
position: absolute;
top: 30px;
right: 60px;
border-radius: 8px;
border: 1px solid #FF9F1B;
font-size: 1em;
font-weight: 500;
font-family: inherit;
cursor: pointer;
color: white;

&:hover {
  border-color: white;
}
  }
  
`;
