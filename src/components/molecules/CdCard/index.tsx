import * as React from "react";
import styles from ".CdCard.module.scss";
import { ISingle } from "../../../models/ISingle";
import { IAlbum } from "../../../models/IAlbum";

type ICdProps = {
  cd: ISingle | IAlbum;
};

export const CdCard = (props: ICdProps) => (
  <div>
    <img src={props.cd.artworks[0].urls.medium} alt={props.cd.title} />
    <strong>{props.cd.number} </strong>
    <span>{props.cd.title}</span>
  </div>
);
