import { useState } from "react";

export default function Pokecard() {
    let [poke, setPoke] = useState('');
    let [imgURL, setImgURL] = useState('');
    let [peso, setPeso] = useState('');

    async function carregaDados() {
        const txPoke = document.querySelector('#txPoke').value;    
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${txPoke}`);
        const dados = await response.json();
        setImgURL(dados['sprites']['front_default']);
        setPoke(txPoke);
        setPeso(dados['weight']);

       /* fetch(`https://pokeapi.co/api/v2/pokemon/${txPoke}`)
            .then(response => response.json())
            .then(dados => {
                setImgURL(dados['sprites']['front_default']);
                setPoke(txPoke);
            });

        */
    }

    return (
    <>
    <img src={`${imgURL}`} width='200px'></img>
    <p>{poke}</p>
    <p>{`Peso: ${peso}`}</p>
    <input type="text" id='txPoke'></input>
    <button id='btPoke' onClick={carregaDados}>Poke</button>        
    </>
    )
}
