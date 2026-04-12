import Header from "./Header";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function DashboardLayout() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="grid md:grid-cols-[80px_1fr] xl:grid-cols-[300px_1fr] h-screen">
            <Sidebar />

            <div className="flex flex-col h-screen overflow-hidden">
                <Header setIsOpen={setIsOpen}/>
                <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
                <div className="flex-1 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout