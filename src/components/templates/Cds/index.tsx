import * as React from "react";
import styles from "./Cds.module.scss";
import { ISingle } from "../../../models/ISingle";
import { IAlbum } from "../../../models/IAlbum";
import { CdCardList } from "../../organisms/CdCardList";
import { TopLeftBackground } from "../../atoms/Background/TopLeftBackground";
import { TabMenu } from "../../molecules/TabMenu";
import { CdsCurrentPage } from "../../../utils/constants";

type ICdsProps = {
  cds: (ISingle | IAlbum)[];
  currentPage: CdsCurrentPage;
  handleClickSwitch(choice: string): void;
};

const pages: CdsCurrentPage[] = [CdsCurrentPage.Single, CdsCurrentPage.Album];

export const Cds = (props: ICdsProps) => (
  <div className={styles.container}>
    <TabMenu
      items={pages}
      handleClickItem={props.handleClickSwitch}
      currentPage={props.currentPage}
    />
    <CdCardList cds={props.cds} />
    <TopLeftBackground />
  </div>
);
