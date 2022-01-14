type ConsoleMethods = 'error' | 'info' | 'warn' | 'log';
type Callback = () => void;

const createConsoleMatcher =
  (method: ConsoleMethods) => (callback: Callback, message?: string) => {
    const spy = jest.spyOn(global.console, method).mockImplementation(jest.fn);

    callback();

    const hasCalls = spy.mock.calls.length > 0;

    const matchMessages = spy.mock.calls.every((item) => {
      return item[0] === message;
    });

    const pass = hasCalls && (!message || matchMessages);

    spy.mockRestore();

    if (pass) {
      return {
        pass: true,
        message: () =>
          `expected 'console.${method}' to not be called with ${message}`,
      };
    }

    return {
      pass: false,
      message: () =>
        `expected 'console.${method}' to be called at least once with ${message}`,
    };
  };

export const toConsoleError = createConsoleMatcher('error');
export const toConsoleInfo = createConsoleMatcher('info');
export const toConsoleLog = createConsoleMatcher('log');
export const toConsoleWarn = createConsoleMatcher('warn');
