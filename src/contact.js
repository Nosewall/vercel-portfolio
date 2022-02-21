const Contact = () => {
  return ( 
    <div className="contact">
      <p className="pingMe">Ping me</p>
      <p className="contactInfo">I'd love to collaborate some time soon! You can reach me using any of the links below, or check the attachment to get my resume</p>
      <div className="contactLinks">
      <a href="https://www.linkedin.com/in/nolan-nordwall/" className="contactLink" src="">
        <img src="/images/linkedin.png" alt="linkedIn" className="contactImg"/>
      </a>
      <a href="mailto::nolannordwall@gmail.com" className="contactLink">
        <img src="/images/email.png" alt="email" className="contactImg"/>
      </a>
      <a href="https://drive.google.com/file/d/1txy6-Ot7Tr1VypftxgarcQIjI8v5mBDh/view?usp=sharing" className="contactLink">
        <img src="/images/attach.png" alt="attachment" className="contactImg"/>
      </a>
      <a href="https://github.com/Nosewall" className="contactLink">
        <img src="/images/github.png" alt="github" className="contactImg"/>
      </a>
      </div> 
    </div>
   );
}
 
export default Contact;