export default {
  workerConfig: {
    monitors: [
      // ===== 原有监控项（完全保留）=====
      {
        id: 'foo_monitor',
        name: 'My API Monitor',
        method: 'GET',
        target: 'https://bby.freeflarum.com',
        expectedCodes: [200],
        timeout: 10000,
      },
      {
        id: 'bar_monitor',
        name: 'My Website Monitor',
        method: 'GET',
        target: 'https://blog.lyc8503.net/',
        expectedCodes: [200],
        timeout: 10000,
      },
      {
        id: 'tcp_port_monitor',
        name: 'TCP Port Monitor',
        method: 'TCP_PING',
        target: '1.1.1.1:443',
        timeout: 5000,
      },
      {
        id: 'icmp_ping_monitor',
        name: 'ICMP Ping Monitor',
        method: 'ICMP_PING',
        target: '1.1.1.1',
        timeout: 5000,
      },

      // ===== 以下为新增监控项 =====

      // Mizuki 系列
      { id: 'mizuki-main', name: 'Mizuki 主站', method: 'GET', target: 'https://m.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000, statusPageLink: 'https://m.cccccccc.qzz.io/' },
      { id: 'mizuki-docs', name: 'Mizuki 文档', method: 'GET', target: 'https://docs.m.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'mizuki-status', name: 'Mizuki 状态页', method: 'GET', target: 'https://status.m.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },

      // FireFly 系列
      { id: 'firefly-main', name: 'FireFly 主站', method: 'GET', target: 'https://v.f.cccccccc.qzz.io', expectedCodes: [200], timeout: 10000, statusPageLink: 'https://v.f.cccccccc.qzz.io' },
      { id: 'firefly-docs', name: 'FireFly 文档', method: 'GET', target: 'https://docs.v.f.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'firefly-status', name: 'FireFly 状态页', method: 'GET', target: 'https://status.v.f.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },

      // 核心工具服务
      { id: 'music', name: 'Music 音乐服务', method: 'GET', target: 'https://music.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'blog', name: 'BLOG 博客', method: 'GET', target: 'https://博客.cccccccc.qzz.io', expectedCodes: [200], timeout: 10000 },
      { id: 'cloudpaste', name: 'CloudPaste 临时文件分享', method: 'GET', target: 'https://临时文件分享.cccccccc.qzz.io', expectedCodes: [200], timeout: 10000 },
      { id: 'link-shortener', name: '短链服务', method: 'GET', target: 'https://s.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'paste', name: 'Paste 粘贴板', method: 'GET', target: 'https://p.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'img-host', name: '图床服务', method: 'GET', target: 'https://i.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'dns-query', name: 'DNS 查询', method: 'GET', target: 'https://d.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'speedtest', name: 'SpeedTest 测速', method: 'GET', target: 'https://st.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'whois', name: 'Whois 查询', method: 'GET', target: 'https://w.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'ip-info', name: 'IP 信息查询', method: 'GET', target: 'https://ip.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },

      // AI / API 服务
      { id: 'ai-gateway', name: 'AI Gateway', method: 'GET', target: 'https://ai.cccccccc.qzz.io/', expectedCodes: [200], timeout: 15000 },
      { id: 'openai-proxy', name: 'OpenAI Proxy', method: 'GET', target: 'https://oai.cccccccc.qzz.io/', expectedCodes: [200], timeout: 15000 },
      { id: 'claude-proxy', name: 'Claude Proxy', method: 'GET', target: 'https://claude.cccccccc.qzz.io/', expectedCodes: [200], timeout: 15000 },
      { id: 'gemini-proxy', name: 'Gemini Proxy', method: 'GET', target: 'https://gemini.cccccccc.qzz.io/', expectedCodes: [200], timeout: 15000 },

      // 平台与基础设施
      { id: 'nav', name: '导航页', method: 'GET', target: 'https://nav.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'api-main', name: 'API 主接口', method: 'GET', target: 'https://api.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'cdn', name: 'CDN 加速', method: 'GET', target: 'https://cdn.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'mail', name: '邮箱服务', method: 'GET', target: 'https://mail.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'vault', name: 'Vault 密码管理', method: 'GET', target: 'https://vault.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'git', name: 'Git 代码托管', method: 'GET', target: 'https://git.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'wiki', name: 'Wiki 知识库', method: 'GET', target: 'https://wiki.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'forum', name: 'Forum 论坛', method: 'GET', target: 'https://forum.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'shop', name: 'Shop 商店', method: 'GET', target: 'https://shop.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'pay', name: 'Pay 支付', method: 'GET', target: 'https://pay.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'auth', name: 'Auth 认证中心', method: 'GET', target: 'https://auth.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'dashboard', name: 'Dashboard 控制台', method: 'GET', target: 'https://dash.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'monitor-self', name: 'Monitor 自监控', method: 'GET', target: 'https://mon.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'log', name: 'Log 日志平台', method: 'GET', target: 'https://log.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'ci', name: 'CI/CD 流水线', method: 'GET', target: 'https://ci.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'registry', name: 'Registry 镜像仓库', method: 'GET', target: 'https://reg.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'oss', name: 'OSS 对象存储', method: 'GET', target: 'https://oss.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'db-admin', name: 'DB Admin 数据库管理', method: 'GET', target: 'https://db.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'redis-admin', name: 'Redis Admin', method: 'GET', target: 'https://redis.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'mq-admin', name: 'MQ Admin 消息队列', method: 'GET', target: 'https://mq.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'search', name: 'Search 搜索引擎', method: 'GET', target: 'https://search.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },

      // 开发者工具
      { id: 'translate', name: 'Translate 翻译', method: 'GET', target: 'https://t.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'qr-code', name: 'QR Code 二维码生成', method: 'GET', target: 'https://qr.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'json-tools', name: 'JSON 工具集', method: 'GET', target: 'https://json.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'regex-tester', name: 'Regex 正则测试', method: 'GET', target: 'https://regex.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'cron-parser', name: 'Cron 解析器', method: 'GET', target: 'https://cron.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'uuid-gen', name: 'UUID 生成器', method: 'GET', target: 'https://uuid.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'hash-gen', name: 'Hash 哈希计算', method: 'GET', target: 'https://hash.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'base64', name: 'Base64 编解码', method: 'GET', target: 'https://b64.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'url-encode', name: 'URL Encode/Decode', method: 'GET', target: 'https://url.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'timestamp', name: 'Timestamp 时间戳转换', method: 'GET', target: 'https://ts.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'color-picker', name: 'Color Picker 取色器', method: 'GET', target: 'https://color.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'markdown-editor', name: 'Markdown 编辑器', method: 'GET', target: 'https://md.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'diff-tool', name: 'Diff 文本对比', method: 'GET', target: 'https://diff.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'yaml-validator', name: 'YAML 校验器', method: 'GET', target: 'https://yaml.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'xml-formatter', name: 'XML 格式化', method: 'GET', target: 'https://xml.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
      { id: 'sql-formatter', name: 'SQL 格式化', method: 'GET', target: 'https://sql.cccccccc.qzz.io/', expectedCodes: [200], timeout: 10000 },
    ],

    notification: {
      telegram: {
        token: process.env.TELEGRAM_TOKEN || '',
        chatId: process.env.TELEGRAM_CHAT_ID || '',
      },
    },

    maintenance: [
      {
        id: 'nightly-maintenance',
        name: 'Nightly Maintenance',
        start: '02:00',
        end: '04:00',
        timezone: 'Asia/Shanghai',
        days: ['Monday', 'Wednesday', 'Friday'],
        affectedMonitors: ['foo_monitor'],
      },
    ],
  },

  pageConfig: {
    title: "BBY's Status Page",
    links: [
      { link: 'https://github.com/lyc8503', label: 'GitHub' },
      { link: 'https://blog.lyc8503.net/', label: 'Blog' },
      { link: 'mailto:me@lyc8503.net', label: 'Email Me', highlight: true },
    ],
  },
       }
