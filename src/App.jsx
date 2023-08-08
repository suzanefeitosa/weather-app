import {Sidebar} from './components/Sidebar'
import './global.css'
import styles from './App.module.css'
import { SidebarNav } from './components/SidebarNav'

function App() {
 
  return (
    <>
    <div className={styles.wrapper}>
     <Sidebar/>
     {/* <SidebarNav/> */}
     </div>
    </>
  )
}

export default App
