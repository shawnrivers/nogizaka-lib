import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import { MemberCard } from '.';
import { Link } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('<MemberCard />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<MemberCard name="" displayName="" profileImage={{ large: '', small: '' }} />);
  });

  it('When is Kojiharu, should not contain link', () => {
    wrapper.setProps({
      name: 'kojimaharuna',
    });
    expect(wrapper.find(Link)).toHaveLength(0);
  });

  it('When is not Kojiharu, should contain Link', () => {
    wrapper.setProps({
      name: 'akimotomanatsu',
    });
    expect(wrapper.find(Link)).toHaveLength(1);
  });
});
