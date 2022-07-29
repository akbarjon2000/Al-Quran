import React, { useEffect, useState } from 'react'
import { Container } from './VersesStyle'
import { useSelector, useDispatch } from 'react-redux';
import { BiArrowBack } from "react-icons/bi";
import ayahNumBack from "../../../assets/images/ayahNumBack.png"
import axios from 'axios';


const Verses = ({ id }) => {
    const [sura, setSura] = useState(null);
    const [text, setText] = useState(sura?.ayahs?.map(value => value.ayahText));
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
            const { data } = await axios.get(`https://quranapi.idn.sch.id/surah/${id}`)
            setSura(data);
            console.log(data);

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
                <BiArrowBack className='back' onClick={goHome} />

                <h1 style={{ fontSize: "2rem", color: "#F7B801", margin: "0 auto" }}>{sura?.asma} - {sura?.translationEn}</h1>

            </div>
            <div
                className="content"
                style={{
                    // margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }}>
                {sura?.ayahs?.map((verse, index) => (
                    <div className='oyahDiv'>

                        <div className='Row1'>
                            <div style={{ backgroundImage: `url(${ayahNumBack})`, }} className="center ayahNumBack">{index + 1}</div>
                            <p className="ayahText"> {verse.ayahText}</p>
                        </div>
                        <div style={{ paddingLeft: "60px" }} className="transContainer">
                            <p className='transliteration'>{verse.readText}</p>
                            <p className='translation'>{verse.enText}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Verses