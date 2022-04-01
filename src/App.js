import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Memo from './memo';
import AddInput from './input';
import ChingeInput from './input2';
import Styled from 'styled-components';
import {Link, Route} from 'react-router-dom';
import { db } from './firebase';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc} from 'firebase/firestore';
import { async } from '@firebase/util';


function App() {
//  const dispatch = useDispatch();
//   React.useEffect(()=>{
//     dispatch(loadSkilledFB());},[]);

    
    // addDoc(collection(db, "Skilled"), {text:  "new", completed:false}); //추가하기

    // const query = await getDocs(collection(db, "Skilled"));
    // console.log(query);
    // query.forEach((doc)=>{
    //   console.log(doc.id, doc.data());
    // });// firebase데이터 가져오기
  
    return (
        <div style={{width : '100%', height:'100%'}}>
            <Nav>
                <Link to='/'  style={{
                      textDecoration: 'none',
                        color: 'black'
                    }}>
                    React 용어 사전 </Link>
            </Nav>
              
            <Route exact="exact" path="/">
              <Memo/>
            </Route>
           
           <Route path="/input">
                <AddInput/>
            </Route>
          <Route path="/input2/:chinge_index">
            <ChingeInput/>
          </Route>
          
            <Link to='/input' style={{textDecoration: 'none'}}>
                <Button>+</Button>
            </Link>
            <ButtonTop onClick={()=>{
              window.scrollTo({top:0, left:0, behavior:"smooth"});
            }} >▲</ButtonTop>
        </div>
    );
}

const Nav = Styled.div `
  width: 100%;
  height: 80px;
  background-color: rgb(255, 252, 204);
  font-family: 'Poor Story', cursive;
  font-size: 40px;
  font-weight : 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = Styled.button `
  width: 50px;
  height : 50px;
  border-radius: 50px;
  background-color: rgb(255, 173, 66);
  font-size: 40px;
  font-weight: bold;
  color : white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position : fixed ;
  left : 1800px;
  bottom : 115px;
  border : none;
  padding-bottom : 8px;
  
`;

const ButtonTop = Styled.button `
  width: 50px;
  height : 50px;
  border-radius: 50px;
  background-color: rgb(255, 173, 66);
  font-size: 25px;
  font-weight: bold;
  color : white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position : fixed ;
  left : 1800px;
  bottom : 50px;
  border : none;
  padding-bottom : 8px;
`;

export default App;
