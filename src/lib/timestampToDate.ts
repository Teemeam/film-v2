const timestampToDate = (timestamp: string): DateUploaded => {
  const date = new Date(parseInt(timestamp, 10) * 1000);

  const options = {
    year: 'numeric' as const,
    month: '2-digit' as const,
    day: '2-digit' as const,
    timeZone: 'Europe/Helsinki',
  };

  const formattedDate = date.toLocaleDateString('fi-FI', options);

  const [day, month, year] = formattedDate.split('.');

  return {
    d: parseInt(day, 10),
    m: parseInt(month, 10),
    y: parseInt(year, 10),
  };
};

export default timestampToDate;
