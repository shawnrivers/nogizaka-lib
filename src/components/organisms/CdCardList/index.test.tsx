import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import { CdCardList } from '.';
import { CdCard } from '../../molecules/CdCard';
import { CdsCurrentPage } from '../../../utils/constants';

configure({ adapter: new Adapter() });

describe('<CdCardList />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<CdCardList singles={[]} albums={[]} currentPage={CdsCurrentPage.Single} />);
  });

  it('When in singles page, should render CdCard based on the length of props.singles', () => {
    wrapper.setProps({
      singles: [
        {
          number: 1,
          title: 'Item 1',
        },
        {
          number: 2,
          title: 'Item 2',
        },
      ],
    });
    expect(wrapper.find(CdCard)).toHaveLength(2);
  });

  it('When in albums page, should render CdCard based on the length of props.albums', () => {
    wrapper.setProps({
      albums: [
        {
          number: 1,
          title: 'Item 1',
        },
        {
          number: 2,
          title: 'Item 2',
        },
      ],
    });
    expect(wrapper.find(CdCard)).toHaveLength(2);
  });

  it('should render nothing when the the lengths of both props.singles and props.albums are 0', () => {
    wrapper.setProps({ singles: [], albums: [] });
    expect(wrapper.find(CdCard)).toHaveLength(0);
  });
});
