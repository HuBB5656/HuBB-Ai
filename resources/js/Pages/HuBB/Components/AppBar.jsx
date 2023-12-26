import React from "react";

function AppBar() {
    return (
        <div className="flex justify-around items-center px-4 h-14 border-b-2 border-cool-color rounded-md">
            <div className="flex gap-5 items-center w-1/4">
                <img
                    src="https://static.voices.com/wp-content/uploads/2018/07/MR-2116-Which-microphones-are-best-1024x556.jpg"
                    alt=""
                    className="w-14 h-10 rounded-[50%] "
                />
                <h1 className="gap-10 font-bold">HuBB AI</h1>
            </div>
            <div className="w-1/2 flex justify-center place-items-center">
                <input
                    type="text"
                    className=" bg-hot-color w-[75%] rounded-3xl text-main-bg"
                    placeholder="Search Here..."
                />
            </div>
            <div className="w-1/4 flex justify-end gap-3">
                <a
                    href="#"
                    className=" bg-hot-color text-main-bg px-2 py-1 font-semibold rounded-3xl"
                >
                    Register
                </a>
                <a
                    href="#"
                    className=" bg-hot-color text-main-bg px-2 py-1 font-semibold rounded-3xl"
                >
                    LogIn
                </a>
            </div>
        </div>
    );
}

export default AppBar;
