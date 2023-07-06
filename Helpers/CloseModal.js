import { useEffect, useRef, useState } from "react";

const useOutsideClick = (toggleMobileMenu) => {
  const [isClient, setIsClient] = useState(false);
  const modalContainerRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        modalContainerRef.current &&
        !modalContainerRef.current.contains(event.target)
      ) {
        toggleMobileMenu();
      }
    };

    if (isClient) {
      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }
  }, [isClient, toggleMobileMenu]);

  return modalContainerRef;
};

export default useOutsideClick;
