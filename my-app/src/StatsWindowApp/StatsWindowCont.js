import React from 'react'
import StatsWindowElem from './StatsWindowElem'
import './StatsWindowCont.css'
import './StatsWindowElem.css'

export default function StatsWindowCont({container}) {
	console.log(container);

	const elements = container.elements.map(elem => {
		console.log("Elem key: " + elem.id);
		return <StatsWindowElem key={elem.id} elem={elem} type={container.type} />
	})

	return (
		<>
			<div className="StatsWindowCont" id={"Type" + container.id}>
				{elements}
			</div>
		</>
	)
}