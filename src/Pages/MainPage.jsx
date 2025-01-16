import { useState } from "react";
import "./Styles/MainPage.scss";
import IconWrapperSkills from "../Components/Icons/IconWrapperSkills";
import IconWrapperCards from "../Components/Icons/IconWrapperCards";
import SkillComponent from "../Components/SkillComponent";

// skillIcons
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { BiLogoMongodb } from "react-icons/bi";
import { GrContact } from "react-icons/gr";
import { FaFileDownload } from "react-icons/fa";

//import infoLogos
import { IoMdCall } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { RiWhatsappLine } from "react-icons/ri";
import { MdAttachEmail } from "react-icons/md";

// import { useState } from "react";
import previewIMGConverter from "../assets/IMGConverter.png";
import preview2wanted from "../assets/2wanted.png";
import previewSolanotes from "../assets/Solanotes.png";
import previewEnvioSeguro1 from "../assets/EnvíoSeguro1.jpeg";
import previewEnvioSeguro2 from "../assets/EnvíoSeguro2.jpeg";

function MainPage() {
  const [downloadCV, setDownloadCV] = useState("Download");

  const urlFirebase =
    "data:image/png;base64,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";

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
      distance = 1300;
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
      <div className="gradient">
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
              <IconWrapperSkills>
                <FaFileDownload />
              </IconWrapperSkills>
            </button>

            <button className="downloadCV" onClick={handleContact}>
              <span className="downloadText">Contact me</span>
              <IconWrapperSkills>
                <GrContact />
              </IconWrapperSkills>
            </button>
          </div>
        </container>

        <hr className="firstHr" />

        <container className="ContainerSkills">
          <div className="TextSkills">Skills</div>
          <div className="GridSkills">
            <SkillComponent />
          </div>
        </container>

        <hr className="secondHr" />

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
                  <IconWrapperCards color="#61dafb">
                    <FaReact />
                  </IconWrapperCards>
                  <IconWrapperCards color="#3c873a">
                    <FaNode />
                  </IconWrapperCards>
                  <IconWrapperCards color="#3c873a">
                    <BiLogoMongodb />
                  </IconWrapperCards>
                </div>
              </div>
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
                  <IconWrapperCards color="#3c873a">
                    <FaNode />
                  </IconWrapperCards>
                  <IconWrapperCards color="#00758f">
                    <GrMysql />
                  </IconWrapperCards>
                </div>
              </div>
            </div>

            <div className="ul2">
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
                  <IconWrapperCards color="#61dafb">
                    <FaReact />
                  </IconWrapperCards>
                  <IconWrapperCards color="#3c873a">
                    <FaNode />
                  </IconWrapperCards>

                  <IconWrapperCards color="#00758f">
                    <GrMysql />
                  </IconWrapperCards>
                </div>
              </div>

              <div className="list">
                <div className="contPreview">
                  <div className="preview">
                    <img
                      src={previewIMGConverter}
                      alt="IMGConverter Preview"
                      className="image"
                    ></img>
                  </div>
                </div>

                <p className="description">
                  IMGConverter is a SPA (Single Page Application). Using Google
                  Vision API (Google Cloud Console) as an OCR tool, it processes
                  text in images and finally creates an .xlsx file with the
                  organized information.
                </p>

                <div className="iconList">
                <IconWrapperCards color="#61dafb">
                    <FaReact />
                </IconWrapperCards>
                <IconWrapperCards imgSrc={urlFirebase} />
                  
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
      </div>
    </>
  );
}

export default MainPage;
