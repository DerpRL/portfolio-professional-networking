import { FC } from "react";
import styles from "./styles/Skill.module.css"

type Props = {
    skillRating: number,
    skillName: string,
    skillColor: {
        r: number,
        g: number,
        b: number
    }
}

export const Skill: FC<Props> = ({ skillRating, skillName, skillColor}) => {
    return (
        <div className={styles.skill}>
            <p>{ skillName }</p>
            <div className={styles.skillProgress} style={{ backgroundColor: `rgba(${skillColor.r}, ${skillColor.g}, ${skillColor.b}, 0.3` }}>
                <div className={styles.skillBar} style={{ width: `${skillRating}%`, backgroundColor: `rgb(${skillColor.r}, ${skillColor.g}, ${skillColor.b}` }}/>
            </div>
        </div>
    )
}
