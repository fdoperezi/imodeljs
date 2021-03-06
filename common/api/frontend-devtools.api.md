## API Report File for "@bentley/frontend-devtools"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AxisAlignedBox3d } from '@bentley/imodeljs-common';
import { BeButtonEvent } from '@bentley/imodeljs-frontend';
import { BeDuration } from '@bentley/bentleyjs-core';
import { DecorateContext } from '@bentley/imodeljs-frontend';
import { Decorator } from '@bentley/imodeljs-frontend';
import { EmphasizeElements } from '@bentley/imodeljs-frontend';
import { EventHandled } from '@bentley/imodeljs-frontend';
import { GeometrySummaryOptions } from '@bentley/imodeljs-common';
import { Hilite } from '@bentley/imodeljs-common';
import { HitDetail } from '@bentley/imodeljs-frontend';
import { Id64Arg } from '@bentley/bentleyjs-core';
import { Id64String } from '@bentley/bentleyjs-core';
import { IModelConnection } from '@bentley/imodeljs-frontend';
import { LocateFilterStatus } from '@bentley/imodeljs-frontend';
import { LocateResponse } from '@bentley/imodeljs-frontend';
import { PrimitiveTool } from '@bentley/imodeljs-frontend';
import { RenderSystemDebugControl } from '@bentley/imodeljs-frontend';
import { RenderTargetDebugControl } from '@bentley/imodeljs-frontend';
import { RgbColor } from '@bentley/imodeljs-common';
import { ScreenViewport } from '@bentley/imodeljs-frontend';
import { TileBoundingBoxes } from '@bentley/imodeljs-frontend';
import { Tool } from '@bentley/imodeljs-frontend';
import { ViewFlags } from '@bentley/imodeljs-common';
import { Viewport } from '@bentley/imodeljs-frontend';
import { ViewState } from '@bentley/imodeljs-frontend';
import { ViewStateProps } from '@bentley/imodeljs-common';

// @beta
export class AnimationIntervalTool extends Tool {
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    parseAndRun(...args: string[]): boolean;
    // (undocumented)
    run(interval?: BeDuration): boolean;
    // (undocumented)
    static toolId: string;
}

// @alpha (undocumented)
export function appendDataListEntries(dl: DataList, entries: DataListEntry[]): void;

// @beta
export class ApplyViewTool extends Tool {
    // (undocumented)
    static get maxArgs(): undefined;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    parseAndRun(...args: string[]): boolean;
    // (undocumented)
    run(view?: ViewState): boolean;
    // (undocumented)
    static toolId: string;
}

// @alpha (undocumented)
export class AttachRealityModelTool extends Tool {
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    parseAndRun(...args: string[]): boolean;
    // (undocumented)
    run(data: string): boolean;
    // (undocumented)
    static toolId: string;
}

// @alpha
export interface Button {
    // (undocumented)
    button: HTMLInputElement;
    // (undocumented)
    div: HTMLElement;
}

// @alpha
export type ButtonHandler = (button: HTMLInputElement) => void;

// @alpha
export interface ButtonProps {
    // (undocumented)
    handler: ButtonHandler;
    // (undocumented)
    id?: string;
    // (undocumented)
    inline?: boolean;
    // (undocumented)
    parent?: HTMLElement;
    // (undocumented)
    tooltip?: string;
    // (undocumented)
    value: string;
}

// @beta
export class ChangeEmphasisSettingsTool extends ChangeHiliteTool {
    // (undocumented)
    protected apply(vp: Viewport, settings?: Hilite.Settings): void;
    // (undocumented)
    protected getCurrentSettings(vp: Viewport): Hilite.Settings;
    // (undocumented)
    static toolId: string;
}

// @beta
export class ChangeHiliteSettingsTool extends ChangeHiliteTool {
    // (undocumented)
    protected apply(vp: Viewport, settings?: Hilite.Settings): void;
    // (undocumented)
    protected getCurrentSettings(vp: Viewport): Hilite.Settings;
    // (undocumented)
    static toolId: string;
}

// @beta
export abstract class ChangeHiliteTool extends Tool {
    // (undocumented)
    protected abstract apply(vp: Viewport, settings: Hilite.Settings | undefined): void;
    // (undocumented)
    protected abstract getCurrentSettings(vp: Viewport): Hilite.Settings;
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    parseAndRun(...inputArgs: string[]): boolean;
    // (undocumented)
    run(settings?: Hilite.Settings): boolean;
}

// @alpha
export abstract class ChangePlanProjectionSettingsTool extends DisplayStyleTool {
    // (undocumented)
    protected execute(vp: Viewport): boolean;
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    protected parse(inputArgs: string[]): boolean;
    // (undocumented)
    protected get require3d(): boolean;
    // (undocumented)
    static toolId: string;
}

// @beta
export class ChangeUnitsTool extends Tool {
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    parseAndRun(...args: string[]): boolean;
    // (undocumented)
    run(useMetric?: boolean): boolean;
    // (undocumented)
    static toolId: string;
}

// @beta
export class ChangeViewFlagsTool extends Tool {
    // (undocumented)
    static get maxArgs(): undefined;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    parseAndRun(...args: string[]): boolean;
    // (undocumented)
    run(vf: ViewFlags, vp?: Viewport): boolean;
    // (undocumented)
    static toolId: string;
}

// @alpha (undocumented)
export interface CheckBox {
    // (undocumented)
    checkbox: HTMLInputElement;
    // (undocumented)
    div: HTMLDivElement;
    // (undocumented)
    label: HTMLLabelElement;
}

// @alpha (undocumented)
export type CheckBoxHandler = (checkbox: HTMLInputElement) => void;

// @alpha (undocumented)
export interface CheckBoxProps {
    // (undocumented)
    handler: CheckBoxHandler;
    // (undocumented)
    id: string;
    // (undocumented)
    isChecked?: boolean;
    // (undocumented)
    name: string;
    // (undocumented)
    parent?: HTMLElement;
    // (undocumented)
    tooltip?: string;
    // (undocumented)
    typeOverride?: string;
}

// @beta
export class ClearIsolatedElementsTool extends EmphasizeElementsTool {
    // (undocumented)
    execute(emph: EmphasizeElements, vp: ScreenViewport): void;
    // (undocumented)
    static toolId: string;
    // (undocumented)
    protected get _wantCreate(): boolean;
}

// @alpha (undocumented)
export interface ColorInput {
    // (undocumented)
    div: HTMLDivElement;
    // (undocumented)
    input: HTMLInputElement;
    // (undocumented)
    label?: HTMLLabelElement;
}

// @alpha (undocumented)
export type ColorInputHandler = (value: string) => void;

// @alpha (undocumented)
export interface ColorInputProps {
    // (undocumented)
    disabled?: boolean;
    // (undocumented)
    display?: "inline" | "none" | "block";
    // (undocumented)
    handler: ColorInputHandler;
    // (undocumented)
    id?: string;
    // (undocumented)
    label?: string;
    // (undocumented)
    parent?: HTMLElement;
    // (undocumented)
    tooltip?: string;
    // (undocumented)
    value: string;
}

// @alpha (undocumented)
export interface ComboBox {
    // (undocumented)
    div: HTMLDivElement;
    // (undocumented)
    label?: HTMLLabelElement;
    // (undocumented)
    select: HTMLSelectElement;
}

// @alpha (undocumented)
export interface ComboBoxEntry {
    // (undocumented)
    name: string;
    // (undocumented)
    value: number | string | undefined;
}

// @alpha (undocumented)
export type ComboBoxHandler = (select: HTMLSelectElement) => void;

// @alpha (undocumented)
export interface ComboBoxProps {
    // (undocumented)
    entries: ComboBoxEntry[];
    // (undocumented)
    handler?: ComboBoxHandler;
    // (undocumented)
    id: string;
    // (undocumented)
    name?: string;
    // (undocumented)
    parent?: HTMLElement;
    // (undocumented)
    tooltip?: string;
    // (undocumented)
    value?: number | string;
}

// @beta
export class CompileShadersTool extends RenderSystemDebugControlTool {
    // (undocumented)
    execute(control: RenderSystemDebugControl): void;
    // (undocumented)
    static toolId: string;
}

// @alpha (undocumented)
export function convertHexToRgb(hex: string): RgbColor | undefined;

// @beta
export function copyStringToClipboard(str: string): void;

// @alpha
export function createButton(props: ButtonProps): Button;

// @alpha (undocumented)
export function createCheckBox(props: CheckBoxProps): CheckBox;

// @alpha (undocumented)
export function createColorInput(props: ColorInputProps): ColorInput;

// @alpha (undocumented)
export function createComboBox(props: ComboBoxProps): ComboBox;

// @alpha (undocumented)
export function createDataList(props: DataListProps): DataList;

// @alpha (undocumented)
export function createLabeledNumericInput(props: LabeledNumericInputProps): LabeledNumericInput;

// @alpha (undocumented)
export function createNestedMenu(props: NestedMenuProps): NestedMenu;

// @alpha (undocumented)
export function createNumericInput(props: NumericInputProps, useFloat?: boolean): HTMLInputElement;

// @alpha (undocumented)
export function createRadioBox(props: RadioBoxProps): RadioBox;

// @alpha (undocumented)
export function createSlider(props: SliderProps): Slider;

// @alpha (undocumented)
export function createTextBox(props: TextBoxProps): TextBox;

// @alpha (undocumented)
export interface DataList {
    // (undocumented)
    div: HTMLDivElement;
    // (undocumented)
    list: HTMLDataListElement;
}

// @alpha (undocumented)
export interface DataListEntry {
    // (undocumented)
    value: number | string | undefined;
}

// @alpha (undocumented)
export type DataListHandler = (list: HTMLDataListElement) => void;

// @alpha (undocumented)
export interface DataListProps {
    // (undocumented)
    entries: DataListEntry[];
    // (undocumented)
    handler?: DataListHandler;
    // (undocumented)
    id: string;
    // (undocumented)
    inline?: boolean;
    // (undocumented)
    name?: string;
    // (undocumented)
    parent?: HTMLElement;
}

// @alpha
export class DefaultTileSizeModifierTool extends Tool {
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    parseAndRun(...args: string[]): boolean;
    // (undocumented)
    run(modifier?: number): boolean;
    // (undocumented)
    static toolId: string;
}

// @beta
export function deserializeViewState(props: ViewStateProps, iModel: IModelConnection): Promise<ViewState>;

// @beta
export class DiagnosticsPanel {
    constructor(vp: Viewport, props?: DiagnosticsPanelProps);
    // (undocumented)
    dispose(): void;
    // (undocumented)
    get element(): HTMLElement;
    // (undocumented)
    readonly keyinField?: KeyinField;
    }

// @beta
export interface DiagnosticsPanelProps {
    exclude?: {
        keyin?: boolean;
        fps?: boolean;
        tileStats?: boolean;
        memory?: boolean;
        gpuProfiler?: boolean;
        toolSettings?: boolean;
    };
}

// @beta
export abstract class DisplayStyleTool extends Tool {
    // (undocumented)
    protected abstract execute(vp: Viewport): boolean;
    // (undocumented)
    protected abstract parse(args: string[]): boolean;
    // (undocumented)
    parseAndRun(...args: string[]): boolean;
    // (undocumented)
    protected get require3d(): boolean;
    // (undocumented)
    run(): boolean;
}

// @alpha
export class DumpPlanProjectionSettingsTool extends DisplayStyleTool {
    // (undocumented)
    protected execute(vp: Viewport): boolean;
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    protected parse(args: string[]): boolean;
    // (undocumented)
    protected get require3d(): boolean;
    // (undocumented)
    static toolId: string;
}

// @beta
export class ElementIdFromSourceAspectIdTool extends SourceAspectIdTool {
    // (undocumented)
    protected getECSql(queryId: string): string;
    // (undocumented)
    static toolId: string;
}

// @beta
export abstract class EmphasizeElementsTool extends Tool {
    // (undocumented)
    protected abstract execute(emph: EmphasizeElements, vp: ScreenViewport): void;
    // (undocumented)
    run(_args: any[]): boolean;
    // (undocumented)
    protected get _wantCreate(): boolean;
}

// @beta
export class EmphasizeSelectedElementsTool extends EmphasizeElementsTool {
    // (undocumented)
    execute(emph: EmphasizeElements, vp: ScreenViewport): void;
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    parseAndRun(...args: string[]): boolean;
    // (undocumented)
    static toolId: string;
    }

// @beta
export class FadeOutTool extends Tool {
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    parseAndRun(...args: string[]): boolean;
    // (undocumented)
    run(enable?: boolean): boolean;
    // (undocumented)
    static toolId: string;
}

// @beta
export class FpsTracker {
    constructor(parent: HTMLElement, viewport: Viewport);
    // (undocumented)
    dispose(): void;
    }

// @beta
export class FreezeSceneTool extends Tool {
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    parseAndRun(...args: string[]): boolean;
    // (undocumented)
    run(enable?: boolean): boolean;
    // (undocumented)
    static toolId: string;
}

// @beta
export class FrontendDevTools {
    static initialize(): Promise<void>;
    }

// @beta
export class FrustumDecorator implements Decorator {
    // (undocumented)
    decorate(context: DecorateContext): void;
    static disable(): void;
    static enable(vp: Viewport, options?: FrustumDecorationOptions): void;
    // (undocumented)
    static get isEnabled(): boolean;
}

// @alpha (undocumented)
export class GpuProfiler {
    constructor(parent: HTMLElement);
    // (undocumented)
    dispose(): void;
    }

// @alpha
export class InspectElementTool extends PrimitiveTool {
    constructor(options?: GeometrySummaryOptions, elementIds?: Id64String[]);
    // (undocumented)
    autoLockTarget(): void;
    // (undocumented)
    filterHit(hit: HitDetail, _out: LocateResponse): Promise<LocateFilterStatus>;
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    onDataButtonDown(ev: BeButtonEvent): Promise<EventHandled>;
    // (undocumented)
    onPostInstall(): void;
    // (undocumented)
    onReinitialize(): void;
    // (undocumented)
    onResetButtonUp(_ev: BeButtonEvent): Promise<EventHandled>;
    // (undocumented)
    onRestartTool(): void;
    // (undocumented)
    onUnsuspend(): void;
    // (undocumented)
    parseAndRun(...inputArgs: string[]): boolean;
    // (undocumented)
    requireWriteableTarget(): boolean;
    // (undocumented)
    static toolId: string;
    }

// @beta
export class IsolateSelectedElementsTool extends EmphasizeElementsTool {
    // (undocumented)
    execute(emph: EmphasizeElements, vp: ScreenViewport): void;
    // (undocumented)
    static toolId: string;
}

// @beta
export class KeyinField {
    constructor(props: KeyinFieldProps);
    // @alpha (undocumented)
    readonly autoCompleteList: DataList;
    // (undocumented)
    focus(): void;
    // (undocumented)
    readonly keyins: string[];
    // (undocumented)
    loseFocus(): void;
    // (undocumented)
    selectAll(): void;
    // (undocumented)
    readonly textBox: TextBox;
}

// @beta
export enum KeyinFieldLocalization {
    Both = 2,
    Localized = 1,
    NonLocalized = 0
}

// @beta
export interface KeyinFieldProps {
    baseId: string;
    historyLength?: number;
    localization?: KeyinFieldLocalization;
    parent?: HTMLElement;
    wantButton?: boolean;
    wantLabel?: boolean;
}

// @alpha (undocumented)
export interface LabeledNumericInput {
    // (undocumented)
    div: HTMLDivElement;
    // (undocumented)
    input: HTMLInputElement;
    // (undocumented)
    label: HTMLLabelElement;
}

// @alpha (undocumented)
export interface LabeledNumericInputProps extends NumericInputProps {
    // (undocumented)
    id: string;
    // (undocumented)
    name: string;
}

// @beta
export class LoseWebGLContextTool extends RenderSystemDebugControlTool {
    // (undocumented)
    execute(control: RenderSystemDebugControl): void;
    // (undocumented)
    static toolId: string;
}

// @alpha
export class MeasureTileLoadTimeTool extends Tool {
    // (undocumented)
    run(_args: any[]): boolean;
    // (undocumented)
    static toolId: string;
}

// @beta
export class MemoryTracker {
    constructor(parent: HTMLElement, vp: Viewport);
    // (undocumented)
    dispose(): void;
    }

// @alpha (undocumented)
export interface NestedMenu {
    // (undocumented)
    body: HTMLElement;
    // (undocumented)
    div: HTMLDivElement;
    // (undocumented)
    label: HTMLLabelElement;
}

// @alpha (undocumented)
export interface NestedMenuProps {
    // (undocumented)
    body?: HTMLElement;
    // (undocumented)
    expand?: boolean;
    // (undocumented)
    handler?: NestMenuHandler;
    // (undocumented)
    id?: string;
    // (undocumented)
    label?: string;
    // (undocumented)
    parent?: HTMLElement;
}

// @alpha (undocumented)
export type NestMenuHandler = (expanded: boolean) => void;

// @alpha (undocumented)
export type NumericInputHandler = (value: number, input: HTMLInputElement) => void;

// @alpha (undocumented)
export interface NumericInputProps {
    // (undocumented)
    disabled?: boolean;
    // (undocumented)
    display?: "inline" | "none" | "block";
    // (undocumented)
    handler: NumericInputHandler;
    // (undocumented)
    id?: string;
    // (undocumented)
    max?: number;
    // (undocumented)
    min?: number;
    // (undocumented)
    parent?: HTMLElement;
    // (undocumented)
    parseAsFloat?: true;
    // (undocumented)
    step?: number;
    // (undocumented)
    tooltip?: string;
    // (undocumented)
    value: number;
}

// @alpha
export abstract class OverrideSubCategoryPriorityTool extends DisplayStyleTool {
    // (undocumented)
    protected execute(vp: Viewport): boolean;
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    protected parse(args: string[]): boolean;
    // (undocumented)
    static toolId: string;
}

// @beta
export function parseArgs(args: string[]): ToolArgs;

// @beta
export function parseToggle(arg: string | undefined): string | boolean | undefined;

// @beta (undocumented)
export class ProjectExtentsDecoration {
    constructor(iModel: IModelConnection);
    // (undocumented)
    decorate(context: DecorateContext): void;
    // (undocumented)
    protected _extents: AxisAlignedBox3d;
    // (undocumented)
    protected _removeDecorationListener?: () => void;
    // (undocumented)
    protected stop(): void;
    // (undocumented)
    static toggle(imodel: IModelConnection, enabled?: boolean): boolean;
    // (undocumented)
    protected updateDecorationListener(add: boolean): void;
}

// @alpha (undocumented)
export interface RadioBox {
    // (undocumented)
    div: HTMLDivElement;
    // (undocumented)
    label?: HTMLLabelElement;
    // (undocumented)
    setValue: (newValue: number | string) => boolean;
}

// @alpha (undocumented)
export interface RadioBoxEntry {
    // (undocumented)
    label: string;
    // (undocumented)
    value: number | string | undefined;
}

// @alpha (undocumented)
export type RadioBoxHandler = (value: string, form: HTMLFormElement) => void;

// @alpha (undocumented)
export interface RadioBoxProps {
    // (undocumented)
    defaultValue?: number | string;
    // (undocumented)
    entries: RadioBoxEntry[];
    // (undocumented)
    handler: RadioBoxHandler;
    // (undocumented)
    id: string;
    // (undocumented)
    name?: string;
    // (undocumented)
    parent?: HTMLElement;
    // (undocumented)
    vertical?: boolean;
}

// @alpha (undocumented)
export class RealityTransitionTool extends Tool {
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    parseAndRun(...args: string[]): boolean;
    // (undocumented)
    run(fadeMode?: FadeMode): boolean;
    // (undocumented)
    static toolId: string;
}

// @beta
export abstract class RenderSystemDebugControlTool extends Tool {
    // (undocumented)
    protected abstract execute(_control: RenderSystemDebugControl): void;
    // (undocumented)
    run(_args: any[]): boolean;
}

// @beta
export abstract class RenderTargetDebugControlTool extends Tool {
    // (undocumented)
    protected abstract execute(_control: RenderTargetDebugControl, _vp: ScreenViewport): void;
    // (undocumented)
    run(_args: any[]): boolean;
}

// @beta
export class ReportWebGLCompatibilityTool extends Tool {
    // (undocumented)
    run(_args: any[]): boolean;
    // (undocumented)
    static toolId: string;
}

// @alpha (undocumented)
export class SaveRealityModelTool extends Tool {
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    parseAndRun(...args: string[]): boolean;
    // (undocumented)
    run(name: string | undefined): boolean;
    // (undocumented)
    static toolId: string;
}

// @beta
export class SaveViewTool extends Tool {
    // (undocumented)
    run(): boolean;
    // (undocumented)
    static toolId: string;
}

// @beta
export class SelectElementsByIdTool extends Tool {
    // (undocumented)
    static get maxArgs(): undefined;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    parseAndRun(...args: string[]): boolean;
    // (undocumented)
    run(ids?: Id64Arg): boolean;
    // (undocumented)
    static toolId: string;
}

// @beta
export function serializeViewState(view: ViewState): ViewStateProps;

// @alpha (undocumented)
export class SetAspectRatioSkewTool extends Tool {
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    parseAndRun(...args: string[]): boolean;
    // (undocumented)
    run(skew?: number): boolean;
    // (undocumented)
    static toolId: string;
}

// @internal
export class SetVolClassIntersectOff extends RenderTargetDebugControlTool {
    // (undocumented)
    execute(control: RenderTargetDebugControl, vp: ScreenViewport): void;
    // (undocumented)
    static toolId: string;
}

// @internal
export class SetVolClassIntersectOn extends RenderTargetDebugControlTool {
    // (undocumented)
    execute(control: RenderTargetDebugControl, vp: ScreenViewport): void;
    // (undocumented)
    static toolId: string;
}

// @beta
export class ShowTileVolumesTool extends Tool {
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    parseAndRun(...args: string[]): boolean;
    // (undocumented)
    run(boxes?: TileBoundingBoxes): boolean;
    // (undocumented)
    static toolId: string;
}

// @alpha (undocumented)
export interface Slider {
    // (undocumented)
    div: HTMLDivElement;
    // (undocumented)
    label: HTMLLabelElement;
    // (undocumented)
    slider: HTMLInputElement;
}

// @alpha (undocumented)
export type SliderHandler = (slider: HTMLInputElement) => void;

// @alpha (undocumented)
export interface SliderProps {
    // (undocumented)
    handler: SliderHandler;
    // (undocumented)
    id: string;
    // (undocumented)
    max: string;
    // (undocumented)
    min: string;
    // (undocumented)
    name: string;
    // (undocumented)
    parent?: HTMLElement;
    // (undocumented)
    step: string;
    // (undocumented)
    value: string;
}

// @beta
export class SourceAspectIdFromElementIdTool extends SourceAspectIdTool {
    // (undocumented)
    protected getECSql(queryId: string): string;
    // (undocumented)
    static toolId: string;
}

// @beta
export abstract class SourceAspectIdTool extends Tool {
    // (undocumented)
    protected abstract getECSql(queryId: string): string;
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    parseAndRun(...keyinArgs: string[]): boolean;
    // (undocumented)
    run(idToQuery?: string, copyToClipboard?: boolean): boolean;
}

// @beta
export interface TextBox {
    div: HTMLDivElement;
    label?: HTMLLabelElement;
    textbox: HTMLInputElement;
}

// @alpha (undocumented)
export type TextBoxHandler = (textbox: HTMLInputElement) => void;

// @alpha (undocumented)
export type TextBoxKeyPressHandler = (textbox: HTMLInputElement, ev: KeyboardEvent) => void;

// @alpha (undocumented)
export interface TextBoxProps {
    // (undocumented)
    focushandler?: TextBoxHandler;
    // (undocumented)
    handler?: TextBoxHandler;
    // (undocumented)
    id?: string;
    // (undocumented)
    inline?: boolean;
    // (undocumented)
    keypresshandler?: TextBoxKeyPressHandler;
    // (undocumented)
    label?: string;
    // (undocumented)
    list?: string;
    // (undocumented)
    parent?: HTMLElement;
    // (undocumented)
    tooltip?: string;
}

// @beta
export class TileStatisticsTracker {
    constructor(parent: HTMLElement, vp: Viewport);
    // (undocumented)
    dispose(): void;
    }

// @alpha
export class Toggle3dManipulationsTool extends Tool {
    // (undocumented)
    parseAndRun(...args: string[]): boolean;
    // (undocumented)
    run(allow?: boolean): boolean;
    // (undocumented)
    static toolId: string;
}

// @alpha
export class ToggleDrapeFrustumTool extends RenderTargetDebugControlTool {
    // (undocumented)
    execute(control: RenderTargetDebugControl, vp: ScreenViewport): void;
    // (undocumented)
    static toolId: string;
}

// @beta
export class ToggleFrustumSnapshotTool extends Tool {
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    parseAndRun(...args: string[]): boolean;
    // (undocumented)
    run(enable?: boolean, showPreloadFrustum?: boolean, showBackgroundIntersecctions?: boolean): boolean;
    // (undocumented)
    static toolId: string;
}

// @beta
export class TogglePrimitiveVisibilityTool extends RenderTargetDebugControlTool {
    // (undocumented)
    execute(control: RenderTargetDebugControl, vp: ScreenViewport): void;
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    parseAndRun(...args: string[]): boolean;
    // (undocumented)
    static toolId: string;
    }

// @beta
export function toggleProjectExtents(imodel: IModelConnection, enabled?: boolean): boolean;

// @beta
export class ToggleProjectExtentsTool extends Tool {
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    parseAndRun(...args: string[]): boolean;
    // (undocumented)
    run(enable?: boolean): boolean;
    // (undocumented)
    static toolId: string;
}

// @beta
export class ToggleReadPixelsTool extends RenderTargetDebugControlTool {
    // (undocumented)
    execute(control: RenderTargetDebugControl, vp: ScreenViewport): void;
    // (undocumented)
    static toolId: string;
}

// @alpha
export class ToggleRealityTileBounds extends RenderTargetDebugControlTool {
    // (undocumented)
    execute(control: RenderTargetDebugControl, vp: ScreenViewport): void;
    // (undocumented)
    static toolId: string;
}

// @alpha
export class ToggleRealityTileFreeze extends RenderTargetDebugControlTool {
    // (undocumented)
    execute(control: RenderTargetDebugControl, vp: ScreenViewport): void;
    // (undocumented)
    static toolId: string;
}

// @alpha
export class ToggleRealityTileLogging extends RenderTargetDebugControlTool {
    // (undocumented)
    execute(control: RenderTargetDebugControl, vp: ScreenViewport): void;
    // (undocumented)
    static toolId: string;
}

// @alpha
export class ToggleRealityTilePreload extends RenderTargetDebugControlTool {
    // (undocumented)
    execute(control: RenderTargetDebugControl, vp: ScreenViewport): void;
    // (undocumented)
    static toolId: string;
}

// @beta
export class ToggleSelectedViewFrustumTool extends Tool {
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    parseAndRun(...args: string[]): boolean;
    // (undocumented)
    run(enable?: boolean): boolean;
    // (undocumented)
    static toolId: string;
}

// @beta
export class ToggleShadowFrustumTool extends Tool {
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    parseAndRun(...args: string[]): boolean;
    // (undocumented)
    run(enable?: boolean): boolean;
    // (undocumented)
    static toolId: string;
}

// @beta
export class ToggleSkyboxTool extends DisplayStyleTool {
    // (undocumented)
    execute(vp: Viewport): boolean;
    // (undocumented)
    parse(_args: string[]): boolean;
    // (undocumented)
    get require3d(): boolean;
    // (undocumented)
    static toolId: string;
}

// @beta
export class ToggleTileRequestDecorationTool extends Tool {
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    parseAndRun(...args: string[]): boolean;
    // (undocumented)
    run(enable?: boolean): boolean;
    // (undocumented)
    static toolId: string;
}

// @beta
export class ToggleTileTreeBoundsDecorationTool extends Tool {
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    parseAndRun(...args: string[]): boolean;
    // (undocumented)
    run(enable?: boolean): boolean;
    // (undocumented)
    static toolId: string;
}

// @beta
export class ToggleWiremeshTool extends RenderSystemDebugControlTool {
    // (undocumented)
    execute(control: RenderSystemDebugControl): void;
    // (undocumented)
    static toolId: string;
}

// @beta
export interface ToolArgs {
    get(namePrefix: string): string | undefined;
    getBoolean(namePrefix: string): boolean | undefined;
    getFloat(namePrefix: string): number | undefined;
    getInteger(namePrefix: string): number | undefined;
}

// @alpha
export class ToolSettingsTracker {
    constructor(parent: HTMLElement, _vp: Viewport);
    // (undocumented)
    dispose(): void;
    }

// @alpha
export class ViewportAddRealityModel extends Tool {
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    parseAndRun(...args: string[]): boolean;
    // (undocumented)
    run(url: string): boolean;
    // (undocumented)
    static toolId: string;
}

// @alpha
export class ViewportTileSizeModifierTool extends Tool {
    // (undocumented)
    static get maxArgs(): number;
    // (undocumented)
    static get minArgs(): number;
    // (undocumented)
    parseAndRun(...args: string[]): boolean;
    // (undocumented)
    run(modifier?: number): boolean;
    // (undocumented)
    static toolId: string;
}


// (No @packageDocumentation comment for this package)

```
