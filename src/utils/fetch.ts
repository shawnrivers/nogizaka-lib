export const fetchGet = async (url: string): Promise<any> => (await fetch(url)).json();
