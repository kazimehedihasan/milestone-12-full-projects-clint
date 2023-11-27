import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";

const Register = () => {
  const {register , handleSubmit  , formState :{errors}} = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }


  return (
   <div>
<div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center">Sing Up!</h1>
      <img src="https://i.ibb.co/syWkw1h/authentication2.png" alt="" />

    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name"  {...register("name", {required: true})} name="name" className="input input-bordered"  />
          {errors.name && <span className="text-red-300">name is required</span>}

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" {...register("email" , {required: true})} name="email" className="input input-bordered"  />
          {errors.email && <span className="text-red-300">email is required</span>}

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" {...register("password" , {required: true, minLength: 6 , maxLength: 20})} name="password" className="input input-bordered"  />
          {errors.password?.type === 'required' && <span className="text-red-300">password must be 6 characters</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center"><small>New Here ? <Link to='/login'>Have a Create an account</Link></small></p>

    </div>
  </div>
</div>
  </div>
  );
};

export default Register;
