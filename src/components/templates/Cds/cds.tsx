import * as React from "react";

import styles from "./cds.module.scss";

export const Cds = (props: any) => (
  <div className={styles.container}>
    <span>This is cds page.</span>
    <ul>
      {props.cds !== []
        ? props.cds.map((cd: any) => (
            <li key={cd.number}>
              <strong>{cd.number} </strong>
              <span>{cd.title}</span>
            </li>
          ))
        : null}
    </ul>
  </div>
);
