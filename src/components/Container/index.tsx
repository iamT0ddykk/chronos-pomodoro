import styles from './Styles.module.css'
import type React from "react"


type ContainerProps = {
    children: React.ReactNode
}

export function Container(props: ContainerProps){
    return <div className={styles.container}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
}