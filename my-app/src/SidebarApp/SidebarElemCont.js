import React from 'react'
import SidebarElem from './SidebarElem'
import SidebarElemContIcon from './SidebarElemContIcon'
import './SidebarElemCont.css'

function handleContClick(id, toggleElem) {
	console.log("button clicked")
	toggleElem(id);
}

export default function SidebarElemCont({parent, children, elems, depth,	toggleElem}) {
	console.log("    1" + parent.id);
	let elemContCount = 0;
	let elemCount = 0;
	
	const arr = children.map((child) => {		
		if(child.childrenId.length > 0) {
			const children = child.childrenId.map(childId => {
				console.log("    2" + child.id);
				return elems.find(elem => elem.id === childId)
			})

			elemContCount++;
			console.log("    3" + child.id);
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
		console.log("    4" + child.id);
		return (
			<SidebarElem 
				key={child.id} 
				elem={child} 
				toggleElem={toggleElem}
			/>
		)
	})
	
	elemCount++;
	console.log("    5" + parent.id);
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