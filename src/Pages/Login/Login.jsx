
const Login = () => {
const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(password, email);
}

    return (
        <div>
           <div className="hero min-h-screen bg-base-300">
  <div className="hero-content  flex ">
    <div className="text-center md:w-1/2 lg:text-left ">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card md:w-1/2 max-w-sm shadow-2xl ">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input className="btn bg-[#D1A054B2]" type="submit" value="Login" />
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;