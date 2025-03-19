import axios from "axios";

export const emailPostRequest = async (data) => {
  const url = import.meta.env.VITE_BACKEND_URL;
  try {
    const response = await axios.post(`${url}/api/send-email`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data.message;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
