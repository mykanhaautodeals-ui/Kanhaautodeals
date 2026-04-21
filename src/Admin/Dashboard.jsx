// Dashboard.jsx (FULL SECURE VERSION)

import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 5;

  useEffect(() => {
    const isAdmin =
      localStorage.getItem("kanhaAdmin");

    const loginTime =
      localStorage.getItem("loginTime");

    // Not logged in
    if (
      isAdmin !== "true" ||
      !loginTime
    ) {
      navigate(
        "/api/kanha/dashboard/google"
      );
      return;
    }

    // Auto logout after 15 min
    const fifteenMin =
      15 * 60 * 1000;

    const diff =
      Date.now() - Number(loginTime);

    if (diff > fifteenMin) {
      localStorage.clear();

      navigate(
        "/api/kanha/dashboard/google"
      );

      return;
    }

    fetchData();

    // Live auto logout checker
    const timer = setInterval(() => {
      const latestTime =
        localStorage.getItem(
          "loginTime"
        );

      if (
        Date.now() -
          Number(latestTime) >
        fifteenMin
      ) {
        localStorage.clear();

        navigate(
          "/api/kanha/dashboard/google"
        );
      }
    }, 10000);

    return () =>
      clearInterval(timer);

  }, []);

  const fetchData = async () => {
    try {
      const response =
        await fetch(
          "https://docs.google.com/spreadsheets/d/1U8hJXi9kVmkTjFug0i22IfovSgMafxHeRD-5rlUyVps/gviz/tq?tqx=out:json&sheet=Form responses 1"
        );

      const text =
        await response.text();

      const json = JSON.parse(
        text
          .replace("/*O_o*/", "")
          .replace(
            "google.visualization.Query.setResponse(",
            ""
          )
          .slice(0, -2)
      );

      const rows =
        json.table.rows;

      const data = rows.map(
        (r, index) => ({
          rowIndex:
            index + 2,

          Timestamp:
            r.c?.[0]?.f ||
            "",

          Name:
            r.c?.[1]?.v?.trim() ||
            "",

          Phone: (() => {
            let raw =
              r.c?.[2]?.f ||
              r.c?.[2]?.v ||
              "";

            let num =
              String(raw).trim();

            num =
              num.replace(
                /\s+/g,
                ""
              );

            if (
              num.includes(
                "E"
              )
            ) {
              num =
                Number(
                  num
                ).toFixed(
                  0
                );
            }

            if (
              /^\d{9}$/.test(
                num
              )
            ) {
              num =
                "0" + num;
            }

            return num;
          })(),

          Email:
            r.c?.[3]?.v ||
            "",

          Vehicle:
            r.c?.[4]?.v ||
            "",

          Year:
            r.c?.[5]?.f ||
            "",

          Fuel:
            r.c?.[6]?.v ||
            "",

          Address:
            r.c?.[7]?.v ||
            "",
        })
      );

      setRecords(
        data.reverse()
      );

    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.clear();

    navigate(
      "/api/kanha/dashboard/google"
    );
  };

  const today =
    new Date().toLocaleDateString(
      "en-GB"
    );

  const todayLeads =
    records.filter(
      (item) =>
        item.Timestamp.includes(
          today
        )
    ).length;

  const filteredData =
    useMemo(() => {
      return records.filter(
        (item) =>
          item.Name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          item.Phone.includes(
            search
          )
      );
    }, [
      records,
      search,
    ]);

  const totalPages =
    Math.ceil(
      filteredData.length /
        rowsPerPage
    );

  const startIndex =
    (currentPage - 1) *
    rowsPerPage;

  const currentRows =
    filteredData.slice(
      startIndex,
      startIndex +
        rowsPerPage
    );

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-8">

        <div>
          <h1 className="text-4xl font-black text-gray-800">
            Dashboard
          </h1>

          <p className="text-gray-500">
            Kanha Auto Deals Leads Panel
          </p>
        </div>

        <button
          onClick={
            logout
          }
          className="bg-red-500 text-white px-6 py-3 rounded-xl font-bold"
        >
          Logout
        </button>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-gray-500 font-semibold">
            Total Leads
          </h3>

          <p className="text-5xl font-black text-green-600 mt-2">
            {
              records.length
            }
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-gray-500 font-semibold">
            Today Leads
          </h3>

          <p className="text-5xl font-black text-blue-600 mt-2">
            {
              todayLeads
            }
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <input
          type="text"
          placeholder="Search by Name or Phone..."
          value={
            search
          }
          onChange={(
            e
          ) => {
            setSearch(
              e.target
                .value
            );

            setCurrentPage(
              1
            );
          }}
          className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-lg p-6 overflow-auto">

        <table className="w-full text-left">

          <thead>
            <tr className="bg-green-600 text-white">
              <th className="p-3">
                Date
              </th>
              <th className="p-3">
                Name
              </th>
              <th className="p-3">
                Phone
              </th>
              <th className="p-3">
                Vehicle
              </th>
              <th className="p-3">
                Fuel
              </th>
              <th className="p-3">
                Address
              </th>
            </tr>
          </thead>

          <tbody>
            {currentRows.map(
              (
                item,
                index
              ) => (
                <tr
                  key={
                    index
                  }
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-3">
                    {
                      item.Timestamp
                    }
                  </td>

                  <td className="p-3">
                    {
                      item.Name
                    }
                  </td>

                  <td className="p-3">
                    {
                      item.Phone
                    }
                  </td>

                  <td className="p-3">
                    {
                      item.Vehicle
                    }
                  </td>

                  <td className="p-3">
                    {
                      item.Fuel
                    }
                  </td>

                  <td className="p-3">
                    {
                      item.Address
                    }
                  </td>
                </tr>
              )
            )}
          </tbody>

        </table>

        {/* Pagination */}
        <div className="flex justify-center gap-3 mt-6">

          <button
            disabled={
              currentPage ===
              1
            }
            onClick={() =>
              setCurrentPage(
                currentPage -
                  1
              )
            }
            className="px-4 py-2 bg-gray-200 rounded-lg"
          >
            Prev
          </button>

          <span className="px-4 py-2 font-bold">
            {
              currentPage
            }{" "}
            /{" "}
            {totalPages ||
              1}
          </span>

          <button
            disabled={
              currentPage ===
              totalPages
            }
            onClick={() =>
              setCurrentPage(
                currentPage +
                  1
              )
            }
            className="px-4 py-2 bg-gray-200 rounded-lg"
          >
            Next
          </button>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;