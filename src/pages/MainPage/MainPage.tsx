import React from "react";
import {Avatar, FolderIcon} from "../../assets";
import {MainInput} from "../../components/input/MainInput";

import styles from "./MainPage.module.scss";
import {MyButton} from "../../components/button/MyButton";
import {useNavigate} from "react-router-dom";

export const MainPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('create')
    }

    return (
        <div className={styles.form}>
            <header className={styles.header}>
                <Avatar/>
                <div className={styles.info}>
                    <p>Александра Двойнина</p>
                    <div className={styles.linkWrapper}>
                        <div className={styles.linkBlock}>
                            <FolderIcon/>
                            <a href="https://telegram.me/atasek">Telegram</a>
                        </div>
                        <div className={styles.linkBlock}>
                            <FolderIcon/>
                            <a>GitHub</a>
                        </div>
                        <div className={styles.linkBlock}>
                            <FolderIcon/>
                            <a>Резюме</a>
                        </div>
                    </div>
                </div>
            </header>
            <div className={styles.wrapper}>
                <MainInput disabled defaultValue="+7 927 209 93 47" label="Номер телефона"/>
                <MainInput disabled defaultValue="aleks-dvojnina@yandex.ru" label="Email"/>
                <MyButton onClick={handleClick} id="button-start" text="Начать"/>
            </div>
        </div>
    )
}