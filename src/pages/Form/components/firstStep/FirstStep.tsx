import {MainInput} from "../../../../components/input/MainInput";
import {MainSelect} from "../../../../components/select/MainSelect";
import {Controller} from "react-hook-form";

import styles from "./FirstStep.module.scss";

// @ts-ignore
export const FirstStep = ({control,errors}) => {
    return (
        <div className={styles.wrapper}>
            <Controller
                rules={{maxLength:30}}
                name="nickname"
                control={control}
                render={({field}) => <MainInput errors={errors} label="Никнейм" {...field} />}
            />
            <Controller
                rules={{maxLength:50}}
                name="name"
                control={control}
                render={({field}) => <MainInput type="text" label="Имя" {...field} />}
            />
            <Controller
                rules={{maxLength:50}}
                name="surname"
                control={control}
                render={({field}) => <MainInput type="text" label="Фамилия" {...field} />}
            />
            <Controller
                name="sex"
                control={control}
                render={({field}) => <MainSelect options={['Мужской', 'Женский']} label="Пол" {...field} />}
            />
        </div>
    )
}