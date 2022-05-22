import type { NextPage } from 'next'
import Head from "next/head"
import { BsArrowRightCircle, BsGithub, BsGlobe, BsLinkedin } from "react-icons/bs"
import { DefaultHeader } from "../../components/header/DefaultHeader"
import styles from "/public/styles/Blog/DefaultBlogModel.module.css"

const blogPostPortfolio: NextPage = () => {
    return (
        <>
            <Head>
                <title>Yarne Savaete</title>
            </Head>

            <header>
                <DefaultHeader />
            </header>

            <main id={styles.blogPost}>
                <div>
                    <h1>Code Challenges In Hack The Future</h1>
                    <span>2 Dec, 2021</span>
                    <ul id={styles.blogTopics}>
                        <li><BsArrowRightCircle/>Hackathon</li>
                        <li><BsArrowRightCircle/>Hack The Future</li>
                        <li><BsArrowRightCircle/>Zinderlabs</li>
                        <li><BsArrowRightCircle/>Express</li>
                        <li><BsArrowRightCircle/>Code Challenge</li>
                    </ul>

                    <div id={styles.blogSocials}>
                        <a rel={"noreferrer"} id={styles.socialGitHub} href={"https://github.com/DerpRL/hackthefuture"} target={"_blank"}><BsGithub/>GitHub</a>
                        <a id={styles.socialWeb} rel={"noreferrer"} target={"_blank"} href={"https://www.hackthefuture.be/home"}><BsGlobe/>Hack The Future</a>
                        <a id={styles.socialLinkedIn} rel={"noreferrer"} target={"_blank"} href={"https://www.linkedin.com/in/simon-plyson-b1b486221/"}><BsLinkedin/>Simon Plyson</a>
                    </div>
                </div>
                <p>Code challenge where we had to find the murderer and the murder weapon using an algorithm that takes several factors into account and outputs a number of suspicion.</p>
                <p>Together with Simon Plyson we entered the code challenge in Hack The Future from Zinderlabs. It was a unique experience but certainly a very cool experience. The idea was to create an algorithm that assigned a number to different people and that number was how suspicious that person was who would have committed the murder. At the beginning of the challenge we get API endpoints from which you got information and from that we had to deduce whether the number should be higher or lower. Over time we were able to access more and more endpoints. Once we found the person, it was time to look for the murder weapon. To find the murder weapon it was the same concept as for the murderer.</p>
                <p>We had some problems testing the algorithm at first because we exceeded the number of API requests. Since the data never changed, we stored the API response in the localstorage. At the end we had to present our project together to the jury, this went quite well but unfortunately we had not found the right person.</p>
            </main>
        </>
    )
}

export default blogPostPortfolio
