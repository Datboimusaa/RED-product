import { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { CiCircleCheck } from "react-icons/ci";
import { MdError } from "react-icons/md";
import logo from "../assets/logo.svg";
import API from "../services/API";

export default function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  const [status, setStatus] = useState("loading");

  const hasVerified = useRef(false);

  useEffect(() => {
    if (!token || hasVerified.current) return;

    hasVerified.current = true;

    const verify = async () => {
      try {
        await API.get(`/auth/verify-email?token=${token}`);

        setStatus("success");

        setTimeout(() => {
          navigate("/");
        }, 5000);

      } catch (error) {
        setStatus("error");
      }
    };

    verify();
  }, [token, navigate]);

  return (
    <section className="h-screen bg-[url(./assets/bg-image.jpg)] bg-[#494C4F] bg-cover bg-center bg-blend-multiply flex flex-col items-center py-10">

      <div className="flex items-center gap-2 py-4 mt-10">
        <img src={logo} alt="Logo Red Product" />
        <h2 className="font-bold text-xl text-white">RED PRODUCT</h2>
      </div>

      <div className="bg-white p-4 py-8 w-sm flex items-center rounded-sm justify-center flex-col">

        {status === "loading" && (
          <>
            <h2 className="text-xl font-bold">Verification...</h2>
            <p>Veuillez patienter</p>
          </>
        )}

        {status === "success" && (
          <>
            <CiCircleCheck size={100} className="text-green-500" />
            <h2 className="text-xl font-bold">Verification de l'email</h2>
            <p>Email vérifié avec succès</p>
          </>
        )}

        {status === "error" && (
          <>
            <MdError size={100} className="text-red-500" />
            <h2 className="text-xl font-bold text-red-500">Erreur</h2>
            <p>Lien invalide ou expiré</p>
          </>
        )}

      </div>
    </section>
  );
}