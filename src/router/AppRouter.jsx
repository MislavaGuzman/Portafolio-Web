import { Route, Routes } from "react-router-dom"
import { ProyectRoutes } from "../proyects/router/ProyectRouter"
import { PortafolioRoutes } from "../portafolio/router/PortafolioRoutes"

export const AppRouter = () => {
return  (

<Routes>
    {/*Home */}
    <Route path="/portafolio/*" element={<PortafolioRoutes/>}/>
     {/*Proyects */}
     <Route/>
       {/*** Todo:Se debe cambiar a portafolio... */}
       <Route path="/*" element={<PortafolioRoutes/>}/>
       <Route/>
</Routes>

)
}