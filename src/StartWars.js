import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { Table,Button } from 'reactstrap';
const StartWars = (props) => {
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
    <div >
        <div className="p-2 bg-dark text-white text-center"  >
            <h1>Practica 6 Auxiliatura</h1>
            <br />
            <h5>PETICIONES HTTP Y LISTAS EN REACT</h5>
            <br />
            <br />
            
        </div>
        <div className="p-2 bg-dark text-white " > 
            <strong ><p className=""> Univ. Ludim Jezrreel Puma Sunagua</p></strong>
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
            <tr className="text-center" key={pelicula.title}>
            <th scope="row">{pelicula[valor].title}</th>
            <td>{pelicula[valor].opening_crawl}</td>
            <td>{pelicula[valor].release_date}</td>
            </tr>
            
        </tbody>
        </Table>): ''}
        <div className="text-center">
            <Button color="secondary" onClick={()=>{setValor(valor+1)}}>Siguiente</Button>{' '}
            
        </div>
    </div>
    
    )
}
export default StartWars;