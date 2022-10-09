import axios from "axios";

export const baseUrl = process.env.NEXT_PUBLIC_RAPID_API_HOST;

export const fetchAPI = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
      "X-RapidAPI-Host": `${process.env.NENEXT_PUBLIC_RAPID_API_HOST}`,
    },
  });

  return data;
};
