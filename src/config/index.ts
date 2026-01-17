// 环境配置
export const config = {
  // 环境标识
  env: import.meta.env.VITE_APP_ENV || 'development',

  // API基础URL
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || '',

  // 应用标题
  appTitle: import.meta.env.VITE_APP_TITLE || 'Calc Version',

  // 是否为生产环境
  isProduction: import.meta.env.VITE_APP_ENV === 'production',

  // 是否为开发环境
  isDevelopment: import.meta.env.VITE_APP_ENV === 'development',
};

// 开发环境下打印配置信息
if (config.isDevelopment) {
  console.log('Current Config:', config);
}

export default config;
