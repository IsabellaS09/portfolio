import type { FC } from "react";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header: FC = () => {
  return (
    <div className="flex justify-between items-center pt-8 w-full">
      <div>
        <h1>Ella</h1>
        <p>(she/her)</p>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/isabella-seeman-b93b90a3/"
          className="mr-4"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://github.com/IsabellaS09">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default Header;
