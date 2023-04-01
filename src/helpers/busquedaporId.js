

export const busquedaporId = (itemId) =>{
        
    return new Promise ( (resolve,reject) => {
 
        setTimeout(()=>{
            resolve(doc.find(prod => prod.id === Number(itemId)))
            } , 1500)

    }
    )
    }