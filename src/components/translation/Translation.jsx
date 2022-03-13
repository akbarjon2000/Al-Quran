import React, { useEffect, useState } from 'react'
import { Container } from './TranslationStyle'
import { useDispatch, useSelector } from 'react-redux';
import QuranKemenag from "quran-kemenag";
import quranWord from "../../assets/images/quranulkarim.png";
import Surah from './Surah';
import Verses from './verses/Verses';

const Translation = () => {
    const [surah, setSurah] = useState(null);
    const [surahList, setSurahList] = useState(null)
    const [audio, setAudio] = useState(null)
    const store = useSelector(state => state.surahReducer)
    console.log("surah_id:", store)
    console.log("audio", audio)
    const fetchData = async () => {
        const quran = new QuranKemenag();
        quran.getListSurah(
            // optional, search keyword for surah name
        )
            .then((data) => {
                setSurahList(data)
                console.log(data)
                // data handling here
            })
            .catch((error) => {
                // error handling here
            });
        const options = {
            include_verse: true,
            verses_limit: 114,
            verses_offset: 0
        }
        quran.getSurah(
            111,          // required, surah id or surah number
            options     // optional
        )
            .then((data) => {
                setSurah(data);
                console.log(data)
                setAudio(data.verses[0].verse_audio)

            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <Container>
            {store.id ? <Verses id={store.id} />
                : <div className="site-layout "  >
                    <div
                        className="site-layout-background header"
                        style={{ padding: 0 }}>
                        <div className='titleContainer'>
                            <img src={quranWord} className="title" />
                            <h1 style={{ fontSize: "30px", color: "#00acc2", marginTop: "10px" }}>True Islam</h1>
                        </div>
                    </div>
                    <div
                        className="site-layout-background content"
                        style={{
                            // margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        {surahList?.map((value) => (
                            <Surah value={value} key={value.surah_id} />
                        ))}
                    </div>
                </div>
            }
        </Container>
    )
}

export default Translation