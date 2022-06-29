import React from 'react'
import SidebarIconElem from './SidebarElemIcon'
import './SidebarElem.css'

function handleElemClick(id, toggleElem) {
	console.log("button clicked")
	toggleElem(id);
}

export default function SidebarElem({ elem, toggleElem }) {
	if(!elem.selected) {
		return (
			<div className="sidebarElem" onClick={() => { return handleElemClick(elem.id, toggleElem) }}>
				
				🏠
				{elem.name}
			</div>
		);
	}

	return (
		<div className="sidebarElem" id={"selected"} onClick={() => { return handleElemClick(elem.id, toggleElem) }}>
			
			🏠
			{elem.name}
		</div>
	);

}