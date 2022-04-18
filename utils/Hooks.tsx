import { useEffect } from "react";


const useScrollReveal = (refToComponent) => {
//useEffect used to ensure scrollReveal is rendering client-side
    useEffect(() => {
        async function animate() {
            if (refToComponent.current) {
                const sr = (await import("scrollreveal")).default;
                sr().reveal(refToComponent.current, {
                    delay: 500,
                    duration: 1000,
                    easing: 'cubic-bezier(0.5, 0, 0, 1)'
                });
            }
        }
        animate();
    }, []);
}

export default useScrollReveal;