import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/Authcontext"
function Auth() {
const inputClass = "w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 placeholder-gray-600"
const Label= "block text-white text-xl mb-1"
const tabBase = "flex-1 py-2 rounded-lg text-sm font-medium text-center cursor-pointer"
const active = "bg-amber-400 text-gray-950 shadow"
const inactive = "text-gray-400 hover:text-gray-200"
const Btn = "w-full bg-amber-400 hover:bg-amber-300 text-gray-950 font-semibold py-3 rounded-lg text-sm text-center cursor-pointer mt-6"
const Google= "mt-5 w-full flex items-center justify-center gap-3 bg-gray-800 border border-gray-700 text-gray-200 font-medium py-3 rounded-lg text-sm cursor-pointer hover:bg-gray-700"
const [action, setAction] = useState("Sign Up")
const { login, signup, googleLogin } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [error, setError] = useState("")
const handleSubmit = async () => {
    console.log("clicked")
    setError("")
    try {
        console.log("trying")
      if (action === "Sign Up") await signup(email, password)
      else await login(email, password)
    console.log("success")
      navigate("/dashboard")
    } catch (err) {
        console.log("error", err.message)
      setError(err.message)
    }
  }
{error && <div>{error}</div>}
  const handleGoogle = async () => {
    setError("")
    try {
      await googleLogin()
      navigate("/dashboard")
    } catch (err) {
      setError(err.message)
    }
  }
    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
         <div className="w-full max-w-md">
        <div className="flex mb-6 bg-gray-800 rounded-xl p-1">
           <div className={`${tabBase} ${action === "Login" ? inactive : active}`} onClick={() => setAction("Sign Up")}>Sign Up</div>
           <div className={`${tabBase} ${action === "Sign Up" ? inactive : active}`} onClick={() => setAction("Login")}>Log In</div> 
        </div>
         <div className="space-y-4">
            {action==="Login"?<div></div>:
            <div>
            <label className={Label}>Username</label>
            <input type="text" placeholder="Names"  className={inputClass} value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            }
          
          <div>
            <label className={Label}>Email</label>
            <input type="email" placeholder="Email" className={inputClass} value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

         <div>
            <label className={Label}>Password</label>
            <input type="passWord" placeholder="Password" className={inputClass} value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

         </div>
         {action==="Sign Up"?<div></div>: <div className="mt-6 text-gray-400 text-sm">Lost Password? <span className="text-amber-400 cursor-pointer hover:text-amber-300">Click here</span></div>}

        <button className={Google} onClick={handleGoogle}>
        <img src="https://www.google.com/favicon.ico" className="w-4 h-4" />Continue with Google
        </button>
        <button className={Btn} onClick={handleSubmit}>{action === "Sign Up" ? "Create Account" : "Log In"}</button>
        </div>
        </div>
    )
}

export default Auth