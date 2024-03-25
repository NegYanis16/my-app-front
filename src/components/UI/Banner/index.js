import styles from "./index.module.scss";
import TitleMain from "@/components/UI/TitleMain";

const Index = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.rectangle}>
                <div className={styles.title}>
                <TitleMain  
                withUnderline={false}
                title="Subscribe to our newsletter"
                color="white"></TitleMain>
                </div>
            <div className={styles.button__wrapper}>
                <a className="btn btn__primary" href="#">Sign in</a>
            </div>
            </div>
        </div>
    );
}

export default Index;
