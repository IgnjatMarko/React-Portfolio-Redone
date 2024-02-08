import './Headline.css'

function Headline() {
    return (
      <div id="headline" className="grid">
        <ul className="socials">
                <li><a href="#top"><i class="lni lni-instagram"></i></a></li>
                <li><a href="#top"><i class="lni lni-whatsapp"></i></a></li>
            </ul>
            <div className="headline-text">
                <h1 className="main-heading width-effect">Curriculum Vitæ</h1>
                <p>for <span className="width-effect bold">Marko Ignjatović</span></p>
            </div>
      </div>
    );
  }
  
export default Headline;