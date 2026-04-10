import Cards from "../components/ui/Cards"
import { FaPlus } from "react-icons/fa6";

function Listings() {
    return (
        <section className="bg-slate-50">
            <div className="bg-white py-5 px-10 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span className="text-2xl font-light">Hôtels</span> <span className="font-light text-2xl text-gray-400">8</span>
                    </div>
                    <button className="flex items-center gap-2 border border-[#AEAEAE] rounded-xl px-4 py-2 cursor-pointer hover:bg-[#AEAEAE] hover:text-white transition duration-150">
                        <FaPlus />
                        Creer un nouvel hôtel
                    </button>
                </div>
            </div>
            <div className="px-10 py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <Cards image={'https://freesvg.org/img/Placeholder.png'}
                        address={'Nord'}
                        name={'Hotel name placeholder'}
                        price={'5000 Frs par nuit'} />
                <Cards image={'https://freesvg.org/img/Placeholder.png'}
                        address={'Nord'}
                        name={'Hotel name placeholder'}
                        price={'5000 Frs par nuit'} />
                <Cards image={'https://freesvg.org/img/Placeholder.png'}
                        address={'Nord'}
                        name={'Hotel name placeholder'}
                        price={'5000 Frs par nuit'} />
                <Cards image={'https://freesvg.org/img/Placeholder.png'}
                        address={'Nord'}
                        name={'Hotel name placeholder'}
                        price={'5000 Frs par nuit'} />
                <Cards image={'https://freesvg.org/img/Placeholder.png'}
                        address={'Nord'}
                        name={'Hotel name placeholder'}
                        price={'5000 Frs par nuit'} />
                <Cards image={'https://freesvg.org/img/Placeholder.png'}
                        address={'Nord'}
                        name={'Hotel name placeholder'}
                        price={'5000 Frs par nuit'} />
                <Cards image={'https://freesvg.org/img/Placeholder.png'}
                        address={'Nord'}
                        name={'Hotel name placeholder'}
                        price={'5000 Frs par nuit'} />
                <Cards image={'https://freesvg.org/img/Placeholder.png'}
                        address={'Nord'}
                        name={'Hotel name placeholder'}
                        price={'5000 Frs par nuit'} />
            </div>

        </section>
    );
}

export default Listings;
