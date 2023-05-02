import { useSession, signIn, signOut } from "next-auth/react"
import Avatar from '@mui/material/Avatar';
import { Button } from "@mui/material";


const Login=()=>{
  const { data: session } = useSession()

  if(session) {
    return <>
      <p>Welcome {session?.user?.name}</p>
      <Button variant="contained" color="error" onClick={() => signOut()}>Sign out</Button>
    </>
  }
  return <>
    <h2>Please Login</h2> <br/>
    <Button variant="contained" color="success" onClick={() => signIn()}>Sign in</Button>
  </>
}

export default Login
