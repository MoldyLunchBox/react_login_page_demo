import { AuthContext } from "../context";
import { useContext, useState } from "react";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const authContext = useContext(AuthContext);

    function login(e) {
        e.preventDefault();
        if (username && password) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            authContext.setAuth({ isAuth: true });
            console.log(authContext.auth.isAuth)
        } else {
            alert("wrong details");
        }
    }

    return (
        <form>
            <h2 className="mb-3 mt-4">Login</h2>
            <input
                type="username"
                className="form-control"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
                type="password"
                className="form-control"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <div className="d-grid gap-2">
                <button className="btn btn-primary" onClick={login}>
                    Login
                </button>
            </div>
        </form>
    );
}

export default LoginForm;