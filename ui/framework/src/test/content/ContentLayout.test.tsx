/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import { expect } from "chai";
import { mount, shallow } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";
import {
  ConfigurableCreateInfo, ContentControl, ContentGroup, ContentLayout, ContentLayoutDef, ContentLayoutManager, ContentLayoutProps, ContentViewManager,
  FrontstageManager,
} from "../../ui-framework";
import TestUtils from "../TestUtils";

// import SplitPane from "react-split-pane";
const SplitPane: typeof import("react-split-pane").default = require("react-split-pane"); // tslint:disable-line

describe("ContentLayout", () => {

  class TestContentControl extends ContentControl {
    constructor(info: ConfigurableCreateInfo, options: any) {
      super(info, options);

      this.reactNode = <div>Test</div>;
    }
  }

  before(async () => {
    await TestUtils.initializeUiFramework();
  });

  after(() => {
    TestUtils.terminateUiFramework();
  });

  const myContentGroup: ContentGroup = new ContentGroup({
    contents: [{ id: "myContent", classId: TestContentControl, applicationData: { name: "Test" } }],
  });

  const myContentLayout: ContentLayoutDef = new ContentLayoutDef({
    id: "SingleContent",
    descriptionKey: "UiFramework:tests.singleContent",
    priority: 100,
  });

  it("SingleContent should render", () => {
    const wrapper = mount(<ContentLayout contentGroup={myContentGroup} contentLayout={myContentLayout} isInFooterMode={true} />);
    wrapper.unmount();
  });

  it("SingleContent renders correctly", () => {
    shallow(<ContentLayout contentGroup={myContentGroup} contentLayout={myContentLayout} isInFooterMode={true} />).should.matchSnapshot();
  });

  const contentGroup2: ContentGroup = new ContentGroup({
    id: "contentGroup2",
    contents: [
      { classId: TestContentControl, applicationData: "data1" },
      { classId: TestContentControl, applicationData: "data2" },
      { classId: TestContentControl, applicationData: "data3" },
      { classId: TestContentControl, applicationData: "data4" },
    ],
  });

  const contentLayout2: ContentLayoutDef = new ContentLayoutDef({
    id: "TwoHalvesVertical",
    descriptionKey: "SampleApp:ContentLayoutDef.TwoHalvesVertical",
    priority: 60,
    verticalSplit: { id: "TwoHalvesVertical.VerticalSplit", percentage: 0.50, left: 0, right: 1 },
  });

  it("TwoHalvesVertical should render", () => {
    const wrapper = mount(<ContentLayout contentGroup={contentGroup2} contentLayout={contentLayout2} isInFooterMode={true} />);
    wrapper.unmount();
  });

  it("TwoHalvesVertical renders correctly", () => {
    shallow(<ContentLayout contentGroup={contentGroup2} contentLayout={contentLayout2} isInFooterMode={true} />).should.matchSnapshot();
  });

  const contentLayout3: ContentLayoutDef = new ContentLayoutDef({
    id: "TwoHalvesHorizontal",
    descriptionKey: "SampleApp:ContentLayoutDef.TwoHalvesHorizontal",
    priority: 60,
    horizontalSplit: { id: "TwoHalvesHorizontal.HorizontalSplit", percentage: 0.50, top: 0, bottom: 1 },
  });

  it("TwoHalvesHorizontal should render", () => {
    const wrapper = mount(<ContentLayout contentGroup={contentGroup2} contentLayout={contentLayout3} isInFooterMode={false} />);
    wrapper.unmount();
  });

  it("TwoHalvesHorizontal renders correctly", () => {
    shallow(<ContentLayout contentGroup={contentGroup2} contentLayout={contentLayout3} isInFooterMode={false} />).should.matchSnapshot();
  });

  const fourQuadrantsVerticalLayoutDef: ContentLayoutDef = new ContentLayoutDef(
    { // Four Views, two stacked on the left, two stacked on the right.
      id: "fourQuadrantsVertical",
      verticalSplit: {
        percentage: 0.50,
        lock: true,
        minSizeLeft: 100,
        minSizeRight: 100,
        left: { horizontalSplit: { percentage: 0.50, top: 0, bottom: 1, lock: true, minSizeTop: 50, minSizeBottom: 50 } },
        right: { horizontalSplit: { percentage: 0.50, top: 2, bottom: 3, lock: true, minSizeTop: 50, minSizeBottom: 50 } },
      },
    },
  );

  it("FourQuadrantsVertical should render", () => {
    const wrapper = mount(<ContentLayout contentGroup={contentGroup2} contentLayout={fourQuadrantsVerticalLayoutDef} isInFooterMode={false} />);
    wrapper.unmount();
  });

  it("FourQuadrantsVertical renders correctly", () => {
    shallow(<ContentLayout contentGroup={contentGroup2} contentLayout={fourQuadrantsVerticalLayoutDef} isInFooterMode={false} />).should.matchSnapshot();
  });

  const fourQuadrantsHorizontalLayoutDef: ContentLayoutDef = new ContentLayoutDef(
    { // Four Views, two stacked on the left, two stacked on the right.
      horizontalSplit: {
        percentage: 0.50,
        lock: true,
        minSizeTop: 100,
        minSizeBottom: 100,
        top: { verticalSplit: { percentage: 0.50, left: 0, right: 1, lock: true, minSizeLeft: 100, minSizeRight: 100 } },
        bottom: { verticalSplit: { percentage: 0.50, left: 2, right: 3, lock: true, minSizeLeft: 100, minSizeRight: 100 } },
      },
    },
  );

  it("FourQuadrantsHorizontal should render", () => {
    const wrapper = mount(<ContentLayout contentGroup={contentGroup2} contentLayout={fourQuadrantsHorizontalLayoutDef} isInFooterMode={false} />);
    wrapper.unmount();
  });

  it("FourQuadrantsVertical renders correctly", () => {
    shallow(<ContentLayout contentGroup={contentGroup2} contentLayout={fourQuadrantsHorizontalLayoutDef} isInFooterMode={false} />).should.matchSnapshot();
  });

  it("ContentLayoutDiv mouse down and up", () => {
    const wrapper = mount(<ContentLayout contentGroup={myContentGroup} contentLayout={myContentLayout} isInFooterMode={true} />);
    const layoutDiv = wrapper.find("#uifw-contentlayout-div");
    layoutDiv.simulate("mouseDown");
    expect(ContentViewManager.isMouseDown).to.be.true;
    layoutDiv.simulate("mouseUp");
    expect(ContentViewManager.isMouseDown).to.be.false;
    wrapper.unmount();
  });

  it("ContentWrapper mouse down", () => {
    const wrapper = mount(<ContentLayout contentGroup={contentGroup2} contentLayout={contentLayout2} isInFooterMode={true} />);

    const layoutWrappers = wrapper.find("div.uifw-contentlayout-wrapper");
    expect(layoutWrappers.length).to.eq(2);
    expect(wrapper.find("div.uifw-contentlayout-overlay-active").length).to.eq(0);

    layoutWrappers.at(0).simulate("mouseDown");
    wrapper.update();
    expect(wrapper.find("div.uifw-contentlayout-overlay-active").length).to.eq(1);

    wrapper.unmount();
  });

  it("Vertical SplitPane onChanged", () => {
    const wrapper = mount(
      <div>
        <ContentLayout contentGroup={contentGroup2} contentLayout={contentLayout2} isInFooterMode={true} />
      </div>);

    const splitPanel = wrapper.find(SplitPane);
    expect(splitPanel.length).to.eq(1);

    splitPanel.prop("onChange")!(50);

    wrapper.update();

    wrapper.unmount();
  });

  it("Horizontal SplitPane onChanged", () => {
    const wrapper = mount(
      <div>
        <ContentLayout contentGroup={contentGroup2} contentLayout={contentLayout3} isInFooterMode={true} />
      </div>);

    const splitPanel = wrapper.find(SplitPane);
    expect(splitPanel.length).to.eq(1);

    splitPanel.prop("onChange")!(50);

    wrapper.update();

    wrapper.unmount();
  });

  it("ContentLayoutManager.loadLayout should throw Error if ContentLayoutProps does not have an id", () => {
    const layoutProps: ContentLayoutProps = {
      descriptionKey: "UiFramework:tests.singleContent",
      priority: 100,
    };
    expect(() => ContentLayoutManager.loadLayout(layoutProps)).to.throw(Error);
  });

  it("ContentLayoutManager.setActiveLayout & refreshActiveLayout should emit onContentLayoutActivatedEvent", async () => {
    const spyMethod = sinon.spy();
    const layoutProps: ContentLayoutProps = {
      descriptionKey: "UiFramework:tests.singleContent",
      priority: 100,
    };
    const contentLayout = new ContentLayoutDef(layoutProps);
    const remove = FrontstageManager.onContentLayoutActivatedEvent.addListener(spyMethod);

    await ContentLayoutManager.setActiveLayout(contentLayout, myContentGroup);
    spyMethod.calledOnce.should.true;

    ContentLayoutManager.refreshActiveLayout();
    spyMethod.calledTwice.should.true;

    remove();
  });

  const threeRightStackedLayoutDef: ContentLayoutDef = new ContentLayoutDef(
    { // Three Views, one on the left, two stacked on the right.
      id: "ThreeRightStacked",
      descriptionKey: "SampleApp:ContentLayoutDef.ThreeRightStacked",
      priority: 85,
      verticalSplit: {
        id: "ThreeRightStacked.MainVertical",
        percentage: 0.50,
        left: 0,
        right: { horizontalSplit: { id: "ThreeRightStacked.Right", percentage: 0.50, top: 1, bottom: 3 } },
      },
    },
  );

  it("ContentLayoutDef.getUsedContentIndexes should return correct indexes", () => {
    expect(myContentLayout.getUsedContentIndexes()).to.have.members([0]);
    expect(contentLayout2.getUsedContentIndexes()).to.have.members([0, 1]);
    expect(contentLayout3.getUsedContentIndexes()).to.have.members([0, 1]);
    expect(fourQuadrantsVerticalLayoutDef.getUsedContentIndexes()).to.have.members([0, 1, 2, 3]);
    expect(fourQuadrantsHorizontalLayoutDef.getUsedContentIndexes()).to.have.members([0, 1, 2, 3]);
    expect(threeRightStackedLayoutDef.getUsedContentIndexes()).to.have.members([0, 1, 3]);
  });

});
