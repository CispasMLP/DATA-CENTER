
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import Dashboard from '../components/Dashboard';
import Login from '@/components/Login';
import { useSession } from 'next-auth/react';



export default function Home() {
  const {data: session} = useSession();
  
  return (
    <main>
      <Header/>
      { session &&(
        <>
          <SideMenu />
          <Dashboard />
        </>
      )}
      <Login/>
    </main>
  )
}
