import { useLayoutEffect, useState } from 'react'

export default function useWindowPosition(id) {
    const [isToAnimate, setIsToAnimate] = useState(false);

    useLayoutEffect(() => {
        function updatePosition(){
            const offSetHeight = window.document.getElementById(id).offsetHeight;
            window.pageYOffset > offSetHeight * 0.5 ?
                setIsToAnimate(true)
            :
                setIsToAnimate(false)
            
        }
        window.addEventListener('scroll', updatePosition)
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    },[id])

    return isToAnimate;
}
