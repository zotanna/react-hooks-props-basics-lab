import React from "react";
import user from "../data/user";

function Links({github, linkedin}) {
//   const newlink = props.links
//   const github = newlink.github
//   const linkedin = newlink.linkedin
  return (
    <div id="links">
      <h3>Links</h3>
      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
}

export default Links;