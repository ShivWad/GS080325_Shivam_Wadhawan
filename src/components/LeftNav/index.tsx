import "./index.css"
import CustomButton from './CustomButton'
import { Category, DesignServices, InsertChart, Store } from '@mui/icons-material'
import { useSelector } from 'react-redux';
import { CustomButtonParams, InitialState } from "../../../types";
import { ReactNode } from "react";
import { IRootState } from "../../store/store";

const LeftNav = () => {

    //had to seach a bit how to get type for the state here.
    const selectedPage = useSelector((state: IRootState) => state.globalSlice.selectedPage);

    //we will map over this array
    let pagesArr: CustomButtonParams[] = [
        {
            text: "Store",
            icon: <Store />
        },
        {
            text: "Sku",
            icon: <Category />
        },
        {
            text: "Planning",
            icon: <DesignServices />
        },
        {
            text: "Charts",
            icon: <InsertChart />
        },
    ]

    return (
        <div className='left-nav'>
            {pagesArr.map((customButt, index): ReactNode => {
                return (
                    <CustomButton key={index} text={customButt.text} icon={customButt.icon} selected={selectedPage == customButt.text} />
                )
            })}
        </div>
    )
}

export default LeftNav