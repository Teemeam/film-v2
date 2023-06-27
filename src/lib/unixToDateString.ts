const unixToDateString = (unixTimestamp: string): string => {
  const date = new Date(parseInt(unixTimestamp, 10) * 1000);
  const options = {
    year: 'numeric' as const,
    month: '2-digit' as const,
    day: '2-digit' as const,
    timeZone: 'Europe/Helsinki',
  };

  return date.toLocaleDateString('fi-FI', options);
};

export default unixToDateString;
