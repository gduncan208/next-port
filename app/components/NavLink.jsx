import { useEffect } from "react";
import { gsap } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";

const NavLink = ({ title, id }) => {

    gsap.registerPlugin(ScrollToPlugin);

   const jumpTo = () => {
        gsap.to(window, {
            duration: .3,
            scrollTo: {y: `#${id}`},
            behavior: "smooth",
        });
      };

      useEffect(() => {
        return () => {    
            gsap.killTweensOf(window);
        };
      }, []);
      
    return (
        <a onClick={jumpTo}>
            {title}
        </a>
    );
};

export default NavLink;
