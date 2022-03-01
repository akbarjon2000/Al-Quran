import React, { useEffect, useState } from 'react'
import { Container } from './VersesStyle'
import { Layout, } from 'antd'
import QuranKemenag from "quran-kemenag";
import { useSelector, useDispatch } from 'react-redux';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import { AiOutlineHome } from "react-icons/ai";
import ayahNumBack from "../../../assets/images/ayahNumBack.png"
import axios from 'axios';
const { Header, Content, Footer } = Layout;


const ReciteVerses = () => {
    const [close, setClose] = useState(false)
    const [sura, setSura] = useState(null);
    const store = useSelector(store => store.surahReducer);
    const dispatch = useDispatch();

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
            const { data } = await axios.get(`https://api.quran.sutanlab.id/surah/1`)
            console.log(data)
            setSura(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    // const { surah_name, surah_name_arabic, surah_verse_count, verses } = sura;

    return (
        <Container>
            <Layout className="site-layout ">
                {/* <Header
                    className="site-layout-background header"
                    style={{ padding: 0 }}>
                    {close ? <MenuUnfoldOutlined className='trigger' onClick={toggle} /> : <MenuFoldOutlined className='trigger' onClick={toggle} />}
                    <div className='titleContainer'>
                        <h1 style={{ fontSize: "3rem", color: "#00acc2" }}>{sura?.surah_name}</h1>
                        <p className='arabic_name'>{sura?.surah_verse_count} verses</p>
                    </div>
                    <AiOutlineHome className='home' onClick={goHome} />
                </Header>
                <Content
                    className="site-layout-background content"
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
                </Content> */}
            </Layout>
        </Container>
    )
}

export default ReciteVerses;