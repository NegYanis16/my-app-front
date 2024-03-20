import Link from "next/link";
import SubTitle from "@/components/UI/SubTitle"
import styles from "./index.module.scss";

const Index = () => {

    return (
        <section>
        <div className="right-part">
        <SubTitle
            text="our latest news"
            color="#6A6767"
        />
        </div>
        <div className="left-part">
        <a className="btn btn__primary" href="#">View more</a>
        </div>
        </section>
    );
}

export default Index;