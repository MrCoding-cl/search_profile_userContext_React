import React,{useReducer} from 'react';
import axios from 'axios';
import UserReducer from './UserReducer';
import UserContext from "./UserContext";

const UserState = (props) => {
    const initialState={
        users:[],
        selectedUser:null,
    }
//    const [state, setstate] = useState(initialState);
   const [state, dispatch] = useReducer(UserReducer, initialState);


    const getUsers=async()=>{
        const resp=await axios.get('https://reqres.in/api/users');
        console.log(resp.data.data)
        dispatch({
            type:'GET_USERS',
            payload:resp.data.data
        })
        
    }

    const getProfile=async(id)=>{
        const resp=await axios.get(`https://reqres.in/api/users/${id}`);
        // console.log(resp)
        dispatch({
            type:'GET_PROFILE',
            payload:resp.data.data
        })
    }

    return(
        <UserContext.Provider value={{
            users:state.users,
            selectedUser:state.selectedUser,
            getUsers:getUsers,
            getProfile:getProfile
        }}>
            {props.children}
        </UserContext.Provider>
    )
};

export default UserState;
