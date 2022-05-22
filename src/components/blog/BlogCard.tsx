import { FC } from "react";
import styles from "./styles/BlogCard.module.css"
import Image from "next/image";

type Props = {
    splashURL: string,
    blogDate: string,
    blogTitle: string,
    blogShortDesc: string
    blogSlug: string
}

export const BlogCard: FC<Props> = ({ splashURL, blogDate, blogTitle, blogShortDesc, blogSlug }) => {
    return (
        <div className={styles.blogCard}>
            <Image src={`/images/blog/${splashURL}`} alt={"Blog Splash Image"} width={"333"} height={"222"} />
            <div>
                <span>{ blogDate }</span>
                <h2>{ blogTitle }</h2>
                <p>{ blogShortDesc }</p>
            </div>
            <a href={`/blog/${blogSlug}`}>Read this Post</a>
        </div>
    )
}
