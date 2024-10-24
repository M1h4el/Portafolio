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
import { FaAngular } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import previewIMGConverter from "../assets/IMGConverter.png"
import preview2wanted from "../assets/2wanted.png";
import previewSolanotes from "../assets/Solanotes.png";
import previewEnvioSeguro1 from "../assets/EnvíoSeguro1.jpeg";
import previewEnvioSeguro2 from "../assets/EnvíoSeguro2.jpeg";

function MainPage() {
  const [downloadCV, setDownloadCV] = useState("Download");

  const urlSQLserver =
    "data:image/png;base64,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"
  const urlCsharp =
    "data:image/png;base64,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"
  const urlDotNet =
    "data:image/png;base64,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"
  const urlFirebase =
    "data:image/png;base64,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"
  const urlExpo = 
    "data:image/png;base64,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"

    function handleCV() {
    window.location.href =
      "https://docs.google.com/document/d/1jzZ3hIfQmq53F6S6Rr33wKSPow6554_KB74def8BT24/export?format=pdf";

    setDownloadCV("Downloaded");
  }

  function handleContact() {
    let distance;

    if (window.innerWidth <= 1200) {
      distance = 9999;
    } else if (window.innerWidth > 1200) {
      distance = 900;
    }

    window.scrollTo({
      top: distance,
      behavior: "smooth",
    });
  }

  function handleGit() {
    window.location.href = "https://github.com/M1h4el";
  }

  return (
    <>
      <container className="ContainerPresentation">
        <p>Hi, I'm</p>

        <div className="PresentationName">MIGUEL</div>

        <div className="PresentationName">SOLANO</div>

        <p>Full Stack developer, passionate about JavaScript frameworks.</p>

        <div className="ButtonDiv">
          <button className="downloadCV" onClick={handleCV}>
            <span
              className={
                downloadCV === "Downloaded"
                  ? "downloadText selected"
                  : "downloadText"
              }
            >
              {downloadCV}
            </span>

            <IconContext.Provider value={{ size: 20 }}>
              <div style={{ marginTop: 4 }}>
                <FaFileDownload />
              </div>
            </IconContext.Provider>
          </button>

          <button className="downloadCV" onClick={handleContact}>
            <span className="downloadText">Contact me</span>
            <IconContext.Provider value={{ size: 20 }}>
              <div style={{ marginTop: 4 }}>
                <GrContact />
              </div>
            </IconContext.Provider>
          </button>
        </div>
      </container>

      <hr className="firstHr" />

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
            <p>JavaScript</p>
          </div>
          <div>
            <IconContext.Provider value={{ size: 50, color: "#1976D2" }}>
              <div className="Logo">
              <SiTypescript />

              </div>
            </IconContext.Provider>
            <p>TypeScript</p>
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
            <IconContext.Provider value={{ size: 50, color: "#FF5252" }}>
              <div className="Logo">
                <FaAngular />
              </div>
            </IconContext.Provider>
            <p>Angular</p>
          </div>
          <div>
            <IconContext.Provider value={{ size: 50, color: "#FF5252" }}>
              <div className="Logo">
                <img className="logos" src={urlExpo} alt="Expo Logo" />
              </div>
            </IconContext.Provider>
            <p>Expo</p>
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
            <IconContext.Provider value={{ size: 50, color: "#000000" }}>
              <div className="Logo">
                <SiExpress />
              </div>
            </IconContext.Provider>
            <p>Express</p>
          </div>
          <div>
            <IconContext.Provider value={{ size: 50, color: "#f01716" }}>
              <div className="Logo">
                <SiNestjs />
              </div>
            </IconContext.Provider>
            <p>Nest</p>
          </div>
          <div>
            <IconContext.Provider value={{ size: 50, color: "black" }}>
              <div className="Logo">
                <SiNextdotjs />
              </div>
            </IconContext.Provider>
            <p>Next</p>
          </div>
          <div>
            <IconContext.Provider value={{ size: 50, color: "black" }}>
              <div className="Logo">
                <img className="logos" src={urlCsharp} alt="Csharp Logo" />
              </div>
            </IconContext.Provider>
            <p>C#</p>
          </div>
          <div>
            <IconContext.Provider value={{ size: 50, color: "black" }}>
              <div className="Logo">
                <img className="logos" src={urlDotNet} alt=".NET Logo"/>
              </div>
            </IconContext.Provider>
            <p>.NET</p>
          </div>
          <div>
            <IconContext.Provider value={{ size: 50, color: "#00758f" }}>
              <div className="Logo">
                <img className="logos" src={urlSQLserver} alt="SQLserver Logo" />
              </div>
            </IconContext.Provider>
            <p>SQL Server</p>
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
            <IconContext.Provider value={{ size: 50, color: "#32648D" }}>
              <div className="Logo">
                <BiLogoPostgresql />
              </div>
            </IconContext.Provider>
            <p>PostgreSQL</p>
          </div>
          <div>
            <IconContext.Provider value={{ size: 50, color: "#4DB33D" }}>
              <div className="Logo">
                <BiLogoMongodb />
              </div>
            </IconContext.Provider>
            <p>MongoDB</p>
          </div>
          <div>
            <IconContext.Provider value={{ size: 50, color: "#4DB33D" }}>
              <div className="Logo">
                <img className="logos" src={urlFirebase} alt="Firebase Logo" />
              </div>
            </IconContext.Provider>
            <p>Firebase</p>
          </div>
          <div>
          <IconContext.Provider value={{ size: 50, color: "black" }}>
              <div className="Logo">
                <FaGithub />
              </div>
            </IconContext.Provider>
            <p>Github</p>
          </div>
        </div>
      </container>

      <container className="infoProy">
        <div className="boxPort2">
          <div className="title">Projects</div>

          <hr />

          <div className="ul1">
            <div className="list">
              <div className="contPreview">
                <div className="preview">
                  <img src={preview2wanted} alt="" className="image"></img>
                </div>
              </div>

              <p className="description">
                2wanted is an app where users can create pyramid schemes in
                rooms with customized prices and invite each other to earn
                money, this app works with a Bitcoin wallet.
              </p>

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

              <p className="description">
                Solanotes is a web application designed with user registration
                and powered with CRUD, using relational databases.
              </p>

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
                <div
                  className="preview"
                  style={{ justifyContent: "space-around" }}
                >
                  <img
                    src={previewEnvioSeguro1}
                    alt=""
                    className="image2"
                  ></img>
                  <img
                    src={previewEnvioSeguro2}
                    alt=""
                    className="image2"
                  ></img>
                </div>
              </div>

              <p className="description">
                Envíoseguro is a WhatsApp chatbot that promotes safety and
                management of purchases using payment gateways and methods to
                ensure the shipment of products.
              </p>

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
                  <img src={previewIMGConverter} alt="IMGConverter Preview" className="image"></img>
                </div>
              </div>

              <p className="description">
              IMGConverter is a SPA (Single Page Application). Using Google Vision API (Google Cloud Console) as an OCR tool, it processes text in images and finally creates an .xlsx file with the organized information.
              </p>

              <div className="iconList">
                <IconContext.Provider value={{ size: 35, color: "#61dafb" }}>
                  <div className="Logo">
                    <FaReact />
                  </div>
                </IconContext.Provider>

                <IconContext.Provider value={{ size: 35, color: "#00758f" }}>
                  <div className="Logo">
                  <img className="softLogo" src={urlFirebase} alt="Firebase Logo" />
                  </div>
                </IconContext.Provider>
              </div>

            </div>
          </div>
        </div>

        <div className="boxPort1">
          <div className="title">Info</div>

          <hr />

          <IconContext.Provider value={{ size: 25 }}>
            <div className="list">
              <RiWhatsappLine />
              <p>+57 3001967613</p>
            </div>
          </IconContext.Provider>

          <IconContext.Provider value={{ size: 25 }}>
            <div className="list">
              <IoMdCall />
              <p>+57 3001967613</p>
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
