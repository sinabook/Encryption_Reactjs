import { createRoot } from 'react-dom/client';
import Dash from './Encryption/dash';
const root = createRoot(document.getElementById('root')); // createRoot(container!) if you use TypeScript
root.render(<Dash tab="home" />);
export default root;