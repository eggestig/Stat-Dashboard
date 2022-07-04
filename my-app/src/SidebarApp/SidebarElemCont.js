import React from 'react'
import SidebarElem from './SidebarElem'
import SidebarElemContIcon from './SidebarElemContIcon'
import './SidebarElemCont.css'

function handleContClick(id, toggleElem) {
	toggleElem(id);
}

export default function SidebarElemCont({parent, children, elems, depth,	toggleElem}) {
	let elemContCount = 0;
	let elemCount = 0;
	
	const arr = children.map((child) => {		
		if(child.childrenId.length > 0) {
			const children = child.childrenId.map(childId => {
				return elems.find(elem => elem.id === childId)
			})

			elemContCount++;
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
		elemCount++;
		return (
			<SidebarElem 
				key={child.id} 
				elem={child} 
				toggleElem={toggleElem}
			/>
		)
	})
	
	elemCount++;
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