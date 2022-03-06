import React, { useEffect, useRef, useState } from 'react'
import { Container } from './ReciteVercesStyle'
import { Layout, } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
//ICONS:
import { BiArrowBack } from "react-icons/bi";
import { MdForward10, MdForward30, MdReplay10, MdReplay30, MdPlayCircleFilled, MdPauseCircle } from "react-icons/md"
import { IoPlayBackSharp, IoPlayForwardSharp } from "react-icons/io5"

import ayahNumBack from "../../../assets/images/num_bg.png"
import axios from 'axios';
const { Header, Content, Footer } = Layout;



const ReciteVerses = ({ id }) => {
    const [close, setClose] = useState(false)
    const [sura, setSura] = useState(null);
    const [audio, setAudio] = useState(sura?.verses[0]);
    console.log(audio)
    const [isPlaying, setIsPlaying] = useState(true);
    const [duration, setDuration] = useState(null)
    const [currentTime, setCurrentTime] = useState(0)
    // const [state, setState] = useState({
    //     isPlaying: true,
    // })
    const store = useSelector(store => store.surahReducer);
    const dispatch = useDispatch();
    //REFS:
    const audioPlayer = useRef(null);
    const progressbarRef = useRef(null);

    const goHome = () => {
        dispatch({
            type: "MOVE", payload: { id: null }
        })
    }

    const toggle = () => {
        setClose(!close)
    };

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`https://api.quran.sutanlab.id/surah/${id}`)
            console.log(data.data)
            setSura(data.data);
            console.log("duration", duration);

        } catch (error) {
            console.log(error);
        }
    }
    const Audio = (index) => {

        const chosenAudio = sura?.verses[index]?.audio?.primary
        console.log(chosenAudio)
        setAudio(chosenAudio)
        setIsPlaying(false);
    }
    const player = () => {
        if (!isPlaying) {
            audioPlayer.current.play();
        } else {
            audioPlayer.current.pause();
        }
    }
    const togglePlayer = () => {
        setIsPlaying(!isPlaying)
        console.log(isPlaying);
    }

    const timeCalculator = (time) => {
        if (time < 10) {
            return `0:${time}`;
        } else {
            return time;
        }
    }
    const test = () => {
        console.log(audioPlayer.current.isplaying);
    }

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMins = minutes < 10 ? `0${minutes}` : minutes;
        const seconds = Math.floor(secs % 60);
        const returnedSecs = seconds < 10 ? `0${seconds}` : "seconds";
        return `${returnedMins}:${returnedSecs}`;


    }

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        player();
    }, [isPlaying]);

    useEffect(() => {
        const seconds = Math.floor(audioPlayer?.current?.duration);
        setDuration(seconds)
        console.log('seconds', seconds)
        progressbarRef.current.max = seconds;
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])


    // const { surah_name, surah_name_arabic, surah_verse_count, verses } = sura;

    return (
        <Container>
            <Layout className='layout'>
                <Header
                    className=" header"
                    style={{ padding: 0 }}>

                    <BiArrowBack className='home' onClick={goHome} />
                    <h1 style={{ fontSize: "3rem", color: "#F7B801", margin: "0 auto" }}>{sura?.name.transliteration.en}</h1>

                </Header>
                <Content
                    className=" content"
                    style={{
                        padding: 24,
                        minHeight: 280,
                    }}>
                    {sura?.verses.map((verse, index) => (
                        <div key={index} className='align__center oyahDiv' onClick={() => Audio(index)}>
                            <p style={{ display: "flex", justifyContent: "flex-end" }}>{verse.text.arab}</p>
                            <div>
                                <div style={{ backgroundImage: `url(${ayahNumBack})` }} className="center ayahNumBack">{index + 1}</div>
                            </div>
                        </div>
                    ))}
                </Content>
                <Footer className='footer'>
                    <div className='center controls'>
                        <MdReplay10 style={{ fontSize: "50px" }} className="btn" />
                        <IoPlayBackSharp className="btn" />
                        {isPlaying ? <MdPlayCircleFilled style={{ fontSize: "80px" }} className="btn" onClick={togglePlayer} />
                            : <MdPauseCircle style={{ fontSize: "80px" }} className="btn" onClick={togglePlayer} />
                        }
                        <IoPlayForwardSharp className="btn" />
                        <MdForward10 style={{ fontSize: "50px" }} className="btn" onClick={test} />
                    </div>
                    <audio ref={audioPlayer} src={audio} autoPlay loop={false} muted={false} preload="metadata" />
                    <div style={{ width: "100%" }} className="center" >
                        <p>{calculateTime(currentTime)}</p>
                        <input type="range" className='slider' ref={progressbarRef} />
                        <p>{(duration && !NaN(duration)) && calculateTime(duration)}</p>
                    </div>
                </Footer>
            </Layout>
        </Container>
    )
}

export default ReciteVerses;