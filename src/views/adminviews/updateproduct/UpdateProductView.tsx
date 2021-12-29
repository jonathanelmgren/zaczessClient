import './UpdateProductView.scss'

import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import APIService from '../../../shared/api/service/APIService'

export const UpdateProductView = (props: any) => {
    const location = useLocation()
    const product: any = location.state

    let img = `http://localhost:3001/${product.featuredImage}`
    if (!product.featuredImage) img = 'https://picsum.photos/1300/1900'

    useEffect(() => {
        window.scrollTo(0, 0)
        console.log(product)
    },[])

    const addNewVariation = async (data: any) => {
        await APIService.createVariation(product._id, data)
    }

    return (
        <div className="updateProductViewWrapper">
            
        </div>
    )
}
