import React from 'react'
import PieChart from './StatsWindowPieChart'
import './StatsWindowElem.css'

export default function StatsWindowElem({elem, type}) {
	console.log(type)
	switch(type) {
		case 0: 
			return (
				<div className="StatsWindowElem" id={type}>
					<h2>{elem.h2}</h2>
					<h3><b>{elem.h3_1}</b></h3>
					<h3>(<em>{elem.h3_2}</em>)</h3>
				</div>
			)
		case 1: 
			return (
				<div className="StatsWindowElem" id={type}>
					<h2>{elem.h2}</h2>	
					<PieChart data={elem.data}/>
				</div>
			)
		case 2: 
		break;
		case 3: 
		break;
		case 4: 
		break;
		case 5: 
		break;
	}
}
















