import logo from "../../assets/logo.svg";
import ListingsIcon from "../ui/ListingsIcon.jsx";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { RxDotFilled } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext.jsx";


function Sidebar() {
    const { user } = useAuth();
    return (
        <aside className="h-screen bg-[url(./assets/bg-image.jpg)] bg-[#494C4F] bg-cover bg-center bg-blend-multiply hidden md:flex flex-col">
            <div className="flex items-center gap-2 py-4 px-5">
                <img src={logo} alt="Logo Red Product" />
                <h2 className="font-bold text-xl text-white hidden xl:inline">RED PRODUCT</h2>
            </div>
            <div className="flex flex-col">
                <h4 className="text-white text-sm py-2 px-5 hidden xl:inline">Principal</h4>
                <div className="flex flex-col gap-2">
                    <NavLink to="/dashboard" className="flex items-center gap-4 py-2 text-white cursor-pointer px-5" end>
                        <RiLayoutMasonryFill size={27} />
                        <span className="text-base font-bold hidden xl:inline">Dashboard</span>
                    </NavLink>
                    <NavLink to="listings" className="flex items-center gap-4 py-2 text-white cursor-pointer px-5">
                        <ListingsIcon size={27}/>
                        <span className="text-base font-bold hidden xl:inline">Liste des hôtels</span>
                    </NavLink>
                </div>
            </div>
            <div className="flex items-center gap-2 border-t border-slate-50 py-4 mt-auto px-5">
                <img src="https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg"
                    alt="User profile picture" className="rounded-full h-[42px] w-[42px] object-contain"/>
                <div className="hidden xl:inline">
                    <h1 className="text-white font-bold">{user?.name || "Utilisateur"}</h1>
                    <h2 className="text-slate-100 text-xs"><RxDotFilled size={20} className="text-green-500 inline"/>en ligne</h2>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
