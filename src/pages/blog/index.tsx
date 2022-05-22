import type { NextPage } from 'next'
import Head from "next/head"
import { DefaultHeader } from "../../components/header/DefaultHeader"
import { BlogCard } from "../../components/blog/BlogCard";
import styles from "./index.module.css"

const Blog: NextPage = () => {
    return (
        <>
            <Head>
                <title>Yarne Savaete</title>
            </Head>

            <header>
                <DefaultHeader />
            </header>

            <main id={styles.blogPage}>
                <h1>The Blog</h1>
                <div id={styles.blogs}>
                    <BlogCard
                        splashURL={"head-blog-illustration.jpg"}
                        blogDate={"18 May, 2022"}
                        blogTitle={"Creating My Personal Portfolio"}
                        blogShortDesc={"A blog post telling you how this website is made. Which framework & tools are being used."}
                        blogSlug={"creating-my-personal-portfolio"} />
                    <BlogCard
                        splashURL={"hack-the-future.png"}
                        blogDate={"2 Dec, 2021"}
                        blogTitle={"Code Challenges In Hack The Future"}
                        blogShortDesc={"Doing the hackaton from Hack The Future were i was joined by Simon Plyson. We both joined the Zinderlabs challenges."}
                        blogSlug={"hack-the-future-zinderlabs"} />
                    <BlogCard
                        splashURL={"cyber-santa.png"}
                        blogDate={"14 Dec, 2021"}
                        blogTitle={"Cyber Santa Is Coming To Town"}
                        blogShortDesc={"A conference stream of a hacking party where different people share their opinions about things and techniques."}
                        blogSlug={"cyber-santa-is-coming-to-town"} />
                    <BlogCard
                        splashURL={"cisco-it-young-challenge.png"}
                        blogDate={"5 April, 2022"}
                        blogTitle={"IT Young Potential Challenge 2022"}
                        blogShortDesc={"The IT Young Potential Belgium is a Challenge designed to inspire creative and dynamic computer science Students & Young Professionals."}
                        blogSlug={"cisco-it-young-challenge-2022"} />
                </div>
            </main>
        </>
    )
}

export default Blog
