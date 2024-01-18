export default async function generateLuckByStatistics() {
  try {
    const dataNumbers = await fetch('/data/numbers.json', {
      headers: {
        Accept: 'application/json',
      },
    }).then((res) => res.json());

    const dataIndex = Math.floor(Math.random() * dataNumbers.length);

    if (!dataNumbers) {
      throw new Error('Números não carregados...');
    }
    return { numbers: dataNumbers[dataIndex].numbers, error: null };
  } catch (error) {
    return { numbers: null, error };
  }
}
