import * as React from "react";
import posed, { PoseGroup } from "react-pose";
import styles from "./CdCardList.module.scss";
import { ISingle } from "../../../models/ISingle";
import { IAlbum } from "../../../models/IAlbum";
import { CdCard } from "../../molecules/CdCard";

const CardListContainer = posed.div({
  enter: { staggerChildren: 50, beforeChildren: true },
  exit: { staggerChildren: 50, staggerDirection: -1, afterChildren: true }
});

type ICdCardProps = {
  cds: (ISingle | IAlbum)[];
};

export const CdCardList = (props: ICdCardProps) => (
  <PoseGroup>
    {props.cds.length !== 0 && (
      <CardListContainer key="cd-cards" className={styles.container}>
        {props.cds.map((cd: ISingle | IAlbum) => (
          <CdCard key={cd.number} cd={cd} />
        ))}
      </CardListContainer>
    )}
  </PoseGroup>
);
