import * as React from "react";
import styles from ".CdCard.module.scss";
import { ISingle } from "../../../models/ISingle";
import { IAlbum } from "../../../models/IAlbum";

type ICdProps = {
  cd: ISingle | IAlbum;
};

export const CdCard = (props: ICdProps) => (
  <div>
    <strong>{props.cd.number} </strong>
    <span>{props.cd.title}</span>
  </div>
);
