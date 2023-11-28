import {Link} from "react-router-dom";

const SignupPage = () => {
    document.title = "Sign Up | TODO App";

    return (
        <div className="login w-11/12 ml-auto mr-auto mt-20">
            <h1 className="text-center text-5xl mb-10">TODO App</h1>
            <div className="sm:shadow-xl loginBox w-[20rem] sm:w-[30rem] ml-auto mr-auto p-7 sm:border-2 sm:border-t-4 sm:border-t-amber-500 mb-10">
                <h1 className="text-center text-[#8f8f8f] text-2xl mb-10">Sign Up</h1>
                <form>
                    <div className="username mb-5 w-full">
                        <label className="text-[#8f8f8f]">Username</label><br/>
                        <input type="text" name="username" className="mt-3 border-2 w-full p-3" placeholder="Username..."/>
                    </div>
                    <div className="username mb-5 w-full">
                        <label className="text-[#8f8f8f]">Email</label><br/>
                        <input type="email" name="email" className="mt-3 border-2 w-full p-3" placeholder="Email..."/>
                    </div>
                    <div className="password mb-5 w-full">
                        <label className="text-[#8f8f8f]">Password</label><br/>
                        <input type="password" name="password" className="mt-3 border-2 w-full p-3" placeholder="Password..."/>
                    </div>
                    <div className="password mb-5 w-full">
                        <label className="text-[#8f8f8f]">Confirm password</label><br/>
                        <input type="password" name="password-confirmed" className="mt-3 border-2 w-full p-3" placeholder="Confirm password..."/>
                    </div>
                    <p className={"text-center mt-5 text-red-500 " }>Please check your data and try again!</p>
                    <div className="login-button mt-5 w-full mb-3">
                        <button className="transition ease-in-out w-full p-3 bg-amber-500 hover:bg-amber-600 text-white">Sign Up</button>
                    </div>

                    <Link to={'/'}><button className="transition ease-in-out hover:text-amber-600 w-full p-3 text-amber-500">Back to Log In</button></Link>
                </form>

            </div>
            <p className="text-center text-[#8f8f8f] mb-10">&copy; {new Date().getFullYear()} Chyliński Daniel</p>
        </div>
    )
}

export default SignupPage;