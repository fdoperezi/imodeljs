/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import { expect } from "chai";
import * as sinon from "sinon";
import { FrontstageManager, StagePanelDef, StagePanelState, WidgetDef } from "../../ui-framework";
import TestUtils from "../TestUtils";

describe("StagePanelDef", () => {

  before(async () => {
    await TestUtils.initializeUiFramework();
  });

  after(() => {
    TestUtils.terminateUiFramework();
  });

  it("Defaults, widgetDefs & widgetCount", () => {
    const panelDef = new StagePanelDef();
    panelDef.addWidgetDef(new WidgetDef({
      classId: "Test",
    }));

    expect(panelDef.applicationData).to.be.undefined;
    expect(panelDef.widgetDefs).to.have.lengthOf(1);
    expect(panelDef.widgetCount).to.eq(1);
    expect(panelDef.getSingleWidgetDef()).to.not.be.undefined;
  });

  it("applicationData", () => {
    const panelDef = new StagePanelDef();
    panelDef.panelState = StagePanelState.Open;
    panelDef.initializeFromProps({ resizable: false, applicationData: "AppData" });
    expect(panelDef.applicationData).to.eq("AppData");
  });

  it("should emit onPanelStateChangedEvent", () => {
    const spy = sinon.spy();
    FrontstageManager.onPanelStateChangedEvent.addListener(spy);
    const panelDef = new StagePanelDef();
    panelDef.panelState = StagePanelState.Minimized;
    expect(spy).to.be.calledOnceWithExactly(sinon.match({ panelDef, panelState: StagePanelState.Minimized }));
  });

  it("should default to Open state", () => {
    const panelDef = new StagePanelDef();
    expect(panelDef.panelState).to.eq(StagePanelState.Open);
  });

});
