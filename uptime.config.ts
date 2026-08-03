// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "BBY's Status Page",
  // Links shown at the header of your status page
  links: [
    { link: 'https://github.com/lyc8503', label: 'GitHub' },
  ],
}

const workerConfig: WorkerConfig = {
  monitors: [
    // ... 你的所有监控项 (monitors) 保持不变 ...
    // 为了简洁，此处省略，请直接复制你原文件中的所有 monitors
  ],
  
  notification: {
    webhook: {
      url: 'https://oapi.dingtalk.com/robot/send?access_token=c1cde81ed481ada8e8c66192d74a85e2cb97ae54b263e2d144e1832b35c66d13',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      payloadType: 'json',
      payload: {
        msgtype: 'text',
        text: {
          // 使用 {name}, {status}, {target} 等作为占位符
          content: '🔔 UptimeFlare 监控通知\n📌 监控名称: {name}\n📊 状态: {status}\n🔗 监控地址: {target}\n📝 详情: {message}\n⏰ 时间: {time}'
        },
      },
      timeout: 10000,
    },
    timeZone: 'Asia/Shanghai',
    // gracePeriod: 0, // 可以适当增加，例如 60，以减少重复通知
    gracePeriod: 60, 
  },
}

// 清空维护窗口
const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
