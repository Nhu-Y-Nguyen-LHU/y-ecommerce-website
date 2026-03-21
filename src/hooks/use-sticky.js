import { useEffect, useState } from "react";

const useSticky = () => {
    const [sticky,setSticky] = useState(false);

    useEffect(() => {
        let ticking = false;

        const updateSticky = () => {
            const isSticky = window.scrollY > 80;
            setSticky((prev) => (prev === isSticky ? prev : isSticky));
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateSticky);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return {
        sticky,
    }

}

export default useSticky;