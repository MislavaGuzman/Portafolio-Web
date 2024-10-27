import { Route, Routes } from "react-router-dom"
import { ProyectsPage } from "../ProyectsPage"

export const ProyectRoutes = () => {
return (
<Routes> 
    <Route path="/" element={ <ProyectsPage/> }/>
    <Route path="*" element={ <Navigate to="/"/> }/>
    </Routes>
)
}