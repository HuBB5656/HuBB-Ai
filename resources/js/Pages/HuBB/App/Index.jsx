import React from "react";
import AudioLayout from "../Layout/AudioLayout";
import AddAudio from "../Components/AddAudio";

function Index() {
    return (
        <AudioLayout>
            {/* Add Songs */}
            <div className="grid grid-cols-3 gap-4 p-2">
                <AddAudio />
            </div>
        </AudioLayout>
    );
}

export default Index;
