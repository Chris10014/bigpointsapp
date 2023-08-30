import { useState, useEffect } from "react";

const useContentSizeByTagName = (tagName) => {

    tagName = !tagName ? "main" : tagName;

    const [contentSizeByTagName, setContentSizeByTagName] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {

        const handleResize = () => {
            if(document.getElementsByTagName(tagName)[0] !== undefined) {
            setContentSizeByTagName({
                width: document.getElementsByTagName(tagName)[0].clientWidth,
                height: document.getElementsByTagName(tagName)[0].clientHeight
            })} else {
                setContentSizeByTagName({
                    width: 0,
                    height: 0
                })

            }; 
        }

        handleResize();

        document.getElementsByTagName("html")[0].addEventListener("click", handleResize); //track resizes during runtime

        return () => document.getElementsByTagName("html")[0].removeEventListener("click", handleResize); //cleanUp function
    }, [tagName])

    return contentSizeByTagName;
}

export default useContentSizeByTagName;