import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import portalSound from '/portal-sfx.mp3'; 

const SoundContext = createContext();

export const SoundProvider = ({ children }) => {
    const [soundOn, setSoundOn] = useState(true);
    const audioRef = useRef(null);

    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio(portalSound);
            audioRef.current.loop = true;
            audioRef.current.volume = 0.4;
            audioRef.current.play().catch(() => {
                console.log("Autoplay blocked. User needs to interact first.");
                setSoundOn(false);
            });
        }}, []);
        
     useEffect(() => {
        if (!audioRef.current) return;
        if (soundOn) {
            audioRef.current.play().catch(() => {});
        } else {
            audioRef.current.pause();
        }
    }, [soundOn]);

    const toggleSound = () => {
        setSoundOn(prev => !prev);
    };

    return (
        <SoundContext.Provider value={{ soundOn, toggleSound }}>
            {children}
        </SoundContext.Provider>
    );
};

export const useSound = () => useContext(SoundContext);