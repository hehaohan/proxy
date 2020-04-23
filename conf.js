jsproxy_config({
  // 当前配置的版本（记录在日志中，用于排查问题）
  // 每次修改配置，该值需要增加，否则不会生效。
  // 默认每隔 5 分钟自动下载配置，若想立即验证，可通过隐私模式访问。
  ver: '112',

  // 通过 CDN 加速常用网站的静态资源（实验中）
  static_boost: {
    enable: true,
    ver: 62
  },

  // 节点配置
  node_map: {
    'default': {
      label: 'Jasons Proxy',
      lines: {
        // 主机:权重
        'tight-moon-ab83.hehaohan.workers.dev': 1,
        'young-queen-f58a.hehaohan.workers.dev': 1,
        'withered-forest-2958.hehaohan.workers.dev': 1,
        'shiny-king-12f3.hehaohan.workers.dev': 1,
        'broad-brook-352a.hehaohan.workers.dev': 1,
        'small-sun-3c68.hehaohan.workers.dev': 1,
        'damp-sun-7d10.hehaohan.workers.dev': 1,
        'silent-cell-cc9c.hehaohan.workers.dev': 1,
        'empty-disk-9a52.hehaohan.workers.dev': 1,
        'tiny-sun-9931.hehaohan.workers.dev': 1,
        'cold-sunset-eb3e.hehaohan.workers.dev': 1,
        'old-mud-7ab2.hehaohan.workers.dev': 1,
        'shrill-star-968a.hehaohan.workers.dev': 1,
        'plain-cake-c1cc.hehaohan.workers.dev': 1,
        'little-bonus-fd65.hehaohan.workers.dev': 1,
      }
    },
    'mysite': {
      label: '当前站点',
      lines: {
        [location.host]: 1,
      }
    },
    // 该节点用于加载大体积的静态资源
    'cfworker': {
      label: '',
      hidden: true,
      lines: {
        // 收费版（高权重）
        'node-cfworker-2.etherdream.com': 4,

        // 免费版（低权重，分摊一些成本）
        // 每个账号每天 10 万次免费请求，但有频率限制
        'b.007.workers.dev': 1,
        'b.hehe.workers.dev': 1,
        'b.lulu.workers.dev': 1,
        'b.jsproxy.workers.dev': 1,
      }
    }
  },

  /**
   * 默认节点
   */
  node_default: 'default',
  // node_default: /jsproxy-demo\.\w+$/.test(location.host) ? 'demo-hk' : 'mysite',

  /**
   * 加速节点
   */
  node_acc: 'cfworker',

  /**
   * 静态资源 CDN 地址
   * 用于加速 `assets` 目录中的资源访问
   */
  assets_cdn: 'https://cdn.jsdelivr.net/gh/hehaohan/proxy@latest/assets/',

  // 本地测试时打开，否则访问的是线上的
  // assets_cdn: 'assets/',

  // 首页路径
  index_path: 'index_v3.html',

  // 支持 CORS 的站点列表（实验中...）
  direct_host_list: 'cors_v1.txt',

  /**
   * 自定义注入页面的 HTML
   */
 // inject_html: '<!-- custom html -->',

  /**
   * URL 自定义处理（设计中）
   */
  url_handler: {
    'https://www.baidu.com/img/baidu_resultlogo@2.png': {
      replace: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
    },
 //   'https://www.pornhub.com/': {
 //     redir: 'https://php.net/'
 //   },
    'https://www.pornhub.com/': {
      content: '温馨提示：P站不能上哦，服务器会被封的～'
    },
    'http://haha.com/': {
      content: 'Hello World'
    },
  }
})
