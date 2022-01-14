import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '.';

describe('<Button />', () => {
  it('should render', () => {
    render(<Button label="Front Template" />);

    const UiButton = screen.getByRole('button', {
      name: /front template/i,
    });

    userEvent.click(UiButton);

    expect(UiButton).toBeInTheDocument();
  });
});
