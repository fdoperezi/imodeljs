/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
/** @packageDocumentation
 * @module WebGL
 */

import { AttributeMap } from "../AttributeMap";
import { FragmentShaderComponent, ProgramBuilder, VertexShaderComponent } from "../ShaderBuilder";
import { ShaderProgram } from "../ShaderProgram";
import { assignFragColor } from "./Fragment";
import { addModelViewProjectionMatrix } from "./Vertex";

const computePosition = "return MAT_MVP * rawPos;";

const computeBaseColor = "return vec4(1.0);";

/** @internal */
export function createClipMaskProgram(context: WebGLRenderingContext | WebGL2RenderingContext): ShaderProgram {
  const builder = new ProgramBuilder(AttributeMap.findAttributeMap(undefined, false));

  addModelViewProjectionMatrix(builder.vert);
  builder.vert.set(VertexShaderComponent.ComputePosition, computePosition);

  builder.frag.set(FragmentShaderComponent.ComputeBaseColor, computeBaseColor);
  builder.frag.set(FragmentShaderComponent.AssignFragData, assignFragColor);

  builder.vert.headerComment = "//!V! ClipMask";
  builder.frag.headerComment = "//!F! ClipMask";

  return builder.buildProgram(context);
}
