import { FC } from 'react';

export interface TestComponentProps {
  onSubmit: () => void;
}

export const TestComponent: FC<TestComponentProps> = ({ onSubmit }) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit();
    }}>
      <input type="text" data-testid="text-input" />
      <input type="number" data-testid="number-input" />
      <button type="submit">Submit</button>
    </form>
  );
};
