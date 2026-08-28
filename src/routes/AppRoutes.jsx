import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from '../pages/Home/Home'
import Navbar from '../components/Navbar/Navbar'
import DS3 from '../pages/DS3/Ds3'
import Galerias from '../pages/Galerias/Galerias'
import Ubicacion from '../pages/Ubicacion/Ubicacion'
import Footer from '../pages/Footer/Footer'

const AppRouter = () =>{
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />  
                <Route path='/ds3' element={<DS3 />} /> 
                <Route path='/galerias' element={<Galerias />} /> 
                <Route path='/ubicacion' element={<Ubicacion />} /> 
            </Routes>
            <Footer/>
        </Router>
    )
}
export default AppRouter