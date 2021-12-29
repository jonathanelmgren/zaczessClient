import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import APIService from '../../../shared/api/service/APIService'
import './NewProductView.scss'

export const NewProductView = (props: any) => {
	const [file, setFile] = useState<any>([])
	const [files, setFiles] = useState<any>([])
	const [product, setProduct] = useState<any>({ variations: [] })
	const [productTags, setProductTags] = useState<any>([])

	const getCategories = useSelector((state: any) => state.getCategories)
	const { categories, loading, error } = getCategories

	const createProduct = async () => {
		try {
			const response = await APIService.createProduct(product)
			const id = response.data._id
			await changeFtdImg(id)
			if (files.length !== 0) await changeMltImg(id)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		if (productTags.length < 1) return
		const tagsArray = productTags.split(',')
		setProduct((prev: any) => ({ ...prev, tags: tagsArray }))
	}, [productTags])

	const changeFtdImg = async (id: string) => {
		let formData = new FormData()
		formData.append('featuredImage', file[0])
		try {
			await APIService.changeFtdImg(id, formData)
		} catch (error) {
			console.log(error)
		}
	}
	const changeMltImg = async (id: string) => {
		let formData = new FormData()
		for (var x = 0; x < files.length; x++) {
			formData.append('additionalImages', files[x])
		}
		try {
			await APIService.changeMltImg(id, formData)
		} catch (error) {
			console.log(error)
		}
	}

	const displayCategories = () => {
		return categories.map((category: any) => (
			<div>
				<input type='radio' id={category._id} name='category' value={category._id} onChange={(e: any) => setProduct((prev: any) => ({ ...prev, category: e.target.value }))} />
				<label>{category.name}</label>
			</div>
		))
	}

	const displaySubCategories = (parentId: any) => {
		if (parentId === undefined)
			return (
				<span>
					<br />
					Please pick a parent
				</span>
			)
		const index = categories.findIndex((category: any) => category._id === parentId)
		return categories[index].subcategories.map((subcategory: any) => (
			<div>
				<input type='radio' id={subcategory._id} name='subcategory' value={subcategory._id} onChange={(e: any) => setProduct((prev: any) => ({ ...prev, subcategory: e.target.value }))} />
				<label>{subcategory.name}</label>
			</div>
		))
	}

	const renderVariationForm = () => {
		if (product.variations === undefined || product.variations.length < 0) return
		return (
			<>
				{product.variations.map((variation: any) => (
					<>
						<div>
							<div>
								<label>Size: </label>
								<input onChange={(e: any) => (e.target.value === "" ? variation.size = undefined : variation.size = e.target.value)} />
							</div>
							<div>
								<label>Color: </label>
								<input onChange={(e: any) => (variation.color = e.target.value)} />
							</div>
							<div>
								<label>Seat: </label>
								<input onChange={(e: any) => (variation.seat = e.target.value)} />
							</div>
							<div>
								<label>Stock: </label>
								<input onChange={(e: any) => (variation.stock = e.target.value)} />
							</div>
						</div>
						<hr />
					</>
				))}
			</>
		)
	}

	const handleRemoveVar = async () => {
		const tempArr: any = {...product}
		await tempArr.variations.pop()
		setProduct(tempArr)
	}

	return (
		<div className='newProductViewWrapper'>
			<form>
				<div>
					<label>Title: </label>
					<input onChange={(e: any) => setProduct((prev: any) => ({ ...prev, title: e.target.value }))} />
				</div>
				<div>
					<div>
						<label>Category:</label>
						{displayCategories()}
					</div>
					<div>
						<label>Subcategory:</label>
						{displaySubCategories(product.category)}
					</div>
				</div>

				<div>
					<label>Tags: </label>
					<input placeholder='pants,hat,outfit' onChange={(e: any) => setProductTags(e.target.value)} />
					<label> (seperate with commas)</label>
				</div>
				<div>
					<label>Price: </label>
					<input type='number' onChange={(e: any) => setProduct((prev: any) => ({ ...prev, price: e.target.value }))} />
				</div>
				<div>
					<label>Description: </label>
					<br />
					<textarea cols={40} rows={4} onChange={(e: any) => setProduct((prev: any) => ({ ...prev, description: e.target.value }))} />
				</div>
				<div>
					<label>Set Feautured image: </label>
					<input type='file' onChange={(e) => setFile(e.target.files)} />
				</div>
				<div>
					<label>Set additional images: </label>
					<input type='file' multiple onChange={(e) => setFiles(e.target.files)} />
				</div>
				<div>
					<h2>Variations</h2>
					{renderVariationForm()}
					<div>
						<button type='button' onClick={() => setProduct((prev: any) => ({ ...prev, variations: [...prev.variations, {}] }))}>
							Add new variation
						</button>
						{product.variations.length > 0 ? <button type="button" onClick={() => handleRemoveVar()}>Remove latest variation</button> : null}
					</div>
				</div>
				<div>
					<button type='button' onClick={() => createProduct()}>
						Submit
					</button>
				</div>
			</form>
		</div>
	)
}
