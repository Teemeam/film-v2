const timestampToDate = (timestamp: string): string => {
  const date = new Date(parseInt(timestamp, 10) * 1000);

  const options = {
    year: 'numeric' as const,
    month: 'long' as const,
  };

  const formattedDate = date.toLocaleDateString('en-US', options);

  return formattedDate;
};

export default timestampToDate;
