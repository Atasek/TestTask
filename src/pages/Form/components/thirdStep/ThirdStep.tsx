import styles from "../firstStep/FirstStep.module.scss";
import {MainInput} from "../../../../components/input/MainInput";
import {Controller} from "react-hook-form";

// @ts-ignore
export const ThirdStep = ({control}) => {
    return (
        <div className={styles.wrapper}>
            <Controller
                rules={{maxLength:200}}
                name="about"
                control={control}
                render={({field}) => <MainInput label="О себе" {...field} />}
            />
        </div>
    )
}