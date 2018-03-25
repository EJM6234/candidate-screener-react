import ReactDOM from 'react-dom';
import { appRoutes } from './react-routes';

const routes = appRoutes();

ReactDOM.render(routes, document.getElementById('root'));
