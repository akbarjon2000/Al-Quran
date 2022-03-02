import React, { useEffect, useState } from 'react'
import { Container } from './ReciteVercesStyle'
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
import { BiArrowBack } from "react-icons/bi";
import ayahNumBack from "../../../assets/images/num_bg.png"
import axios from 'axios';
const { Header, Content, Footer } = Layout;


const ReciteVerses = ({ id }) => {
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
            const { data } = await axios.get(`https://api.quran.sutanlab.id/surah/${id}`)
            console.log(data.data)
            setSura(data.data);
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
            <Layout >
                <Header
                    className=" header"
                    style={{ padding: 0 }}>

                    <BiArrowBack className='home' onClick={goHome} />
                    <h1 style={{ fontSize: "3rem", color: "#F7B801", margin: "0 auto" }}>{sura?.name.transliteration.en}</h1>

                </Header>
                <Content
                    className=" content"
                    style={{
                        // margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}>
                    {sura?.verses.map((verse, index) => (
                        <div className='align__center oyahDiv'>
                            <p style={{ display: "flex", justifyContent: "flex-end" }}>{verse.text.arab}</p>
                            <div>
                                <div style={{ backgroundImage: `url(${ayahNumBack})` }} className="center ayahNumBack">{index + 1}</div>
                            </div>
                            {/* <p>{verse.verse_bahasa}</p> */}
                        </div>
                    ))}
                </Content>
                <Footer className='footer'>

                </Footer>
            </Layout>
        </Container>
    )
}

export default ReciteVerses;