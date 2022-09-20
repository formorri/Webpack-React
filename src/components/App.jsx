import "../styles/index.scss";
import Recipes from './Recipes';
import Image from '../images/sponsor-1.webp';
import ImageSVG from '../images/frontpage-title.svg';

const App = () => {
    return (
        <>
            <section className="hero">
                <main>
                    <section>
                        <h1>React trial</h1>
                    </section>
                    <img src={Image} alt="image" width="100px" />
                    <img src={ImageSVG} alt="image" width="200px" />
                    <Recipes />
                </main>
            </section>

        </>
    )
}

export default App 
