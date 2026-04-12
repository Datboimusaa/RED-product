import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ListingsIcon from "../ui/ListingsIcon.jsx";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";

function MobileSidebar({isOpen, setIsOpen}) {
    const navigate = useNavigate();

    return (
        <aside className={`fixed inset-0 z-50 bg-[url(./assets/bg-image.jpg)] bg-[#494C4F] bg-cover bg-center bg-blend-multiply transition-translate duration-150 flex flex-col
            ${isOpen ? 'translate-x-0': 'translate-x-full' }`}>
            <div className="flex items-center justify-between text-white px-5 mb-5 mt-2">
                <h2 className="text-3xl font-bold">Menu</h2>
                <button onClick={() => setIsOpen(false)}><IoClose size={57} /></button>
            </div>
            <div className="flex flex-col gap-4">
                <button  className="flex items-center gap-4 py-2 text-white cursor-pointer px-5" onClick={() => {navigate('/dashboard'); setIsOpen(false)}}>
                    <RiLayoutMasonryFill size={32} />
                    <span className="text-2xl font-bold">Dashboard</span>
                </button>
                <button  className="flex items-center gap-4 py-2 text-white cursor-pointer px-5" onClick={() => {navigate('/dashboard/listings'); setIsOpen(false)}}>
                    <ListingsIcon size={30} />
                    <span className="text-2xl font-bold">Liste des hôtels</span>
                </button>
            </div>
            <div className="flex items-center justify-between mt-auto">
                <button  className="flex items-center gap-4 py-2 mb-4 text-white cursor-pointer px-5" onClick={() => {navigate('/'); setIsOpen(false)}}>
                    <MdLogout size={32} />
                    <span className="text-2xl font-bold">Se deconnecter</span>
                </button>
            </div>
            
        </aside>
    )
}

export default MobileSidebar