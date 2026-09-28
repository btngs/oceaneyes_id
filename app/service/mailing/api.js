import API from "../index";

export const sendMail = async(data) => {
  const username = process.env.NEXT_PUBLIC_USERNAME;
  const password = process.env.NEXT_PUBLIC_PASSWORD;
  try {
    const response = await API.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      data,
      {
        auth: {
          username: username,
          password: password,
        }
      }
    )
    return response.data;
  } catch (error) {
    console.error(error);
  }
}