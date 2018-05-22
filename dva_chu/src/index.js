import dva from 'dva';
import createLoading from 'dva-loading';
import { message } from 'antd';
import createHistory from 'history/createBrowserHistory';

import './index.css';

// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true,
  }),
  // history: createHistory(),
  onError (error) {
    message.error(error.message)
  },
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/body').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
