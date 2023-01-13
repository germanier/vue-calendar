declare module "ics-js" {
  export function fromURL(
    url: string,
    options: any,
    cb: (err: any, data: any) => void
  ): void;
}
