import React from 'react';
import ReactDOM from 'react-dom';

// import Saudacao from './componentes/saudacao';
import Pai from './componentes/pai';
import Filho from './componentes/filho';
// import BomDia from './componentes/bomDia';
// import {BoaTarde, BoaNoite} from './componentes/multiplos';

ReactDOM.render(
    <div>
        <Pai nome = "Serjão" sobrenome = "Inho" >
            <Filho nome = "Juquinha"/>
            <Filho nome = "Neuso" />
            <Filho nome = "Nininha" />
        </Pai>
        {/* <Saudacao tipo="Bom dia" nome="Lira" /> */}
    </div>
, document.querySelector('#root'))

// ReactDOM.render(
//     <div>
//         <BoaTarde nome="Lira"/>
//         <BoaNoite nome="Lira"/>
//     </div>
// , document.getElementById('root'));

