import React, {FC, InputHTMLAttributes} from "react";

import styles from './MainInput.module.scss'

interface IMainFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const MainInput: FC<IMainFieldProps> = ({name, label, ...props}) => {
    return (
        <div className={styles.inputWrapper}>
            <label htmlFor={name}>{label}</label>
            <input className={styles.input} id={name} {...props}/>
        </div>
    )
}