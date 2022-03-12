import React, { useEffect, useState } from 'react'
import { Container } from './VersesStyle'
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineHome } from "react-icons/ai";
import ayahNumBack from "../../../assets/images/ayahNumBack.png"
import axios from 'axios';


const Verses = ({ id }) => {
    const [sura, setSura] = useState(null);
    const [text, setText] = useState(sura?.verses?.map(value => value.text.arab));
    console.log(text);
    // var index = 0;
    const store = useSelector(store => store.surahReducer);
    const dispatch = useDispatch();
    // var text = ""
    // var quran = data.data.verses.map((value, index) => {
    //     text + value.text.arab;
    //     console.log(text)
    // })
    const goHome = () => {
        dispatch({
            type: "MOVE", payload: { id: null }
        })
    }

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`https://api.quran.sutanlab.id/surah/${id}`)
            setSura(data.data);
            setText(data.data.verses.map((value, index) => value.text.arab + ` ${index + 1} `));
            console.log("text", text.join(" "));
            console.log(data.data);

        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        fetchData();
    }, [])
    // const { surah_name, surah_name_arabic, surah_verse_count, verses } = sura;

    return (
        <Container>
            <div
                className="header"
                style={{ padding: 0 }}>
                <div className='titleContainer'>
                    <h1 style={{ fontSize: "3rem", color: "#F7B801" }}>{sura?.surah_name}</h1>
                </div>
                <AiOutlineHome className='home' onClick={goHome} />
            </div>
            <div
                className="content"
                style={{
                    // margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }}>
                {/* {text?.map((verse, index) => (
                    <div className='oyahDiv'>
                        <div style={{ backgroundImage: `url(${ayahNumBack})`, }} className="center ayahNumBack">{index + 1}</div>
                        <span className="ayahText"> {index + 1}{verse}</span>
                    </div>
                ))} */}
                <div>{text}</div>
            </div>
        </Container>
    )
}

export default Verses