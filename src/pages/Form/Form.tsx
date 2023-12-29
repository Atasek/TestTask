import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form"

import {MyButton} from "../../components/button/MyButton";
import {FirstStep} from "./components/firstStep/FirstStep";
import {useUpdateFormMutation} from "../../services/api";
import {SecondStep} from "./components/secondStep/SecondStep";
import {ThirdStep} from "./components/thirdStep/ThirdStep";

import styles from "./Form.module.scss";

export interface IFormInput {
    nickname: string;
    name: string;
    surname: string;
    sex: string;
    advantages: Array<string>;
    checkbox: Array<number>;
    radio: Array<number>;
    about: string
}

const steps = ['Общее', 'Преимущества', 'О себе'];

export const Form = () => {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);
    const [updateForm, {isLoading}] = useUpdateFormMutation();

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const onFirstPage = () => {
        navigate("/")
    }


    const {
        control, handleSubmit, formState: {errors}, reset
    } = useForm<IFormInput>({
        defaultValues: {
            nickname: "",
            name: "",
            surname: "",
            sex: "",
            advantages: [""],
            checkbox: [],
            radio: [],
            about: "",
        },
    })

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        console.log(data)
        try {
            await updateForm(data).then((res) => console.log(res));
        } catch (e) {
            console.log(e)
        }
        reset()
    }

    function getStepContent(step: number) {
        switch (step) {
            case 0:
                return <FirstStep control={control} errors={errors}/>
            case 1:
                return <SecondStep control={control}/>
            case 2:
                return <ThirdStep control={control}/>
            default:
                throw new Error('Unknown step');
        }
    }

    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {getStepContent(activeStep)}
                <div className={styles.buttons}>
                    <MyButton id="button-back" onClick={activeStep !== 0 ? handleBack : onFirstPage} text="Назад"/>
                    <MyButton id="button-send" onClick={
                        activeStep === steps.length - 1
                            ? onSubmit && handleSubmit(onSubmit)
                            : handleNext
                    }
                              text={activeStep === steps.length - 1 ? 'Сохранить' : 'Далее'}/>
                </div>
            </form>
        </div>
    )
}