import { createSignal, onCleanup } from "solid-js";

function useDynamicFontSize() {
    const [fontSize, setFontSize] = createSignal('25px');

    const handleResize = () => {
        const screenWidth = window.innerWidth;
        // Adjust the font size based on screen width
        if (screenWidth < 768) {
        setFontSize('25px');
        } else if (screenWidth >= 768 && screenWidth < 992) {
        setFontSize('40px');
        } else if (screenWidth >= 992 && screenWidth < 1200) {
        setFontSize('50px');
        } else {
        setFontSize('55px');
        }
    }
    
    window.addEventListener('resize', handleResize);
    handleResize();
    onCleanup(() => {
        window.removeEventListener('resize', handleResize);
    });

    return [fontSize];
};

export { useDynamicFontSize };
