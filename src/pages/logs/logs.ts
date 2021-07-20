import { formatTime } from '@/utils/util'

interface MyModel {
  date: string;
  timeStamp: string;
}

Page({
  data: {
    logs: [],
  },
  onLoad() {
    const logs: MyModel[] = (wx.getStorageSync('logs') || []).map((log: string) => {
      return {
        date: formatTime(new Date(log)),
        timeStamp: log
      }
    });

    this.setData({
      logs: logs,
    })
  },
});
