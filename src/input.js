import './App.css';
import React, {useState, useRef} from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import {createSkilled,createSkilledFB} from "./redux/modules/skilled";

const AddInput = ()=> {

  const [list,setList] = useState('');
  

  const inputRef_1 = useRef(null);
  const inputRef_2 = useRef(null);
  const inputRef_3 = useRef(null);
  
  const newData1 = useSelector((state)=> state.skilled.list);
  console.log(newData1)


  const dispatch = useDispatch();


  const add = ()=>{
    const name = inputRef_1.current.value;
    const second = inputRef_2.current.value;
    const rdata = inputRef_3.current.value;

    // setList([...list, [name,second,rdata]])

   
    
    dispatch(createSkilledFB({
      0:name,
      1:second,
      2:rdata,
      date:Date.now(),
      boolean : false

    })); 
  };
  
// console.log(list)

  return (
      <div style={{width:'100%', marginTop:'100px'}}>
          <h2 style={{textAlign:'center'}} >React용어 추가하기</h2>
          
          <Form >
              <Input_wrap >
                  <Label for='Name'>React 용어</Label>
                  <Name ref={inputRef_1} type='text' id='Name' />
              </Input_wrap>
              <Input_wrap>
                  <Label for='Second'>개념</Label>
                  <Name1 ref={inputRef_2} type='text' id='Second'/>
              </Input_wrap>
              <Input_wrap>
                  <Label for='Rdata'>참고자료</Label>
                  <Name ref={inputRef_3} type='text' id='Rdata'/>
              </Input_wrap>
          </Form>
          <Link to='/' style={{textDecoration: 'none'}}>
            <Button onClick={add} >저장하기</Button>
          </Link>

      </div>
  );
}

const Input_wrap = Styled.div`
width : 400px;
margin-top : 40px;
`;

const Label = Styled.label`
font-weight: 540;
`;

const Name = Styled.input`
width : 400px;
height : 30px;
border-bottom :2px solid rgb(255, 226, 162);
border-left : 0px;
border-right:0px; 
border-top:0px; 
background:none;
&:focus {
  outline: none;;
}
`;
const Name1 = Styled.input`
width : 400px;
height : 30px;
border-bottom :2px solid rgb(255, 226, 162);
border-left : 0px;
border-right:0px; 
border-top:0px; 
background:none;
&:focus {
  outline: none;;
}
`;



const Form = Styled.form`
width: 500px;
height : 300px;
padding-left: 40px;
padding-top: 5px;
box-sizing: border-box;
margin: 0 auto;

`;

const Button = Styled.button`
width:150px;
height:40px;
border-radius: 7px;
border : 0;
background-color : rgb(255, 173, 66);
color:white;
font-size: 16px;
margin: 20px auto;
display: block; 
`;

export default AddInput;
