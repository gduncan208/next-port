import { useEffect } from "react";
import { gsap } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";

const NavLink = ({ title, id }) => {

    gsap.registerPlugin(ScrollToPlugin);

   const jumpTo = () => {
        gsap.to(window, {
            duration: .4,
            scrollTo: {y: `#${id}`, autoKill: true, onAutoKill: autoKill },
            behavior: "smooth",
        });
      };

      const autoKill = () => {
        alert("autoKill");
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
