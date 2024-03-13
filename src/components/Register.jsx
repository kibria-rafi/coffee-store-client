import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const[user,setUser]=useState(null)
    const {createUser}=useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        e.target.reset();
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            setUser('account created successfully!')
            const createdAt = result.user?.metadata?.creationTime;
            
            // new user has been created
            const user = {email ,createdAt:createdAt}
            fetch('http://localhost:5000/users',{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.insertedId){
                    Swal.fire("account created successfully!", "", "success");
                }
            })
        })
        .catch(error=>{
            console.error(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                {
                    user && <p className="text-green-500">{user}</p>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;