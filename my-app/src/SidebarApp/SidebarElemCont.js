import React from 'react'
import SidebarElem from './SidebarElem'
import SidebarElemContIcon from './SidebarElemContIcon'
import './SidebarElemCont.css'

function handleContClick(id, toggleElem) {
	console.log("button clicked")
	toggleElem(id);
}

export default function SidebarElemCont({parent, children, elems, depth,	toggleElem}) {
	
	const arr = children.map((child) => {		
		if(child.childrenId.length > 0) {
			const children = child.childrenId.map(childId => {
				return elems.find(elem => elem.id === childId)
			})

			return (
				<SidebarElemCont 
					key={child.id} 
					parent={child} 
					children={children} 
					elems={elems} 
					depth={depth + 1} 
					toggleElem={toggleElem}
				/>
			)
		}
		return (
			<SidebarElem 
				key={child.id} 
				elem={child} 
				toggleElem={toggleElem}
			/>
		)
	})	

	return (
		<div className="sidebarElemCont">
			<SidebarElemContIcon expanded={parent.expanded}/>
			<SidebarElem 
				key={parent.id} 
				elem={parent} 
				toggleElem={toggleElem}
			/>
			<div className="sidebarElemContChildren" id={(parent.expanded) ? "expanded" : "not-expanded"}>
				{arr}
			</div>
		</div>
	)
}