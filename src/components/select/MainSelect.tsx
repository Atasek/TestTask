import React, {FC, SelectHTMLAttributes} from "react";

import styles from './MainSelect.module.scss'

interface IMainSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: readonly string[];
}

export const MainSelect: FC<IMainSelectProps> = ({options, name, label, ...props}) => {
    return (
        <div className={styles.inputWrapper}>
            <label htmlFor={name}>{label}</label>
            <select className={styles.select} id={name} {...props}>
                <option value="">Не выбрано</option>
                {options.map((value) => (
                    <option value={value} key={value}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
    )
}