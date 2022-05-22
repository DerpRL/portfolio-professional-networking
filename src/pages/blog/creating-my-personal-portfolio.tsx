import type { NextPage } from 'next'
import Head from "next/head"
import { BsArrowRightCircle, BsGithub, BsGlobe } from "react-icons/bs"
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
                    <h1>Creating My Personal Portfolio</h1>
                    <span>18 May, 2022</span>
                    <ul id={styles.blogTopics}>
                        <li><BsArrowRightCircle/>Next.js</li>
                        <li><BsArrowRightCircle/>React</li>
                        <li><BsArrowRightCircle/>Vercel</li>
                        <li><BsArrowRightCircle/>Dribbble</li>
                        <li><BsArrowRightCircle/>Freepik</li>
                    </ul>

                    <div id={styles.blogSocials}>
                        <a rel={"noreferrer"} id={styles.socialGitHub} href={"https://github.com/DerpRL/portfolio-professional-networking"} target={"_blank"}><BsGithub/>GitHub</a>
                        <a id={styles.socialWeb} href={"/"}><BsGlobe/>Website</a>
                    </div>
                </div>

                <p>The website was created using Next.js. Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. I really like working with Next.js because their documentation is very clear and well-organized. Besides Next.js, the website also uses a JavaScript framework, React. React is very useful because you can create components and reuse them in your HTML. I already have some experience with Next.js or React because I often use it in personal projects. Hosting is done via Vercel, Vercel is a hosting platform from Next.js where you can easily host Next.js projects. If you connect your account via GitHub you can have repositories built and set up directly. Vercel will create a domain for you that is secure and your website will be placed on it.</p>
                <p>I have also used Dribbble and Freepik. Dribbble provides a great source of inspiration for me, where Freepik has very creative illustration. Because I use all free illustrations, you can find the authors in the footer of the pages.</p>
            </main>
        </>
    )
}

export default blogPostPortfolio
