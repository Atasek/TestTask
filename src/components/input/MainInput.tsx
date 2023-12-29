import React, {FC, InputHTMLAttributes} from "react";

import styles from './MainInput.module.scss'

interface IMainFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    errors?: any;
}

export const MainInput: FC<IMainFieldProps> = ({name, errors, label, ...props}) => {
    return (
        <div key={name} className={styles.inputWrapper}>
            { label && <label htmlFor={name}>{label}</label>}
            <input name={name} className={styles.input} id={name} {...props}/>
            {errors && errors[`${name}`] && <p className={styles.alert} role="alert">Проверьте ввод</p>}
        </div>
    )
}