declare module 'katex/dist/contrib/auto-render' {
  type Delimiter = { left: string; right: string; display?: boolean };
  type Options = {
    delimiters?: Delimiter[];
    throwOnError?: boolean;
    errorColor?: string;
    macros?: Record<string, string>;
  };

  export default function renderMathInElement(
    element: Element | DocumentFragment,
    options?: Options
  ): void;
}
