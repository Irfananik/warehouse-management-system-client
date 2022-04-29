import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <div className="container">
                <div className="py-2">
                    <button type="button" className="btn btn-light  my-3 d-block mx-auto">
                        Login with google
                        <img style={{ width: '30px' }} className="img-fluid mx-4 rounded-circle" src={'https://i.ibb.co/G2ZqW1L/google-Icon.jpg'} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;