import { createContext,useEffect,useState,} from "react";



export const AuthContext = createContext()

export const  AuthContextProvider =({children})=>{
    const [users,setUsers] = useState([])
    async function getUsers(){
        let res = await fetch('http://localhost:8080/users')
        .then ((data)=> data.json())
        setUsers(res)
    }
    useEffect(()=>{
        getUsers()
    },[])

    const [auth,setAuth] = useState(false)

    const handleAuth =(s)=>{
            setAuth(s)
    }




    
    
    return <AuthContext.Provider value={{users,auth,handleAuth}}>
            {children}
           </AuthContext.Provider>
}


//import { createContext,useState,useEffect } from "react";



// export const ApiContext = createContext()

// export const  ApiContextProvider =({children})=>{
//     const [data,setData] = useState([])
//     async function getData(){
//         let res = await fetch(`http://localhost:8080/watches`)
//         .then ((data)=> data.json())
//         setData(res)
//     }
//     useState(()=>{
//         getData()
//     },[])
//     return <ApiContext.Provider value={{data}}>
//             {children}
//            </ApiContext.Provider>
// }
