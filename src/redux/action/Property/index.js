import axios from "axios";
import showToaster from "../../../components/Toaster/Toaster";
import { propertyData } from "../../reducer/Property";
import { toast } from "react-toastify";
export const getProperty = (page, perPage) => async (dispatch) => {
  await axios
    .get(
      `${process.env.NEXT_PUBLIC_API_URL}/property?page=${page}&perPage=${perPage}`,
    )
    .then((response) => {
      dispatch(propertyData(response.data));
    })
    .catch((err) => {
      toast.error(
        err?.response?.data?.message
          ? err?.response?.data?.message
          : "Something Went Wrong",
      );
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
      toast.success("Property added successfully");
    })
    .catch((err) => {
      toast.error(
        err?.response?.data?.message
          ? err?.response?.data?.message
          : "Something Went Wrong",
      );
    });
};
export const updateProperty = (data, id, token) => async (dispatch) => {
  await axios
    .patch(`${process.env.NEXT_PUBLIC_API_URL}/property/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      dispatch(getPropertyt());
      toast.success("Property updatd successfully");
    })
    .catch((err) => {
      toast.error(
        err?.response?.data?.message
          ? err?.response?.data?.message
          : "Something Went Wrong",
      );
    });
};
export const deleteProperty = (id, token) => async (dispatch) => {
  await axios
    .delete(`${process.env.NEXT_PUBLIC_API_URL}/property/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      toast.success("item deleted");
    })
    .catch((err) => {
      toast.error(
        err?.response?.data?.message
          ? err?.response?.data?.message
          : "Something Went Wrong",
      );
    });
};

export const getPropertyById = (id, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/property/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      // Dispatch the data to Redux store
      // dispatch(propertyData(response.data));

      // Return the property data for use in the calling function
      return response.data;
    } catch (err) {
      toast.error(
        err?.response?.data?.message
          ? err?.response?.data?.message
          : "Something Went Wrong",
      );

      // Optionally, you can throw the error to handle it in the calling function
      throw err;
    }
  };
};
export const editProperty = (id, data, token, router) => async (dispatch) => {
  await axios
    .patch(`${process.env.NEXT_PUBLIC_API_URL}/property/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      // dispatch(getProperty()); // Refresh the property list after editing
      toast.success("Property updated successfully");

      router.push("/property-list");
    })
    .catch((err) => {
      toast.error(
        err?.response?.data?.message
          ? err?.response?.data?.message
          : "Something Went Wrong",
      );
    });
};
