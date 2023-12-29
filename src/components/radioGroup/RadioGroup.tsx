import React from "react";
import {Controller, useFieldArray} from "react-hook-form";
import {MainInput} from "../input/MainInput";
import {DeleteIcon, PlusIcon} from "../../assets";

import styles from "./RadioGroup.module.scss";

// @ts-ignore
export const RadioGroup = ({control}) => {
    return (
        <div className={styles.wrapper}>
            <label>Radio группа</label>
            <Controller
                control={control}
                name={`radio.${0}`}
                render={({
                             field: {onChange, onBlur, value},
                         }) => (
                    <div className={styles.checkboxGroup}>
                        <input type="radio"
                               className={styles.checkbox}
                               onBlur={onBlur} // notify when input is touched
                               onChange={onChange} // send value to hook form
                               checked={value}
                        />
                        <span>1</span>
                    </div>
                )}
            />
            <Controller
                control={control}
                name={`radio.${1}`}
                render={({
                             field: {onChange, onBlur, value},
                         }) => (
                    <div className={styles.checkboxGroup}>
                        <input type="radio"
                               className={styles.checkbox}
                               onBlur={onBlur} // notify when input is touched
                               onChange={onChange} // send value to hook form
                               checked={value}
                        />
                        <span>2</span>
                    </div>
                )}
            />
            <Controller
                control={control}
                name={`radio.${2}`}
                render={({
                             field: {onChange, onBlur, value},
                         }) => (
                    <div className={styles.checkboxGroup}>
                        <input type="radio"
                               className={styles.checkbox}
                               onBlur={onBlur} // notify when input is touched
                               onChange={onChange} // send value to hook form
                               checked={value}
                        />
                        <span>3</span>
                    </div>
                )}
            />
        </div>
    );
}