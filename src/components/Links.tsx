import { link } from "../services/links";

import styles from "./Links.module.css";

export default function Links() {
  return (
    <div className={styles.linkHead}>
      <ul className={styles.linkBody}>
        {link.map((links, index) => (
          <a target="_blank" href={links.anchor}>
            <li>{links.title}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}
