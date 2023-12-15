import React, { useState } from 'react'
import './SignUp.css';
import close from './../../assets/close.png'
import leftImage from './../../assets/lef-image.png';
import {Image} from 'react-bootstrap';
import faceBook from './../../assets/facebook.png'
import google from './../../assets/google.png';
import eye from './../../assets/eye.png';

const Signup = ({setSessionUp}) => {
    const [modal, setModal] = useState(false);

    const handleClick = (e) => {
      e.preventDefault();
      setModal(!modal);
      setSessionUp(false)
    };
  return (
    <div className='sign-up'>
        <div className="sign-up-modal">
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
                   <h1 className='create-account-title'>Create Account</h1>
                   <div className="form-modal">
                    <form action="#" className="form__modal">
                        <div className="form__input-group">
                            <div className="form__input-div name__group">
                                <div className="form__input-divs">
                                    <input
                                    type="text"
                                    placeholder="Frist Name"
                                    className="form__control"
                                    required
                                    />
                                </div>
                                <div className="form__input-divs">
                                    <input
                                    type="email"
                                    placeholder="Last Name"
                                    className="form__control"
                                    required
                                    />
                                </div>
                            </div>
                            <div className="form__input-div">
                                <input
                                type="email"
                                placeholder="Email"
                                className="form__control"
                                required
                                />
                                <Image src={eye} className='pass-show' />
                            </div>
                            <div className="form__input-div">
                                <input
                                type="password"
                                placeholder="Password"
                                className="form__control"
                                required
                                />
                            </div>
                            <div className="form__input-div">
                                <input
                                type="password"
                                placeholder="Confirm Password"
                                className="form__control"
                                required
                                />
                            </div>                                 
                        </div>
                        <button type="submit" className="button-create">
                        Create Account
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
                </div>
                <div className='image-modal'>
                   <p className='image-header-modal'>Already have an account? <span>Sign In</span></p>
                   <div className="image__contener-div">
                     <Image src={leftImage} />
                   </div>
                   <div>
                      <p className="image-foot">By signing up, you agree to our Terms & conditions, Privacy policy</p>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup