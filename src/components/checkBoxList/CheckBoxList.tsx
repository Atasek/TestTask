import React from "react";
import {Controller, useFieldArray} from "react-hook-form";
import {MainInput} from "../input/MainInput";
import {DeleteIcon, PlusIcon} from "../../assets";

import styles from "./CheckBox.module.scss";

// @ts-ignore
export const CheckBoxList = ({control}) => {
    return (
        <div className={styles.wrapper}>
            <label>Checkbox группа</label>
            <Controller
                control={control}
                name={`checkbox.${0}`}
                render={({
                             field: {onChange, onBlur, value},
                         }) => (
                    <div className={styles.checkboxGroup}>
                        <input type="checkbox"
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
                name={`checkbox.${1}`}
                render={({
                             field: {onChange, onBlur, value},
                         }) => (
                    <div className={styles.checkboxGroup}>
                        <input type="checkbox"
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
                name={`checkbox.${2}`}
                render={({
                             field: {onChange, onBlur, value},
                         }) => (
                    <div className={styles.checkboxGroup}>
                        <input type="checkbox"
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