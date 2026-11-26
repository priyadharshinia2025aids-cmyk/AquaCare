{/*import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Droplets, ArrowRight } from "lucide-react";
import "./customer_login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, pass);
  };

  return (
    <>
      <h2>AQUACARE</h2>
      <h3>Customer Login</h3>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input  type="password" placeholder="Enter your password" value={pass} onChange={(e) => setPass(e.target.value)} />
        <button type="submit">Submit</button>
      </form>  
    </>
    
  );
}

export default Login;*/}

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Droplets, ArrowRight } from "lucide-react";
import "./CustomerLogin.css";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", pass);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <div className="login-page">

      {/* Left Side */}
      <div className="login-left">

        <div className="brand">
          <Droplets size={38} />
          <h1>AquaCare</h1>
        </div>

        <div className="left-content">
          <h2>Pure Water.<br />Better Life.</h2>
          <p>Experience clean, safe and healthy drinking water with AquaCare.</p>
        </div>

        <p className="left-footer">Your health begins with pure water.</p>

      </div>

      {/* Right Side */}
      <div className="login-right">

        <div className="login-card">

          <h2>Welcome Back! </h2>
          <p className="login-description">Login to your AquaCare customer account</p>

          <form onSubmit={handleSubmit}>

            <label>Email Address</label>
            <div className="input-box">
              <Mail size={19} />
              <input type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <label>Password</label>
            <div className="input-box">
              <Lock size={19} />
              <input type={showPass ? "text" : "password"} placeholder="Enter your password" value={pass} onChange={(e) => setPass(e.target.value)} required />
              <button type="button" className="password-toggle" onClick={() => setShowPass(!showPass)}>
                {showPass ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>

            <div className="login-options">
              <label className="remember">
                <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                Remember me
              </label>
              <a href="/forgot-password">Forgot Password ?</a>
            </div>

            <button type="submit" className="login-button">Login <ArrowRight size={18} /></button>

          </form>

          <p className="signup-text">Don't have an account? <a href="/register">Create Account</a></p>

        </div>

      </div>

    </div>
  );
}

export default Login;
