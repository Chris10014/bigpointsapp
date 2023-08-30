import useContentSizeByTagName from "../hooks/useContentSizeByTagName.js";
import useWindowSize from "../hooks/useWindowSize";

const Footer = () => {
    const { height: contentHeight } = useContentSizeByTagName("main")
    const { height: windowHeight } = useWindowSize();
    
    console.log("cont height: ", contentHeight, " windowHeight: ", windowHeight )
        return(
            
            <footer className={(contentHeight < windowHeight) || (contentHeight === undefined) ? "container fixed-bottom" : "container"}>
                <hr />
                <h1>Das ist der Footer</h1>
            </footer>
            
        );
    }

export default Footer;