
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        const name = form.get('name')
    }
    return (
        <div>
            <h1 className="text-5xl text-center mt-5 mb-2">Register</h1>
            <div className="hero mb-4">
                <form onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
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
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-black text-white hover:text-black">Register</button>
                    </div>
                    <p className="text-xs pt-2">Already have a account <Link className="text-blue-700 underline" to="/Login">Login</Link> </p>
                </form>
                
            </div>
        </div>
    );
};

Register.propTypes = {
    
};

export default Register;