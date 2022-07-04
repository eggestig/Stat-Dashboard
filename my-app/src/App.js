import React, { useState, useEffect } from 'react' 
import Sidebar from './SidebarApp/Sidebar'
import Header from './HeaderApp/Header'
import StatsWindow from './StatsWindowApp/StatsWindow'
import './App.css'

const StatsContent = require('./StatsWindowApp/StatsWindowContent.json')
const SidebarElements = require('./SidebarApp/SidebarContent.json').sidebarElements

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
	const [sidebar, setSidebar] = useState(SidebarElements);

	//Header

	//StatsWindow
	const [stats, setStats] = useState(StatsContent);

	return (
		<>
			<div className="SidebarApp">
				<Sidebar elems={sidebar} toggleElem={(id) => {return toggleSidebarElem(id, sidebar, setSidebar)}}/>
			</div>
			<div className="HeaderApp">
				<Header />
			</div>
			<div className="StatsWindowApp">
				<StatsWindow pageStats={stats.pages[sidebar.find(elem => elem.selected).name]}/>
			</div>
		</>
	);
}

export default App;
