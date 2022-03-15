import React, { useEffect, useRef, useState } from 'react'
import { Container } from './ReciteVercesStyle'
import { Layout, } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
//ICONS:
import { BiArrowBack } from "react-icons/bi";
import { MdForward10, MdReplay10, MdPlayCircleFilled, MdPauseCircle, MdOutlineRepeatOne, MdSpeed } from "react-icons/md"
import { IoPlayBackSharp, IoPlayForwardSharp } from "react-icons/io5"

import ayahNumBack from "../../../assets/images/num_bg.png"
import axios from 'axios';
const { Header, Content, Footer } = Layout;



const ReciteVerses = ({ id }) => {

    const [sura, setSura] = useState(null);
    const [audio, setAudio] = useState(sura?.verses[0]);
    const [surahid, setSurahId] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [showModal, setShowModal] = useState(false);
    const [ended, setEnded] = useState(null)
    const [controls, setControls] = useState({
        loop: false,
        speed: 1,
    })
    const [speed, setSpeed] = useState({
        half: false,
        threeforth: false,
        one: false,
        onetventyfive: false,
        onehalf: false,

    })
    const store = useSelector(store => store.surahReducer);
    const dispatch = useDispatch();
    //REFS:
    const audioPlayer = useRef();
    const progressbarRef = useRef();
    const animationRef = useRef();

    const goHome = () => {
        dispatch({
            type: "MOVE", payload: { id: null }
        })
    }

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
    const Audio = async (index) => {
        const chosenAudio = await sura?.verses[index]?.audio?.primary
        setSurahId(index);
        setAudio(chosenAudio)
        animationRef.current = requestAnimationFrame(whilePlaying);
        setIsPlaying(false);

    }

    const nextAyah = () => {
        setSurahId(surahid + 1);
        const chosenAudio = sura?.verses[surahid]?.audio?.primary;
        setAudio(chosenAudio);
        setIsPlaying(false);
    }
    const previousAyah = () => {
        setSurahId(surahid - 1);
        const chosenAudio = sura?.verses[surahid]?.audio?.primary;
        setAudio(chosenAudio);
        setIsPlaying(false);
    }

    const togglePlayer = () => {
        setIsPlaying(!isPlaying)
        console.log(isPlaying);
        if (isPlaying) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    }

    const whilePlaying = () => {
        progressbarRef.current.value = audioPlayer.current.currentTime;
        onCurrentTimeChange();
        animationRef.current = requestAnimationFrame(whilePlaying);

    }

    const onProgressChange = () => {
        audioPlayer.current.currentTime = progressbarRef.current.value;
        onCurrentTimeChange();
    }

    const onCurrentTimeChange = () => {
        progressbarRef.current.style.setProperty('--seek-before-width', `${progressbarRef.current.value / duration * 100} %`)
        setCurrentTime(progressbarRef.current.value);
    }

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMins = minutes < 10 ? `0${minutes}` : minutes;
        const seconds = Math.floor(secs % 60);
        const returnedSecs = seconds < 10 ? `0${seconds}` : seconds;
        return `${returnedMins}:${returnedSecs}`;
    }

    const backTen = () => {
        progressbarRef.current.value = Number(progressbarRef.current.value - 10);
        onProgressChange();
    }
    const forwardTen = () => {
        progressbarRef.current.value = Number(progressbarRef.current.value) + 10;
        onProgressChange();
    }

    const getSpeed = () => {
        setShowModal(!showModal)
    }
    const handleSpeed = ({ target }) => {
        setShowModal(false)
        const chosenValue = target.id;
        console.log(target)
        setSpeed(() => ({ [target.name]: true }));
        audioPlayer.current.playbackRate = `${chosenValue}`

    }

    const handleOnEnd = () => {
        setSurahId(surahid + 1);
        const chosenAudio = sura?.verses[surahid]?.audio?.primary;
        setAudio(chosenAudio);
        setIsPlaying(false);
    }

    useEffect(() => {
        fetchData();
    }, [])
    console.log("surahid:", surahid)

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds)
        console.log('seconds', seconds)
        progressbarRef.current.max = seconds;
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState, surahid])

    const { half, threeforth, one, onetventyfive, onehalf } = speed;

    return (
        <Container loop={controls.loop} speed={controls.speed} showModal={showModal}>
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
                            <p style={{ display: "flex", justifyContent: "flex-end", fontSize: "25px", zIndex: "2", filter: "brightness(210%) !important" }}>{verse.text.arab}</p>
                            <div>
                                <div style={{ backgroundImage: `url(${ayahNumBack})` }} className="center ayahNumBack">{index + 1}</div>
                            </div>
                        </div>
                    ))}
                </Content>
                <Footer className='footer'>
                    <div className='center controls'>
                        <div>
                            <MdSpeed className='speedbtn' onClick={getSpeed} />
                            <div className='speedModal'>
                                <label for="0.5" onClick={handleSpeed} className="align__center label">
                                    <input type="radio" id='0.5' name="half" checked={half} />
                                    <p style={{ fontSize: "20px" }} >0.5x</p>
                                </label>
                                <label for="0.75" onClick={handleSpeed} className="align__center label">
                                    <input type="radio" id='0.75' name="threeforth" checked={threeforth} />
                                    <p style={{ fontSize: "20px" }} >0.75x</p>
                                </label>
                                <label for="1" onClick={handleSpeed} className="align__center label">
                                    <input type="radio" id='1' name="one" checked={one} />
                                    <p style={{ fontSize: "20px" }} >1x</p>
                                </label>
                                <label for="1.25" onClick={handleSpeed} className="align__center label">
                                    <input type="radio" id='1.25' name="onetventyfive" checked={onetventyfive} />
                                    <p style={{ fontSize: "20px" }} >1.25x</p>
                                </label>
                                <label for="1.5" onClick={handleSpeed} className="align__center label">
                                    <input type="radio" id='1.5' name="onehalf" checked={onehalf} />
                                    <p style={{ fontSize: "20px" }} >1.5x</p>
                                </label>

                            </div>
                        </div>
                        <MdReplay10 style={{ fontSize: "50px" }} className="btn backforward10" onClick={backTen} />
                        <IoPlayBackSharp className="btn" onClick={previousAyah} />
                        {isPlaying ? <MdPlayCircleFilled style={{ fontSize: "80px" }} className="btn playPause" onClick={togglePlayer} />
                            : <MdPauseCircle style={{ fontSize: "80px" }} className="btn playPause" onClick={togglePlayer} />
                        }
                        <IoPlayForwardSharp className="btn" onClick={nextAyah} />
                        <MdForward10 style={{ fontSize: "50px" }} className="btn backforward10" onClick={forwardTen} />
                        <MdOutlineRepeatOne className="btn repeatbtn" onClick={() => setControls((prevState) => ({ ...prevState, loop: !controls.loop }))} />
                    </div>
                    <audio onEnded={handleOnEnd} ref={audioPlayer} src={audio} autoPlay loop={controls.loop} muted={false} preload="metadata" />
                    <div style={{ width: "100%" }} className="center sliderControls" >
                        <p>{calculateTime(currentTime)}</p>
                        <input type="range" className='slider' ref={progressbarRef} defaultValue="0" onChange={onProgressChange} />
                        <p>{(duration && !isNaN(duration)) ? calculateTime(duration) : "00:00"}</p>
                    </div>
                </Footer>
            </Layout>
        </Container>
    )
}

export default ReciteVerses;