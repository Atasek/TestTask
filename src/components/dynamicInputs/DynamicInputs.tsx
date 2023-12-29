import {Controller, useFieldArray} from "react-hook-form";
import styles from "../../pages/Form/components/firstStep/FirstStep.module.scss";
import {MainInput} from "../input/MainInput";
import React from "react";
import {DeleteIcon, PlusIcon} from "../../assets";

// @ts-ignore
export const DynamicInputs = ({control}) => {
    const {fields, append, remove} = useFieldArray({
        control,
        name: "advantages",
    });
    return (
        <div className={styles.wrapper}>
            <label>Преимущества</label>
            {fields.map((item, index) => (
                <div key={item.id} className={styles.input}>
                    <Controller
                        render={({field}) => <MainInput {...field} />}
                        name={`advantages.${index}` as `advantages.0`}
                        control={control}/>
                    <DeleteIcon className={styles.delete} type="button" onClick={() => remove(index)}/>
                </div>
            ))}
            <button className={styles.add}
                    type="button"
                    onClick={() => append("")}
            >
                <PlusIcon/>
            </button>
            <input type="submit"/>
        </div>
    );
}