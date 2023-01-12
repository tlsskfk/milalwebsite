import { useState, useEffect } from 'react';

const useScrollPosition = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [prevScrollPosition, setPrevScrollPosition] = useState(0);
    const [goingUp, setGoingUp] = useState(true)


    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
        }

        window.addEventListener('scroll', updatePosition);

        updatePosition();

        return () => window.removeEventListener('scroll', updatePosition)

    }, [])

    useEffect(() => {
        const checkPositionDirection = () => {
            if (scrollPosition > prevScrollPosition) {
                setGoingUp(false)
            } else {
                setGoingUp(true)
            }
        }
        checkPositionDirection();
        
        setPrevScrollPosition(scrollPosition);

    }, [scrollPosition])

    return goingUp;
}

export default useScrollPosition