import React, { useEffect, useState } from "react";
import { Search } from "react-bootstrap-icons"

import "./searchWorker.css"

const SearchWorker = (props) =>{
    const [searchWorker, setSearchWorker] = useState ('');
    const [searchKey, setSearchKey] = useState(0);
    const handleEvent = (e) =>{
        setSearchWorker(e.target.value);
        //handleChange();
    }
    useEffect(()=> {
        setSearchKey (prevSearchKey => prevSearchKey +1);
        handleChange();
    },[searchWorker])
    const handleChange=()=>{
        props.colaboradores(searchWorker,searchKey);
    }
    return(
        // eslint-disable-next-line react/jsx-no-duplicate-props
        <div className="header bg-dark text-light mt-3 pt-3 pb-3 ps-2 d-flex justify-content-between">
            <h1>Buscador de Colaboradores</h1>
            <div className="hstack gap-2">
                <input type="text" id="nameWorker" placeholder="Busca un colaborador" value={searchWorker} onChange={handleEvent}/>
                <label htmlFor="nameWorker" className="me-2"><Search color="white"/></label>
            </div>
        </div>
    );

}

export default SearchWorker;