import React, {useState} from 'react'

const Login = () => {
    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: ''
    })

    const emailIsValid = enteredValues.email!=='' && enteredValues.email.includes('@');
    function handleSubmit(e) {
        e.preventDefault();
        console.log(enteredValues.email, enteredValues.password)
    }

    function handleInputChange(identifier, value) {
        setEnteredValues({
            ...enteredValues,
            [identifier]: value
        });
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" 
            value={enteredValues.email} 
            onChange={(e) => handleInputChange('email', e.target.value)}/>
            {!emailIsValid && <p>Invalid email</p>}
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={enteredValues.password} onChange={(e) => handleInputChange('password', e.target.value)}/>
        </div>
        <button type="submit">Login</button>
    </form>
  )
}

export default Login