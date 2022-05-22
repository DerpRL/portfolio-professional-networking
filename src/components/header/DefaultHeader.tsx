import styles from './styles/DefaultHeader.module.css'

export const DefaultHeader = () => {
    return (
        <nav id={styles.pageNavigation}>
            <a href={'/'}>Yarne Savaete</a>
            <div id={styles.navSelection}>
                <ul>
                    <li><a className={styles.navButtonSelected} href={'/'}>Home</a></li>
                    <li><a href={'/projects'}>Projects</a></li>
                    <li><a href={'/blog'}>Blog</a></li>
                    <li><a href={'/contact'}>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
