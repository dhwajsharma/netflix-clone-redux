import React from 'react'
import "./SignInScreen.css"

const SignInScreen = () => {
    return (
        <div className="signinScreen">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign In</button>

                <h4> <span className="signinScreen_gray">New to Netflix? </span>
                    <span className="signinScreen_link">Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignInScreen
