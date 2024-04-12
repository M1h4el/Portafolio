import "./Styles/MainPage.css";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { BiLogoMongodb } from "react-icons/bi";
import { IconContext } from "react-icons";
import { GrContact } from "react-icons/gr";
import { FaFileDownload } from "react-icons/fa";
import { RiWhatsappLine } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { MdAttachEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { useState } from "react";
import preview2wanted from "../assets/2wanted.png"
import previewSolanotes from '../assets/Solanotes.png'
import previewEnvioSeguro1 from '../assets/EnvíoSeguro1.jpeg'
import previewEnvioSeguro2 from '../assets/EnvíoSeguro2.jpeg'

function MainPage() {

  const [downloadCV, setDownloadCV] = useState('Download');

  function handleCV() {

    window.location.href = "https://docs.google.com/document/d/1jzZ3hIfQmq53F6S6Rr33wKSPow6554_KB74def8BT24/export?format=pdf";
    
    setDownloadCV('Downloaded');
    
  }

  function handleContact(){

    let distance;
  
  if (window.innerWidth <= 1200) {
    distance = 9999;
  } else if (window.innerWidth > 1200) {
    distance = 900;
  }

  window.scrollTo({
    top: distance,
    behavior: 'smooth'
  })
  

  }

  function handleGit(){
    window.location.href = "https://github.com/M1h4el"
  }

  return (
    <>

      <container className="ContainerPresentation">

        <p>Hi, I'm</p>

        <div className="PresentationName">Miguel</div>
        
        <div className="PresentationName">Solano.</div>

        <p>Full Stack developer, passionate about Frontend development.</p>

        <div className="ButtonDiv">

          <button
            className="downloadCV"
            onClick={handleCV}
          > 

            <span className={downloadCV === 'Downloaded' ? "downloadText selected" : "downloadText"}>{downloadCV}</span>

            <IconContext.Provider value={{ size: 20 }}>

              <div style={{ marginTop: 4 }}>

                <FaFileDownload />

              </div>

            </IconContext.Provider>

          </button>

          <button className="downloadCV" onClick={handleContact}>
            <span className="downloadText">
            
              Contact me
              
            </span> 
            <IconContext.Provider value={{ size: 20 }}>

              <div style={{ marginTop: 4 }}>

                <GrContact />

              </div>

            </IconContext.Provider>

          </button>

        </div>

      </container>

      <container className="ContainerSkills">

        <div className="TextSkills">Skills</div>
        <div className="GridSkills">
          <div>
            <IconContext.Provider value={{ size: 50, color: "#f06529" }}>
              <div className="Logo">
                <FaHtml5 />
              </div>
            </IconContext.Provider>
            <p>HTML</p>
          </div>
          <div>
            <IconContext.Provider value={{ size: 50, color: "#2965f1" }}>
              <div className="Logo">
                <IoLogoCss3 />
              </div>
            </IconContext.Provider>
            <p>CSS</p>
          </div>
          <div>
            <IconContext.Provider value={{ size: 50, color: "#f0db4f" }}>
              <div className="Logo">
                <SiJavascript />
              </div>
            </IconContext.Provider>
            <p>Javascript</p>
          </div>
          <div>
            <IconContext.Provider value={{ size: 50, color: "#61dafb" }}>
              <div className="Logo">
                <FaReact />
              </div>
            </IconContext.Provider>
            <p>React.Js</p>
          </div>
          <div>
            <IconContext.Provider value={{ size: 50, color: "#3c873a" }}>
              <div className="Logo">
                <FaNode />
              </div>
            </IconContext.Provider>
            <p>Node.Js</p>
          </div>
          <div>
            <IconContext.Provider value={{ size: 50, color: "#00758f" }}>
              <div className="Logo">
                <GrMysql />
              </div>
            </IconContext.Provider>
            <p>MySQL</p>
          </div>
          <div>
            <IconContext.Provider value={{ size: 50, color: "#4DB33D" }}>
              <div className="Logo">
                <BiLogoMongodb />
              </div>
            </IconContext.Provider>
            <p>MongoDB</p>
          </div>
        </div>
      </container>

      <container className = "infoProy">

        <div className="boxPort2">
          
          <div className="title">
            Proyectos y Trabajos
          </div>

          <hr />

          <div className="ul1">

            <div className="list">

              <div className="contPreview">
              
                <div className="preview">

                  <img src={preview2wanted} alt="" className="image"></img>

                </div>

              </div>

              <p className="description">2wanted is an app where users can create pyramid schemes in rooms with customized prices and invite each other to earn money, this app works with a Bitcoin wallet.</p>

              <div className="iconList">

                <IconContext.Provider value={{ size: 35, color: "#61dafb" }}>

                <div className="Logo">

                  <FaReact />

                </div>

                </IconContext.Provider>

                <IconContext.Provider value={{ size: 35, color: "#3c873a" }}>

                  <div className="Logo">

                    <FaNode />

                  </div>

                </IconContext.Provider>

                <IconContext.Provider value={{ size: 35, color: "#4DB33D" }}>

                  <div className="Logo">

                    <BiLogoMongodb />

                  </div>

                </IconContext.Provider>

              </div>

            </div>  

            <div className="list">

              <div className="contPreview">

                <div className="preview">

                  <img src={previewSolanotes} alt="" className="image"></img>

                </div>

              </div>

              <p className="description">Solanotes is a web application designed with user registration and powered with CRUD, using relational databases.</p>

              <div className="iconList">

                <IconContext.Provider value={{ size: 35, color: "#61dafb" }}>

                <div className="Logo">

                  <FaReact />

                </div>

                </IconContext.Provider>

                <IconContext.Provider value={{ size: 35, color: "#3c873a" }}>

                  <div className="Logo">

                    <FaNode />

                  </div>

                </IconContext.Provider>

                <IconContext.Provider value={{ size: 35, color: "#00758f" }}>

                  <div className="Logo">

                    <GrMysql />

                  </div>

                </IconContext.Provider>

              </div>

            </div>

          </div>
          
          <div className="ul2">

            <div className="list">

              <div className="contPreview">

                <div className="preview" style={{justifyContent: "space-around"}}>

                  <img src={previewEnvioSeguro1} alt="" className="image2"></img>
                  <img src={previewEnvioSeguro2} alt="" className="image2"></img>

                </div>

              </div>

              <p className="description">Envíoseguro is a WhatsApp chatbot that promotes safety and management of purchases using payment gateways and methods to ensure the shipment of products.</p>

              <div className="iconList">

                <IconContext.Provider value={{ size: 35, color: "#3c873a" }}>

                  <div className="Logo">

                    <FaNode />

                  </div>

                </IconContext.Provider>

                <IconContext.Provider value={{ size: 35, color: "#00758f" }}>

                  <div className="Logo">

                    <GrMysql />

                  </div>

                </IconContext.Provider>

              </div>

            </div>

            <div className="list">

              <div className="contPreview">

                <div className="preview">

                  {/* <img src={preview2wanted} alt="" className="image"></img> */}

                </div>

              </div>

              <p className="description"></p>

            </div>

          </div>

        </div>

        <div className="boxPort1">

          <div className="title">Info</div>

          <hr />

          <IconContext.Provider value={{ size: 25 }}>
            <div className="list">
              <RiWhatsappLine />
              <p>
                +573001967613
              </p>
            </div>
          </IconContext.Provider>

          <IconContext.Provider value={{ size: 25 }}>
            <div className="list">
              <IoMdCall />
              <p>
                +573001967613
              </p>
            </div>
          </IconContext.Provider>

          <IconContext.Provider value={{ size: 25 }}>
            <div className="list">
              <MdAttachEmail />
              <p>solanomaciasmihael@gmail.com</p>
            </div>
          </IconContext.Provider>

          <IconContext.Provider value={{ size: 25 }}>
            <div className="list" onClick={handleGit}>
              <IoLogoGithub />
              <a className="linkGit">M1h4el</a>
            </div>
          </IconContext.Provider>

        </div>


      </container>
      
    </>
  );
}

export default MainPage;
