import axios from "axios";

export const getAllNotesByUser = async (id, accessToken) => {
  const responce = await axios.get(
    `http://localhost:4400/api/note/user/getNotes/${id}`,
    {
      headers: {
        token: `blob ${accessToken}`,
      },
    }
  );
  if (responce.status === 200) {
    const temp = responce.data;
    return temp;
  }
  return;
};
