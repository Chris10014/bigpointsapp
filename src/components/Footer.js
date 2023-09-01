import useContentSizeByTagName from "../hooks/useContentSizeByTagName.js";
import useWindowSize from "../hooks/useWindowSize";

const Footer = () => {
    const { height: contentHeight } = useContentSizeByTagName("main")
    const { height: windowHeight } = useWindowSize();

        return(
            
            <footer className="container">
                <hr />
                <h1>Das ist der Footer</h1>
            </footer>
            
        );
    }

export default Footer;