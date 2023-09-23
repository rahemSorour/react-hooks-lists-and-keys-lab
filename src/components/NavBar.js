import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
    const funct = links.map((link, index) => {
      return <a key={index} href={"#" + link}>{link}</a>
  })
  return (
   <nav>
     <div>
     {funct}
     </div>
   </nav>
  )
}

export default NavBar;
