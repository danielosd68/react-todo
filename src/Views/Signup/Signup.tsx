import {Link} from "react-router-dom";
import {useState} from "react";

const SignupPage = () => {
    document.title = "Logowanie | TODO - Domu 🏠";
    const [badSignupData, setBadData] = useState<boolean>(false);
    const [signupData, setSignupData] = useState({});

    const handleInputChange = (event: { target: { value: any; name: any; }; }) => {
        setSignupData((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleSingupRequest = () => {
        setBadData(false);
        //@ts-ignore
        if(signupData.password === signupData.passwordConfirmed){
            alert('ok data');

        }
        else{
            setBadData(true);
        }
    }
    return (
        <div className="login w-11/12 ml-auto mr-auto mt-20">
            <h1 className="text-center text-5xl mb-10">TODO - Domu 🏠</h1>
            <div className="sm:shadow-xl loginBox w-[20rem] sm:w-[30rem] ml-auto mr-auto p-7 sm:border-2 sm:border-t-4 sm:border-t-amber-500 mb-10">
                <h1 className="text-center text-[#8f8f8f] text-2xl mb-10">Sign Up</h1>
                <form>
                    <div className="username mb-5 w-full">
                        <label className="text-[#8f8f8f]">Nazwa użytkownika</label><br/>
                        <input onChange={(e) => {
                            handleInputChange(e);
                        }} type="text" name="username" className="mt-3 border-2 w-full p-3" placeholder="Nazwa użytkownika..."/>
                    </div>
                    <div className="username mb-5 w-full">
                        <label className="text-[#8f8f8f]">Email</label><br/>
                        <input onChange={(e) => {
                            handleInputChange(e);
                        }}  type="email" name="email" className="mt-3 border-2 w-full p-3" placeholder="Email..."/>
                    </div>
                    <div className="password mb-5 w-full">
                        <label className="text-[#8f8f8f]">Hasło</label><br/>
                        <input  onChange={(e) => {
                            handleInputChange(e);
                        }} type="password" name="password" className="mt-3 border-2 w-full p-3" placeholder="Hasło..."/>
                    </div>
                    <div className="password mb-5 w-full">
                        <label className="text-[#8f8f8f]">Potwierdź hasło</label><br/>
                        <input  onChange={(e) => {
                            handleInputChange(e);
                        }} type="password" name="passwordConfirmed" className="mt-3 border-2 w-full p-3" placeholder="Potwierdź hasło..."/>
                    </div>
                    <p className={"text-center mt-5 text-red-500 " + (!badSignupData ? 'invisible' : null)}>Sprawdź poprawność danych i spróbuj ponownie...</p>
                    <div className="login-button mt-5 w-full mb-3">
                        <button className="transition ease-in-out w-full p-3 bg-amber-500 hover:bg-amber-600 text-white" onClick={(e) => {
                            e.preventDefault();

                            handleSingupRequest();
                        }}>Sign Up</button>
                    </div>

                    <Link to={'/'}><button className="transition ease-in-out hover:text-amber-600 w-full p-3 text-amber-500">Back to Log In</button></Link>
                </form>

            </div>
            <p className="text-center text-[#8f8f8f] mb-10">&copy; {new Date().getFullYear()} Chyliński Daniel</p>
        </div>
    )
}

export default SignupPage;