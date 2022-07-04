import React from 'react'
import SidebarIconElem from './SidebarElemIcon'
import './SidebarElem.css'

function handleElemClick(id, toggleElem) {
	toggleElem(id);
}

export default function SidebarElem({ elem, toggleElem }) {
	//console.log(elem.name)
	/*
	if(elem.id === 1) {
		console.log("HUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUH")
		console.log(JSON.stringify(elem, null, 2))
	}
	*/

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