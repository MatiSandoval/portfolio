
import styles from "./App.module.css"
import { NavBar } from "./components/NavBar/NavBar"
import { Hero } from "./components/Hero/Hero"
import { About} from "./components/About/About"
import { Experience } from "./components/Experience/Experience"
import { Projects } from "./components/Projects/Projects"
import { Contact } from "./components/Contact/Contact"
import {Certificate } from "./components/Certificates/Certificate"
function App() {
  

  return (
    <>
      <div className={styles.App}>
        <NavBar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certificate/>
        <Contact/>
      </div>
    </>
  )
}

export default App
