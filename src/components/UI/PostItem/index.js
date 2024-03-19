import Link from "next/link";
import SubTitle from "@/components/UI/SubTitle"
import styles from "./index.module.scss";

const Index = ({article}) => {


    const formatId = (id) => {
        return id < 10 ? `0${id}` : id;
      };

    return (
        <div className={styles.rectangle}>
        <div className={styles.item} key={article.id}>
            <p className={styles.id}>{formatId(article.id)}</p>
            <h2 className={styles.title}>
                {article.title}
            </h2>
        </div>
        </div>
    );
}

export default Index;
