'use client';
import { useEffect } from "react";

const Index = () => {

    useEffect(() => {
        const windowHeight = window.innerHeight;
        const headerHeight = document.querySelector('header').offsetHeight;
        console.log(document.querySelector('header'));
        console.log(windowHeight, "window");
        console.log(headerHeight, "header");
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default Index;
