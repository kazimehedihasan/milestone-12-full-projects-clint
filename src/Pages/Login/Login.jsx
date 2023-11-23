import { useContext, useRef, useState } from "react";
import { useEffect } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  // LOGIN
  const { login } = useContext(AuthContext);

  const handleValidate = () => {
    const user_captcha_value = captchaRef.current.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(password, email);
      // LOGIN
    login(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-right ">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <img src="https://i.ibb.co/xhc97NZ/authentication1.png" alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {/*   -------- */}
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  ref={captchaRef}
                  type="text"
                  placeholder="Type here"
                  name="type"
                  className="input input-bordered"
                  required
                  //   onChange={() => handleValidate(captchaRef)}
                />

                <button onClick={handleValidate}>validate</button>
              </div>

              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className="btn bg-[#D1A054B2]"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p><small>New Here ? <Link to='/register'>Create an account</Link></small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
