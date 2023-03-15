import MOCK_DATA from './../data/MOCK_DATA.json' 


export const busquedaporId = (itemId) =>{
        
    return new Promise ( (resolve,reject)=>{
 
        setTimeout(()=>{
            resolve(MOCK_DATA.find(prod => prod.id === itemId))
            },1500)

    }
    ) 
}

export default busquedaporId