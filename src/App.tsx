import { ThemeProvider } from 'styled-components'
import {BrowserRouter} from "react-router-dom"


import { GlobalStyle } from './styles/globals'
import { defaultTheme } from './styles/themes/default'
import { CyclesContextProvider } from './contexts/CyclesContext'
import { Router } from './Router'


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      
      <GlobalStyle />
    </ThemeProvider>
  )
}
