import React from "react";
import useAudio from "../hooks/useAudio";

function AudioPlayer() {
    const {
        isPlaying,
        currentTime,
        duration,
        volume,
        togglePlayPause,
        seek,
        changeVolume,
    } = useAudio("https://prod-1.storage.jamendo.com/?trackid=2217092&format=mp31&");

    return (
        <div>
                <p>
                    Час: {currentTime.toFixed(0)} / {duration.toFixed(0)} сек
                </p>
                <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={(e) => seek(Number(e.target.value))}
                />
            <button id="button-pause" onClick={togglePlayPause}>
                {isPlaying ? "⏸️ " : "▶️"}
            </button>
            <div>
                <p >Гучність: {Math.round(volume * 100)}%</p>
                <input id="volume"
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={(e) => changeVolume(Number(e.target.value))}
                />
            </div>
        </div>
    );
}

export default AudioPlayer;
