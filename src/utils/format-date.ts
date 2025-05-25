import dayjs from 'dayjs';

export function formatDate(date: string, format: string) {
  return dayjs(date).locale('id').format(format);
}
