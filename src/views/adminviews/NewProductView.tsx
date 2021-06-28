import { useState } from 'react'
import { Formik, Field, Form } from 'formik'

import APIService from '../../shared/api/service/APIService'
import './NewProductView.scss'

export const NewProductView = () => {
    const [file, setFile] = useState<any>([])
    const [files, setFiles] = useState<any>([])

    const createProduct = async (data: any) => {
        try {
            const response = await APIService.createProduct(data)
            const id = response.data._id
            await changeFtdImg(id)
            if (files.length !== 0) await changeMltImg(id)
        } catch (error) {
            console.log(error)
        }
    }

    const changeFtdImg = async (id: string) => {
        let formData = new FormData();
        formData.append('featuredImage', file[0])
        try {
            console.log(formData)
            const response = await APIService.changeFtdImg(id, formData)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    const changeMltImg = async (id: string) => {
        let formData = new FormData();
        for (var x = 0; x < files.length; x++) {
            formData.append('additionalImages', files[x])
        }
        try {
            console.log(formData)
            const response = await APIService.changeMltImg(id, formData)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="newProductViewWrapper">
            <Formik
                initialValues={{
                    title: '',
                    categories: {
                        horse: [],
                        rider: []
                    },
                    tags: [],
                    price: 0
                }}
                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true)
                    console.log(data)
                    createProduct(data)
                    setSubmitting(false)
                }}>
                {() => (
                    <Form>
                        <Field placeholder="Product Title" name="title" type="input" /><br />
                        <label>
                            <Field type="checkbox" name="tags" value="tops" />
                            Tags - Tops
                        </label>
                        <label>
                            <Field type="checkbox" name="tags" value="bottoms" />
                            Tags - bottoms
                        </label><br />
                        <Field placeholder="Product price" name="price" type="number" /><br />
                        <label>
                            <Field type="checkbox" name="categories.horse" value="schabrak" />
                            Häst - Schabrak
                        </label>
                        <label>
                            <Field type="checkbox" name="categories.horse" value="accessories" />
                            Häst - Accessories
                        </label><br />
                        <label>
                            <Field type="checkbox" name="categories.rider" value="accessories" />
                            Ryttare - Accessories
                        </label>
                        <label>
                            <Field type="checkbox" name="categories.rider" value="tops" />
                            Ryttare - Överdelar
                        </label><br />
                        <label>
                            <Field type="checkbox" name="variation.sizes" value="xxs" />
                            XXS
                        </label>
                        <label>
                            <Field type="checkbox" name="variation.sizes" value="xs" />
                            XS
                        </label>
                        <label>
                            <Field type="checkbox" name="variation.sizes" value="s" />
                            S
                        </label>
                        <label>
                            <Field type="checkbox" name="variation.sizes" value="m" />
                            M
                        </label>
                        <label>
                            <Field type="checkbox" name="variation.sizes" value="l" />
                            L
                        </label>
                        <label>
                            <Field type="checkbox" name="variation.sizes" value="xl" />
                            XL
                        </label>
                        <label>
                            <Field type="checkbox" name="variation.sizes" value="xxl" />
                            XXL
                        </label><br />
                        <label>
                            <Field type="checkbox" name="variation.colors" value="red" />
                            Red
                        </label>
                        <label>
                            <Field type="checkbox" name="variation.colors" value="green" />
                            Green
                        </label>
                        <label>
                            <Field type="checkbox" name="variation.colors" value="blue" />
                            Blue
                        </label><br />
                        <label>
                            <Field type="checkbox" name="variation.seat" value="halfseat" />
                            Half seat
                        </label>
                        <label>
                            <Field type="checkbox" name="variation.seat" value="fullseat" />
                            Full seat
                        </label><br />
                        <label>Set Feautured image: </label>
                        <input type="file" onChange={(e) => setFile(e.target.files)} /><br />
                        <label>Set additional images: </label>
                        <input type="file" multiple onChange={(e) => setFiles(e.target.files)} /><br />
                        <button type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
