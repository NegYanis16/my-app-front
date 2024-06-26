import PostItem from "../PostItem/index";

import styles from "./index.module.scss";

const Index = ({ articles }) => {
    return (
        <>
        <div className={styles.grid}>
            {
                articles?.map(article => (
                    // on utilise le composant PostItem dans l'itération pour afficher chaque article
                    <PostItem key={article.id} article={article} />
                ))
            }
            
        </div>
        <div className={styles.button}>
        <a className="btn btn__secondary" href="#">Load more</a>
        </div>
        </>
    );
}

export default Index;
