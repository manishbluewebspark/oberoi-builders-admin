"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import { UnknownAction } from "redux";
import { getProperty, deleteProperty } from "../../redux/action/Property";
import { RootState } from "../../redux/store";
import Link from "next/link";
import DataTable, { TableColumn } from "react-data-table-component";
import ConfirmationModal from "./ConfirmationModal"; // Import the modal component

const PropertyTable = () => {
  const dispatch = useDispatch();
  const router = useRouter(); // Initialize useRouter for navigation
  const propertyData: any = useSelector(
    (state: RootState) => state?.property.propertyData,
  );
  const userData = useSelector((state: RootState) => state?.login?.userData);
  const [totalRows, setTotalRows] = useState(30);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [propertyIdToDelete, setPropertyIdToDelete] = useState<string | null>(
    null,
  ); // ID to delete

  useEffect(() => {
    dispatch(getProperty(1, perPage) as unknown as UnknownAction);
  }, [dispatch]);

  const handlePageChange = (page: number) => {
    setPage(page);
    dispatch(getProperty(page, perPage) as unknown as UnknownAction);
  };

  const handlePerRowsChange = async (newPerPage: number, page: number) => {
    setPerPage(newPerPage);
    dispatch(getProperty(page, newPerPage) as unknown as UnknownAction);
  };

  const handleAction1 = (id: string) => {
    router.push(`/property/${id}`);
  };

  const handleAction2 = (id: string) => {
    setPropertyIdToDelete(id); // Set the ID for deletion
    setIsModalOpen(true); // Open the modal
  };

  const confirmDelete = async () => {
    if (propertyIdToDelete) {
      await dispatch(
        deleteProperty(propertyIdToDelete) as unknown as UnknownAction,
      ); // Call the delete action
      setPropertyIdToDelete(null); // Reset the ID
      setIsModalOpen(false); // Close the modal
      // Optionally refresh the property list
      console.log("page, perPage", page, perPage);

      dispatch(getProperty(page, perPage) as unknown as UnknownAction);
    }
  };

  const formatDate = (timestamp: string | number | Date) => {
    const date = new Date(timestamp);
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date
      .getHours()
      .toString()
      .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date
      .getSeconds()
      .toString()
      .padStart(2, "0")}`;
    return formattedDate;
  };

  const columns: TableColumn<PropertyItem>[] = [
    {
      name: "Property Name",
      selector: (row: { propertyName: any }) => row.propertyName,
      sortable: true,
      width: "20%",
    },
    {
      name: "Owners Name",
      selector: (row: { contactName: any }) => row.contactName,
      sortable: true,
      width: "20%",
    },
    {
      name: "Created At",
      selector: (row: { createdAt: any }) =>
        row.createdAt ? formatDate(row.createdAt) : "N/A",
      sortable: true,
      width: "20%",
    },
    {
      name: "Updated At",
      selector: (row: { updatedAt: any }) => formatDate(row.updatedAt),
      sortable: true,
      width: "20%",
    },
    {
      name: "Actions",
      cell: (row: { _id: string }) => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleAction2(row._id)}
            className="border-red-500 bg-red-100 text-red-700 hover:bg-red-200 inline-flex h-5 w-[80px] items-center justify-center rounded-md border px-1 py-1 text-sm font-medium transition duration-150 ease-in-out"
          >
            Delete
          </button>
          <button
            onClick={() => handleAction1(row._id)}
            className="inline-flex h-5 w-[70px] items-center justify-center rounded-md border border-blue-500 bg-blue-100 px-3 py-2 text-sm font-medium text-blue-700 transition duration-150 ease-in-out hover:bg-blue-200"
          >
            Edit
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="table-header-custome mb-6 text-xl font-semibold text-black dark:text-white">
        <h4>Property List</h4>
        <Link
          href="/property"
          className="inline-flex items-center justify-center bg-primary px-5 py-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          Add
        </Link>
      </div>
      <div className="max-w-full overflow-x-auto">
        <DataTable
          columns={columns}
          data={propertyData.data}
          progressPending={loading}
          pagination
          paginationServer
          paginationTotalRows={propertyData.total}
          paginationPerPage={perPage}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handlePerRowsChange}
          paginationRowsPerPageOptions={[10, 20, 30, 50]}
        />
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
        message="Are you sure you want to delete this property?"
      />
    </div>
  );
};

export default PropertyTable;
