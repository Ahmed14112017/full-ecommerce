export const getdata=async(endpoint:string)=>{
    try{
        const response=await fetch(endpoint,{
            method:"GET",
            headers:{
                "content-type":"application/json"

            }
            
        })
        if(!Response){
            throw new Error("Data fetching Error"+response?.statusText)
        }
        const data=await response.json();
        return data

    }

    catch (error){
console.log("Error while fetching data",error)
    }
    
}
