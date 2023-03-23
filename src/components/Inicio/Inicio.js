import './Inicio.css'
export const Inicio = () => {


    return (

        <div className="containerIni" >
            <div className='containerIni__cont'>
            <h1 className='containerIni__cont__titulo'> Bienvenidos a Di.Ci. Burguers</h1>
            <p className='containerIni__cont__p'>Las mejores hamburguesas de Villa Devoto. Hechas con AMOR</p>

            <div className='cont__onepage'>
                <div className='container__onepage__options'>Hamburguesas</div>
                <div className='container__onepage__options'>Acompañamientos</div>
                <div className='container__onepage__options'>Minutas</div>
                
            </div> 
            </div>
        </div>
    )


}
export default Inicio