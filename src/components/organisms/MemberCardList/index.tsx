import * as React from 'react';
import { IMember } from 'models/IMember';
import { MembersCurrentPage } from 'utils/constants';
import { MemberCard } from 'components/molecules/MemberCard';
import { CSSTransition } from 'react-transition-group';
import styles from './MemberCardList.module.scss';

export type MembersByType = {
  [MembersCurrentPage.First]: IMember[];
  [MembersCurrentPage.Second]: IMember[];
  [MembersCurrentPage.Third]: IMember[];
  [MembersCurrentPage.Fourth]: IMember[];
  [MembersCurrentPage.Graduate]: IMember[];
};

interface IMemberCardListProps {
  members: MembersByType;
  currentPage: MembersCurrentPage;
}

export const MemberCardList = (props: IMemberCardListProps) => {
  const { members, currentPage } = props;
  return members.first.length +
    members.second.length +
    members.third.length +
    members.fourth.length +
    members.graduate.length >
    0 ? (
    <>
      <CSSTransition
        in={currentPage === MembersCurrentPage.First}
        timeout={300}
        classNames={{
          enter: styles['enter'],
          enterActive: styles['enter-active'],
          exit: styles['exit'],
          exitActive: styles['exit-active'],
        }}
        unmountOnExit
      >
        <div className={styles.container}>
          {members.first.map(member => (
            <MemberCard
              key={member.name}
              name={member.name}
              profileImage={member.profileImage}
              displayName={`${member.nameNotations.lastName} ${member.nameNotations.firstName}`}
            />
          ))}
        </div>
      </CSSTransition>
      <CSSTransition
        in={currentPage === MembersCurrentPage.Second}
        timeout={300}
        classNames={{
          enter: styles['enter'],
          enterActive: styles['enter-active'],
          exit: styles['exit'],
          exitActive: styles['exit-active'],
        }}
        unmountOnExit
      >
        <div className={styles.container}>
          {members.second.map(member => (
            <MemberCard
              key={member.name}
              name={member.name}
              profileImage={member.profileImage}
              displayName={`${member.nameNotations.lastName} ${member.nameNotations.firstName}`}
            />
          ))}
        </div>
      </CSSTransition>
      <CSSTransition
        in={currentPage === MembersCurrentPage.Third}
        timeout={300}
        classNames={{
          enter: styles['enter'],
          enterActive: styles['enter-active'],
          exit: styles['exit'],
          exitActive: styles['exit-active'],
        }}
        unmountOnExit
      >
        <div className={styles.container}>
          {members.third.map(member => (
            <MemberCard
              key={member.name}
              name={member.name}
              profileImage={member.profileImage}
              displayName={`${member.nameNotations.lastName} ${member.nameNotations.firstName}`}
            />
          ))}
        </div>
      </CSSTransition>
      <CSSTransition
        in={currentPage === MembersCurrentPage.Fourth}
        timeout={300}
        classNames={{
          enter: styles['enter'],
          enterActive: styles['enter-active'],
          exit: styles['exit'],
          exitActive: styles['exit-active'],
        }}
        unmountOnExit
      >
        <div className={styles.container}>
          {members.fourth.map(member => (
            <MemberCard
              key={member.name}
              name={member.name}
              profileImage={member.profileImage}
              displayName={`${member.nameNotations.lastName} ${member.nameNotations.firstName}`}
            />
          ))}
        </div>
      </CSSTransition>
      <CSSTransition
        in={currentPage === MembersCurrentPage.Graduate}
        timeout={300}
        classNames={{
          enter: styles['enter'],
          enterActive: styles['enter-active'],
          exit: styles['exit'],
          exitActive: styles['exit-active'],
        }}
        unmountOnExit
      >
        <div className={styles.container}>
          {members.graduate.map(member => (
            <MemberCard
              key={member.name}
              name={member.name}
              profileImage={member.profileImage}
              displayName={`${member.nameNotations.lastName} ${member.nameNotations.firstName}`}
            />
          ))}
        </div>
      </CSSTransition>
    </>
  ) : null;
};
