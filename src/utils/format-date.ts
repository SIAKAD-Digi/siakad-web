import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export function formatDate(date: string, format: string) {
  return dayjs.utc(date).locale('id').format(format);
}
