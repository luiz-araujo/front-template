import { act, cleanup, render } from '@testing-library/react';

const customRender = (ui: React.ReactElement) => {
  return render(ui);
};

export * from '@testing-library/dom';

export { act, cleanup, customRender as render };
