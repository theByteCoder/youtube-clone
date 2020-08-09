import React from 'react'
import "../Styles/SidebarRow.css"

function SidebarRow({ title, Icon, selected }) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow__icon" />
            <h2 className="sidebarRow__title">{title}</h2>
        </div>
    )
}

export default SidebarRow
