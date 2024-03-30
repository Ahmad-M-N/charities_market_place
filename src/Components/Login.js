import React, { useState } from 'react';
import {SERVER_URL} from '../constants.js';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Categories from './Categories.js';


const Login = () => {

    const [userInfo, setUserInfo]=useState({jwt: '', role: ''});
    const [user, setUser] = useState({username: '', password: ''});
    const [isAuthenticated, setAuth]=useState(false);

    const handleChange = (event) => {
        setUser({...user, [event.target.name] : event.target.value})
    }

    const login = () =>{
        fetch(SERVER_URL+'login', {method: 'POST', body: JSON.stringify(user)})
        .then(res => {
            const jwtToken = res.headers.get('Authorization');
            if (jwtToken !== null){
                sessionStorage.setItem("jwt",jwtToken);

                fetch(SERVER_URL+'api/users/search/findByUsername?username='+user.username, {headers: {'Authorization': jwtToken}})
                .then(response => response.json())
                .then(fetchedUser => {
                    localStorage.setItem("role",fetchedUser.role)})
                .catch(err => console.error(err));
                
                setAuth(true);
            }
            else {
                toast.warn("Check your username and password", {
                    position: toast.POSITION.BOTTOM_LEFT
                })
            }
        })
        .catch(err => console.error(err))
    }

    const logout = () => {
        sessionStorage.removeItem("jwt");
        setAuth(false);
    }

    if (isAuthenticated === true) {
        return (
            <div>
            <Categories />
            {/* <Stack mt={2} mb={2}>
                <div>
                    <Button variant="contained" onClick={logout} color="error" alignItems= 'center'>
                        logout
                    </Button>
                </div>
            </Stack>  */}
            </div>
        );
    }
    else {
        return (
        <Stack mt={20}>
            <div>
                <TextField name="username" label="Username" onChange={handleChange} />
                <br/><br/>
                <TextField name="password" label="Password" onChange={handleChange} />
                <br/><br/>
                <Button variant='outlined' color='primary' onClick={login}>
                    Login
                </Button>
                <ToastContainer autoClose={1500} />
            </div>
        </Stack>
        );
        }
}

export default Login;
