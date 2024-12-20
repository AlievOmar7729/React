import { useState,useEffect, useRef } from "react";

function useAudio(url) {
    const audioRef = useRef(new Audio(url));
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [prevVolume, setPrevVolume] = useState(100);

    const audio = audioRef.current;
    const pastVolume = 0;

    const togglePlayPause = () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const seek = (time) => {
        audio.currentTime = time;
        setCurrentTime(time);
    };

    const changeVolume = (vol) => {
        const volumeValue = Math.min(Math.max(vol, 0), 1);
        audio.volume = volumeValue;
        setVolume(volumeValue);
    };

    useEffect(() => {
        const updateTime = () => setCurrentTime(audio.currentTime);
        const onLoadedMetadata = () => setDuration(audio.duration);
        const onEnded = () => {
            setIsPlaying(false)
        }

        audio.addEventListener("timeupdate", updateTime);
        audio.addEventListener("loadedmetadata", onLoadedMetadata);
        audio.addEventListener("ended", onEnded);

        return () => {
            audio.removeEventListener("timeupdate", updateTime);
            audio.removeEventListener("loadedmetadata", onLoadedMetadata);
            audio.removeEventListener('ended', onEnded)
        };
    }, [audio]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "j" || event.key === "J") {
                seek(audio.currentTime - 10);
            }
            if (event.key === "l" || event.key === "L") {
                seek(audio.currentTime + 10);
            }
            if (event.key === " " && audio) {
                togglePlayPause();
            }
            if((event.key === "m" || event.key === "M") && volume > 0){
                setPrevVolume(volume)
                changeVolume(0);
            }
            if((event.key === "m" || event.key === "M") && volume === 0){
                changeVolume(prevVolume);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [audio, isPlaying, seek, volume,prevVolume]);

    return {
        isPlaying,
        currentTime,
        duration,
        volume,
        togglePlayPause,
        seek,
        changeVolume,
    };
}

export default useAudio;
