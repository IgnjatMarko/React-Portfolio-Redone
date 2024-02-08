import './Contact.css';

function Contact() {
    return (
      <div id="contact" className="bg-light">
        <h2 className="second-heading width-effect">Contact me:</h2>
        <div className="grid bottom-section">   
            <form action="mailto:ignjatovicmarko2023@gmail.com" method="post" enctype="multipart/form-data">
                <label for="name">Name:</label>
                <input type="text" name="name" id="name" placeholder="Pete Peterson" />
                <label for="email">Email:</label>
                <input type="text" name="email" id="email" placeholder="pete@mail.com" />
                <label for="comment">Message:</label>
                <textarea name="comment" id="comment" cols="30" rows="20" placeholder="Your message..."></textarea>
                <input type="submit" value="Send" className="btn" />
                <input type="reset" value="Reset" className="btn" />
            </form>
            <div className="youtube">
                <iframe src="https://www.youtube.com/embed/LjtmAiaj1pQ?si=hOYyjn1t3V9v_V2B"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
        </div> 
        
    </div>
    );
  }
  
export default Contact;