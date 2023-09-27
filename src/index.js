import { createRoot } from 'react-dom/client';
import Dashboard from './dashboard';
const root = createRoot(document.getElementById('root')); // createRoot(container!) if you use TypeScript
root.render(<Dashboard tab="home" />);
export default root;