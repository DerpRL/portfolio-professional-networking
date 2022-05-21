import type { NextPage } from 'next'
import Image from "next/image";
import Head from "next/head"
import { GrProjects, GrCircleInformation } from "react-icons/gr";
import { BiMessageRoundedEdit } from "react-icons/bi";
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
                          <a href={"/blogs"}>Blog <BiMessageRoundedEdit/></a>
                          <a href={"/blogs"}>Contact <GrCircleInformation/></a>
                      </div>
                  </div>
                  <div>
                      <Image alt={"Main Coding Illustration"} src={"/images/landing/code-illustration-main.jpg"} width={666} height={416} />
                  </div>
              </div>
              <div id={styles.skillSection}>
                  <h2>Skills.</h2>
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

                        <Skill skillRating={80} skillName={"HTML"} skillColor={{ r: 252, g: 68, b: 68}}/>
                    </div>
                      <div>
                          <Skill skillRating={70} skillName={"GitHub"} skillColor={{ r: 252, g: 252, b: 68}}/>
                      </div>
                  </div>
              </div>
          </main>
      </>
  )
}

export default Home
