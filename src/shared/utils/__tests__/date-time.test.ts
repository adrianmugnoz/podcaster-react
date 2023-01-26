import { convertMillisecondsToHoursMinutesSeconds, formatDate } from '../date-time.utils';

describe('date-time utils', () => {
  test('convert milliseconds to hours:minutes:seconds', () => {
    const timesMillis = [1000, 60000, 3600000];
    const expected = ['01', '01:00', '01:00:00'];
    timesMillis.forEach((timeMillis, index) => {
      const convertedTime = convertMillisecondsToHoursMinutesSeconds(timeMillis);
      expect(convertedTime).toBe(expected[index]);
    });
  });

  test('format date to DD/MM/YYYY', () => {
    const isoDates = ['2023-01-25T08:28:43Z', '2022-10-20T08:28:43Z', '2022-08-18T08:28:43Z'];
    const expected = ['25/01/2023', '20/10/2022', '18/08/2022'];
    isoDates.forEach((timeMillis, index) => {
      const convertedTime = formatDate(timeMillis);
      expect(convertedTime).toBe(expected[index]);
    });
  });
});
