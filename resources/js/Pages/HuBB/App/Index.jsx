import React from "react";
import AudioLayout from "../Layout/AudioLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { router, useForm } from "@inertiajs/react";

function Index({ response }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        chat: "",
    });

    const handleChat = (e) => {
        e.preventDefault();
        console.log(data);
        router.post("/", data);
    };

    return (
        <AudioLayout>
            {/* Add Songs */}
            <div className="flex justify-center flex-col p-8 gap-16 items-center w-[70%]">
                <main className=" border-x-cool-color rounded-2xl border-x-2 p-5  min-h-[450px] w-[100%]  mb-10">
                    {response && response.content}
                    {/* {response.content} */}
                </main>
                <form
                    action="#"
                    onSubmit={handleChat}
                    method="post"
                    className="flex gap-14 w-full"
                >
                    <input
                        type="text"
                        className=" bg-hot-color w-[75%] rounded-3xl text-main-bg"
                        placeholder="Chat With Me..."
                        name="chat"
                        value={data.chat}
                        onChange={(e) => setData("chat", e.target.value)}
                    />
                    <PrimaryButton>Generate</PrimaryButton>
                </form>
            </div>
        </AudioLayout>
    );
}

export default Index;
