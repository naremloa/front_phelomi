export const getDate = (timeType, type = 'fullDate') => {
  const dayList = ['日', '一', '二', '三', '四', '五', '六'];
  let timestamp = Date.now();
  if (typeof timeType === 'string' || typeof timeType === 'number') {
    const numberTime = new Date(timeType).valueOf();
    if (Number.isNaN(numberTime)) return '--';
    timestamp = numberTime;
  }

  const d = new Date(timestamp);
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const date = d.getDate().toString().padStart(2, '0');
  const day = dayList[d.getDay()];
  if (type === 'fullDate') return `${year}-${month}-${date}`;
  if (type === 'fullDateFormat') return `${year}/${month}/${date}`;
  if (type === 'date') return `${date}`;
  if (type === 'timestamp') return timestamp;
  return '--';
};

export const addDays = (timeType, days) => {
  let timestamp = null;
  if (typeof timeType === 'string' || typeof timeType === 'number') {
    const numberTime = new Date(timeType).valueOf();
    if (Number.isNaN(numberTime)) return '--';
    timestamp = numberTime;
  }
  const newDate = timestamp + days * 24 * 60 * 60 * 1000;
  return newDate;
};