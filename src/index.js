import {  createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store/store';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);