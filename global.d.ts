/*
 * @Author: crli
 * @Date: 2021-06-01 10:11:49
 * @LastEditors: crli
 * @LastEditTime: 2021-06-15 13:44:52
 * @Description: file content
 */
interface HTMLElement {
  // 进入全屏
  webkitRequestFullScreen(options?: FullscreenOptions): Promise<void>;
  msRequestFullscreen(options?: FullscreenOptions): Promise<void>;
  mozRequestFullScreen(options?: FullscreenOptions): Promise<void>
}

interface Document {
  webkitCancelFullScreen(): Promise<void>;
  msExitFullscreen(): Promise<void>;
  mozCancelFullScreen(): Promise<void>;
  isFullScreen,
  mozIsFullScreen,
  webkitIsFullScreen
}

interface Element {
  currentStyle: object[string]
}
interface Window {
  getComputedStyle(elt: Element, pseudoElt?: string | null | undefined): CSSStyleDeclaration[string]
  mozRequestAnimationFrame(callback: FrameRequestCallback): number
}