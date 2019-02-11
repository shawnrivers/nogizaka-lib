import * as React from "react";
import posed, { PoseGroup } from "react-pose";
import styles from "./CdCardList.module.scss";
import { ISingle } from "../../../models/ISingle";
import { IAlbum } from "../../../models/IAlbum";
import { CdCard } from "../../molecules/CdCard";
import { CdsCurrentPage } from "../../../utils/constants";

const CardListContainer = posed.div({
  enter: { staggerChildren: 50, beforeChildren: true },
  exit: { afterChildren: true }
});

type ICdCardProps = {
  cds: (ISingle | IAlbum)[];
  currentPage: CdsCurrentPage;
};

export const CdCardList = (props: ICdCardProps) => (
  <PoseGroup>
    {props.cds.length !== 0 && props.currentPage === CdsCurrentPage.Single ? (
      <CardListContainer key="single-cards" className={styles.container}>
        {props.cds.map((cd: ISingle | IAlbum) => (
          <CdCard key={props.currentPage + cd.number.toString()} cd={cd} />
        ))}
      </CardListContainer>
    ) : (
      <CardListContainer key="album-cards" className={styles.container}>
        {props.cds.map((cd: ISingle | IAlbum) => (
          <CdCard key={props.currentPage + cd.number.toString()} cd={cd} />
        ))}
      </CardListContainer>
    )}
  </PoseGroup>
);
