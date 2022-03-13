import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Surah = ({ value }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const chooseSurah = (surah_id) => {
        // navigate(`/surah`);
        dispatch({
            type: "MOVE", payload: { id: surah_id, smth: "smth" }
        })
    }
    // const { surah_id, surah_name, surah_name_arabic, surah_verse_count } = value;
    return (
        <div className='surah' key={value?.surah_id} onClick={() => chooseSurah(value?.surah_id)}>
            <div className='align__center' style={{ gap: "10px" }}>
                <div className='center circle'>{value?.surah_id}</div>
                <p className='text'>{value?.surah_name}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: 'flex-end' }}>
                <p className='text'>{value?.surah_name_arabic}</p>
                <p className='text'>{value?.surah_verse_count}</p>
            </div>
        </div>
    )
}

export default Surah