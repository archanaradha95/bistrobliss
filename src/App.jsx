
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Menu from './Components/Menu'
import Pages from './Components/Pages'
import Contact from './Components/Contact.jsx'
import MenuData from './Components/MenuData.jsx'
import BookATable from './Components/BookATable.jsx'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path='/pages' element={<Pages />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/menuData' element={<MenuData />} />
          <Route path='/bookaTable' element={<BookATable />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
