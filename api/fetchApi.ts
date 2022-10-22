import axios from "axios";

export const baseUrl = `https://${process.env.NEXT_PUBLIC_RAPID_API_HOST}`;

export const fetchAPI = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-key": `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
      "x-eapidapi-host": `${process.env.NENEXT_PUBLIC_RAPID_API_HOST}`,
    },
  });

  return data;
};
