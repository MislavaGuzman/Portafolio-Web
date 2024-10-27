import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { portafolioTheme } from "./"

export const AppTheme = ({children}) => {
return (
<ThemeProvider theme={portafolioTheme}>
    {/* <GlobalStyle /> */}
    <CssBaseline />
    {children}
    </ThemeProvider>



)
}