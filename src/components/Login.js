import { useState } from "react";
import Input from "./Input";



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')



    return (
    <div className="col-md-5 offset-md-4 mb-5 p-5 rounded-4 mt-4"  style={{ backgroundColor: '#495e57' }}>
        <h3 className="mt-1 text-white">Login</h3>
    
        <form >
            <Input
                title="Email Address"
                type="email"
                className="form-control"
                name="email"
                autoComplete="email-new"
                onChange = {(event) => setEmail(event.target.value)}
            />
            <Input
                title="Password"
                type="password"
                className="form-control "
                name="password"
                autoComplete="password-new"
                onChange = {(event) => setPassword(event.target.value)}
            />

            <div className="text-center">
              <input
                type="submit"
                className="btn  px-5 mb-5" style={{backgroundColor:"#f4ce14"}}
                value="Login"
              />
            </div>
        </form>

  
    </div>
    )

}

export default Login ;
