// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "BBY's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/lyc8503', label: 'GitHub' },
    { link: 'https://blog.lyc8503.net/', label: 'Blog' },
    { link: 'mailto:me@lyc8503.net', label: 'Email Me', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    // ===== 从 god-resources.html 提取的所有链接 =====
    {
      id: 'random_url',
      name: '随机访问网址',
      method: 'GET',
      target: 'http://arcticocean.cc.cd/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'mizuki_e',
      name: 'Mizuki (e)',
      method: 'GET',
      target: 'http://e.m.cccccccc.qzz.io/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'mizuki_v',
      name: 'Mizuki (v)',
      method: 'GET',
      target: 'https://v.m.cccccccc.qzz.io/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'mizuki_m',
      name: 'Mizuki (m)',
      method: 'GET',
      target: 'https://m.cccccccc.qzz.io/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'firefly_e',
      name: 'FireFly (e)',
      method: 'GET',
      target: 'http://e.f.cccccccc.qzz.io',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'bing_wallpaper',
      name: 'bing-wallpaper',
      method: 'GET',
      target: 'https://bing-wallpaper.cccccccc.qzz.io',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'home_page',
      name: 'Home_Page',
      method: 'GET',
      target: 'http://home_page.cccccccc.qzz.io/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'short_link',
      name: '短链',
      method: 'GET',
      target: 'http://xn--37qy7as38c.cc.cd/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'music',
      name: 'Music',
      method: 'GET',
      target: 'https://music.cccccccc.qzz.io/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'blog_cc',
      name: 'BLOG',
      method: 'GET',
      target: 'https://博客.cccccccc.qzz.io',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'waline',
      name: '评论',
      method: 'GET',
      target: 'https://waline.cccccccc.qzz.io',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'firefly_v',
      name: 'FireFly (v)',
      method: 'GET',
      target: 'https://v.f.cccccccc.qzz.io',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'blog_f',
      name: 'Blog (f)',
      method: 'GET',
      target: 'https://f.cccccccc.qzz.io/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'cloudpaste',
      name: 'CloudPaste',
      method: 'GET',
      target: 'https://临时文件分享.cccccccc.qzz.io',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'digital_garden',
      name: '数字花园',
      method: 'GET',
      target: 'https://suanyyds.fast-page.org/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'cloudflare_mail',
      name: 'cloudflare-mail',
      method: 'GET',
      target: 'https://cloudflaretempemail.pages.dev/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'cloud_mail',
      name: 'cloud-mail',
      method: 'GET',
      target: 'https://cloud.cccccccc.qzz.io/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'moemail',
      name: 'moemail',
      method: 'GET',
      target: 'http://moemail.cccccccc.qzz.io/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'k_vault',
      name: 'k-vault',
      method: 'GET',
      target: 'https://k-vault.cccccccc.qzz.io/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'astro',
      name: 'Astro',
      method: 'GET',
      target: 'https://astro.cccccccc.qzz.io',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'durable_chat',
      name: 'chat',
      method: 'GET',
      target: 'https://durable-chat-template.cccccccc.qzz.io/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'liaotian',
      name: '聊天',
      method: 'GET',
      target: 'https://liaotian.cccccccc.qzz.io/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'git_cc',
      name: 'GITHUB',
      method: 'GET',
      target: 'https://git.cccccccc.qzz.io/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'github_cc',
      name: 'github',
      method: 'GET',
      target: 'https://github.cccccccc.qzz.io/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'substracker',
      name: '订阅管理系统',
      method: 'GET',
      target: 'https://substracker.cccccccc.qzz.io/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'tg_netdisk',
      name: 'TG网盘',
      method: 'GET',
      target: 'https://loveyou.qzz.io/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'sanyue_netdisk',
      name: 'Sanyue网盘',
      method: 'GET',
      target: 'https://beibinyang.pages.dev/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'cesu',
      name: '测速',
      method: 'GET',
      target: 'https://cesu.cccccccc.qzz.io/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'hide',
      name: '隐藏图片和文档',
      method: 'GET',
      target: 'https://hide.cccccccc.qzz.io/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'wordpress',
      name: 'WordPress',
      method: 'GET',
      target: 'https://xinyuan1.dpdns.org/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'blog_o',
      name: '博客 (o)',
      method: 'GET',
      target: 'https://o.ovo.tw.kg/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'gift',
      name: 'gift',
      method: 'GET',
      target: 'http://gift.loveslife.biz/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'chat_mydiscussion',
      name: 'Chat (mydiscussion)',
      method: 'GET',
      target: 'http://chat.mydiscussion.net/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'bby_homepage',
      name: 'bby-个人主页',
      method: 'GET',
      target: 'https://a.cccccccc.qzz.io/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'bby_bookmark',
      name: '书签',
      method: 'GET',
      target: 'https://bby.free.nf/xiaoshuqian',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'bby_wp',
      name: 'wp',
      method: 'GET',
      target: 'https://bby.free.nf/wangpan/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'dushou_zifen',
      name: '读后自焚',
      method: 'GET',
      target: 'http://tu.66ghz.com/love',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'tuchuang',
      name: '图床',
      method: 'GET',
      target: 'http://tu.66ghz.com/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'suan',
      name: 'suan',
      method: 'GET',
      target: 'https://sl28592369-4.jzfkw.net/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'pan_2024',
      name: 'Pan (2024)',
      method: 'GET',
      target: 'https://2024.66ghz.com/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'wangpan_66ghz',
      name: 'wangpan',
      method: 'GET',
      target: 'http://wangpan.66ghz.com/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'beizi_ct',
      name: '个人主页y',
      method: 'GET',
      target: 'https://beizi.ct.ws/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'beizi_rf',
      name: '个人主页X',
      method: 'GET',
      target: 'http://beizi.rf.gd/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'love_online',
      name: 'online',
      method: 'GET',
      target: 'http://love.freesite.online/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'beibinyang_blog',
      name: 'blog (beibinyang)',
      method: 'GET',
      target: 'https://beibinyang.github.io/beizi',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'beibinyang_github',
      name: 'Blog (github)',
      method: 'GET',
      target: 'https://beibinyang.github.io/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'bby_free_nf',
      name: '个人主页 (free.nf)',
      method: 'GET',
      target: 'https://bby.free.nf/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'bby_shop',
      name: 'Shop-爱发电',
      method: 'GET',
      target: 'https://bby.free.nf/shop',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'bby_blog',
      name: 'Blog (bby)',
      method: 'GET',
      target: 'https://bby.free.nf/Blog',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'bby_chatp2p',
      name: 'Chat-P2P',
      method: 'GET',
      target: 'https://bby.free.nf/chatp2p',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'bby_phpchat',
      name: 'PHP-Chat',
      method: 'GET',
      target: 'https://bby.free.nf/chat',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'bby_danye',
      name: '单页',
      method: 'GET',
      target: 'https://bby.free.nf/danye/#',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'bbt_forum',
      name: 'bbt',
      method: 'GET',
      target: 'https://bbt.freeflarum.com/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'lovei_forum',
      name: 'LoveI',
      method: 'GET',
      target: 'https://lovei.freeflarum.com/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'dongguang_forum',
      name: '东广',
      method: 'GET',
      target: 'https://dongguang.freeflarum.com/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'xinyuan_forum',
      name: '昕渊',
      method: 'GET',
      target: 'https://xinyuan.flarum.cloud',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
    {
      id: 'bby_forum',
      name: '北冰洋',
      method: 'GET',
      target: 'https://bby.freeflarum.com/',
      timeout: 10000,
      expectedCodes: [200, 302, 301],
    },
  ],
  // [Optional] Notification settings
  notification: {
    // [Optional] Notification webhook settings, if not specified, no notification will be sent
    // More info at Wiki: https://github.com/lyc8503/UptimeFlare/wiki/Setup-notification
    webhook: {
      // [Required] webhook URL (example: Telegram Bot API)
      url: 'https://api.telegram.org/bot123456:ABCDEF/sendMessage',
      // [Optional] HTTP method, default to 'GET' for payloadType=param, 'POST' otherwise
      // method: 'POST',
      // [Optional] headers to be sent
      // headers: {
      //   foo: 'bar',
      // },
      // [Required] Specify how to encode the payload
      // Should be one of 'param', 'json' or 'x-www-form-urlencoded'
      // 'param': append url-encoded payload to URL search parameters
      // 'json': POST json payload as body, set content-type header to 'application/json'
      // 'x-www-form-urlencoded': POST url-encoded payload as body, set content-type header to 'x-www-form-urlencoded'
      payloadType: 'x-www-form-urlencoded',
      // [Required] payload to be sent
      // $MSG will be replaced with the human-readable notification message
      payload: {
        chat_id: 12345678,
        text: '$MSG',
      },
      // [Optional] timeout calling this webhook, in millisecond, default to 5000
      timeout: 10000,
    },
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: 'Asia/Shanghai',
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature

// const maintenances: MaintenanceConfig[] = []

const maintenances: MaintenanceConfig[] = [
  {
    // [Optional] Monitor IDs to be affected by this maintenance
    monitors: ['foo_monitor', 'bar_monitor'],
    // [Optional] default to "Scheduled Maintenance" if not specified
    title: 'Test Maintenance',
    // Description of the maintenance, will be shown at status page
    body: 'This is a test maintenance, server software upgrade',
    // Start time of the maintenance, in UNIX timestamp or ISO 8601 format
    start: '2020-01-01T00:00:00+08:00',
    // [Optional] end time of the maintenance, in UNIX timestamp or ISO 8601 format
    // if not specified, the maintenance will be considered as on-going
    end: '2050-01-01T00:00:00+08:00',
    // [Optional] color of the maintenance alert at status page, default to "yellow"
    color: 'blue',
  },
]

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
