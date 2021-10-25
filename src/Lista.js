import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { Table,Button } from 'reactstrap';
const Lista = (props) => {
    const [pelicula, setPelicula] = useState([]);
    const [valor, setValor] = useState(0);
    useEffect(() => {
        getFilms();       
    }, [])
    const getFilms = async () => {
        const resp = await axios.get('https://swapi.dev/api/films')
        setPelicula(resp.data.results);
    }
    return (
    <div className="p-2 bg-dark text-white"  >
        <div className="text-center"  >
            <h1>Practica 6 Auxiliatura</h1>
            <br />
            <h5>PETICIONES HTTP Y LISTAS EN REACT</h5>
            <br />
            <br />
            
        </div>
        <div > 
            <Table dark bordered>
                <tbody>
                <tr>
                        <th scope="row">Estudiiante</th>
                        <td>Univ. Ludim Jezrreel Puma Sunagua</td>
                    </tr>
                    <tr>
                        <th scope="row">Materia</th>
                        <td>Seminario de Sistemas</td>
                    </tr>
                    <tr>
                        <th scope="row">Docente</th>
                        <td>Ing. Ditmar Castro</td>
                    </tr>
                    <tr>
                        <th scope="row">Auxiliar</th>
                        <td>Univ. Grover Choque</td>
                    </tr>
                </tbody>
            </Table>
        </div>
        {valor < pelicula.length ? (<Table dark bordered>
        
        <thead>
            <tr className="text-center">
                <th>TITULO</th>
                <th>PARRAFO DE ENTRADA</th>
                <th>FECHA DE ESTRENO</th>
            </tr>
        </thead>
        <tbody >
            <tr className="text-center" key={valor}>
            <th scope="row">{pelicula[valor].title}</th>
            <td>{pelicula[valor].opening_crawl}</td>
            <td>{pelicula[valor].release_date}</td>
            </tr>
            
        </tbody>
        </Table>): ''}
        <div className="text-center">
            <Button outline color="primary" onClick={()=>{setValor(valor+1)}}>Siguiente</Button>{' '}
            
        </div>
    </div>
    )
}
export default Lista;