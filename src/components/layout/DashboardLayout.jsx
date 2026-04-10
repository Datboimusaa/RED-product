import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
    return (
        <div className="grid md:grid-cols-[250px_1fr] xl:grid-cols-[300px_1fr] h-screen">
            <Sidebar />

            <div className="flex flex-col h-screen overflow-hidden">
                <Header />

                <div className="flex-1 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout