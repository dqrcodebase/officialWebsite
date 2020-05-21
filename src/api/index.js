import request from '@/utils/request';

export const statisticalData = query => {
  return request({
      url: 'api/daytrip/getCommentInfo.json?spuId=1717155&pageNum=1&pageSize=10&tagType=0',
      method: 'get',
  });
};