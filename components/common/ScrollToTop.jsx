import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      console.log('scroll')
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scrolltop">
      {/* <div className="scroll-to-top"> */}
      {
        isVisible &&
        <a className="icon scrollTop" onClick={scrollToTop}>
          <i className="fa fa-chevron-up"></i>
        </a>
      }
    </div >
  );
}
