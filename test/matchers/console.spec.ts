import './setup';

const noop = () => {
  return false;
};

describe('console matchers', () => {
  describe('toConsoleError', () => {
    it('should console.error with any message', () => {
      const callback = () => console.error('error message');

      expect(callback).toConsoleError();
    });

    it('should console.error with specific message', () => {
      const callback = () => console.error('error message');

      expect(callback).toConsoleError('error message');
    });

    it('should not console.error', () => {
      expect(noop).not.toConsoleError();
    });

    it('should not console.error with message', () => {
      const callback = () => console.error('error message');

      expect(callback).not.toConsoleError('other message');
    });
  });

  describe('toConsoleInfo', () => {
    it('should console.info with any message', () => {
      const callback = () => console.info('info message');

      expect(callback).toConsoleInfo();
    });

    it('should console.info with specific message', () => {
      const callback = () => console.info('info message');

      expect(callback).toConsoleInfo('info message');
    });

    it('should not console.info', () => {
      expect(noop).not.toConsoleInfo();
    });

    it('should not console.info with message', () => {
      const callback = () => console.info('info message');

      expect(callback).not.toConsoleInfo('other message');
    });
  });

  describe('toConsoleLog', () => {
    it('should console.log with any message', () => {
      const callback = () => console.log('log message');

      expect(callback).toConsoleLog();
    });

    it('should console.log with specific message', () => {
      const callback = () => console.log('log message');

      expect(callback).toConsoleLog('log message');
    });

    it('should not console.log', () => {
      expect(noop).not.toConsoleLog();
    });

    it('should not console.log with message', () => {
      const callback = () => console.log('log message');

      expect(callback).not.toConsoleLog('other message');
    });
  });

  describe('toConsoleWarn', () => {
    it('should console.warn with any message', () => {
      const callback = () => console.warn('warn message');

      expect(callback).toConsoleWarn();
    });

    it('should console.warn with specific message', () => {
      const callback = () => console.warn('warn message');

      expect(callback).toConsoleWarn('warn message');
    });

    it('should not console.warn', () => {
      expect(noop).not.toConsoleWarn();
    });

    it('should not console.warn with message', () => {
      const callback = () => console.warn('warn message');

      expect(callback).not.toConsoleWarn('other message');
    });
  });
});
