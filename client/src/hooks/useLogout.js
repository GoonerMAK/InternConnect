import { useAuthContext } from '../context/useAuthcontext'


export const useLogout = () => {
  const { dispatch } = useAuthContext()


  const logout = () => {
    // remove user from storage
    localStorage.clear();

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    
  }

  return { logout }
}