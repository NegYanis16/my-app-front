import Link from "next/link";
import SmallTitle from "@/components/UI/SmallTitle"
import PostItarrow from "@/components/UI/PostItArrow"
import styles from "./index.module.scss";

const Index = ({article}) => {


    const formatId = (id) => {
        return id < 10 ? `0${id}` : id;
      };

    return (
        <div className={styles.rectangle}>
        <div className={styles.item} key={article.id}>
            <p className={styles.id}>{formatId(article.id)}</p>
            <SmallTitle 
            text={article.date}
            color="#A9A9A9"
            />
            <h2 className={styles.title}>
                {article.title}
            </h2>
        </div>
        <div className={styles.PostItArrow}>
        <PostItarrow/>
        </div>
        </div>
    );
}

export default Index;
