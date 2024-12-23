
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: {
    'index.csr.html': {size: 738, hash: '1dfb3ede760d83ba962d475e330f242c61d56f47e42bbc892a04549ecce6075a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: '61d811ff2a0a00ccef24fe29313c9fa394ccd556486a1b282d1c01bcab9424a6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8371, hash: '7adb09d6fdd53e31d3525db719d12766b44c94b4562a5fba65c7defdc35f3576', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-AGQ57HW4.css': {size: 108, hash: 'yaS3JtGyaD0', text: () => import('./assets-chunks/styles-AGQ57HW4_css.mjs').then(m => m.default)}
  },
};
