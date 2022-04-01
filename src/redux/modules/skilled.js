// skilled.js
import { db } from "../../firebase" //파이어베이스랑 연결, 미들웨어 생성을 위해 import 해오기
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc} from 'firebase/firestore'; 
import { async } from "@firebase/util";


// Actions
const LOAD = 'skilled/LOAD';
const CREATE = 'skilled/CREATE';
const UPDATE = 'skilled/UPDATE'; 
const DELETE = 'skilled/DELETE'; 
const CHECK = 'skilled/CHECK';

const initialState = {
    list : [],
};

// Action Creators
export function loadSkilled(skilled_list) {
return { type: LOAD ,skilled_list};
}

export function createSkilled(skilled) {
return { type: CREATE, skilled };
}

export function CheckSkilled(skilled_index) {
    //console.log("체크버킷",skilled_index);
return { type: CHECK, skilled_index };
}

export function updateSkilled(skilled_Chingeindex) {
    console.log("수정버킷",skilled_Chingeindex);
return { type: UPDATE, skilled_Chingeindex };
}

export function deldteSkilled(skilled_Date) {
    //console.log("지울버킷",skilled_Date);
return { type: DELETE, skilled_Date };
}


//middlewares 
export const loadSkilledFB = ()=> {
    return async function(dispatch) {
        const skilled_data = await getDocs(collection(db, "Skilled"));
        // console.log(skilled_data);

        let skilled_list = [];

        skilled_data.forEach((doc)=>{
            //console.log(doc.id, doc.data());
            skilled_list.push({id : doc.id, ...doc.data()});
        });


        //console.log(skilled_list);

        dispatch(loadSkilled(skilled_list.sort((a, b) => a.date - b.date)));
    };
};
export const createSkilledFB = (skilled) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db, "Skilled"), skilled);
        const _skilled = await getDoc(docRef)
        const skilled_data = {id: _skilled.id, ..._skilled};
        dispatch(createSkilled(skilled_data));
        
        
    };
};
// 리듀서는 순수함수여야한다.(파라미터로 가져오는값만 가져와야한다.)
// 지금처럼 외부서버데이터를 가져오기위해선, 미들웨어를 사용하여 미들웨어에서 가져올수있다.
// 미들웨어는 dispatch와 reducer 사이에 중간다리를 놔주는역할을 한다.
// action -> middlewares -> reducer
// 미들웨어 redux-thunk 는 객체대신 함수를 생성하는 액션 생성 함수 
// -> 특정 액션이 실제로 수행되기전 어떤조건,행동을 사전처리를 할수있게 해준다. 츄가동작

export const deldteSkilledFB = (skilled_id) => {
    return async function (dispatch, getState) {
        
        const docRef = doc(db,"Skilled", skilled_id);
        await deleteDoc(docRef); //docRef 전체데이터 읽기

        const skilled_list = getState().skilled.list;
        const skilled_Date = skilled_list.findIndex((b) => {
            return b.id === skilled_id;
        });

        dispatch(deldteSkilled(skilled_Date));
    }
}
 
export const CheckSkilledFB = (skilled_id) => {
    return async function (dispatch, getState) {
        const docRef = await doc(db, "Skilled", skilled_id);
        //console.log(docRef)

        //await updateDoc(docRef, {boolean:true});
        (await getDoc(docRef)).data().boolean === false
        ? updateDoc(docRef, {boolean:true})
        : updateDoc(docRef, {boolean:false});

        //console.log(getState().skilled)
        const _skilled_list = getState().skilled.list;
        const skilled_index = _skilled_list.findIndex((b)=>{
            return b.id === skilled_id;
        })
        dispatch(CheckSkilled(skilled_index));
        //console.log(skilled_index)
    };
};

export const updateSkilledFB = (skilled_Chingeindex) => {
    console.log(skilled_Chingeindex.id)
    return async function (dispatch) {
        const docRef = await doc(db, "Skilled", skilled_Chingeindex.id);
        
        //(await getDoc(docRef)).data().boolean === false
        updateDoc(docRef, {
            0:skilled_Chingeindex[0],
            1:skilled_Chingeindex[1],
            2:skilled_Chingeindex[2]
        });

        // const _skilled_list = getState().skilled.list;
        // const skilled_Chingeindex= _skilled_list.findIndex((b)=>{
        //     return b.id === skilled_Chingeindex.id;
        // })
        dispatch(updateSkilled(skilled_Chingeindex));
      
    };
};




// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "skilled/LOAD"  : {
            return {list : action.skilled_list}
        }
        // case "skilled/CREATE": {
        //     const new_skilled_list = [...state.list, action.skilled];
        //     return {list :new_skilled_list};
        // }
    // do reducer stuff

    case "skilled/CHECK": {
       // console.log("이제 완료할거야");
       // console.log(state,action);

        const new_skilled_lists = state.list.map((l,i) => {
            
            if(action.skilled_index == i){
                if(l.boolean === false){
                    return {...l, boolean:true};
                }else{
                    return {...l, boolean:false};
                }
            }else{
                return l ;
            }
        });//console.log(new_skilled_lists);
        //console.log({list : new_skilled_list});
        return {list : new_skilled_lists};
    }


    case "skilled/DELETE": {
        //console.log(state,action);
        const new_skilled_list = state.list.filter((l, idx) => {
            //console.log(action.skilled_Date !== idx,action.skilled_Date,idx); 
            return action.skilled_Date !== idx;
        })
        return {list: new_skilled_list};
    }


    default: 
        return state;
    }
}