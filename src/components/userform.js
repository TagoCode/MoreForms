import React, { useState } from 'react';


const UserForm = (props) => {
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
                <label >Password:  {password}</label>
            </div>
        </>

    );
};

export default UserForm;