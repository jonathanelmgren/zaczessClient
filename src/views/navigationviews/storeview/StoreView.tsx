import { useState } from 'react'

import { Products } from '../../../components/products/Products'
import './StoreView.scss'

export const StoreView = () => {
    const [filter, setFilter] = useState<string | undefined>(undefined)

    let title = 'Products'
    if (filter !== undefined) title = filter

    return (
        <div className="storeViewWrapper">
            <div className="filterWrapper">
                <div className="filterTitles">
                    <h3 className="horseFilterTitle" onMouseOver={() => document.getElementById('horseFilterView')!.style.display = 'block'}>Horse</h3>
                    <h3 className="riderFilterTitle" onMouseOver={() => document.getElementById('riderFilterView')!.style.display = 'block'}>Rider</h3>
                </div>
                <div style={{display: 'none'}} id="horseFilterView">
                    <div>
                        <h4 onClick={() => setFilter('Accessories')}>Accessories</h4>
                        <h6>Benlindor</h6>
                        <h6>Hästtäcken</h6>
                    </div>
                    <div>
                        <h6>Huvor</h6>
                        <h4>Schabrak</h4>
                        <h6>Dressyrschabrak</h6>
                        <h6>Hoppschabrak</h6>
                    </div>
                </div>
                <div style={{display: 'none'}} id="riderFilterView">
                    <div>
                        <h4>Ridbyxor</h4>
                        <h6>Pro</h6>
                        <h6>Ultra Light</h6>
                    </div>
                    <div>
                        <h4>Överdelar</h4>
                        <h6>Ridtröja</h6>
                        <h6>Toppar</h6>
                    </div>
                    <div>
                        <h4>Accessoarer</h4>
                        <h6>Mössa/Keps/Pannband</h6>
                        <h6>Ridstrumpor</h6>
                        <h6>Skärp</h6>
                    </div>
                </div>
            </div>
            <Products title={title} name='products' filter={filter} />
        </div>
    )
}
