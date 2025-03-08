import { CustomButtonParams } from '../../../types'
import { Button } from '@mui/material'
import "./index.css"
import { useDispatch } from 'react-redux'
import { changePage } from '../../store/globalSlice'
const CustomButton = (params: CustomButtonParams) => {
    const handleClick = () => {

        //change selected page
        dispatch(changePage({
            pageName: params.text
        }))
    };
    const dispatch = useDispatch();

    return (
        <Button className={`custom-button ${params.selected ? "selected" : ""}`} onClick={() => handleClick()}>
            <div className='custom-button-content'>
                {params.icon}
                {params.text}
            </div>
        </Button>
    )
}

export default CustomButton