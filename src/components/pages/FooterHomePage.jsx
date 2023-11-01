import React from 'react';
import styled from 'styled-components';

export default function FooterHomePage() {
    return (
        <FooterHomePageStyled>
            <div>Invest with us</div>
            <div><span>for a decentralized</span></div>
            <div><span>and prosperous future</span></div>
        </FooterHomePageStyled>
    );
}

const FooterHomePageStyled = styled.div`
    background-color: #1b2030;
    flex: 0.35;
    text-align: center;
    font-size: 32px;
    color: #555;
    overflow: hidden;

    div {
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
    }

    div:first-of-type {
        animation: showup 7s infinite;
    }

    div:nth-of-type(2) {
        width: 0;
        animation: reveal 7s infinite;
    }

    div:nth-of-type(2) span {
        margin-left: -355px;
        animation: slidein 7s infinite;
    }

    div:nth-of-type(3) {
        animation: showup 7s infinite;
    }

    @keyframes showup {
        0% { opacity: 0; }
        20% { opacity: 1; }
        80% { opacity: 1; }
        100% { opacity: 0; }
    }

    @keyframes slidein {
        0% { margin-left: -800px; }
        20% { margin-left: -800px; }
        35% { margin-left: 0; }
        100% { margin-left: 0; }
    }

    @keyframes reveal {
        0% { opacity: 0; width: 0; }
        20% { opacity: 1; width: 0; }
        30% { width: 355px; }
        80% { opacity: 1; }
        100% { opacity: 0; width: 355px; }
    }
`;
