import axios from "axios";
import showToaster from "../../../components/Toaster/Toaster";
import { propertyData } from "../../reducer/Property";
export const getProperty = () => async (dispatch) => {
  await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/property`)
    .then((response) => {
      dispatch(propertyData(response.data));
    })
    .catch((err) => {
      showToaster(
        "error",
        err?.response?.data?.message
          ? err?.response?.data?.message
          : "Something Went Wrong",
      );
      console.warn("Something Went Wrong", err);
    });
};
export const addProperty = (data, token, router) => async (dispatch) => {
  await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/property`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      //dispatch(getProperty());
      router.push("/property-list");
      showToaster("success", "Property added successfully");
    })
    .catch((err) => {
      showToaster(
        "error",
        err?.response?.data?.message
          ? err?.response?.data?.message
          : "Something Went Wrong",
      );
      console.warn("Something Went Wrong", err);
    });
};
export const updateProperty = (data, id, token) => async (dispatch) => {
  await axios
    .patch(`${process.env.NEXT_PUBLIC_API_URL}/property/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      dispatch(getPropertyt());

      showToaster("success", "Property updatd successfully");
    })
    .catch((err) => {
      showToaster(
        "error",
        err?.response?.data?.message
          ? err?.response?.data?.message
          : "Something Went Wrong",
      );

      console.warn("Something Went Wrong", err);
    });
};
export const deleteProperty = (id, token) => async (dispatch) => {
  await axios
    .delete(`${process.env.NEXT_PUBLIC_API_URL}/property/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      dispatch(getProperty());

      showToaster("success", "item deleted");
    })
    .catch((err) => {
      showToaster(
        "error",
        err?.response?.data?.message
          ? err?.response?.data?.message
          : "Something Went Wrong",
      );
      console.warn("Something Went Wrong", err);
    });
};
