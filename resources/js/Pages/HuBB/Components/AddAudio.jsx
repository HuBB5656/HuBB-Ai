import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { router, useForm, usePage } from "@inertiajs/react";
import React from "react";

function AddAudio({ status }) {
    const { errors } = usePage().props;
    console.log(status);
    const { data, setData, processing, reset, progress } = useForm({
        title: "",
        artist_id: "",
        cover_image: "",
        audio_url: "",
    });

    const addAudio = async (e) => {
        try {
            e.preventDefault();

            router.post("/store-audios", data, {
                forceFormData: true,
            });
            console.log(data);
        } catch (error) {
            console.error("Error during upload:", error);
            // Handle the error, show a user-friendly message, etc.
        }
    };
    return (
        <div className=" flex flex-col   min-h-80 min-w-[100%] border-b-2 border-r-2 border-b-soft-bg border-r-soft-bg rounded-md">
            <p>ADD Song Here</p>
            {/* {status && ( */}
            <div className="mb-4 font-medium text-sm text-green-600">
                {status}
            </div>
            {/* )} */}
            <form action="" onSubmit={addAudio}>
                <div className="p-2">
                    <InputLabel value={"Title"} className=" text-hot-color" />
                    <TextInput
                        className=" text-hot-color w-[90%] bg-main-bg"
                        name="title"
                        id="title"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                    />
                    <InputError message={errors.title} />
                </div>
                <div className="p-2">
                    <InputLabel value={"Artist"} className=" text-hot-color" />
                    <TextInput
                        className=" text-hot-color w-[90%] bg-main-bg"
                        name="artist_id"
                        value={data.artist_id}
                        onChange={(e) => setData("artist_id", e.target.value)}
                    />
                    <InputError message={errors.artist_id} />
                </div>
                <div className="p-2">
                    <InputLabel
                        value={"Cover Image"}
                        className=" text-hot-color"
                    />
                    <TextInput
                        className=" text-main-bg w-[90%] text-xs bg-cool-color"
                        type="file"
                        name="cover_image"
                        accept="image/*"
                        onChange={(e) =>
                            setData("cover_image", e.target.files[0])
                        }
                    />
                    <InputError message={errors.cover_image} />
                </div>
                <div className="p-2">
                    <InputLabel value={"Audio"} className=" text-hot-color" />
                    <TextInput
                        className=" text-main-bg w-[90%] bg-cool-color"
                        type="file"
                        name="audio_url"
                        accept="audio/*"
                        onChange={(e) =>
                            setData("audio_url", e.target.files[0])
                        }
                    />
                    <InputError message={errors.audio_url} />
                </div>
                <div className="pr-4 items-end">
                    <PrimaryButton className="w-[30%] hover:bg-hot-color hover:text-main-bg m-3">
                        Upload
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
}

export default AddAudio;
