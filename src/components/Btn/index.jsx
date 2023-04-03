import './Btn.css';

const Btn=({valor, setCount})=> {
    const aoClicado = () => {
        setCount((count) =>count + valor);
        console.log('click')
    }
    return(
        <div className='botao'>
            <button onClick={aoClicado}>{valor}</button>
        </div>
    )
}

export default Btn;