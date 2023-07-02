const groupDataByMonth = (data: FormattedData[]): FormattedData[][] => {
  const groupedData: FormattedData[][] = [];

  let currentMonth: string | null = null;
  let currentRow: FormattedData[] = [];

  data.forEach((dataItem) => {
    if (currentMonth === null) {
      currentMonth = dataItem.dateLabel;
    }

    if (dataItem.dateLabel !== currentMonth) {
      groupedData.push(currentRow);
      currentRow = [];
      currentMonth = dataItem.dateLabel;
    }

    currentRow.push(dataItem);
  });

  // Add the last row
  groupedData.push(currentRow);

  return groupedData;
};

export default groupDataByMonth;
