import React from 'react'
import SidebarIconElem from './SidebarElemIcon'
import './SidebarElem.css'

function handleElemClick(id, toggleElem) {
	console.log("button clicked")
	toggleElem(id);
}

export default function SidebarElem({ elem, toggleElem }) {
	console.log("        1" + elem.id + " | " + elem.name);
	//console.log(elem.name)
	/*
	if(elem.id === 1) {
		console.log("HUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUH")
		console.log(JSON.stringify(elem, null, 2))
	}
	*/

	if(!elem.selected) {
		console.log("        2" + elem.id + " | " + elem.name);
		return (
			<div className="sidebarElem" onClick={() => { return handleElemClick(elem.id, toggleElem) }}>
				
				🏠
				{elem.name}
			</div>
		);
	}
	
	console.log("        3" + elem.id + " | " + elem.name);
	return (
		<div className="sidebarElem" id={"selected"} onClick={() => { return handleElemClick(elem.id, toggleElem) }}>
			
			🏠
			{elem.name}
		</div>
	);

}