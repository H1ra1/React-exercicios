import React from 'react';

//Outra forma de retornar mais de um elemento é usando um array, é preciso setar uma key qualquer pra cada elemento
export default props => [
    <h1 key='h1'>Bom dia, {props.nome}!</h1>,
    <h2 key='h2'>Idade: {props.idade}</h2>
]


//outra forma de envolver jsx sem precisar criar uma div é usando <React.Fragment>

// export default props => 
//     <React.Fragment>
//         <h1>Bom dia, {props.nome}!</h1>
//         <h2>Idade: {props.idade}</h2>
//     </React.Fragment>;

// export default props => 
//     <div>
//         <h1>Bom dia, {props.nome}!</h1>
//         <h2>Idade: {props.idade}</h2>
//     </div>;