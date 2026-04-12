import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";


function ForgotPassword() {
    const navigate = useNavigate();

    return (
        <div className="h-screen bg-[url(./assets/bg-image.jpg)] bg-[#494C4F] bg-cover bg-center bg-blend-multiply
                    flex justify-center">
            <div className="flex flex-col items-center px-5">
                <div className="flex items-center gap-2 py-4 mt-10">
                    <img src={logo} alt="Logo Red Product" />
                    <h2 className="font-bold text-xl text-white">RED PRODUCT</h2>
                </div>
                <form className="w-[100%] md:w-[400px] bg-white py-10 px-10 flex flex-col">
                    <h1 className="mb-5 font-semibold">Mot de passe oublié?</h1>
                    <p className="text-sm mb-5">Entrez votre adresse e-mail ci-dessous et nous vous envoyons des instructions sur la façon de modifier votre mot de passe.</p>
                    <div className="mb-5">
                        <input type="email" placeholder="Email" className="py-2 ps-2 border-b border-gray-200 w-full" />
                    </div>
                    <button className="bg-[#494C4F] text-white w-full py-2 rounded-md mt-10 cursor-pointer mx-auto">Envoyer</button>
                </form>
                <div className="mt-5 text-white">
                    <p>Revenir à la <a className="text-[#FFD964] cursor-pointer" onClick={() => navigate("/")}>connexion</a></p>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword