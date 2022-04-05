import { useState } from 'react'

import logo from '../img/clickdesk_logo.png'
import api from '../services/api'
import './Register.css'


export const Register

  = () => {
    const [fistName, setFistName] = useState(" ")
    const [lastName, setLastName] = useState(" ")
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ")

    async function handleSubmit() {
      const data = {
        fistName:fistName, 
        lastName:lastName, 
        email:email, 
        password:password}

      if(fistName !== "" && lastName !== ""&& email !== "" && password !== ""){
        
        const response = await api.post('/users', data);
        if(response.status === 200) {
          window.location.href='/'
        }else {
          alert('Error ao cadastrar o usuario');
        }
      }else {
        alert('Preencha todos os campos');
      }

      

    }
    

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
                  className={fistName !== "" ? 'has-val input' : 'input'}
                  type='text'
                  value={fistName}
                  onChange={e => setFistName(e.target.value)}
                />
                <span className="focus-input" data-placehoder="Nome"></span>
              </div>
              <div className="wrap-input">
                <input
                  className={lastName !== "" ? 'has-val input' : 'input'}
                  type='text'
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                />
                <span className="focus-input" data-placehoder="Sobrenome"></span>
              </div>
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
                <button className="login-form-btn" onClick={handleSubmit}>
                  cadastre-se
                </button>
                <div className="text-center">
                  <span className="text1">Ja possui uma conta ?</span>
                  <a className="text2" href="/"> Fazer login.</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

export default Register

  ;
