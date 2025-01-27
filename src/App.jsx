import './App.css'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Projects from './sections/Projects'
import About from './sections/About'
import Contact from './sections/Contact'

function App() {

  return (
    <main className='overflow-hidden'>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
