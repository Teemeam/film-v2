const formatDescription = (description: string) => {
  const split: string[] = description.split('\n');
  const filter: string[] = split.filter((row) => row.includes('Film') || row.includes('Camera'));
  return {
    film: filter[0].split('Film: ').pop(),
    camera: filter[1].split('Camera: ').pop(),
  };
};

export default formatDescription;
