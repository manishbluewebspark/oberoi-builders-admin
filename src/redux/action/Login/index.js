import axios from "axios";
import { Dispatch } from "redux";
import { userProfileData } from "../../reducer/Login";
import showToaster from "../../../components/Toaster/Toaster";
import { toast } from "react-toastify";
export const postRegistration = (data, router) => async () => {
  await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/user`, data)
    .then((response) => {
      router.push("/signin");

      toast.success("Your Account Has Been Created Successfully");
    })
    .catch((err) => {
      toast.error(
        err?.response?.data?.message
          ? err?.response?.data?.message
          : "Something Went Wrong",
      );
    });
};

export const postLogin = (data, router) => async (dispatch) => {
  await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, data)
    .then((response) => {
      dispatch(userProfileData(response.data));

      toast.success("Logged In Successfully");
      response?.data?.role === 1
        ? router.push("/dashboard")
        : response?.data?.role === 3
          ? router.push("/dashboard")
          : router.push("/");
    })
    .catch((err) => {
      toast.error(
        err?.response?.data?.message
          ? err?.response?.data?.message
          : "Something Went Wrong",
      );
    });
};
