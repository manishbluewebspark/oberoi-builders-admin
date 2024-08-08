"use client";
import { useState } from 'react';

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    propertyName: '',
    propertyType: '',
    location: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    propertyDescription: '',
    numberOfRooms: '',
    roomTypes: '',
    capacity: '',
    amenities: '',
    pricing: '',
    propertyImages: null,
    videoFiles: null,
    youtubeLinks: '',
    propertyOwnership: '',
    licensesAndPermits: '',
    targetAudience: '',
    uniqueSellingPoints: '',
    nearbyAttractions: '',
    socialMediaHandles: '',
    websiteLink: '',
    emergencyContactInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the data to an API or process it as needed
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Basic Property Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="mb-4">
          <label className="block text-gray-700">Property Name:</label>
          <input
            type="text"
            name="propertyName"
            value={formData.propertyName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Property Type:</label>
          <input
            type="text"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Owner's Name:</label>
          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number:</label>
          <input
            type="tel"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email Address:</label>
          <input
            type="email"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4 md:col-span-3">
          <label className="block text-gray-700">Property Description:</label>
          <textarea
            name="propertyDescription"
            value={formData.propertyDescription}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Number of Rooms:</label>
          <input
            type="number"
            name="numberOfRooms"
            value={formData.numberOfRooms}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Room Types:</label>
          <input
            type="text"
            name="roomTypes"
            value={formData.roomTypes}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Capacity:</label>
          <input
            type="number"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4 md:col-span-3">
          <label className="block text-gray-700">Amenities:</label>
          <textarea
            name="amenities"
            value={formData.amenities}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4 md:col-span-3">
          <label className="block text-gray-700">Pricing:</label>
          <textarea
            name="pricing"
            value={formData.pricing}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4 md:col-span-3">
          <label className="block text-gray-700">Property Images:</label>
          <input
            type="file"
            name="propertyImages"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded"
            multiple
            required
          />
        </div>
      </div>

      <h2 className="text-xl font-bold mt-6 mb-4">Video Content</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="mb-4 md:col-span-3">
          <label className="block text-gray-700">Video Files:</label>
          <input
            type="file"
            name="videoFiles"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded"
            multiple
          />
        </div>
        <div className="mb-4 md:col-span-3">
          <label className="block text-gray-700">YouTube Links:</label>
          <textarea
            name="youtubeLinks"
            value={formData.youtubeLinks}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
      </div>

      <h2 className="text-xl font-bold mt-6 mb-4">Legal and Regulatory Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="mb-4">
          <label className="block text-gray-700">Property Ownership:</label>
          <textarea
            name="propertyOwnership"
            value={formData.propertyOwnership}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Licenses and Permits:</label>
          <textarea
            name="licensesAndPermits"
            value={formData.licensesAndPermits}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
      </div>

      <h2 className="text-xl font-bold mt-6 mb-4">Additional Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="mb-4">
          <label className="block text-gray-700">Target Audience:</label>
          <input
            type="text"
            name="targetAudience"
            value={formData.targetAudience}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4 md:col-span-3">
          <label className="block text-gray-700">Unique Selling Points:</label>
          <textarea
            name="uniqueSellingPoints"
            value={formData.uniqueSellingPoints}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4 md:col-span-3">
          <label className="block text-gray-700">Nearby Attractions:</label>
          <textarea
            name="nearbyAttractions"
            value={formData.nearbyAttractions}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4 md:col-span-3">
          <label className="block text-gray-700">Social Media Handles:</label>
          <textarea
            name="socialMediaHandles"
            value={formData.socialMediaHandles}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4 md:col-span-3">
          <label className="block text-gray-700">Website Link:</label>
          <input
            type="url"
            name="websiteLink"
            value={formData.websiteLink}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4 md:col-span-3">
          <label className="block text-gray-700">Emergency/Alternate Contact Information:</label>
          <textarea
            name="emergencyContactInfo"
            value={formData.emergencyContactInfo}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
      </div>

      <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default PropertyForm;
