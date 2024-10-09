"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProperty } from "../../redux/action/Property";
import { TagsInput } from "react-tag-input-component-2";
import { useRouter } from "next/navigation";
const PropertyForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [propertyImages, setPropertyImages] = useState([null]);
  const [propertyVideos, setPropertyVideos] = useState([null]);
  const [formData, setFormData] = useState({
    propertyName: "",
    propertyType: "",
    location: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    propertyDescription: "",
    numberOfRooms: "",
    roomTypes: "",
    capacity: "",
    amenities: [],
    pricing: "",
    propertyImages: null,
    videoFiles: null,
    youtubeLinks: "",
    propertyOwnership: "",
    licensesAndPermits: "",
    targetAudience: "",
    uniqueSellingPoints: "",
    nearbyAttractions: "",
    socialMediaHandles: "",
    websiteLink: "",
    emergencyContactInfo: "",
    activities: "",
    rules: "",
    addresslat: "",
    addressLong: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleChangeTag = (value, name) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleFileChange = (e) => {
  //   const { name, files } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: files,
  //   });
  // };
  const handleImageChange = (index, e) => {
    const files = e.target.files;
    const updatedImages = [...propertyImages];
    updatedImages[index] = files; // Store files for the specific input
    setPropertyImages(updatedImages);
  };

  // Handle file change for videos
  const handleVideoChange = (index, e) => {
    const files = e.target.files;
    const updatedVideos = [...propertyVideos];
    updatedVideos[index] = files; // Store files for the specific input
    setPropertyVideos(updatedVideos);
  };

  // Add a new input field for images
  const addMoreImages = () => {
    setPropertyImages((prev) => [...prev, null]); // Add a new null element for the new input
  };

  // Remove an input field for images
  const removeImageInput = (index) => {
    const updatedImages = propertyImages.filter((_, i) => i !== index); // Remove input at the specified index
    setPropertyImages(updatedImages);
  };

  // Add a new input field for videos
  const addMoreVideos = () => {
    setPropertyVideos((prev) => [...prev, null]); // Add a new null element for the new input
  };

  // Remove an input field for videos
  const removeVideoInput = (index) => {
    const updatedVideos = propertyVideos.filter((_, i) => i !== index); // Remove input at the specified index
    setPropertyVideos(updatedVideos);
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = new FormData();
  //   for (const key in formData) {
  //     data.append(key, formData[key]);
  //   }
  //   dispatch(addProperty(data, "userData?.access_token",router));

  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    // Append other form data
    for (const key in formData) {
      if (
        key !== "propertyImages" &&
        key !== "videoFiles" &&
        key !== "amenities"
      ) {
        data.append(key, formData[key]);
      }
    }
    if (formData.amenities) {
      const jsonString = JSON.stringify(formData.amenities);

      data.append("amenities", jsonString);
    }
    // Append property images
    if (propertyImages) {
      // Array.from(propertyImages).forEach((file) => {
      //   data.append("propertyImages", file);
      // });
      propertyImages.forEach((files) => {
        if (files) {
          for (let i = 0; i < files.length; i++) {
            data.append("propertyImages", files[i]); // Append each file
          }
        }
      });
    }

    // Append video files
    if (propertyVideos) {
      // Array.from(propertyVideos).forEach((file) => {
      //   data.append("videoFiles", file);
      // });
      propertyVideos.forEach((files) => {
        if (files) {
          for (let i = 0; i < files.length; i++) {
            data.append("videoFiles", files[i]); // Append each file
          }
        }
      });
    }

    // Dispatch the action with FormData
    dispatch(addProperty(data, "userData?.access_token", router));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-6xl rounded bg-white p-6 shadow-md"
    >
      <h2 className="mb-4 text-xl font-bold">Basic Property Information</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="mb-4">
          <label className="text-gray-700 block">Property Name:</label>
          <input
            type="text"
            name="propertyName"
            value={formData.propertyName}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 block">Property Type:</label>
          <input
            type="text"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 block">Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-700 block">Address lat :</label>
          <input
            type="text"
            name="addresslat"
            value={formData.addresslat}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 block">Address Long:</label>
          <input
            type="text"
            name="addressLong"
            value={formData.addressLong}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 block">Owner's Name:</label>
          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 block">Phone Number:</label>
          <input
            type="tel"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 block">Email Address:</label>
          <input
            type="email"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="mb-4 md:col-span-3">
          <label className="text-gray-700 block">Property Description:</label>
          <textarea
            name="propertyDescription"
            value={formData.propertyDescription}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 block">Number of Rooms:</label>
          <input
            type="number"
            name="numberOfRooms"
            value={formData.numberOfRooms}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 block">Room Types:</label>
          <input
            type="text"
            name="roomTypes"
            value={formData.roomTypes}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 block">Capacity:</label>
          <input
            type="number"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="mb-4 md:col-span-3">
          <label className="text-gray-700 block">Amenities:</label>

          <TagsInput
            value={formData.amenities}
            onChange={(e) => handleChangeTag(e, "amenities")}
            name="amenities"
            placeHolder=""
          />
          <em>Press enter to add new tag</em>
        </div>

        <div className="mb-4 md:col-span-3">
          <label className="text-gray-700 block">Activities:</label>
          <textarea
            name="activities"
            value={formData.activities}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>

        <div className="mb-4 md:col-span-3">
          <label className="text-gray-700 block">Rules:</label>
          <textarea
            name="rules"
            value={formData.rules}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="mb-4 md:col-span-3">
          <label className="text-gray-700 block">Pricing:</label>
          <textarea
            name="pricing"
            value={formData.pricing}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        {/* <div className="mb-4 md:col-span-3">
          <label className="text-gray-700 block">Property Images:</label>
          <input
            type="file"
            name="propertyImages"
            onChange={handleFileChange}
            className="w-full rounded border px-3 py-2"
            multiple
            required
          />
        </div> */}

        <div className="mb-4 md:col-span-3">
          <label className="text-gray-700 block">Property Images:</label>
          {propertyImages.map((_, index) => (
            <div key={index} className="mb-2 flex items-center">
              <input
                type="file"
                onChange={(e) => handleImageChange(index, e)}
                className="w-full rounded border px-3 py-2"
                multiple
                required
              />
              <button
                type="button"
                onClick={() => removeImageInput(index)}
                className="text-red-600 hover:text-red-800 ml-2"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addMoreImages}
            className="mt-2 rounded bg-blue-500 px-4 py-2 text-white"
          >
            Add More
          </button>
        </div>
      </div>

      <h2 className="mb-4 mt-6 text-xl font-bold">Video Content</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="mb-4 md:col-span-3">
          {/* <label className="text-gray-700 block">Video Files:</label> */}
          {/* <input
            type="file"
            name="videoFiles"
            onChange={handleFileChange}
            className="w-full rounded border px-3 py-2"
            multiple
          /> */}
          <div className="mb-4 md:col-span-3">
            <label className="text-gray-700 block">Property Videos:</label>
            {propertyVideos.map((_, index) => (
              <div key={index} className="mb-2 flex items-center">
                <input
                  type="file"
                  onChange={(e) => handleVideoChange(index, e)}
                  className="w-full rounded border px-3 py-2"
                  multiple
                  required
                />
                <button
                  type="button"
                  onClick={() => removeVideoInput(index)}
                  className="text-red-600 hover:text-red-800 ml-2"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addMoreVideos}
              className="mt-2 rounded bg-blue-500 px-4 py-2 text-white"
            >
              Add More Videos
            </button>
          </div>
        </div>
        <div className="mb-4 md:col-span-3">
          <label className="text-gray-700 block">YouTube Links:</label>
          <textarea
            name="youtubeLinks"
            value={formData.youtubeLinks}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
          />
        </div>
      </div>

      <h2 className="mb-4 mt-6 text-xl font-bold">
        Legal and Regulatory Information
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="mb-4">
          <label className="text-gray-700 block">Property Ownership:</label>
          <textarea
            name="propertyOwnership"
            value={formData.propertyOwnership}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 block">Licenses and Permits:</label>
          <textarea
            name="licensesAndPermits"
            value={formData.licensesAndPermits}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
      </div>

      <h2 className="mb-4 mt-6 text-xl font-bold">Additional Information</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="mb-4">
          <label className="text-gray-700 block">Target Audience:</label>
          <input
            type="text"
            name="targetAudience"
            value={formData.targetAudience}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="mb-4 md:col-span-3">
          <label className="text-gray-700 block">Unique Selling Points:</label>
          <textarea
            name="uniqueSellingPoints"
            value={formData.uniqueSellingPoints}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="mb-4 md:col-span-3">
          <label className="text-gray-700 block">Nearby Attractions:</label>
          <textarea
            name="nearbyAttractions"
            value={formData.nearbyAttractions}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="mb-4 md:col-span-3">
          <label className="text-gray-700 block">Social Media Handles:</label>
          <textarea
            name="socialMediaHandles"
            value={formData.socialMediaHandles}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
          />
        </div>
        <div className="mb-4 md:col-span-3">
          <label className="text-gray-700 block">Website Link:</label>
          <input
            type="url"
            name="websiteLink"
            value={formData.websiteLink}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
          />
        </div>
        <div className="mb-4 md:col-span-3">
          <label className="text-gray-700 block">
            Emergency/Alternate Contact Information:
          </label>
          <textarea
            name="emergencyContactInfo"
            value={formData.emergencyContactInfo}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default PropertyForm;
