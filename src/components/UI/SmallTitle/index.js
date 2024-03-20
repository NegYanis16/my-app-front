import styles from "./index.module.scss";

const Index = ({ text, color }) => {
    return (
        <div className={`${styles.wrapper}`}>
            <p style={{ color: color }}>{text}</p>
        </div>
    );
}

export default Index;
