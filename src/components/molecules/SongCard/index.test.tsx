import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import { SongCard, ISongCardProps } from '.';
import { Link } from 'react-router-dom';
import { SongType, FocusPerformersType } from '../../../utils/constants';

configure({ adapter: new Adapter() });

describe('<SongCard />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    const initialMockProps: ISongCardProps = {
      artwork: {
        large: '',
        medium: '',
        small: '',
      },
      title: '',
      titleKey: '',
      type: SongType.None,
      focusPerformers: {
        type: FocusPerformersType.None,
        name: [],
      },
    };

    wrapper = shallow(<SongCard {...initialMockProps} />);
  });

  it('When is OVERTURE, should not contain link', () => {
    wrapper.setProps({
      titleKey: 'OVERTURE',
    });
    expect(wrapper.find(Link)).toHaveLength(0);
  });

  it('When is not OVERTURE, should contain Link', () => {
    wrapper.setProps({
      titleKey: 'nigemizu',
    });
    expect(wrapper.find(Link)).toHaveLength(1);
  });
});
