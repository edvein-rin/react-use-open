import { describe, it, expect } from "vitest";
import { act, renderHook } from "@testing-library/react-hooks";

import { useOpen } from "./useOpen";

describe("default value", () => {
  it("set to false if unset", () => {
    const { result: hookRenderResult } = renderHook(() => useOpen());
    const { isOpen } = hookRenderResult.current;

    expect(isOpen).toBe(false);
  });

  it("can be set to true", () => {
    const { result: hookRenderResult } = renderHook(() => useOpen(true));
    const { isOpen } = hookRenderResult.current;

    expect(isOpen).toBe(true);
  });
});

describe("isOpen", () => {
  it("equals true on open", () => {
    const { result: hookRenderResult } = renderHook(() => useOpen(false));
    const initialState = hookRenderResult.current;

    act(() => initialState.open());
    const stateAfterOpen = hookRenderResult.current;
    expect(stateAfterOpen.isOpen).toBe(true);
  });

  it("equals false on close", () => {
    const { result: hookRenderResult } = renderHook(() => useOpen(true));
    const initialState = hookRenderResult.current;

    act(() => initialState.close());
    const stateAfterClose = hookRenderResult.current;
    expect(stateAfterClose.isOpen).toBe(false);
  });

  it("can be toggled", () => {
    const { result: hookRenderResult } = renderHook(() => useOpen(false));
    const initialState = hookRenderResult.current;

    act(() => initialState.toggle());
    const stateAfterToggle = hookRenderResult.current;
    expect(stateAfterToggle.isOpen).toBe(true);

    act(() => stateAfterToggle.toggle());
    const stateAfterAnotherToggle = hookRenderResult.current;
    expect(stateAfterAnotherToggle.isOpen).toBe(false);
  });
});
