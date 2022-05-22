import type { NextPage } from 'next'
import Head from "next/head"
import { BsArrowRightCircle, BsYoutube, BsGlobe } from "react-icons/bs"
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
                    <h1>Cyber Santa Is Coming To Town</h1>
                    <span>14 Dec, 2021</span>
                    <ul id={styles.blogTopics}>
                        <li><BsArrowRightCircle/>Conference</li>
                        <li><BsArrowRightCircle/>Speakers</li>
                        <li><BsArrowRightCircle/>Hack The Box</li>
                        <li><BsArrowRightCircle/>STÖK</li>
                        <li><BsArrowRightCircle/>PinkDraconian</li>
                        <li><BsArrowRightCircle/>PwnFunction</li>
                        <li><BsArrowRightCircle/>superhero1</li>
                        <li><BsArrowRightCircle/>John Hammond</li>
                        <li><BsArrowRightCircle/>0xdf</li>
                        <li><BsArrowRightCircle/>Nahamsec</li>
                        <li><BsArrowRightCircle/>Offensive Security</li>
                    </ul>

                    <div id={styles.blogSocials}>
                        <a id={styles.socialYouTube} rel={"noreferrer"} target={"_blank"} href={"https://www.youtube.com/watch?v=Q-YxZaiqwBc"}><BsYoutube/>Conference Stream</a>
                        <a id={styles.socialWeb} rel={"noreferrer"} target={"_blank"} href={"https://www.hackthebox.com/"}><BsGlobe/>Hack The Box</a>
                    </div>
                </div>
                <p>Hack The Box streamed a conference on YouTube where 8 different people discussed 8 different interesting topics. It was about security, which is also very important when you want to make a website completely. Web & crypto, certain tools to secure your website and especially to get into a website were also discussed.</p>
                <p>The first person (STÖK) talked about XSS attacks where you could get the username or password of the account. Very informative but also something to keep in mind when making a website if you want to program everything yourself. This can also be done via SQL statements or SQLI (SQL Injection).</p>
                <p>The next person was PinkDraconian who explained about PWN & Reversing 101. PWN in security is taking control of someone else his computer, website, gateway device, or application. He mainly explains how this is done and which tools are used. With reversing 101 you can find the main functions. PinkDraconian himself said that he is not allowed to tell everything due to security reasons.</p>
                <p>PwnFunction will be talking about JWS tokens and have the bad habit often with the JWS token. For this he uses Burp Suite, an application on which you can test and analyze how secure a website is. He also explains very informatively how best to secure account credentials and how JWS encrypts the tokens and where you can see which algorithm is used. For school projects I have already used JWS as an authentication system.</p>
                <p>The next speaker was John Hammond whom I personally also watch on his YouTube channel. He demonstrates things about web & crypto and uses URL attributes to get certain information on a system. For example, checking which files are available, which path he is in at the moment, etc. I find his showcase and videos very interesting and great to listen to. He also shows you things about crypto, how to encrypt or decrypt sensitive information. John has also helped me secure both school and personal projects for business.</p>
                <p>Everyone who spoke in the conference on YouTube was very interesting and engaging. Lots of tips that I will take with me to future projects and was also very technical.</p>
            </main>
        </>
    )
}

export default blogPostPortfolio
