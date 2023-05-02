import { FC } from 'react'

interface SideMenuProps {
  
}

const SideMenu: FC<SideMenuProps> = ({}) => {
  return (
    <ul>
        <li>Analytics</li>
        <li>Profile</li>
        <li>Settings</li>
    </ul>
  )
}

export default SideMenu