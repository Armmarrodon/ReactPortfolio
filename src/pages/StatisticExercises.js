import React, { useEffect, useState, useRef } from 'react';

import Boxplot, { computeBoxplotStats } from 'react-boxplot'

import TablaDin2 from './TablaDin2';



function StatisticExercises(props) {
    const [numerosBox, setNumerosBox] = useState('');
    const [numeros, setNumeros] = useState('');
    const [resultadoMedia, setResultadoMedia] = useState('');
    const [resultadoMediana, setResultadoMediana] = useState('');
    const [resultadoDT, setResultadoDT] = useState('');
    const [tablaFrecAbsoluta,setTablaFrecAbsoluta]=useState('')
    const [dataBox, setDataBox] = useState([
        14, 15, 16, 16, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 19, 19, 19, 20,
        20, 20, 20, 20, 20, 21, 21, 22, 23, 24, 24, 29,
    ])
    const [minDataBox, setMinDataBox] = useState(0);
    const [maxDataBox, setMaxDataBox] = useState(30);

    const calcularBoxData = () => {
        // Convertir la cadena de texto en un array de números
        const numerosArray = numerosBox.split(",").map(Number);

        // Actualizar el estado del array de datos
        setDataBox(numerosArray);

        // Calcular el mínimo y el máximo
        const min = Math.min(...numerosArray);
        const max = Math.max(...numerosArray);

        // Actualizar los estados del mínimo y el máximo
        setMinDataBox(min);
        setMaxDataBox(max);
    };

    const calcularMedia = () => {
        // Convertir la cadena de texto en un array de números
        const numerosArray = numeros.split(",").map(num => parseFloat(num));

        // Calcular la suma de los números
        const suma = numerosArray.reduce((acc, num) => acc + num, 0);

        // Calcular la media
        const media = suma / numerosArray.length;

        // Mostrar el resultado
        setResultadoMedia(`La media es: ${media}`);
    };
   
        const calcularMediana = () => {
            // Convertir la cadena de texto en un array de números
            const numerosArray = numeros.split(",").map(num => parseFloat(num));

            // Ordenar el array de números de forma ascendente
            numerosArray.sort((a, b) => a - b);

            // Calcular la mediana
            let mediana;
            const mitad = Math.floor(numerosArray.length / 2);
            if (numerosArray.length % 2 === 0) {
                mediana = (numerosArray[mitad - 1] + numerosArray[mitad]) / 2;
            } else {
                mediana = numerosArray[mitad];
            }

            // Mostrar el resultado
            setResultadoMediana(`La mediana es: ${mediana}`);
        };
    const calcularDesviacionTipica = () => {
        // Convertir la cadena de texto en un array de números
        const numerosArray = numeros.split(",").map(num => parseFloat(num));

        // Calcular la media
        const media = calcularMediaF(numerosArray);

        // Calcular la suma de los cuadrados de las diferencias
        const sumCuadradosDiferencias = numerosArray.reduce((acc, num) => {
            const diferencia = num - media;
            return acc + diferencia * diferencia;
        }, 0);

        // Calcular la desviación típica
        const desviacionTipica = Math.sqrt(sumCuadradosDiferencias / numerosArray.length);

        // Mostrar el resultado
        setResultadoDT(`La desviacion tipica es: ${desviacionTipica}`);
    };

    const calcularMediaF = (array) => {
        const suma = array.reduce((acc, num) => acc + num, 0);
        return suma / array.length;
    };
    const datos = [
        { x1: 'FA', x2: 3, x3: 16, x4: 20 ,x5:10,x6:1},
       
    ];
    const datos2 = [
        { valor1: 'Dato 1', valor2: 'Dato 2', valor3: 'Dato 3' },
        { valor1: 'Dato 4', valor2: 'Dato 5', valor3: 'Dato 6' },
        // ... más datos
    ];
  
  
   

    return (
        <div className="bodyProject">
            <div className="file">
             
              
                <div className="textPa">

                    <div className="titleProject">   3 fundamentals descriptive analysis</div>
                    <div className="bodyp">
                        <div>  <p>Ingrese los numeros separados por comas:</p>
                            <input type="text" style={{ width: '1000px' }} value={numeros} onChange={e => setNumeros(e.target.value)} />
                        </div>
                        <div className="textPa3">
                            <div className="titleProject2">  Media</div>
                        <button onClick={calcularMedia}>Calcular media</button>
                        <p>{resultadoMedia}</p>
                  </div>
                     
                        <div className="textPa3">

                            <div className="titleProject2">  Mediana</div>

                   
                            <button onClick={calcularMediana}>Calcular mediana</button>
                            <p>{resultadoMediana}</p>
                        </div>
                        <div className="textPa3">

                        <div className="titleProject2">  Desviacion tipica</div>


                        <button onClick={calcularDesviacionTipica}>Calcular desviacion tipica</button>
                        <p>{resultadoDT}</p>
                    </div>
                     </div>
                </div>
            </div>
            <div className="file">
                <div className="textPa">

                    <div className="titleProject">   Datos Agrupados</div>
                    <div className="bodyp">
                <div className="textPa2">
          
                <div>Tabla frecuencia Absoluta</div>
                    <table className="tabla">
                    <thead>
                        <tr>
                            <th>xi</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>10</th>
                        </tr>
                    </thead>
                    <tbody >
                        {datos.map(dato => (
                            <tr>
                                <td>{dato.x1}</td>
                                <td>{dato.x2}</td>
                                <td>{dato.x3}</td>
                                <td>{dato.x4}</td>
                                <td>{dato.x5}</td>
                                <td>{dato.x6}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                    </div>
                    <div className="textPa2">
                    <div>Tabla Intervalos</div>
                    <table className="tabla">
                        <thead>
                            <tr>
                                <th>intervalos</th>
                                <th>[60,63)</th>
                                <th>[63,66)</th>
                                <th>[66,69)</th>
                                <th>[69,72)</th>
                                <th>[72,75)</th>
                            </tr>
                        </thead>
                        <tbody >
                            {datos.map(dato => (
                                <tr>
                                    <td>n</td>
                                    <td>5</td>
                                    <td>18</td>
                                    <td>42</td>
                                    <td>27</td>
                                    <td>8</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                </div>
              

            </div>
            </div>
            <div className="file">
                <div className="textPa">

                    <div className="titleProject">   Diagrama de cajas y bigotes</div>
                    <div className="bodyp">
                        <div>
                            <div>  <p>Ingrese los numeros separados por comas:</p>
                                <input type="text" value={numerosBox} style={{ width: '1000px' }}  onChange={e => setNumerosBox(e.target.value)} />
                                <button onClick={calcularBoxData}>Calcular Box</button>
                            </div>
                            <Boxplot
                                className="full-width"
                                height="100"
                                width="1000"
                                orientation="horizontal"
                                min={minDataBox}
                                max={maxDataBox}
                                stats={computeBoxplotStats(dataBox)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default StatisticExercises;