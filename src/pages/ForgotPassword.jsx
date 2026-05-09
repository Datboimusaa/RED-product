import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import API from "../services/API"
import { useState } from "react";


function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('')
    const handleChange = (e) => setEmail(e.target.value);
    const [loading, setLoading] = useState(false)
    const handleSubmit = async(e)=> {
        e.preventDefault();
        try {
            if(!email.trim() || loading) return;
            setLoading(true)
            const res = await API.post('/auth/forgot-password', { email });
            setEmail('');
            setStatus('success');
        } catch (error) {
            console.error(error)
            setStatus('failed')
        } finally{
            setLoading(false)
        }
    };
    


    return (
        <div className="h-screen bg-[url(./assets/bg-image.jpg)] bg-[#494C4F] bg-cover bg-center bg-blend-multiply
                    flex justify-center">
            <div className="flex flex-col items-center px-5">
                <div className="flex items-center gap-2 py-4 mt-10">
                    <img src={logo} alt="Logo Red Product" />
                    <h2 className="font-bold text-xl text-white">RED PRODUCT</h2>
                </div>
                <form onSubmit={handleSubmit} className="w-[100%] rounded-sm md:w-[400px] bg-white py-10 px-10 flex flex-col">
                    <h1 className="mb-5 font-semibold">Mot de passe oublié?</h1>
                    <p className="text-sm mb-5">Entrez votre adresse e-mail ci-dessous et nous vous envoyons des instructions sur la façon de modifier votre mot de passe.</p>
                    <div className="mb-5">
                        <input type="email" value={email} onChange={handleChange} placeholder="Email" className="py-2 ps-2 border-b border-gray-200 w-full" />
                    </div>
                    {status === "success" && (<div className="py-4 p-2 bg-green-200 text-green-500 border border-green-500">
                        <p>Si l'email existe, un mail a ete envoyé</p>
                    </div>)}

                    {status === "failed" && (<div className="py-4 p-2 bg-red-200 text-red-500 border border-red-500">
                        <p>Une erreur est survenue, veuillez reessayer</p>
                    </div>)}
                    <button disabled={loading}  className={`w-full py-2 ${loading ? 'bg-gray-200 text-gray-700' : 'bg-[#494C4F] text-white'} rounded-md mt-10 cursor-pointer mx-auto`}> {loading ? "Envoi..." : "Envoyer"} </button>
                </form>
                <div className="mt-5 text-white">
                    <p>Revenir à la <Link to="/" className="text-[#FFD964] cursor-pointer hover:text-underline">connexion</Link></p>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword