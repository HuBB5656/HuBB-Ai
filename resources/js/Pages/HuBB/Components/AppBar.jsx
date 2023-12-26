import React from "react";

function AppBar() {
    return (
        <div className=" mx-14 flex justify-around items-center max-md:p-1 max-md:justify-between max-md:mx-1 px-4 h-14 border-b-2 border-cool-color rounded-md">
            <div className="flex gap-5 items-center w-1/4">
                <img
                    src="https://coindoo.com/wp-content/uploads/2020/05/AI-Trading-System.jpeg"
                    alt=""
                    className=" w-[50%] h-12 rounded-md"
                />
                <h1 className="gap-10 font-bold">HuBB AI</h1>
            </div>
            {/* <div className="w-1/2 flex justify-center place-items-center max-md:hidden">
                <input
                    type="text"
                    className=" bg-hot-color w-[75%] rounded-3xl text-main-bg"
                    placeholder="Search Here..."
                />
            </div> */}
            <div className="w-[50%] flex justify-end gap-3">
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
