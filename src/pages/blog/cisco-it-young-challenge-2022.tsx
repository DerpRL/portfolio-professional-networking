import type { NextPage } from 'next'
import Head from "next/head"
import { BsArrowRightCircle, BsGlobe } from "react-icons/bs"
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
                    <h1>IT Young Potential Challenge 2022</h1>
                    <span>5 April, 2022</span>
                    <ul id={styles.blogTopics}>
                        <li><BsArrowRightCircle/>Challenge</li>
                        <li><BsArrowRightCircle/>Cisco</li>
                        <li><BsArrowRightCircle/>Quiz</li>
                    </ul>

                    <div id={styles.blogSocials}>
                        <a id={styles.socialWeb} rel={"noreferrer"} target={"_blank"} href={"https://editx.eu/en/it-challenges/it-young-potential-challenge-belgium-2022"}><BsGlobe/>Editx</a>
                        <a id={styles.socialWeb} rel={"noreferrer"} target={"_blank"} href={"https://www.cisco.com/c/nl_be/index.html"}><BsGlobe/>Cisco</a>
                        <a id={styles.socialWeb} rel={"noreferrer"} target={"_blank"} href={"https://services.global.ntt/"}><BsGlobe/>NTT</a>
                        <a id={styles.socialWeb} rel={"noreferrer"} target={"_blank"} href={"https://www.spotit.be/"}><BsGlobe/>Spotit</a>
                    </div>
                </div>
                <p>The IT Young Potential Belgium is a Challenge designed to inspire creative and dynamic computer science Students & Young Professionals located in Belgium & Luxembourg. The first round is played online. The students and the professionals will compete in separate leagues so that everyone gets a fair chance in competing to be crowned as Belgian IT Student or Young IT Pro Champion.</p>
                <p>In this quiz you had to complete 15 questions in 10 minutes. The better you performed the better your rank was. My quiz score was 9/15! It was a short but fun quiz and challenge! </p>
            </main>
        </>
    )
}

export default blogPostPortfolio
