import * as React from "react";
import posed from "react-pose";
import styles from "./CdCard.module.scss";
import { ISingle } from "../../../models/ISingle";
import { IAlbum } from "../../../models/IAlbum";
import { toOrdinalNumber } from "../../../utils/functions";

const Card = posed.div({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});

type ICdProps = {
  cd: ISingle | IAlbum;
};

export const CdCard = (props: ICdProps) => (
  <Card className={styles.container}>
    <img
      className={styles.artwork}
      src={props.cd.artworks[0].urls.medium}
      alt={props.cd.title}
    />
    <div className={styles.text}>
      <span className={styles.number}>{toOrdinalNumber(props.cd.number)}.</span>
      <span className={styles.title}>{props.cd.title}</span>
    </div>
  </Card>
);
