import './About.css';

function About() {
    return (
      <div id="about" className="grid bg-dark">
        <div className="about-img">
            <img src="imgs/ProfilePic.jpg" alt="profile" id="front" />
            <img src="imgs/laptop-pixabay.jpg" alt="about" id="back" />
        </div>
        <div className="about-me">
            <h2 className="second-heading width-effect">About me:</h2>
            <p className="p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt aperiam qui recusandae
                tempore voluptatem in vel ab at, quidem veniam enim voluptas temporibus cum? Excepturi placeat obcaecati
                fuga dignissimos molestias.</p>
        </div>
        <div className="animacija">
            <img src="imgs/animation/icons8-windsurfing.gif" alt="Winsurfing" />
        </div>
    </div>
    );
  }
  
export default About;