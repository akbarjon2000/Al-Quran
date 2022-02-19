import React, { useEffect, useState } from 'react'
import { ReciteStyle } from './ReciteStyle'
import axios from "axios"
import QuranKemenag from "quran-kemenag";
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css'

import quranWord from "../../assets/images/quranulkarim.png";

const { Header, Sider, Content, Footer } = Layout;
const Recitation = () => {
    const [close, setClose] = useState(false)
    const [surah, setSurah] = useState(null);
    const [surahList, setSurahList] = useState(null)
    const [audio, setAudio] = useState(null)
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
                // error handing here
            })
    }
    useEffect(() => {
        fetchData();
    }, [])
    const toggle = () => {
        setClose(!close)
    };
    return (
        <ReciteStyle>
            <Layout className='layout' style={{ minHeight: '100px' }} >
                <Sider trigger={null} collapsible collapsed={close} reverseArrow={false} className="sider">
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout "  >
                    <Header className="site-layout-background header" style={{ padding: 0 }}>
                        {close ? <MenuUnfoldOutlined className='trigger' onClick={toggle} /> : <MenuFoldOutlined className='trigger' onClick={toggle} />}
                        <div className='titleContainer'>
                            <img src={quranWord} className="title" />
                            <h1 style={{ fontSize: "30px", color: "#00acc2" }}>True Islam</h1>
                        </div>
                    </Header>
                    <Content
                        className="site-layout-background content"
                        style={{
                            // margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        {surahList?.map(({ surah_id, surah_name, surah_name_arabic, surah_verse_count }) => (
                            <div className='surah' key={surah_id}>
                                <div className='align__center' style={{ gap: "10px" }}>
                                    <div className='center circle'>{surah_id}</div>
                                    <p className='text'>{surah_name}</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: 'flex-end' }}>
                                    <p className='text'>{surah_name_arabic}</p>
                                    <p className='text'>{surah_verse_count}</p>
                                </div>
                            </div>
                        ))}
                    </Content>
                    {/* <Footer className='footer'>

                    </Footer> */}
                </Layout>
            </Layout>
        </ReciteStyle>
    )
}

export default Recitation