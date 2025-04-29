import { headerLinks } from "../../datas/data.js";
import { Link } from "react-router-dom";
import { useState } from "react";

function HeaderLinks() {
  const [active, setActive] = useState("");

  return (
    <>
      {headerLinks.map((headerLink) => {
        return (
          <li key={headerLink.id}>
            <Link
              to={headerLink.path}
              className={`text-[16px] font-[500] ${
                active === headerLink.id ? "text-[#3A8F34]" : "text-[#4B4B4B]"
              }`}
              onClick={() => {
                setActive(headerLink.id);
              }}
            >
              {headerLink.link}
            </Link>
          </li>
        );
      })}
    </>
  );
}

export default HeaderLinks;
