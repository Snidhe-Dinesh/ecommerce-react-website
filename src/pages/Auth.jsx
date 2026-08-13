import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


export default function Auth() {
    const [mode, setMode] = useState("signup");
    const Navigate=useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signUp, user,logout,login } = useContext(AuthContext);
    const[error,setError]=useState(null);
    function formSumbit(data) {
        setError(null);
        let result;
        if(mode==="signup"){
           result= signUp(data.email, data.password)

        }else{
          result=  login(data.email, data.password)

        }
if(result.success){
   Navigate("/")
}else{
    setError(result.error)
}

    }


    return (
        <div className="outer-container">
            <div className="inner-container">
                {user && <p>user logged in {user.email}</p> }

                <button onClick={logout}>logout</button>
                <div>            <h2>{mode === "signup" ? "Sign Up" : "Login"}</h2>
                </div>
                <form action="" className="auth-form" onSubmit={handleSubmit(formSumbit)}>
                {error && <div>{error}</div>}

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" {...register("email", { required: "email is required" })} />
                        {errors.email && (<p className="er-msg">{errors.email.message}</p>)}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" {...register("password", {
                            required: "password is required", minLength: {
                                value: 6,
                                message: "password must be at least 6 characters"
                            },
                            maxLength: {
                                value: 12,
                                message: "password must be less than 12 characters"

                            }
                        })} />
                        {errors.password && (<p className="er-msg">{errors.password.message}</p>)}

                    </div>
                    <button type="submit" className="btn-blue">{mode === "signup" ? "Sign Up" : "Login"}</button>

                    <div className="auth-para">
                        {mode === "signup" ? (<p>already have an account,Please <span onClick={() => setMode("login")}>Login</span></p>) : (<p>You dont have any accout Please <span onClick={() => setMode("signup")}>Sign Up</span></p>)

                        }

                    </div>
                </form>
            </div>
        </div>)
}