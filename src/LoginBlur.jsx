import React, {useState} from 'react'

const LoginBlur = () => {
    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: ''
    })
    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false
    })

    const emailIsValid=didEdit.email && enteredValues.email.includes('@');

    function handleInputChange(identifier,value) {
        setEnteredValues({
            ...enteredValues,
            [identifier]: value
        });
    }

    function handleInputBlur(identifier) {
        setDidEdit( prevEdit=>({
            ...prevEdit,
            [identifier]: true
        }));
    }
  return (
    <div className='control-row'>
        <div className='control no-margin'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" 
            name='email'
            onBlur={()=>handleInputBlur('email')}
            onChange={(event)=>handleInputChange('email', event.target.value)}
            value={enteredValues.email}
            />
            <div className='control-error'>{!emailIsValid && <p>Please enter valid email</p>}</div>
            </div>

    </div>
  )
}

export default LoginBlur