import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const redirectToDashboard = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    }

    return (
        <div className="h-screen bg-[url(./assets/bg-image.jpg)] bg-[#494C4F] bg-cover bg-center bg-blend-multiply flex justify-center">
            <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 py-4 mt-10">
                    <img src={logo} alt="Logo Red Product" />
                    <h2 className="font-bold text-xl text-white">RED PRODUCT</h2>
                </div>

                <form className="w-[100%] md:w-[400px] bg-white py-10 px-10 flex flex-col">
                    <h1>Connectez vous en tant qu'Admin</h1>

                    <div className="mb-5 mt-5">
                        <input type="email" placeholder="Email" className="py-2 ps-2 border-b border-gray-200 w-full" />
                    </div>

                    <div className="mb-5">
                        <input type="password" placeholder="Password" className="py-2 ps-2 border-b border-gray-200 w-full" />
                    </div>

                    <div className="flex items-center gap-4">
                        <input type="checkbox" name="remember" id="remember"/>
                        <label htmlFor="remember">Gardez moi connecté</label>
                    </div>

                    <button
                        type="submit"
                        onClick={redirectToDashboard}
                        className="bg-[#494C4F] text-white w-full py-2 rounded-md mt-10 cursor-pointer mx-auto"
                    >
                        Se connecter
                    </button>
                </form>

                <div className="text-white">
                    <p className="text-[#FFD964] text-center mt-5 cursor-pointer">Mot de passe oublié?</p>
                    <p className="mt-5">Vous n'avez pas de compte? <span className="text-[#FFD964] text-center">s'inscrire</span></p>
                </div>
            </div>
        </div>
    )
}

export default Login;