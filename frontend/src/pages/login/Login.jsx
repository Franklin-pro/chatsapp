import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/login";
import loginImage from "../../assets/login.jpg";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div>
			<section className="">
				{/* login container */}

				<div className="bg-gray-50 shadow-lg flex gap-4 rounded-2xl max-w-3xl h-[550px] p-5">
					{/* form */}
					<div className="sm:w-1/2">
						<h2 className="font-bold text-2xl text-gray-700">Login</h2>
						<p className="text-sm font-light my-2 text-gray-500">If You Are Already A Member ,Easily Log In</p>

						<form onSubmit={handleSubmit}>
							<div>
								<label className='label p-2'>
									<span className='text-base text-gray-500 label-text'>Username</span>
								</label>
								<div>

									<input
										type='text'
										placeholder='Enter username'
										className='w-full bg-white input text-black input-bordered h-10'
										value={username}
										onChange={(e) => setUsername(e.target.value)}
									/>
								</div>

							</div>

							<div>
								<label className='label'>
									<span className='text-base text-gray-500 label-text'>Password</span>
								</label>
								<input
									type='password'
									placeholder='Enter Password'
									className='w-full bg-white input text-black input-bordered h-10'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
						
							<div className="mt-3">
								<button className='btn btn-block hover:bg-gray-800 text-lg  text-white border-none bg-gray-700 btn-sm mt-2' disabled={loading}>
									{loading ? <span className='loading loading-spinner'></span> : "Login"}
								</button>
							</div>
							<div className="divider text-gray-700">or</div>
							<button className="btn btn-outline w-full bg-white text-gray-600 hover:bg-gray-100">

								<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
									<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
								</svg>
								Login with Google
							</button>
						<div>
						<Link to='/signup' className='text-sm  text-gray-500 hover:underline hover:text-blue-600 mt-2 inline-block'>
								For got password?
							</Link>
							<div className="divider"></div>
							<div>
							<Link to='/signup' className='text-sm text-gray-500 hover:underline hover:text-blue-600 mt-3 inline-block'>
								{"Don't"} have an account? <span className="text-blue-500">Register</span>
							</Link>
							</div>
							<div>

							</div>
						</div>
						
						</form>
					</div>
					{/* image */}
					<div className="sm:block hidden w-1/2 h-full">
						<img className="rounded-2xl  h-full object-cover" src={loginImage} alt="image" />
					</div>
				</div>
			</section>
		</div>
	);
};
export default Login;