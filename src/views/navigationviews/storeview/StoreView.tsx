import { useState } from 'react'
import { useSelector } from 'react-redux'

import { Products } from '../../../components/products/Products'
import './StoreView.scss'

export const StoreView = () => {
	const getProducts = useSelector((state: any) => state.getProducts)
	const { products, loading, error } = getProducts
	const getCategories = useSelector((state: any) => state.getCategories)
	const { categories, categoriesloading, categorieserror } = getCategories
	const [filter, setFilter] = useState<any>({ name: 'butik', array: products })
	const [hoveredMenuItem, setHoveredMenuItem] = useState<any>()

	const displaySubMenu = (active: any) => {
		if (!hoveredMenuItem) return
		if (hoveredMenuItem._id !== active._id) return
		return active.subcategories.map((subcategory: any) => (
			<div key={subcategory._id} className='subCategoryTitle' onClick={() => setFilter({ name: subcategory.name, array: subcategory.products })}>
				<p>{subcategory.name}</p>
			</div>
		))
	}

	const displayStoreMenu = () => {
		return (
			<div className='filterWrapper'>
				<div className='filterTitles'>
					{categories.map((category: any) => (
						<div key={category._id} className='filterTitle' onMouseLeave={() => setHoveredMenuItem({})}>
							<h3
								className={`${category.name}FilterTitle`}
								onMouseOver={() => {
									setHoveredMenuItem(category)
								}}
								onClick={() => setFilter({ name: category.name, array: category.products })}
							>
								{category.name}
							</h3>
							{displaySubMenu(category)}
						</div>
					))}
				</div>
			</div>
		)
	}

	return (
		<div className='storeViewWrapper'>
			{displayStoreMenu()}
			<div className='productsWrapper'>
				<Products arr={filter.array} title={filter.name} name='productView' />
			</div>
		</div>
	)
}
