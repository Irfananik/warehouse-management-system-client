import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorMessage
    const navigate = useNavigate()

    if (error) {
        errorMessage = <p className="text-danger">Error: {error.message}</p>
    }

    if (user) {
        navigate('/')
    }

    if(loading) {
        return <Loading/>
    }

    return (
        <div>
            <div className="container">
                <div className="py-2">
                    {errorMessage}
                    <button onClick={() => signInWithGoogle()} type="button" className="btn btn-light  my-3 d-block mx-auto">
                        Login with google
                        <img style={{ width: '30px' }} className="img-fluid mx-4 rounded-circle" src={'https://i.ibb.co/G2ZqW1L/google-Icon.jpg'} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;