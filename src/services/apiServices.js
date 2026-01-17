export const getApiData = async (endpoint, params) => {
  try {
    //const url = new URL(`https://react.dnc.group/files/${endpoint}`)
    const url = new URL(`https://dnc-react-api.vercel.app/files/${endpoint}`);
    params
      ? Object.keys(params).forEach((key) =>
          url.searchParams.append(key, params[key])
        )
      : null;

    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
