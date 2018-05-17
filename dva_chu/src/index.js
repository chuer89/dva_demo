import dva from 'dva';
import createLoading from 'dva-loading';
import { message } from 'antd';

import './index.css';

// 1. Initialize
const app = dva({
  initialState: {
    products: [{
      name: '第一次', id: 11
    }, {
      name: '第二次', id: 22
    }]
  }
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/product').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
