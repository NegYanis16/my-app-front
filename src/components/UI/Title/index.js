import Link from "next/link";
import SubTitle from "@/components/UI/SubTitle"
import styles from "./index.module.scss";

const Index = () => {

    return (
        <div className={styles.wrapper}>
        <div className="right-part">
        <SubTitle
            text="our latest news"
            color="#6A6767"
        />
        </div>
        <div className="left-part">
        <a className="btn btn__primary" href="#">View more</a>
        </div>
        </div>
    );
}

export default Index;