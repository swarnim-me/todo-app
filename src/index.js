import './css/style.css';

import Navbar from './views/navbar';
import Dashboard from './views/dashboard';
import setupCommonEvents from './views/common';
import AddTodoDialog from './views/addTodoDialog';

setupCommonEvents();

new AddTodoDialog();
new Navbar();
new Dashboard();