
// import PropTypes from 'prop-types';

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
            <div className="hero">
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
                </form>
            </div>
        </div>
    );
};

Login.propTypes = {

};

export default Login;