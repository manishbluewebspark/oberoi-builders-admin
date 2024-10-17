interface PropertyItem {
  propertyName: string;
  pricing: string;
  contactName: string;
  _id: string;
  updatedAt: string;
  createdAt: string;
  // Add other properties as needed
}

interface User {
  _id: string;
  mobile: string;
  userRole: number;
  createdAt?: string; // Optional, since not all users have this field
  updatedAt?: string; // Optional, since not all users have this field
  __v: number;
}

interface PaginatedUsers {
  data: User[]; // Array of User objects
  total: number; // Total count of users
}
