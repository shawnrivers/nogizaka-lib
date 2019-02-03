import * as React from "react";
import styles from "./Cds.module.scss";
import { ISingle } from "../../../models/ISingle";
import { IAlbum } from "../../../models/IAlbum";
import { CdCardList } from "../../organisms/CdCardList";

type ICdsProps = {
  cds: (ISingle | IAlbum)[];
  currentPage: string;
  handleClickSwitch(choice: string): void;
  handleClickShift(): void;
};

export const Cds = (props: ICdsProps) => (
  <div className={styles.container}>
    <h1>Cds Page</h1>
    <p>Current page: {props.currentPage}</p>
    <button onClick={() => props.handleClickSwitch("singles")}>Singles</button>
    <button onClick={() => props.handleClickSwitch("albums")}>Albums</button>
    <button onClick={props.handleClickShift}>Shift</button>
    <CdCardList cds={props.cds} />
  </div>
);
