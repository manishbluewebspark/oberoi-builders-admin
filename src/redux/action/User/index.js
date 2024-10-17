import axios from "axios";
import showToaster from "../../../components/Toaster/Toaster";
import { userData } from "../../reducer/User";

// Fetch all users
export const getUsers = (page, perPage) => async (dispatch) => {
  await axios
    .get(
      `${process.env.NEXT_PUBLIC_API_URL}/user?page=${page}&perPage=${perPage}`,
    )
    .then((response) => {
      // Dispatch the user data to Redux store
      dispatch(userData(response.data));
    })
    .catch((err) => {
      // Handle error and show a toaster message
      showToaster(
        "error",
        err?.response?.data?.message
          ? err?.response?.data?.message
          : "Something Went Wrong",
      );
      console.warn("Something Went Wrong", err);
    });
};
