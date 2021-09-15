import Auth from '@aws-amplify/auth';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const Posform = () => {
    // const [userInfo, setUserInfo] = useState({});
const {state} = useLocation()

// async function getUser() {
//     const user = await Auth.currentUserInfo();
//     setUserInfo(user);
// }
//   useEffect( () => {
//     getUser()
//   }, []);

    return (
        <div style={{backgroundColor:"#f5f6f8"}}>
            <h1 className='text-4xl absolute top-4 left-4 bg-primary bg-opacity-60 px-5 py-2 rounded-md'> Hi {state?.username}, One last step</h1>
                  <iframe src="https://quabbly.live/ba684b62-2b37-4b07-8c77-d7ab035dbab5" height="1000px" frameborder="0" width="100%" ></iframe>
        {/* <input type='checkbox' /> Accept our privacy to */}
        </div>
    );
};

export default Posform;