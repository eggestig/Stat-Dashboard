import React, { useState, useEffect } from 'react' 
import Sidebar from './SidebarApp/Sidebar'
import { v4 as uuidv4 } from 'uuid'
const sidebarElements = require('./SidebarApp/SidebarContent.json').sidebarElements

/** 
 * 
 * Sidebar
 * 
*/

function toggleSidebarElem(id, sidebar, setSidebar) {
	const tempSidebar = [...sidebar]; //Copy

	if(tempSidebar.find(elem => elem.id === id).expanded !== null) {
		tempSidebar.find(elem => elem.id === id).expanded = !tempSidebar.find(elem => elem.id === id).expanded //Switch between expanded/not expanded
	}

	if(sidebar.find(elem => elem.selected).id !== sidebar.find(elem => elem.id === id).id) {
		tempSidebar.find(elem => elem.selected).selected  = false; //Deselect old element
		tempSidebar.find(elem => elem.id === id).selected = true;  //Select new element
	}

	return setSidebar(tempSidebar)
}

function App() {


	//Sidebar
	console.log(sidebarElements);
	const [sidebar, setSidebar] = useState(sidebarElements);

	return (
		<>
			<div className="sidebarApp">
				<Sidebar elems={sidebarElements} toggleElem={(id) => {return toggleSidebarElem(id, sidebar, setSidebar)}}/>
			</div>
		</>
	);
}

export default App;
