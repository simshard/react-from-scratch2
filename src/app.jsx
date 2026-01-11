import ReactDOM from 'react-dom/client'
import './app.css'

const app = document.getElementById('app')
const tech='Reakt und Vril'
let root = ReactDOM.createRoot(app)

function App() {
  return <h1 className="text-3xl font-bold underline text-red-700">Hello { tech}!</h1>
}

root.render(<App />)