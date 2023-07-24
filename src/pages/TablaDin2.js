import React from 'react';

function TablaDin2({ datos }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Columna 1</th>
                    <th>Columna 2</th>
                  
                </tr>
            </thead>
            <tbody>
                {datos.map((fila, index) => (
                    <tr key={index}>
                        <td>{fila.valor1}</td>
                        <td>{fila.valor2}</td>
                      
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TablaDin2;