import styles from "./index.module.scss";
import Logo from "@/components/UI/Logo"

const Index = () => {
    return (
        <div className={styles.footer}>
        <hr/>
        <div className={styles.footer__wrapper}>
        <div className={styles.logo}>
        <Logo/>
        </div>
        <div className={styles.copryright}>
        <p>Copryright@2024</p>
        </div>
        </div>
        </div>
    );

}

export default Index;