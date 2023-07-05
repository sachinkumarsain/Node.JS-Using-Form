import React from 'react'

function Login() {
  return (
    < div className='login homeSection'>
        <h2>Login</h2>
        <form method='post' action='http://localhost:8080/login'>
            <input type="text" name='username' placeholder='Username'></input><br/>
            <input type="password" name='password' placeholder='Password'></input><br/>
            <button type='submit' name='login'>Login</button>
        </form>
    </div>
  )
}

export default Login