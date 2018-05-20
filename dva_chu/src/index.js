import dva from 'dva';
import createLoading from 'dva-loading';
import { message } from 'antd';

import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/body').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
