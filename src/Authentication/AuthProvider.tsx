import { useContext, createContext, useReducer, useEffect } from "react";

type user = {
  email: String,
  username: String,
  Id: String 
}

const initialUser: user = {email: '', username: '', Id: ''} 

const init: any = {};

export const AuthContext = createContext(init)

export const authReducer = (state: any, action: any) => {

  switch (action.type){
    case 'Login':
      return { user: action.payload  }
    case 'Logout':
      return null
    default:
      return state
  }
}

export const AuthContextProvider = ({children} : {children: any}) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: initialUser
  })

  useEffect(() => {

  const localstorageUser = JSON.parse(localStorage.getItem('user') || '{}')

  localstorageUser ? dispatch({type: 'Login', payload: localstorageUser}) : dispatch({type: 'Logout', payload: null})

  },[])

  console.log('AuthConetxt state', state)

  

  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};