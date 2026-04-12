import { FaArrowLeft } from "react-icons/fa6";
import { CiImageOn } from "react-icons/ci";


function CreateHotelModal({ openModal, setOpenModal }) {
    return (
        <div onClick={() => setOpenModal(false)} className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity  duration-300 ${openModal ? 'bg-black/50' : 'opacity-0 pointer-events-none'}`}>
            <form onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl flex flex-col p-6 w-[95%] max-w-2xl shadow-lg transform transition-all duration-300 delay-150 ${openModal ? "translate-y-0 scale-100" : "translate-y-10 scale-95"}`}>
                <div onClick={() => setOpenModal(false)} className="py-2 flex items-center gap-2"><FaArrowLeft /> <span className="uppercase">Creér un nouveau hôtel</span></div>
                <hr className="border-t border-dashed border-gray-400" />

                <div className="py-2 flex items-center gap-4">
                    <div className="flex flex-col w-full">
                        <label htmlFor="">Nom de l'hôtel</label>
                        <input type="text" className="ps-2 py-2 border border-gray-200 rounded-xl" />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="">Addresse</label>
                        <input type="text" className="ps-2 py-2 border border-gray-200 rounded-xl" />
                    </div>
                </div>
                <div className="py-2 flex items-center gap-4">
                    <div className="flex flex-col w-full">
                        <label htmlFor="">Email</label>
                        <input type="email" className="ps-2 py-2 border border-gray-200 rounded-xl" />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="">Numero de telephone</label>
                        <input type="tel" className="ps-2 py-2 border border-gray-200 rounded-xl" />
                    </div>
                </div>
                <div className="py-2 flex items-center gap-4">
                    <div className="flex flex-col w-full">
                        <label htmlFor="">Prix par nuit</label>
                        <input type="text" className="ps-2 py-2 border border-gray-200 rounded-xl" />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="">Devise</label>
                        <input type="text" className="ps-2 py-2 border border-gray-200 rounded-xl" />
                    </div>
                </div>
                <div className="py-4">
                    <label htmlFor="file-upload" className="w-full flex flex-col h-[100px] cursor-pointer  border border-gray-200 rounded-xl items-center justify-center"><CiImageOn /><span>Ajouter une photo</span></label>
                    <input type="file" name="file-upload" id="file-upload" className="hidden" />
                </div>
                <button className="bg-[#555555] text-white px-4 py-2 rounded-xl self-end cursor-pointer">Enregistrer</button>

            </form>
        </div>
    )
}

export default CreateHotelModal;