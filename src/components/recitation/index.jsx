import React from 'react'
import Recitation from './Recitation'
import ReciteSidebar from './sidebar/ReciteSidebar'

const index = () => {
    return (
        <div style={{ display: "flex", overflowY: "hidden", height: "fit-content" }}>
            {/* <ReciteSidebar /> */}
            <Recitation />
        </div>
    )
}

export default index