import { SubNav } from "../../components/navigation/subnav/SubNav"
import { NewCategory } from "./createnewcategory/NewCategory"
import { NewProductView } from "./createnewproduct/NewProductView"
import { NewSubCategory } from "./createnewsubcategory/NewSubCategory"

import './AdminView.scss'


export const AdminView = () => {
    return (
        <div className="adminviewcontainer">
            <SubNav>
                <NewProductView title="New product" />
                <NewCategory title="New category" />
                <NewSubCategory title="New sub-category" />
            </SubNav>
        </div>
    )
}
