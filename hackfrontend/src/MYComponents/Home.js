import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate("/postu");
    };
    const handleSignin = () => {
        navigate("/signin")
    };


  return (
    <div>
        <button className="my-2 btn rounded-3 text-white" style={{ backgroundColor: "#a30617" }} onClick= {handleSignup}>Sign up</button>
        <button className="my-2 btn rounded-3 text-white" style={{ backgroundColor: "#a30617" }} onClick= {handleSignin}>Sign in</button>
    </div>
  )
}
