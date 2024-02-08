import './Projects.css';

function Projects() {
    return (
      <div id="projects" className="bg-dark">
        <h2 className="second-heading width-effect text-center">My projects:</h2>
        <div className="work grid">
            <a href="#projects" class="container1">
                <img src="imgs/projects/jack-hamilton-cards-unsplash.jpg" alt="Cards" class="slika1" />
                <div className="overlay1"><div className="title1 bold">Poker Web</div></div>
            </a>
            <a href="#projects" class="container2">
                <img src="imgs/projects/jonathan-cooper-tow-truck-unsplash.jpg" alt="Tow-Truck" class="slika2" />
                <div className="overlay2"><div className="title2 bold">Tow Truck Shop</div></div>
            </a>
            <a href="#projects" class="container3">
                <img src="imgs/projects/game-magazines.jpg" alt="Game-Magz" class="slika3" />
                <div className="overlay3"><div className="title3 bold">Gamezine.rs</div></div>
            </a>
        </div>
    </div>
    );
  }
  
export default Projects;