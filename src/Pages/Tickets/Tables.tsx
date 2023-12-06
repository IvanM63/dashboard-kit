import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";

import {
  FaAngleLeft,
  FaAngleRight,
  FaAnglesLeft,
  FaAnglesRight,
  FaEllipsisVertical,
} from "react-icons/fa6";
import {
  MenuItem,
  Select,
  TableHead,
  ThemeProvider,
  createTheme,
} from "@mui/material";

//import FirstPageIcon from '@mui/icons-material/FirstPage';
//import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
//import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
//import LastPageIcon from '@mui/icons-material/LastPage';

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, mx: 2.5, my: 2 }}>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? <FaAngleRight /> : <FaAngleLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? <FaAngleLeft /> : <FaAngleRight />}
      </IconButton>
    </Box>
  );
}

function createData(
  title: string,
  lastUpdate: number,
  customerName: string,
  customerDate: string,
  date: string,
  clock: string,
  priority: string
) {
  return {
    title,
    lastUpdate,
    customerName,
    customerDate,
    date,
    clock,
    priority,
  };
}

const rows = [
  createData(
    "Contact Email not Linked",
    1,
    "Tom Cruise",
    "24.05.2019",
    "May 26, 2019",
    "6:30 PM",
    "HIGH"
  ),
  createData(
    "Adding Images to Featured Posts",
    1,
    "Matt Damon",
    "24.05.2019",
    "May 26, 2019",
    "6:30 PM",
    "LOW"
  ),
  createData(
    "When will i be charged this month?",
    1,
    "Robert Downey",
    "24.05.2019",
    "May 26, 2019",
    "7:30 PM",
    "HIGH"
  ),
  createData(
    "Payment not going through",
    2,
    "Christian Bale",
    "23.05.2019",
    "May 25, 2019",
    "5:00PM",
    "NORMAL"
  ),
  createData(
    "Unable to add replies",
    2,
    "Henry Cavil",
    "24.05.2019",
    "May 25, 2019",
    "4:00 PM",
    "HIGH"
  ),
  createData(
    "Downtime since last week",
    3,
    "Chris Evans",
    "23.05.2019",
    "May 25, 2019",
    "2:00 PM",
    "NORMAL"
  ),
  createData(
    "Referral Bonus",
    4,
    "Sam Smith",
    "22.05.2019",
    "May 25, 2019",
    "11:30 PM",
    "LOW"
  ),
  createData(
    "How do I change my password?",
    6,
    "Steve Rogers",
    "21.05.2019",
    "May 24, 2019",
    "1:30 PM",
    "NORMAL"
  ),
  createData(
    "Adding Images to Featured Posts 1",
    1,
    "Matt Damon",
    "24.05.2019",
    "May 26, 2019",
    "6:30 PM",
    "LOW"
  ),
  createData(
    "Adding Images to Featured Posts 2",
    1,
    "Matt Damon",
    "24.05.2019",
    "May 26, 2019",
    "6:30 PM",
    "LOW"
  ),
  createData(
    "Adding Images to Featured Posts 3",
    1,
    "Matt Damon",
    "24.05.2019",
    "May 26, 2019",
    "6:30 PM",
    "LOW"
  ),
];

export default function Tables() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [filter, setFilter] = React.useState("All");

  const handleChangeFilter = (event: any) => {
    setFilter(event.target.value as string);
    setPage(0);
  };

  const filteredRows =
    filter === "All" ? rows : rows.filter((row) => row.priority === filter);

  const handleMenuClick = (event: any, row: any) => {
    setIsDropdownOpen(true);
    setSelectedRow(row);
  };

  const handleMenuItemClick = (option: any) => {
    // Handle the selected option (approve/disagree) here
    console.log("Selected option:", option);

    // Close the dropdown
    setIsDropdownOpen(false);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredRows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const theme = createTheme({
    typography: {
      fontFamily: "", // Change 'Your-Font-Family' to the desired font family
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Select
          value={"Filter"}
          onChange={handleChangeFilter}
          sx={{ marginBottom: 2 }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="HIGH">High Priority</MenuItem>
          <MenuItem value="NORMAL">Normal Priority</MenuItem>
          <MenuItem value="LOW">Low Priority</MenuItem>
        </Select>
        <TableContainer>
          <Table sx={{ minWidth: 500 }}>
            <TableHead>
              <TableRow
                sx={{
                  "& .MuiTableCell-head": {
                    color: "gray",
                  },
                }}
              >
                <TableCell>Ticket details</TableCell>
                <TableCell>Customer name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Prority</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? filteredRows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : filteredRows
              ).map((row) => (
                <TableRow
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: "#f7f8ff !important",
                    },
                    height: "80px",
                  }}
                  key={row.title}
                >
                  <TableCell component="th" scope="row">
                    <div className="flex flex-row">
                      <img
                        src="https://avatars.githubusercontent.com/u/55942632?v=4"
                        alt="avatar"
                        className="rounded-full w-10 h-10 "
                      />
                      <div className="flex flex-col mx-4 space-y-1">
                        <h1 className="font-semibold">{row.title}</h1>
                        <h1 className="text-xs text-gray-300">
                          {`Updated ${row.lastUpdate} day ago`}
                        </h1>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell style={{ width: 200 }}>
                    <div className="flex flex-col space-y-1">
                      <h1 className="font-semibold">{row.customerName}</h1>
                      <h1 className="text-xs text-gray-300">
                        {row.customerDate}
                      </h1>
                    </div>
                  </TableCell>
                  <TableCell style={{ width: 180 }}>
                    <div className="flex flex-col space-y-1">
                      <h1 className="font-semibold">{row.date}</h1>
                      <h1 className="text-xs text-gray-300">{row.clock}</h1>
                    </div>
                  </TableCell>
                  <TableCell style={{ width: 180 }}>
                    <div
                      className={`p-2 rounded-2xl text-xs w-max
                font-semibold text-white tracking-wide text-center
                ${
                  row.priority === "HIGH"
                    ? "bg-red-500"
                    : row.priority === "LOW"
                    ? "bg-yellow-400"
                    : "bg-green-500"
                }`}
                    >
                      {row.priority}
                    </div>
                  </TableCell>
                  <TableCell style={{ width: 60 }}>
                    <FaEllipsisVertical
                      onClick={(event) => handleMenuClick(event, row)}
                      className="text-gray-300"
                    />
                    {isDropdownOpen && selectedRow === row && (
                      <div className="absolute right-0 mt-2 py-2 bg-white border rounded shadow-lg">
                        <div
                          className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                          onClick={() => handleMenuItemClick("approve")}
                        >
                          Approve
                        </div>
                        <div
                          className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                          onClick={() => handleMenuItemClick("disagree")}
                        >
                          Disagree
                        </div>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[8, 10, 25, { label: "All", value: -1 }]}
                  colSpan={6}
                  count={filteredRows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    </ThemeProvider>
  );
}
