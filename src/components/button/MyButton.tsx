import React, {FC} from "react";

import styles from './MyButton.module.scss'

interface IButtonProps {
    text: string;
    id: string;
    onClick?:
        | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
        | undefined;
}

export const MyButton: FC<IButtonProps> = ({id, text, ...props}) => {
    return (
        <button id={id} className={styles.button} {...props}>{text}</button>
    )

}