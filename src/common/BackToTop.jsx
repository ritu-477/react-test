
import React, { useState } from "react";
import Icon from '../utils/icons';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    window.onscroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 z-40 bg-blue-600 p-2 w-12 border-blue-600 border rounded-lg flex justify-center">
                    <Icon iconName="doubleArrow" />
                </button>
            )}
        </div>
    );
};

export default BackToTop;

