import './css/style.css';

import setupNavEvents from './views/navbar';
import setupDashboardEvents from './views/dashboard';
import setupCommonEvents from './views/common';
import AddTodoDialog from './views/addTodoDialog';

setupNavEvents();
setupDashboardEvents();
setupCommonEvents();

const addTodoDialog = new AddTodoDialog();