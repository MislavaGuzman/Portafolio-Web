import { Navigate, Route, Routes } from 'react-router-dom'
import { ContactPage, HomePage } from '../pages'

export const PortafolioRoutes = () => {
return (
    <Routes>    
        <Route path="home" element={<HomePage/>}/>
        <Route path="contact" element={<ContactPage/>}/>
        <Route path="*" element={<Navigate to="/2portafolio/home"/>}/>
    </Routes>

)
}