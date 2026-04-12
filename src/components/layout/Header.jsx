import { BiBell } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { RxDotFilled } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Header({ setIsOpen }) {
    const { pathname } = useLocation();
    const routeConfig = {
        "/dashboard": "Dashboard",
        "/dashboard/listings": "Liste des hotels"
    }
    const navigate = useNavigate();

    return (
        <header className="px-5 py-4 border-b border-slate-200">
            <nav className="flex items-center justify-between">
                <h1 className="font-semibold text-xl">{routeConfig[pathname]}</h1>
                <div className="hidden md:flex items-center gap-4">
                    <div className="relative">
                        <input type="text" placeholder="Recherche" className="border rounded-3xl border-gray-200 ps-8 py-2" />
                        <CiSearch className="absolute left-[10px] top-[13px] text-gray-600" />
                    </div>
                    <button className="relative cursor-pointer">
                        <BiBell size={24} />
                        <span className="rounded-md text-xs p-[1.5px] bg-yellow-500 absolute text-white right-[-5px] top-[-10px]">3</span>
                    </button>
                    <button className="relative cursor-pointer">
                        <img src="https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg"
                            alt="User profile picture" className="rounded-full h-[32px] w-[32px] object-contain" />
                        <RxDotFilled size={30} className="bottom-[-4px] right-[-13px] absolute text-green-500" />
                    </button>
                    <button className="cursor-pointer" onClick={() => navigate("/")}>
                        <MdLogout size={24} />
                    </button>
                </div>
                <div className="flex items-center gap-4 md:hidden">
                    <button className="relative cursor-pointer p-4 rounded-xl border border-gray-200">
                        <CiSearch />
                    </button>
                    <button className="cursor-pointer p-4 rounded-xl border border-gray-200" onClick={() => setIsOpen(true)}>
                        <GiHamburgerMenu />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header