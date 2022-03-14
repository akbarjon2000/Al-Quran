import React, { useEffect, useState } from 'react'
import { Container } from './VersesStyle'
import { useSelector, useDispatch } from 'react-redux';
import { BiArrowBack, BiFirstPage, BiLastPage } from "react-icons/bi";
import ayahNumBack from "../../../assets/images/ayahNumBack.png"
import margin from "../../../assets/images/margin1.png";
import axios from 'axios';


const Verses = ({ id }) => {
    const [sura, setSura] = useState(null);
    const [page, setPage] = useState(null);
    const [text, setText] = useState(sura?.verses.filter(verse => verse.meta.page === 1).map(value => value.text.arab).join(" "));
    const [pageLength, setPageLength] = useState(sura?.verses.length);
    console.log("LENGTH:", pageLength)
    console.log(page)
    console.log(text);

    const store = useSelector(store => store.surahReducer);
    const dispatch = useDispatch();

    const goHome = () => {
        dispatch({
            type: "MOVE", payload: { id: null }
        })
    }

    const paginateBack = () => {
        if (page !== sura?.verses[0].meta.page) {
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
            const { data } = await axios.get(`https://api.quran.sutanlab.id/surah/${id}`)
            setPageLength(data.data.verses[data.data.verses.length - 1].meta.page);
            setPage(data.data.verses[0].meta.page)
            setSura(data.data);
            // setText(data.data.verses.map((value, index) => value.text.arab + ` ${index + 1} `));
            setText(data.data.verses.filter(verse => verse.meta.page === page).map(value => value.text.arab).join(" "))
            // console.log("text", text.join(" "));
            console.log(data.data);

        } catch (error) {
            console.log(error)
        }

    }

    const fetchSurah = async () => {
        try {
            const { data } = await axios.get(`https://api.quran.sutanlab.id/surah/${id}`)
            setText(data.data.verses.filter(verse => verse.meta.page === page).map(value => value.text.arab).join(" "))

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
                    <h1 style={{ fontSize: "3rem", color: "#F7B801" }}>{sura?.name.long}</h1>
                </div>
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
                <div className=' center text' style={{ backgroundImage: `url(${margin})` }}>{text}</div>
            </div>
            <div className='center pagination'>
                <BiFirstPage className='paginateback' onClick={paginateForth} />
                <div className='center currentPage'>Page : {page}</div>
                <BiLastPage className='paginateforth' onClick={paginateBack} />
            </div>
        </Container>
    )
}

export default Verses