import './App.css';
import React, {useState, useRef} from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch ,useSelector } from "react-redux";
import {createSkilled,createSkilledFB, updateSkilledFB} from "./redux/modules/skilled";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const ChingeInput = ()=> {

  const [list,setList] = useState('');
  

  const ChingeInputRef_1 = useRef(null);
  const ChingeInputRef_2 = useRef(null);
  const ChingeInputRef_3 = useRef(null);
  
  const newData1 = useSelector((state)=> state.skilled.list);
 

  const params = useParams();
  const dispatch = useDispatch();

//console.log(newData1[params.chinge_index][0])

  const chinges = ()=>{
    const name = ChingeInputRef_1.current.value;
    const second = ChingeInputRef_2.current.value;
    const rdata = ChingeInputRef_3.current.value;

    // setList([...list, [name,second,rdata]])

       
    dispatch(updateSkilledFB({
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
          <h2 style={{textAlign:'center'}} >React용어 수정하기</h2>
          
          <Form1 >
              <Input_wrap1 >
                  <Label1 for='Name'>React 용어</Label1>
                  <Name1 ref={ChingeInputRef_1} type='text' id='Name' defaultValue={newData1[params.chinge_index][0]} />
              </Input_wrap1>
              <Input_wrap1>
                  <Label1 for='Second'>개념</Label1>
                  <Name1 ref={ChingeInputRef_2} type='text' id='Second' defaultValue={newData1[params.chinge_index][1]}/>
              </Input_wrap1>
              <Input_wrap1>
                  <Label1 for='Rdata'>참고자료</Label1>
                  <Name1 ref={ChingeInputRef_3} type='text' id='Rdata' defaultValue={newData1[params.chinge_index][2]}/>
              </Input_wrap1>
          </Form1>
          <Link to='/' style={{textDecoration: 'none'}}>
            <Button1 onClick={chinges} >수정하기</Button1>
          </Link>

      </div>
  );
}

const Input_wrap1 = Styled.div`
width : 400px;
margin-top : 40px;
`;

const Label1 = Styled.label`
font-weight: 540;
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
const Name11 = Styled.input`
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



const Form1 = Styled.form`
width: 500px;
height : 300px;
padding-left: 40px;
padding-top: 5px;
box-sizing: border-box;
margin: 0 auto;

`;

const Button1 = Styled.button`
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

export default ChingeInput;
