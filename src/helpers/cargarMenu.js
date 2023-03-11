import MOCK_DATA from './../data/MOCK_DATA.json' 


export const cargarMenu = () =>{
        
    return new Promise ( (resolve,reject)=>{
 
        setTimeout(()=>{
            resolve(MOCK_DATA)
        },2000)
    }
    ) 
}