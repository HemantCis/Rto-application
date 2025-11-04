"use client"

import React, {useEffect, useState} from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Link from 'next/link';

const Formlist = () => {
    const [tableData, setTableData] = useState([]);
    const token = Cookies.get("rto-token");

    const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
    

  useEffect(()=>{
     if(token){
        localStorage.removeItem("currentStep");
       fetchData();
     }
   }, [token])

   const fetchData = async()=>{
    try{
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}api/form/get-forms-data`, config)
      const api = data?.data;
      if (api) {
        setTableData(api);
      }
    } catch(err){
      console.log("err", err);
    }
  }


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Form Data Listing</h1>

      <div className="flex justify-end">
        <Link href="/" className="font-medium text-[#4b599b] hover:text-[#4b599b] border-2 rounded-2xl p-2 mt-2" >Return to form</Link>
      </div>

      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">#</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">First Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Last Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">SSN</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">State</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Zip</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tableData?.map((item, index) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-3 text-sm text-gray-700">{index + 1}</td>
                <td className="px-6 py-3 text-sm text-gray-700">{item.buyer_firstName}</td>
                <td className="px-6 py-3 text-sm text-gray-700">{item.buyer_lastName}</td>
                <td className="px-6 py-3 text-sm text-gray-700">{item.buyer_ssn}</td>
                <td className="px-6 py-3 text-sm text-gray-700">{item.buyer_state}</td>
                <td className="px-6 py-3 text-sm text-gray-700">{item.buyer_zip}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : item.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-3 text-center space-x-2">
                  <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition">
                    View
                  </button>
                  <button className="px-3 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600 transition">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {tableData.length === 0 && (
          <div className="text-center py-6 text-gray-500 text-sm">
            No data available
          </div>
        )}
      </div>
    </div>
  );
};

export default Formlist;
