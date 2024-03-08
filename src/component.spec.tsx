import { render, screen } from '@testing-library/react';
import { TestComponent } from './component.tsx';
import userEvent from '@testing-library/user-event';

describe('TestComponent', () => {
  it('pressing enter in text input should call onSubmit', async () => {
    const onSubmit = vi.fn();
    render(<TestComponent onSubmit={onSubmit} />);

    await userEvent.type(screen.getByTestId('text-input'), 'text{enter}');

    expect(onSubmit).toHaveBeenCalled();
  });

  it('pressing enter in text input should call onSubmit', async () => {
    const onSubmit = vi.fn();
    render(<TestComponent onSubmit={onSubmit} />);

    await userEvent.type(screen.getByTestId('number-input'), '123{enter}');

    expect(onSubmit).toHaveBeenCalled();
  });

  it('pressing button should call onSubmit', async () => {
    const onSubmit = vi.fn();
    render(<TestComponent onSubmit={onSubmit} />);

    await userEvent.click(screen.getByText('Submit'));

    expect(onSubmit).toHaveBeenCalled();
  });
});
