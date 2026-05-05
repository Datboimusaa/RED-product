import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import API from "../services/API"

function ResetPassword() {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (password !== confirmPassword) {
                setStatus('mismatch');
                setTimeout(() => setStatus(''), 7000);
                return;
            }

            const res = await API.post("/auth/reset-password", { token, password });

            setStatus('success');
            setTimeout(() => { setStatus(''); navigate('/') }, 7000);

        } catch (error) {
            console.error(error);
            setStatus('failed');
            setTimeout(() => setStatus(''), 7000);
        }
    };

    return (
        <section className="h-screen bg-[url(./assets/bg-image.jpg)] bg-[#494C4F] bg-cover bg-center bg-blend-multiply flex flex-col items-center">
            <div className="flex items-center gap-2 py-4 mt-10">
                <img src={logo} alt="Logo Red Product" />
                <h2 className="font-bold text-xl text-white">RED PRODUCT</h2>
            </div>
            <form onSubmit={handleSubmit} className="w-[100%] md:w-[400px] bg-white py-10 px-10 flex flex-col">
                <h1 className="mb-4">Reinitialisez votre mot de passe</h1>

                <div className="mb-5">
                    <input type="password" placeholder="Nouveau mot de passe" className="py-2 ps-2 border-b border-gray-200 w-full" name="password" value={password} required onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className="mb-2">
                    <input type="password" placeholder="Confirmer le mot de passe" className="py-2 ps-2 border-b border-gray-200 w-full" name="password" value={confirmPassword} required onChange={(e) => { setConfirmPassword(e.target.value) }} />
                </div>

                {status === "success" &&
                    <div className="bg-green-200 border text-green-500 border-green-500 rounded-xl p-2">
                        <p className="py-2">Mot de passe modifié avec succes</p>
                    </div>}

                {status === "mismatch" && 
                    <div className="bg-red-200 border text-red-500 border-red-500 rounded-xl p-2">
                        <p className="py-2">Les mots de passes doivent correspondre</p>
                    </div>
                }

                {status === "failed" && 
                    <div className="bg-red-200 border text-red-500 border-red-500 rounded-xl p-2">
                        <p className="py-2">une erreur est survenue</p>
                    </div>
                }

                <button type="submit" className="bg-[#494C4F] text-white w-full py-2 rounded-md mt-10 cursor-pointer mx-auto">Reinitialiser</button>
            </form>

        </section>
    )
}

export default ResetPassword