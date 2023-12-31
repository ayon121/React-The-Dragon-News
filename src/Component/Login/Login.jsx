
// import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

const Login = () => {

    const handlelogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email , password)
    }
    return (
        <div>
            <h1 className="text-5xl text-center mt-5 mb-2">Login</h1>
            <div className="hero mb-4">
                <form onSubmit={handlelogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-black text-white hover:text-black">Login</button>
                    </div>
                    <p className="text-xs pt-2">Do not have a account <Link className="text-blue-700 underline" to="/Register">Register</Link> </p>
                </form>
                
            </div>
        </div>
    );
};

Login.propTypes = {

};

export default Login;