import { useState } from "react";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await login(email, password);
            navigate("/dashboard");
        } catch (err) {
            console.error(err);
            setError("Email ou mot de passe incorrect.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen bg-[url(./assets/bg-image.jpg)] bg-[#494C4F] bg-cover bg-center bg-blend-multiply flex justify-center">
            <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 py-4 mt-10">
                    <img src={logo} alt="Logo Red Product" />
                    <h2 className="font-bold text-xl text-white">RED PRODUCT</h2>
                </div>

                <form onSubmit={handleLogin} className="w-[100%] md:w-[400px] bg-white py-10 px-10 flex flex-col rounded-sm shadow-lg">
                    <h1 className="text mb-5">Connectez-vous en tant qu'Admin</h1>

                    {error && (
                        <div className="bg-red-100 border border-red-500 text-red-700 p-3 rounded mb-5 text-sm">
                            {error}
                        </div>
                    )}

                    <div className="mb-5">
                        <input
                            type="email"
                            placeholder="Email"
                            className="py-2 ps-2 border-b border-gray-200 w-full outline-none focus:border-[#494C4F]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <input
                            type="password"
                            placeholder="Mot de passe"
                            className="py-2 ps-2 border-b border-gray-200 w-full outline-none focus:border-[#494C4F]"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <input type="checkbox" name="remember" id="remember" className="cursor-pointer"/>
                        <label htmlFor="remember" className="cursor-pointer">Gardez-moi connecté</label>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`bg-[#494C4F] text-white w-full py-2 rounded-md mt-10 transition-opacity ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-black'}`}
                    >
                        {loading ? "Connexion en cours..." : "Se connecter"}
                    </button>
                </form>

                <div className="text-white text-center">
                    <p className="text-[#FFD964] mt-5 cursor-pointer hover:underline" onClick={() => navigate("/forgot-password")}>
                        Mot de passe oublié ?
                    </p>
                    <p className="mt-5">
                        Vous n'avez pas de compte ? <span className="text-[#FFD964] cursor-pointer hover:underline" onClick={() => navigate("/signup")}>S'inscrire</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
