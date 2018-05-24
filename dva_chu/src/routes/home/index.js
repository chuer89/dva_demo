import {connect} from 'dva';
import { Button } from 'antd';
import { Link } from 'dva/router';
import style from './index.less';

const Index = () => {
  return (
    <div>
      <div><i className="iconfont">&#xe661;</i>阿里图标库</div>
      <div className={style.bannerIn}>
        <Link to="/map">
          <Button size="large">进去地图</Button>
        </Link>
      </div>
    </div>
  )
}

export default connect()(Index);
