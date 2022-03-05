import React, { useEffect, useRef } from 'react'

const Translation = () => {

    const audioRef = useRef(null);

    useEffect(() => {
        console.log(Math.floor(audioRef.current.duration))
    }, [audioRef?.current?.loadedmetadata, audioRef?.current?.readyState])

    return (
        <audio src='https://cdn.alquran.cloud/media/audio/ayah/ar.alafasy/1' ref={audioRef}></audio>
    )
}

export default Translation