/* import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../Reducer';
import IpGeolocationApi from 'ip-geolocation-api-javascript-sdk/IpGeolocationApi.js';

const Login = () => {
    const [{}, dispatch] = useStateValue();

    const ipgeolocationApi = new IpGeolocationApi("7db0b2e2e49548fb82f49a4624a510dd"); // Replace YOUR_API_KEY_HERE with your actual API key

     const signIn = async () => {
        try {
            const geolocationParams = new GeolocationParams();
            geolocationParams.setFields("country_code"); 
            const response = await ipgeolocationApi.getGeolocation(geolocationParams);

            if (response.country_code !== "US") { 
                alert("Login from your location is not allowed.");
                return;
            }

            const result = await auth.signInWithPopup(provider);
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
        } catch (error) {
            alert(error.message);
        }
    }; 

    return (
        <LoginWrapper>
            <div className="login__logo">
                <img src="logo512.png" alt="login" />
                <h1>Popular Social</h1>
            </div>
            <Button type='submit' className="login__btn" onClick={signIn}>Sign In</Button>
        </LoginWrapper>
    );
};

const LoginWrapper = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
`;

export default Login; */

import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../Reducer';

const Login = () => {
    const [{}, dispatch] = useStateValue();

    const signIn = async (event) => {
        event.preventDefault();
        try {
            const ipResponse = await fetch("https://ipinfo.io/json?token=c5de4d89a7dd65");
            if (!ipResponse.ok) {
                throw new Error(`HTTP error! status: ${ipResponse.status}`);
            }
            console.log(Error.cause);
            const ipData = await ipResponse.json();

            if (ipData.country !== "US") {
                alert("Login from your location is not allowed.");
                return;
            }

            const result = await auth.signInWithPopup(provider);
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
        } catch (error) {
            console.error("Error during IP info fetch:", error);
            alert(error.message);
        }
    };

    return (
        <LoginWrapper>
            <div className="login__logo">
                <img src="logo512.png" alt="login" />
                <h1>Popular Social</h1>
            </div>
            <Button type='submit' className="login__btn" onClick={signIn}>Sign In</Button>
        </LoginWrapper>
    );
}

const LoginWrapper = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
`;

export default Login;