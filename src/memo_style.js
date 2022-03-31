import styled from "styled-components";

export const Btn = styled.button `
width: 5px;
height: 5px;
border: none;
background:none;
display : box;
position : absolute;
top : 5px;
right : 35px;
font-size: 25px;
font-weight : bold;
color : rgb(255, 173, 66);
`;

export const BtnChakUp = styled.button `
width: 5px;
height: 5px;
border: none;
background:none;
display : box;
position : absolute;
top : 15px;
right : 65px;
font-size: 15px;
`;

export const BtnUp = styled.button `
width: 5px;
height: 5px;
border: none;
background:none;
display : box;
position : absolute;
top : 15px;
right : 95px;
font-size: 15px;
`;

export const Sticker = styled.div `
width: 350px;
height: 300px;
border-radius: 15px;
background-color : ${({boolean}) => (boolean ? "rgb(255, 226, 162)" : "white")};
border: ${({boolean}) => (boolean ? "2px solid white" : "2px solid rgb(255, 226, 162)")};
padding: 20px;
box-shadow: 0px 0px 5px 3px rgba( 80, 80, 80, 0.1 );
margin:15px;
position : relative;
`;

export const H2 = styled.h2`
border-bottom:  ${({boolean}) => (boolean ? "3px solid white" : "3px solid rgb(255, 226, 162)")};
width: 300px;
padding-bottom:7px;
`;




export const Concept_wrap = styled.div `
width: 300px;
height : 110px;
margin-bottom: 5px;
/* background : yellow; */
`;

export const Concept = styled.div `
height : 30px;
/* background : red; */
font-weight: 700;
display: flex;
flex-direction: column;
justify-content: center;
margin-bottom: 5px;
`;

export const Reference_wrap = styled.div `
width: 300px;
height : 110px;
/* background : yellow; */
`;

export const Reference = styled.div `
height : 30px;
/* background : red; */
font-weight: 700;
display: flex;
flex-direction: column;
justify-content: center;
margin-bottom: 5px;
`;
