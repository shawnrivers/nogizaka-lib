import * as React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow, ShallowWrapper } from "enzyme";
import { CdCardList } from ".";
import { CdCard } from "../../molecules/CdCard";

configure({ adapter: new Adapter() });

describe("<CdCardList />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<CdCardList cds={[]} />);
  });

  it("should render CdCard based on the length of props.cds", () => {
    wrapper.setProps({
      cds: [
        {
          number: 1,
          title: "Item 1"
        },
        {
          number: 2,
          title: "Item 2"
        }
      ]
    });
    expect(wrapper.find(CdCard)).toHaveLength(2);
  });

  it("should render nothing when the the lengh of props.cds is 0", () => {
    wrapper.setProps({ cds: [] });
    expect(wrapper.find(CdCard)).toHaveLength(0);
  });
});
