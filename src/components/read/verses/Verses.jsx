import React, { useEffect, useState } from 'react'
import { Container } from './VersesStyle'
import QuranKemenag from "quran-kemenag";
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineHome } from "react-icons/ai";
import ayahNumBack from "../../../assets/images/ayahNumBack.png"


const Verses = () => {
    const [sura, setSura] = useState(null);
    const store = useSelector(store => store.surahReducer);
    const dispatch = useDispatch();

    const goHome = () => {
        dispatch({
            type: "MOVE", payload: { id: null }
        })
    }

    const fetchData = async () => {
        const quran = new QuranKemenag();
        const options = {
            include_verse: true,
            verses_limit: 500,
            verses_offset: 0
        }
        quran.getSurah(
            store?.id,          // required, surah id or surah number
            options     // optional
        )
            .then((data) => {
                setSura(data);
                console.log("from verses:", data)
                // setAudio(data.verses[0].verse_audio)

            })
            .catch((error) => {
                console.log(error);
            })
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
                {sura?.verses.map((verse, index) => (
                    <div className='oyahDiv'>
                        <div>
                            <div style={{ backgroundImage: `url(${ayahNumBack})` }} className="center ayahNumBack">{index + 1}</div>

                        </div>
                        <p style={{ display: "flex", justifyContent: "flex-end" }}>{verse.verse_arabic}</p>
                        <p>{verse.verse_bahasa}</p>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Verses