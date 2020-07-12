import React, { useState } from 'react';


const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [confPasswordError, setConfPasswordError] = useState("");

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const handleUsername = (e) => {
        setUsername(e.target.value);
        if (e.target.value.length < 1) {
            setUsernameError("Username is required")
        }
        else if (e.target.value.length < 3) {
            setUsernameError("Username must be greater than 3 characters")
        }
        else {
            setUsernameError("")
        }
    }

    const handleEmail = (e) => {
        setUsername(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email is required")
        }
        else if (e.target.value.length < 2) {
            setEmailError("Username must be greater than 3 characters")
        }
        else {
            setEmailError("")
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Pass must be greater than 8!")
        }
        else setPasswordError("")
    }


    const handleConfPassword = (e) => {
        setConfPassword(e.target.value);
        if (e.target.value != password) {
            setConfPasswordError("Passwords need to match!")
        }
        else { setConfPasswordError("") }
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    return (
        <>
            <form onSubmit={createUser}>
                {
                    hasBeenSubmitted
                        ? <h3>Thank you for submitting the form!</h3>
                        : <h3>Welcome, please submit the form.</h3>
                }
                <div>
                    <label>Username: </label>
                    <input type="text" onChange={handleUsername} />
                    {
                        usernameError ?
                            <p style={{ color: 'red' }}>{usernameError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={handleEmail} />
                    {
                        emailError ?
                            <p style={{ color: 'red' }}>{emailError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={handlePassword} />
                    {
                        passwordError ?
                            <p style={{ color: 'red' }}>{passwordError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={handleConfPassword} />
                    {
                        confPasswordError ?
                            <p style={{ color: 'red' }}>{confPasswordError}</p> :
                            ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <label>Username: {username}</label>
            </div>
            <div>
                <label>Email Address: {email}</label>
            </div>
            <div>
                <label >Password:  {password}</label><br></br>
                <label >Confirm Password:  {confPassword}</label>
            </div>
        </>
    );
};

export default UserForm;


// The below version of the code it for making the input appear instantly as you are typing. The above just displays "Thank you for submitting" after submission.

{/* // import React, { useState } from 'react';


// const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
    };

    return (
        <>
            <form onSubmit={createUser}>
                <div>
                    <label>Username: </label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <input type="submit" value="Submit" />
            </form>

            <div>
                <label>Username: {username}</label>
            </div>
            <div>
                <label>Email Address: {email}</label>
            </div>
            <div>
                <label >Password:  {password}</label><br></br>
                <label >Password:  {password}</label>
            </div>
        </>

    );
};

export default UserForm; */}