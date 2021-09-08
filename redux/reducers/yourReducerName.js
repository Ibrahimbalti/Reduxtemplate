export default (yourinitialsatename, action)=>{

    switch(action.type){
        
        case "yourcase":{
           return [...yourinitialsatename, action.payload]
        }
        
        default:{
            return yourinitialsatename
        }

    }

}