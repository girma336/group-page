import React, { useState } from 'react'
import close from './../../assets/close.png'
import leftImage from './../../assets/lef-image.png';
import {Image} from 'react-bootstrap';
import faceBook from './../../assets/facebook.png'
import google from './../../assets/google.png';
import './Login.css';
import eye from './../../assets/eye.png';

const Login = ({setSessionIn}) => {
  const [modal, setModal] = useState(false);

    const handleClick = (e) => {
      e.preventDefault();
      setModal(!modal);
      setSessionIn(false)
    };
  return (
    <div className='sign-up'>
        <div className="sign-in-modal">
            <div role="button" tabIndex={0} onClick={(e) => handleClick(e)} onKeyDown={(e) => handleClick(e)}>
               <img
                src={close}
                alt="close bar"
                className="modal__close"
              />
            </div>
            <div className='header-modal'>
                <p className='header-modal-title'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
            </div>

            <div className="grid-modla">
                <div className="create-accounts">
                   <h1 className='create-account-title'>Sign In</h1>
                   <div className="form-modal">
                    <form action="#" className="form__modal">
                        <div className="form__input-group">
                            <div className="form__input-div">
                                <input
                                type="email"
                                placeholder="Email"
                                className="form__control"
                                required
                                />
                            </div>
                            <div className="form__input-div">
                                <input
                                type="password"
                                placeholder="Password"
                                className="form__control"
                                required
                                />
                                <Image src={eye} className='pass-show' />
                            </div>                             
                        </div>
                        <button type="submit" className="button-create">
                          Sign In
                        </button>
                    </form>
                   </div>
                  <div>
                   <div className="face-google">
                     <p className="facebook"><Image src={faceBook} style={{marginRight: '10px'}} />{'  '}Sign up with Facebook</p>
                   </div>
                   <div className="face-google">
                     <p className="facebook"><Image src={google} style={{marginRight: '10px'}} /> {'  '}Sign up with Google</p>
                   </div>
                  </div>
                  <div className="forget">
                    <p className="forget-text">Forgot Password?</p>
                  </div>
                </div>
                <div className='image-modal'>
                   <p className='image-header-modal'>Don’t have an account yet? <span>Create new for free!</span></p>
                   <div className="image__contener-div">
                     <Image src={leftImage} />
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login