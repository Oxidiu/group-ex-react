import "./Login.css"

const Login = ({
    handleLogin,
    userName,
    loggedIn,
    handleUserName
}) => {
    return (
        <div className={loggedIn === true ? "hidden" : ""}>
            <input type="text" placeholder="username" onChange={(event) => handleUserName(event.target.value)}/>
            <button onClick={userName !== null && handleLogin}>Log In</button>
        </div>
    )
}

export default Login