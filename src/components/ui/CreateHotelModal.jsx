import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { CiImageOn } from "react-icons/ci";
import { useHotels } from "../../contexts/HotelsContext";

function CreateHotelModal({ openModal, setOpenModal }) {
    const { createHotel } = useHotels();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [pricePerNight, setPricePerNight] = useState('');
    const [currency, setCurrency] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!openModal) {
            setError('');
            setSubmitting(false);
            setName('');
            setAddress('');
            setEmail('');
            setNumber('');
            setPricePerNight('');
            setCurrency('');
            setImageFile(null);
        }
    }, [openModal]);

    const resetForm = () => {
        setName('');
        setAddress('');
        setEmail('');
        setNumber('');
        setPricePerNight('');
        setCurrency('');
        setImageFile(null);
        setError('');
    };

    const handleFileChange = (event) => {
        setImageFile(event.target.files?.[0] || null);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        if (!name || !address || !email || !number || !pricePerNight || !currency || !imageFile) {
            setError('Veuillez remplir tous les champs et ajouter une image.');
            return;
        }

        const formData = new FormData();
        formData.append('name', name.trim());
        formData.append('address', address.trim());
        formData.append('email', email.trim());
        formData.append('number', number.trim());
        formData.append('pricePerNight', pricePerNight.trim());
        formData.append('currency', currency.trim());
        formData.append('image', imageFile);

        setSubmitting(true);
        const hotel = await createHotel(formData);
        setSubmitting(false);

        if (hotel) {
            resetForm();
            setOpenModal(false);
        } else {
            setError("Impossible de créer l'hôtel. Réessayez.");
        }
    };

    return (
        <div onClick={() => setOpenModal(false)} className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${openModal ? 'bg-black/50' : 'opacity-0 pointer-events-none'}`}>
            <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl flex flex-col p-6 w-[95%] max-w-xl sm:max-w-2xl shadow-lg transform transition-all duration-300 delay-150 ${openModal ? "translate-y-0 scale-100" : "translate-y-10 scale-95"}`}>
                <div className="py-2 flex items-center gap-2">
                    <button type="button" onClick={() => setOpenModal(false)} className="text-gray-600 hover:text-black">
                        <FaArrowLeft />
                    </button>
                    <span className="uppercase">Créer un nouveau hôtel</span>
                </div>
                <hr className="border-t border-dashed border-gray-400" />

                <div className="py-2 flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col w-full">
                            <label htmlFor="hotel-name">Nom de l'hôtel</label>
                            <input id="hotel-name" value={name} onChange={(e) => setName(e.target.value)} type="text" className="ps-2 py-2 border border-gray-200 rounded-xl" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="hotel-address">Adresse</label>
                            <input id="hotel-address" value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="ps-2 py-2 border border-gray-200 rounded-xl" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col w-full">
                            <label htmlFor="hotel-email">Email</label>
                            <input id="hotel-email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="ps-2 py-2 border border-gray-200 rounded-xl" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="hotel-number">Numéro de téléphone</label>
                            <input id="hotel-number" value={number} onChange={(e) => setNumber(e.target.value.replace(/\s/g, ''))} type="tel" className="ps-2 py-2 border border-gray-200 rounded-xl" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col w-full">
                            <label htmlFor="hotel-price">Prix par nuit</label>
                            <input id="hotel-price" value={pricePerNight} onChange={(e) => setPricePerNight(e.target.value)} type="text" className="ps-2 py-2 border border-gray-200 rounded-xl" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="hotel-currency">Devise</label>
                            <select
                                id="hotel-currency"
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                                className="ps-2 py-2 border border-gray-200 rounded-xl">
                                <option value="XOF" default>F CFA (XOF)</option>
                                <option value="EUR">Euro (€)</option>
                                <option value="USD">Dollar ($)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="py-4">
                    <label htmlFor="file-upload" className="w-full flex flex-col h-[100px] cursor-pointer border border-gray-200 rounded-xl items-center justify-center hover:bg-slate-50 transition">
                        <CiImageOn />
                        <span>{imageFile ? imageFile.name : 'Ajouter une photo'}</span>
                    </label>
                    <input id="file-upload" accept="image/*" type="file" onChange={handleFileChange} className="hidden" />
                </div>

                {error && <p className="text-sm text-red-600 mb-3">{error}</p>}

                <button type="submit" disabled={submitting} className="bg-[#555555] text-white px-4 py-2 rounded-xl self-end cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                    {submitting ? 'Enregistrement...' : 'Enregistrer'}
                </button>
            </form>
        </div>
    )
}

export default CreateHotelModal;