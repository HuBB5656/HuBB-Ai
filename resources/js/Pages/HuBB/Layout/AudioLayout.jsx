import React from "react";
import AppBar from "../Components/AppBar";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";
import { Head } from "@inertiajs/react";

function AudioLayout({ children }) {
    return (
        <div className=" w-screen min-h-screen text-xs bg-main-bg text-hot-color font-mono">
            <Head title="Ai" />
            <AppBar />
            <div className="content flex p-2 gap-4">
                <SideBar />
                <div className=" w-full">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default AudioLayout;
