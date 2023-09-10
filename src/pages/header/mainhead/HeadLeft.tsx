import React from "react";
import { useTranslations } from "../../../hooks/useData";
import { scrollToSection } from "../../../helperFunctions/scroll";
import {useNavigate} from 'react-router-dom';

function HeadLeft() {
  const { translations } = useTranslations();
  const sectionsID = ["intro", "about", "menu", "news", "contact"];
  const homenav = translations.components.mainNav;
  const navigate = useNavigate();
  const currentPath = window.location.pathname
  
  return (
    <nav className="header_part_container">
      {homenav.map((item: string, index: any) => (
        <a
          key={item}
          onClick={(e) => {
            e.preventDefault();

           currentPath === '/' ? scrollToSection(`#${sectionsID[index]}`) : navigate('/');
          }}
          href={`#${sectionsID[index]}`}
        >
          {item}
        </a>
      ))}
    </nav>
  );
}

export default HeadLeft;
