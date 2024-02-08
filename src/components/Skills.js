import './Skills.css'

function Skills() {
    return (
      <div id="skills" className="bg-light">
        <h2 className="second-heading width-effect text-center">My skills:</h2>
        <ul className="grid">
            <li>
              <img src="imgs/JavaScript_logo.svg" alt="JavaScript" />
              <p>JavaScript</p>
            </li>
            <li>
              <img src="imgs/React-logo.svg" alt="React" />
              <p>React</p>
            </li>
            <li>
              <img src="imgs/jquery_logo.svg" alt="jQuery" />
              <p>jQuery</p>
            </li>
            <li>
              <img src="imgs/Git-logo.svg" alt="Git" />
              <p>Git</p>
            </li>
        </ul>
    </div>
    );
  }
  
export default Skills;