const timestampToDate = (timestamp: string, iso: boolean): string => {
  const date = iso ? new Date(timestamp) : new Date(parseInt(timestamp, 10) * 1000);

  const options = {
    year: 'numeric' as const,
    month: 'long' as const,
  };

  const formattedDate = date.toLocaleDateString('en-US', options);

  return formattedDate;
};

export default timestampToDate;
