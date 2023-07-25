import { useRef } from "react"

const SignIn=()=>{
const signinName = useref();
const signinPwd = useref();
const name = localStorage.getItem('name');

    const handleLogin =()=>{
        if()
    }
    return(
        <div className="signin">
            <h3>{name}</h3>
            <input type="text" placeholder="name" ref={signinName}></input>
            <input type="password" placeholder="password" ref={signinPwd}></input>
            <button onClick={handleLogin}>Log In</button>
        </div>
    )
}