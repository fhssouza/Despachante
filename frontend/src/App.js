import logo from '../src/img/clickdesk_logo.png'
import { useState } from 'react'

import './styles.css'

function App() {
  const [email, setEmail] = useState(" ")
  const [password, setPassword] = useState(" ")



  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Bem Vindo!</span>
            <span className="login-form-title">
              <img src={logo} alt="logo" />
            </span>
            <div className="wrap-input">
              <input
                className={email !== "" ? 'has-val input' : 'input'}
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placehoder="Email"></span>
            </div>
            <div className="wrap-input">
              <input
                className={password !== "" ? 'has-val input' : 'input'}
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placehoder="Password"></span>
            </div>
            <div className="container-login-form-btn">
              <button className="login-form-btn">
                Login
              </button>
              <div className="text-center">
                <span className="text1">Não possui conta ?</span>
                <a className="text2" href=""> Criar conta.</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
