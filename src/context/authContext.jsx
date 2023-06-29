import {createContext,useEffect,useState} from "react"
import axios from "axios"

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    // const [currentUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    const [currentUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    const [forgotEmail,setForgotEmail] = useState((localStorage.getItem("email")) || null)
    const [isPaid,setIsPaid] = useState(false)

    const login = async(inputs)=>{
       const res = await axios.post("/auth/login",inputs);
       setCurrentUser(res.data)
      //  console.log(res.data)
    }

      const forgotPassword = async(email2)=>{
       const res = await axios.post("/auth/password-reset",email2);
       setForgotEmail(res.data.msg)
      //  console.log(res)
    }


   //  const update = async(inputs)=>{
   //     const res = await axios.put("/post/:id",inputs);
   //     setCurrentUser(res.data)
   //  }
    const logout = async(inputs)=>{
        await axios.post("http://localhost:8080/api/auth/logout");
        setCurrentUser(null)
     }

    

     useEffect(()=>{
     
   localStorage.setItem("user" || "email",JSON.stringify(currentUser,forgotEmail))

     },[currentUser,forgotEmail]);
     
     return <AuthContext.Provider value={{currentUser,forgotEmail,isPaid,setIsPaid,login,logout,forgotPassword}}>{children}</AuthContext.Provider>
}