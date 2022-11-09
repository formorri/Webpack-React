import "../styles/index.scss";
import Navbar from './Navbar';
import Hero from './Hero';
import Stepper from './Stepper/Stepper';
import Showcase from './Showcase/Showcase';

const App = () => {
    return (
        <div className="global-container">
            <Navbar />
            <Stepper />
            <section>
                <Hero />
            </section>
            <section>
                <Showcase />
            </section>
            <section>sascc</section>
            <section>sascc</section>
        </div>
    )
}

export default App 
