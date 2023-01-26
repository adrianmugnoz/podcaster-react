const sanitizeDateTimeValue = (value: number): string => {
  return value < 10 ? `0${value}` : `${value}`;
};

const convertMillisecondsToHoursMinutesSeconds = (milliseconds: number): string => {
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor((milliseconds % 3600000) / 60000);
  const seconds = Math.floor(((milliseconds % 360000) % 60000) / 1000);
  return `${hours ? `${sanitizeDateTimeValue(hours)}:` : ''}${
    minutes || hours ? `${sanitizeDateTimeValue(minutes)}:` : ''
  }${sanitizeDateTimeValue(seconds)}`;
};

const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${sanitizeDateTimeValue(day)}/${sanitizeDateTimeValue(month)}/${year}`;
};

export { convertMillisecondsToHoursMinutesSeconds, formatDate };
