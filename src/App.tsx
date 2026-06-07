import { useState } from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router'
import Navbar from './navbar'
import "./App.css"
import HomePage from './routes/home'
import Plans from './routes/plans'
import ContactModal from './components/contactmodal/contactmodal'
import Purchase from './routes/purchase'

function App() {

  const [contactModal, setContactModal] = useState(false);

  return (
    <BrowserRouter>
      <ContactModal open={contactModal} handleClose={() => setContactModal(false)}/>
      <Navbar setContactModal={() => setContactModal(!contactModal)}/>
      
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path='plans' element={<Plans handleClose={() => setContactModal(!contactModal)}/>}>
          
        </Route>
        <Route path='plans/:package_name/purchase' element={<Purchase/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
