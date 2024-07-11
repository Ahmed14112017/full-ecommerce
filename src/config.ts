
interface config{
baseurl:string
}
const checkConfig=(server:string):config | {}=>{
    let config:config | {}={}
    switch (server){
        case "production":
            config={
                baseurl:"",

            }
            break;
            case "local":
                config={
                    baseurl:"http://localhost:8000"
                };
                break;
                default:
                break;
    }
    return config 
}
export const selectserver="local";
export const config= checkConfig(selectserver)as config;