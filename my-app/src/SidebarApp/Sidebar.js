import React from 'react'
import SidebarElem from './SidebarElem'
import SidebarElemCont from './SidebarElemCont'
import './Sidebar.css'

export default function Sidebar({ elems, toggleElem }) {
	const depth = 0;

	let elemContCount = 0;
	let elemCount = 0;

	const arr = elems.map((elem) => {
		if(elem.parent) return
		
		if(elem.childrenId.length > 0) {
			const children = elem.childrenId.map(childId => {
				return elems.find(elem => elem.id === childId)
			})
			elemContCount++;
			return (
				<SidebarElemCont 
					key={elem.id} 
					parent={elem} 
					children={children} 
					elems={elems} 
					depth={depth + 1} 
					toggleElem={toggleElem}
				/>
			)
		}
		elemCount++;
		return (
			<SidebarElem 
				key={elem.id} 
				elem={elem} 
				toggleElem={toggleElem}
			/>
		)
	})

	return (
		<div className="sidebar">
			{arr}
		</div>
	)
}