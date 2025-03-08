import { fileURLToPath } from "url";
import * as XLSX from "xlsx";

export const readExcel = async (arrBuff: ArrayBuffer): Promise<XLSX.WorkBook> => {
    const workbook = await XLSX.read(arrBuff);
    return workbook;
}

