import { render } from 'react-dom'
import { TestComponent } from './component.tsx';

render(<TestComponent onSubmit={() => alert('submitted')}/>, document.getElementById('app'));
