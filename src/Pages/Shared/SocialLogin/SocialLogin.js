import React, { useContext } from 'react';
import { setAuthToken } from '../../../api/auth';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const {googleSignIN} = useContext(AuthContext);


    const handleGoogleSignin = () =>{
        googleSignIN()
        .then(result=>{
            const user = result.user;
            console.log(user);
            setAuthToken(user);
        })
        .catch(err=>console.error(err));
    }

    return (
        <div>
            <p className='text-center'>Social Login</p>
            <p className='text-center'><button onClick={handleGoogleSignin} className='btn btn-ghost'>Google</button></p>

        </div>
    );
};

export default SocialLogin;