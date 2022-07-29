import React, { useEffect, useState } from 'react'
import { Container } from './VersesStyle'
import { useSelector, useDispatch } from 'react-redux';
import { BiArrowBack, BiFirstPage, BiLastPage } from "react-icons/bi";
import ayahNumBack from "../../../assets/images/ayahNumBack.png"
import margin from "../../../assets/images/margin1.png";
import axios from 'axios';
import { useTranslation } from "react-i18next"

const Verses = ({ id }) => {
    const [sura, setSura] = useState(null);
    const [page, setPage] = useState(null);
    const [text, setText] = useState(sura?.ayahs?.filter(verse => verse.page === 1).map(value => value.ayahText).join(" "));
    const [pageLength, setPageLength] = useState(sura?.ayahs.length);
    const [test, setTest] = useState(null);
    console.log("LENGTH:", pageLength)
    console.log(page)
    console.log("tsst", test);

    const store = useSelector(store => store.surahReducer);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const goHome = () => {
        dispatch({
            type: "MOVE", payload: { id: null }
        })
    }

    const paginateBack = () => {
        if (page !== sura?.ayahs[0].page) {
            setPage(page - 1)
        }
    }
    const paginateForth = () => {
        if (page !== pageLength) {
            setPage(page + 1)
        }
    }

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`https://quranapi.idn.sch.id/surah/${id}`)
            setPageLength(data.ayahs[data.ayahs.length - 1].page);
            setPage(data.ayahs[0].page)
            setSura(data);
            // setText(data.data.verses.map((value, index) => value.text.arab + ` ${index + 1} `));
            setTest(data.ayahs.filter(verse => verse.page === page).map(value => value.ayahText))
            setText(data.ayahs.filter(verse => verse.page === page).map(value => value.ayahText).join(" "))
            // console.log("text", text.join(" "));
            console.log(data);

        } catch (error) {
            console.log(error)
        }

    }

    const fetchSurah = async () => {
        try {
            const { data } = await axios.get(`https://quranapi.idn.sch.id/surah/${id}`)
            setText(data.ayahs.filter(verse => verse.page === page).map(value => value.ayahText).join(" "))

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData();
    }, [id])

    useEffect(() => {
        fetchSurah();
    }, [page])
    // const { surah_name, surah_name_arabic, surah_verse_count, verses } = sura;

    return (
        <Container>
            <div
                className="header"
                style={{ padding: 0 }}>
                <BiArrowBack className='back' onClick={goHome} />
                <div className='titleContainer'>
                    <h1 style={{ fontSize: "3rem", color: "#F7B801" }}>{sura?.asma}</h1>
                </div>
            </div>
            <div
                onSl
                className="content"
                style={{
                }}>
                {/* {test?.map((verse, index) => (
                    <div className='oyahDiv'>
                        <span className="ayahText"><div style={{ backgroundImage: `url(${ayahNumBack})`, }} className="center ayahNumBack">{index + 1}</div> {verse}</span>
                    </div>
                ))} */}
                <div className=' center text' style={{ backgroundImage: `url(${margin})` }}>{text}</div>
            </div>
            <div className='center pagination'>
                <BiFirstPage className='paginateback' onClick={paginateForth} />
                <div className='center currentPage'>{t('page')} : {page}</div>
                <BiLastPage className='paginateforth' onClick={paginateBack} />
            </div>
        </Container>
    )
}

export default Verses