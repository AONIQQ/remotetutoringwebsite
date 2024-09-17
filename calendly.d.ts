declare module 'calendly' {
    export interface Calendly {
      initInlineWidget(options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, unknown>;
        utm?: Record<string, unknown>;
      }): void;
    }
  }