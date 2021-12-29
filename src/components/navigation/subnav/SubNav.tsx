import React, { useState } from 'react'

import './SubNav.scss'

interface SubNavInterface {
	children: React.ReactChildren | any
}

export const SubNav = (props: SubNavInterface) => {
	const { children } = props
	const [activeChild, setActiveChild] = useState<any>(children[0])

	const renderNav = () => {
		const childrenWithProps = React.Children.map(children, (child) => (
			<li style={activeChild.props.title === child.props.title ? { fontWeight: 'bold' } : { fontWeight: 'normal' }} onClick={() => setActiveChild(child)}>
				{child.props.title}
			</li>
		))
		return <ul className='sub-nav'>{childrenWithProps}</ul>
	}

	const renderChild = () => {
		return activeChild
	}

	return (
		<>
			{renderNav()}
			{renderChild()}
		</>
	)
}
