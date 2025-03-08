import { AgGridReact } from 'ag-grid-react'
import React, { useState } from 'react'
import {
    ColDef
    ,
    ValueFormatterParams
} from "ag-grid-community";

import { readExcel } from '../utils/utils';

interface RowData {
    make: string,
    model: string,
    price: number,
    electric: boolean,
    color: "Black" | "Blue" | "White"
};

const Grid = () => {
    const [rowData, setRowData] = useState<RowData[]>([
        { make: "Tesla", model: "Model Y", price: 64950, electric: true, color: "Black" },
        { make: "Ford", model: "F-Series", price: 33850, electric: false, color: "Black" },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false, color: "Blue" },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false, color: "White" },
    ]);
    const columnDefs: ColDef<RowData>[] = [
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        {
            headerName: "Price",
            field: "price",
            valueFormatter: (params: ValueFormatterParams<RowData, number>) => {
                // params.value: number
                return "£" + params.value;
            },
        },
        { headerName: "Electric", field: "electric" },
        { headerName: "Color", field: "color" }

    ];
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            let files = event.target.files;
            let arrBuff = await files[0].arrayBuffer();
            let workBook = await readExcel(arrBuff);

            let stores = workBook.Sheets["Stores"];

            console.log(stores["!ref"]);
        }
    };
    return (
        <div style={{ height: 500, width: "80%" }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
            />

            <input type="file" name='xl' onChange={(e) => handleFileChange(e)} />
        </div>
    )
}

export default Grid