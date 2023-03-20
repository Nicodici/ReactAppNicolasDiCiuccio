import MOCK_DATA from './../data/MOCK_DATA.json' 


export const busquedaporId = (itemId) =>{
        
    return new Promise ( (resolve,reject) => {
 
        setTimeout(()=>{
            resolve(MOCK_DATA.find(prod => prod.id === Number(itemId)))
            } , 1500)

    }
    )
    }