import './App.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from "react-redux";
import {loadSkilledFB, deldteSkilledFB, CheckSkilledFB} from "./redux/modules/skilled";
import { useHistory } from 'react-router-dom';
import * as S from './memo_style';
import { Link } from 'react-router-dom';


const Memo = () => {
  const skilled_list = useSelector((state)=> state.skilled.list);
  const history = useHistory();
  //console.log(skilled_list[0].id);


const dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch(loadSkilledFB());}
    ,[dispatch]);



    return (
       
          <div className="container" style={{marginTop:"50px"}}>
              <div className="row" style={{ margin:"auto", width:"1200px"}}>
          {
            skilled_list.map((a,i)=>{
              return(
                
                <S.Sticker className="col-md-4" boolean={a.boolean}>
                    <S.H2 boolean={a.boolean}>{a[0]}</S.H2>
                        <S.Btn onClick={() => {
                          dispatch(deldteSkilledFB(skilled_list[i].id));
                        }}>x</S.Btn>  
                        <S.BtnChakUp onClick={()=>{
                         dispatch(CheckSkilledFB(skilled_list[i].id));
                        }}>📌</S.BtnChakUp>

                        <Link to={`/input2/${i}`}>
                          <S.BtnUp>✏</S.BtnUp>
                        </Link>

                    <S.Concept_wrap>
                        <S.Concept>개념</S.Concept>
                        <div>{a[1]}</div>
                    </S.Concept_wrap>

                    <S.Reference_wrap>
                        <S.Reference>사용법 참고자료</S.Reference>
                        <div style={{color:"rgb(37, 175, 255)"}}>{a[2]}</div>
                    </S.Reference_wrap>
                </S.Sticker>
            
              );  })  
          }
            </div>
            </div>
      
    );
}

export default Memo;
