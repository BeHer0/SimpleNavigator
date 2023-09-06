import dayjs from 'dayjs';

function LastUpdateDate({timestamp}) {
  return '最后更新于 ' + dayjs(timestamp).format('YYYY年M月D日');
}

export default LastUpdateDate;
