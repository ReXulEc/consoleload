type Animation = "basicspin" | "plusminus";

interface CustomAnimation {
  /**
   * 
   * @example
   * 
   * 5
   */
  fps: number;
  /**
   * 
   * @example
   * 
   * ['-', '\\', '|', '/']
   */
  frames: string[];
}

declare module "consoleload" {
  /**
   * Creates a loading animation
   * @example
   *
   * const cload = require("consoleload");
   *
   * const log = cload("Fetching...", "basicspin");
   *
   * setTimeout(() => {
   *     log.stop()
   * }, 3000);
   */
  export default function (
    text: string,
    animation: Animation | CustomAnimation
  ): {
    stop: () => true;
  };
}
