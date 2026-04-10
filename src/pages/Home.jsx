import FeatureCard from "../components/ui/FeatureCard";
import { IoMailOpen } from "react-icons/io5";
import { MdLocalParking } from "react-icons/md";
import { HiUsers } from "react-icons/hi";


function Home() {
  return (
    <section className="bg-slate-50 min-h-full">
      <div className="bg-white px-10 py-5 border-b border-gray-200">
        <h1 className="text-2xl md:text-3xl font-light">Bienvenue sur RED Product</h1>
        <p className="text-zinc-700">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-10 py-10 gap-10">
        <FeatureCard icon={<IoMailOpen size={64} className="rounded-full text-white bg-[#A88ADD] p-5 "/>} stat={125} name={'Formulaires'} children={'je ne sais pas quoi mettre'}/>
        <FeatureCard icon={<MdLocalParking size={64} className="rounded-full text-white bg-[#0CC2AA] p-5"/>} stat={40} name={'Messages'} children={'je ne sais pas quoi mettre'}/>
        <FeatureCard icon={<HiUsers size={64} className="rounded-full text-white bg-[#FCC100] p-5"/>} stat={600} name={'Utilisateurs'} children={'je ne sais pas quoi mettre'}/>
        <FeatureCard icon={<IoMailOpen size={64} className="rounded-full text-white bg-[#F90000] p-5"/>} stat={25} name={'E-mails'} children={'je ne sais pas quoi mettre'}/>
        <FeatureCard icon={<MdLocalParking size={64} className="rounded-full text-white bg-[#9C27B0] p-5"/>} stat={40} name={'Hotels'} children={'je ne sais pas quoi mettre'}/>
        <FeatureCard icon={<HiUsers size={64} className="rounded-full text-white bg-[#1565C0] p-5"/>} stat={2} name={'Entités'} children={'je ne sais pas quoi mettre'}/>
      </div>
    </section>
  );
}

export default Home;
