import React from 'react'
import './SidebarElemContIcon.css'

export default function SidebarElemContIcon({expanded}) {
	if(!expanded) {	
		return (
			<div className="sidebarElemContIcon">
				🞂
			</div>
		)
	}

	return (
		<div className="sidebarElemContIcon" id="expanded">
			🞃
		</div>
	)
}