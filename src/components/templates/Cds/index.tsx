import * as React from "react";
import styles from "./cds.module.scss";
import { ISingle } from "../../../models/ISingle";
import { IAlbum } from "../../../models/IAlbum";

interface ICdsProps {
  cds: (ISingle | IAlbum)[];
  currentPage: string;
  handleClickSwitch(choice: string): void;
  handleClickShift(): void;
}
export class Cds extends React.Component<ICdsProps> {
  render() {
    const props = this.props;

    return (
      <div className={styles.container}>
        <h1>Cds Page</h1>
        <p>Current page: {props.currentPage}</p>
        <button onClick={() => props.handleClickSwitch("singles")}>
          Singles
        </button>
        <button onClick={() => props.handleClickSwitch("albums")}>
          Albums
        </button>
        <button onClick={props.handleClickShift}>Shift</button>
        {props.cds.length !== 0 ? (
          <ul>
            {this.props.cds.map((cd: ISingle | IAlbum) => (
              <li key={cd.number}>
                <strong>{cd.number} </strong>
                <span>{cd.title}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}
