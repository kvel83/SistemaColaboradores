import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import ListWorkers from "./components/listWorkers/listWorkers";
import SearchWorker from "./components/searchWorker/searchWorker";
import CreateWorker from "./components/createWorker/createWorker";
import { BaseColaboradores } from "./data/colaboradores";

function App(){
    const [colaboradoresList, setColaboradoresList] = useState(BaseColaboradores);
    const [searchWorker, setSearchWorker] = useState('');
    return (
            <div className="container">
                <SearchWorker colaboradores = {setSearchWorker}/>
                <hr/>
                <CreateWorker colaboradores = {colaboradoresList} setColaboradores = {setColaboradoresList}/>
                <hr/>
                <ListWorkers colaboradores = {colaboradoresList} searchWorker = {searchWorker} setColaboradores = {setColaboradoresList}/>
            </div>
        );



}

export default App;