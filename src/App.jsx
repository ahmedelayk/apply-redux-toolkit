import './App.css'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {

    return (
        <>
            <Header />
            <main>
                <Sidebar />
                <Form />
            </main>
        </>
    )
}

export default App
