import verbaacLogo from "/logo-icon.svg"
import verbaacFullLogo from './assets/logo/logo-full.svg'
// import './App.css'
import { Button } from "@/components/ui/button"
function App() {
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={verbaacFullLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={verbaacLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
      </div>
      
    </>
  )
}

export default App


