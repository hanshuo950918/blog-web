import { Avatar, Divider } from 'antd'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';

const Author = () => {

  return (
    <div className="author-div comm-box">
      <div> <Avatar size={100} src="http://www.meet-flow.com/image/blog/touxiang.jpg" /></div>
      <div className="author-introduction">
        专注于WEB和移动前端开发。此地维权无门，此时无能为力，此心随波逐流。
                <Divider>社交账号</Divider>
        <Avatar size={28} icon={<GithubOutlined />} />
        <Avatar size={28} icon={<QqOutlined />} className="account" />
        <Avatar size={28} icon={<WechatOutlined />} className="account" />
      </div>
    </div>
  )

}

export default Author