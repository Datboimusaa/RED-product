import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

function SignUp() {
    const navigate = useNavigate();
    const { register } = useAuth();

    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [status, setStatus] = useState(null);
    const [checked, setChecked] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(null);
        try {
            await register(formData);
            setStatus("success");
            setFormData({ name: '', email: '', password: '' });
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <div className="h-screen bg-[url(./assets/bg-image.jpg)] bg-[#494C4F] bg-cover bg-center bg-blend-multiply flex justify-center overflow-y-auto">
            <div className="flex flex-col items-center w-full">
                <div className="flex items-center gap-2 py-4 mt-10">
                    <img src={logo} alt="Logo Red Product" />
                    <h2 className="font-bold text-xl text-white">RED PRODUCT</h2>
                </div>

                <form onSubmit={handleSubmit} className="w-[90%] md:w-[400px] rounded-sm bg-white py-10 px-10 flex flex-col shadow-lg">
                    <h1 className="mb-4">Inscrivez-vous en tant qu'Admin</h1>

                    {status === "success" && (
                        <div className="bg-green-100 border border-green-500 text-green-700 rounded-lg p-3 mb-5 text-sm">
                            Inscription réussie ! Veuillez vérifier votre boîte mail pour valider votre compte.
                        </div>
                    )}

                    {status === "error" && (
                        <div className="bg-red-100 border border-red-500 text-red-700 rounded-lg p-3 mb-5 text-sm">
                            Une erreur est survenue lors de l'inscription.
                        </div>
                    )}

                    <div className="mb-5">
                        <input type="text" placeholder="Nom" className="py-2 ps-2 border-b border-gray-200 w-full outline-none focus:border-[#494C4F]" name="name" value={formData.name} required onChange={handleChange} />
                    </div>
                    <div className="mb-5">
                        <input type="email" placeholder="Email" className="py-2 ps-2 border-b border-gray-200 w-full outline-none focus:border-[#494C4F]" name="email" value={formData.email} required onChange={handleChange} />
                    </div>
                    <div className="mb-5">
                        <input type="password" placeholder="Mot de passe" className="py-2 ps-2 border-b border-gray-200 w-full outline-none focus:border-[#494C4F]" name="password" value={formData.password} required onChange={handleChange} />
                    </div>
                    <div className="flex items-center gap-4">
                        <input type="checkbox" name="remember" id="accept" required checked={checked} onChange={(e) => { setChecked(e.target.checked) }} />
                        <label htmlFor="accept" className="text-sm">Accepter les termes et la politique</label>
                    </div>
                    <button disabled={!checked} type="submit" className={`w-full py-2 rounded-md mt-10 transition-colors ${!checked
                            ? "bg-gray-300 cursor-not-allowed text-gray-500"
                            : "bg-[#494C4F] text-white hover:bg-black cursor-pointer"
                        }`}>
                        S'inscrire
                    </button>
                </form>

                <div className="mt-5 mb-10 text-white">
                    <p>Vous avez déjà un compte? <span className="text-[#FFD964] cursor-pointer hover:underline font-semibold" onClick={() => navigate("/")}>Se connecter</span></p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
