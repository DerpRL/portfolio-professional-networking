import type { NextPage } from 'next'
import Image from "next/image";
import Head from "next/head"
import { GrProjects, GrCircleInformation } from "react-icons/gr";
import { BiMessageRoundedEdit } from "react-icons/bi";
import { BsDownload } from "react-icons/bs"
import { DefaultHeader } from "../components/header/DefaultHeader"
import styles from './index.module.css'
import { Skill } from "../components/landing/Skill";


const Home: NextPage = () => {
  return (
      <>
          <Head>
            <title>Yarne Savaete</title>
          </Head>

          <header>
            <DefaultHeader />
          </header>

          <main>
              <div id={styles.eyeOpenerSection}>
                  <div>
                      <p>Yarne Savaete, Front-end Developer</p>
                      <p>Creating stunning user interfaces with the help of frameworks!</p>
                      <div id={styles.hyperlinksEyeOpener}>
                          <a href={"/projects"}>Projects <GrProjects/></a>
                          <a href={"/blog"}>Blog <BiMessageRoundedEdit/></a>
                          <a href={"/contact"}>Contact <GrCircleInformation/></a>
                          <a href={"/cv.pdf"} download>Download CV <BsDownload/></a>
                      </div>
                  </div>
                  <div>
                      <Image alt={"Main Coding Illustration"} src={"/images/landing/code-illustration-main.jpg"} width={666} height={416} />
                  </div>
              </div>
              <div id={styles.skillSection}>
                  <h2>Skills & Experiences.</h2>
                  <div id={styles.skillDecorationBlobs}>
                      <img id={styles.skillNextJSIcon} src={"/images/landing/skills/nextjs.png"} width={80} height={80} alt={"Skill Next.js blob icon"} />
                      <img id={styles.skillReactIcon} src={"/images/landing/skills/react.png"} width={80} height={80} alt={"Skill React blob icon"} />
                      <img id={styles.skillNodeJSIcon} src={"/images/landing/skills/nodejs.png"} width={80} height={80} alt={"Skill Node.js blob icon"} />
                      <img id={styles.skillHtmlIcon} src={"/images/landing/skills/html.png"} width={80} height={80} alt={"Skill html blob icon"} />
                      <img id={styles.skillJavaScriptIcon} src={"/images/landing/skills/javascript.png"} width={80} height={80} alt={"Skill javascript blob icon"} />
                      <img id={styles.skillCSSIcon} src={"/images/landing/skills/css.png"} width={80} height={80} alt={"Skill css blob icon"} />
                  </div>
                  <div id={styles.skillCard}>
                    <div>
                        <Skill skillRating={95} skillName={"HTML"} skillColor={{ r: 255, g: 174, b: 54}}/>
                        <Skill skillRating={90} skillName={"CSS"} skillColor={{ r: 73, g: 153, b: 245}}/>
                        <Skill skillRating={90} skillName={"JavaScript"} skillColor={{ r: 245, g: 245, b: 73}}/>
                        <Skill skillRating={85} skillName={"SQL"} skillColor={{ r: 65, g: 115, b: 153}}/>
                        <Skill skillRating={75} skillName={"Git"} skillColor={{ r: 232, g: 78, b: 49}}/>
                        <Skill skillRating={75} skillName={"Python"} skillColor={{ r: 247, g: 213, b: 76}}/>
                        <Skill skillRating={70} skillName={"Java"} skillColor={{ r: 80, g: 126, b: 156}}/>
                        <Skill skillRating={65} skillName={"PHP"} skillColor={{ r: 133, g: 142, b: 187}}/>
                        <Skill skillRating={60} skillName={"C#"} skillColor={{ r: 5, g: 142, b: 12}}/>
                    </div>
                      <div>
                          <Skill skillRating={90} skillName={"Node.JS"} skillColor={{ r: 115, g: 176, b: 90}}/>
                          <Skill skillRating={90} skillName={"Next.JS"} skillColor={{ r: 0, g: 0, b: 0}}/>
                          <Skill skillRating={87} skillName={"React"} skillColor={{ r: 94, g: 211, b: 243}}/>
                          <Skill skillRating={85} skillName={"Contentful"} skillColor={{ r: 58, g: 178, b: 230}}/>
                          <Skill skillRating={83} skillName={"Linux"} skillColor={{ r: 236, g: 187, b: 35}}/>
                          <Skill skillRating={80} skillName={"Windows"} skillColor={{ r: 0, g: 116, b: 208}}/>
                          <Skill skillRating={75} skillName={"WordPress"} skillColor={{ r: 32, g: 113, b: 150}}/>
                          <Skill skillRating={70} skillName={"Drupal"} skillColor={{ r: 0, g: 111, b: 180}}/>
                      </div>
                  </div>
              </div>
          </main>
      </>
  )
}

export default Home
