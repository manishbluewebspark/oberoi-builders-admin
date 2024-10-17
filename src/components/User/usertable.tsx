"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import { UnknownAction } from "redux";
import { getUsers } from "../../redux/action/User";
import { RootState } from "../../redux/store";
import Link from "next/link";
import DataTable, { TableColumn } from "react-data-table-component";

const UsersTable = () => {
  const dispatch = useDispatch();
  const router = useRouter(); // Initialize useRouter for navigation
  const usersData: any = useSelector(
    (state: RootState) => state?.user.userData,
  );

  const [perPage, setPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getUsers(1, perPage) as unknown as UnknownAction);
  }, [dispatch]);

  const handlePageChange = (page: number) => {
    dispatch(getUsers(page, perPage) as unknown as UnknownAction);
  };

  const handlePerRowsChange = async (newPerPage: number, page: number) => {
    setPerPage(newPerPage);
    dispatch(getUsers(page, newPerPage) as unknown as UnknownAction);
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

  const columns: TableColumn<User>[] = [
    {
      name: "Mobile",
      selector: (row: User) => row.mobile,
      sortable: true,
      width: "20%",
    },
    {
      name: "Created At",
      selector: (row: User) =>
        row.createdAt ? formatDate(row.createdAt) : "N/A",
      sortable: true,
      width: "20%",
    },
    {
      name: "Updated At",
      selector: (row: User) =>
        row.updatedAt ? formatDate(row.updatedAt) : "N/A",
      sortable: true,
      width: "20%",
    },
    // Uncomment if needed for actions
    // {
    //   name: "Actions",
    //   cell: (row: User) => (
    //     <div className="flex space-x-2">
    //       <button
    //         onClick={() => handleAction2(row._id)}
    //         className="border-red-500 bg-red-100 text-red-700 hover:bg-red-200 inline-flex h-5 w-[80px] items-center justify-center rounded-md border px-1 py-1 text-sm font-medium transition duration-150 ease-in-out"
    //       >
    //         Delete
    //       </button>
    //       <button
    //         onClick={() => handleAction1(row._id)}
    //         className="inline-flex h-5 w-[70px] items-center justify-center rounded-md border border-blue-500 bg-blue-100 px-3 py-2 text-sm font-medium text-blue-700 transition duration-150 ease-in-out hover:bg-blue-200"
    //       >
    //         Edit
    //       </button>
    //     </div>
    //   ),
    //   ignoreRowClick: true,
    //   allowOverflow: true,
    //   button: true,
    // },
  ];

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="table-header-custome mb-6 text-xl font-semibold text-black dark:text-white">
        <h4>Users List</h4>
        {/* Uncomment if needed for adding a new user
        <Link
          href="/property"
          className="inline-flex items-center justify-center bg-primary px-5 py-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          Add
        </Link>
        */}
      </div>
      <div className="max-w-full overflow-x-auto">
        <DataTable
          columns={columns}
          data={usersData?.data || []} // Default to empty array if data is null
          progressPending={loading}
          pagination
          paginationServer
          paginationTotalRows={usersData?.total || 0} // Total rows from paginated data
          paginationPerPage={perPage}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handlePerRowsChange}
          paginationRowsPerPageOptions={[10, 20, 30, 50]}
        />
      </div>
    </div>
  );
};

export default UsersTable;
