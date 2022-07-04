import React from 'react'
import StatsWindowCont from './StatsWindowCont'
import './StatsWindow.css'

export default function StatsWindow({pageStats}) {

	const page = pageStats.containers.map(container => {
		return <StatsWindowCont container={container} key={container.id}/>
	})
	
	return (
		<div className="StatsWindow">
			{page}
		</div>
	)
}