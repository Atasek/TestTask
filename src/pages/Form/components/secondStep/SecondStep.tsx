import {Controller} from "react-hook-form";
import {DynamicInputs} from "../../../../components/dynamicInputs/DynamicInputs";

import styles from "../firstStep/FirstStep.module.scss";
import {CheckBoxList} from "../../../../components/checkBoxList/CheckBoxList";
import {RadioGroup} from "../../../../components/radioGroup/RadioGroup";

// @ts-ignore
export const SecondStep = ({control}) => {
    return (
        <div className={styles.wrapper}>
            <DynamicInputs control={control}/>
            <CheckBoxList control={control}/>
            <RadioGroup control={control}/>
        </div>
    )
}