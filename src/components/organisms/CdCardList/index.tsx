import * as React from "react";
import styles from "./CdCardList.module.scss";
import { ISingle } from "../../../models/ISingle";
import { IAlbum } from "../../../models/IAlbum";
import { CdCard } from "../../molecules/CdCard";

type ICdCardProps = {
  cds: (ISingle | IAlbum)[];
};

export const CdCardList = (props: ICdCardProps) => (
  <div className={styles.container}>
    {props.cds.length !== 0
      ? props.cds.map((cd: ISingle | IAlbum) => (
          <CdCard key={cd.number} cd={cd} />
        ))
      : null}
  </div>
);
