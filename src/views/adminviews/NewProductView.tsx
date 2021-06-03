import { useState } from 'react'
import { Formik, Field, Form } from 'formik'

import APIService from '../../shared/api/service/APIService'
import './NewProductView.scss'

export const NewProductView = () => {
    const [file, setFile] = useState<any>([])
    const [products, setProducts] = useState<any>([])
    const [newProduct, setNewProduct] = useState<any>({ title: '', categories: '', tags: '', price: ''})

    const createProduct = async () => {
        try {
            const formData = new FormData();
            formData.append('title', newProduct.title)
            formData.append('categories', newProduct.categories)
            formData.append('tags', newProduct.tags)
            formData.append('price', newProduct.price)
            formData.append('image', file[0])
            await APIService.createProduct(formData)
        } catch (error) {
            console.log(error)
        }
    }

    const getAllProducts = async () => {
        try {
            const response = await APIService.getAllProducts()
            setProducts(response.data)
            console.log(products)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="newProductViewWrapper">
            <Formik
                initialValues={{
                    title: '',
                    categories: '',
                    tags: '',
                    price: 0
                }}
                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true)
                    setNewProduct({
                        title: data.title,
                        categories: data.categories,
                        tags: data.tags,
                        price: data.price
                    })
                    createProduct()
                    console.log(data)
                    console.log(newProduct.title)
                    setSubmitting(false)
                }}>
                {() => (
                    <Form>
                        <Field placeholder="Product Title" name="title" type="input" /><br />
                        <Field placeholder="Product categories" name="categories" type="input" /><br />
                        <Field placeholder="Product tags" name="tags" type="input" /><br />
                        <Field placeholder="Product price" name="price" type="number" /><br />
                        <input type="file" onChange={(e) => setFile(e.target.files)} /><br />
                        <button type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
            <button onClick={() => getAllProducts()}>get all products</button>
            {products.map((x: any) => (
                <div>
                    <img src={`http://localhost:3001/${x?.image}`} alt="instagram" />
                    <span>{x?.title}</span>
                </div>
            ))}
        </div>
    )
}
