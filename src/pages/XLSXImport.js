import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import TablaDin2 from './TablaDin2';
import ExcelTable from './ExcelTable';

function XLSXImport(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const file = await fetch('ReactPortfolio/excelTest.xlsx');
            const fileData = await file.arrayBuffer();
            const workbook = XLSX.read(fileData, { type: 'array' });
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            setData(jsonData);
        };

        fetchData();
    }, []);

    return (
        <div className="bodyProject">
            <div className="file">
                <div className="textPa">

                    <div className="titleProject">   XLS analisis</div>
                    <div className="bodyp">
                        <div className="titleProject" >Tabla de datos del archivo Excel</div>
                        <ExcelTable data={data} />

                    </div>
                </div>
             
            </div>
            <div className="file">
                <div className="textPa">
                    <div className="titleProject">   Input</div>
                    <div>Select Data</div>
                </div>
            </div>
            </div>
            
    );
} export default XLSXImport;