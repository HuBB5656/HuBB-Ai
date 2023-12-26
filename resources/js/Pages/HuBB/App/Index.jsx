import React from "react";
import AudioLayout from "../Layout/AudioLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { router, useForm, usePage } from "@inertiajs/react";
import TextArea from "../../../Components/TextArea";

function Index({ response }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        chat: "",
    });

    const handleChat = (e) => {
        e.preventDefault();
        console.log(data);
        router.post("/", data);
        e.reset();
    };

    return (
        <AudioLayout>
            {/* Add Songs */}
            <div className="flex justify-center flex-col p-8 gap-16 items-center max-md:w-full w-[60%]">
                <main className=" border-x-cool-color rounded-2xl border-x-2 p-5  h-3/4 w-[100%] max-md:mb-0  mb-10">
                    {response && response.content}
                </main>
                <form
                    //    / action="#"
                    onSubmit={handleChat}
                    // method="post"
                    className="flex gap-14 max-md:gap-2 w-full"
                >
                    <TextArea
                        type="text"
                        className=" bg-hot-color  w-[90%] rounded-3xl text-main-bg"
                        placeholder="Chat With Me..."
                        name="chat"
                        value={data.chat}
                        onChange={(e) => setData("chat", e.target.value)}
                        // onKeyPress={handleChat}
                    />
                    <PrimaryButton className=" bg-hot-color">Go</PrimaryButton>
                </form>
            </div>
        </AudioLayout>
    );
}

export default Index;
