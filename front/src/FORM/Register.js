import React from 'react'

function Ragister() {
    return (
        <div className='register homeSection'>
            <h2>Register</h2>
            <form method='post' action='http://localhost:8080/register'>
                <input type='text' name="name" placeholder='Name'/><br/>
                <input type='email' name="email" placeholder='Email'/><br/>
                <input type='text' name="phone" placeholder='Phone'/><br/>
                <input type='text' name="username" placeholder='Username'/><br/>
                <input type='password' name="password" placeholder='Password'/><br/>
                <button type='submit' name="register">Register</button>
            </form>
        </div>
    )
}

export default Ragister