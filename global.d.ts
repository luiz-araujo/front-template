declare global {
  interface Window {
    dataLayer: {
      push: (prop: unknow) => void;
    };
  }

  namespace jest {
    /**
     * Inside the ./test/matchers folder has some custom jest matchers.
     * They must be to defined here to provides the autocomplete and
     * avoid the error below
     *
     * Property 'toConsoleError' does not exist on type 'JestMatchers<() => void>'.
     */
    interface Matchers<R> {
      toConsoleError(message?: string): R;
      toConsoleInfo(message?: string): R;
      toConsoleLog(message?: string): R;
      toConsoleWarn(message?: string): R;
    }
  }
}
