export const getData = async <T>(url: string): Promise<T> => {
  const respose = await fetch(url);
  return await respose.json();
};
