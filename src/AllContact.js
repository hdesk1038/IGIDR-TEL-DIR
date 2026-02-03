import React from "react";
import { contactsData } from "../utils/contactsData";

const AllContact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-indigo-100 p-6">
            <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h1 className="text-3xl font-bold text-indigo-700 text-center">
                        📘 IGIDR Directory
                    </h1>
                </div>
                <div className="overflow-auto max-h-[80vh]">
                    <table className="min-w-full table-auto text-sm text-gray-800">
                        <thead className="bg-indigo-300 text-red sticky top-0 z-10">
                            <tr>
                                <th className="px-4 py-3 text-left">📍 Location</th>
                                <th className="px-4 py-3 text-left">👤 Name / Dept</th>
                                <th className="px-4 py-3 text-left">📞 Contact</th>
                            </tr>
                        </thead>
                         <tbody>
                            {contactsData.map((item, idx) => (
                                <tr
                                    key={idx}
                                    className={`border-b ${
                                        idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                                    } hover:bg-indigo-50 transition`}
                                >
                                    <td className="px-4 py-2 font-medium">
                                        {item.department || "-"}
                                    </td>
                                    <td className="px-4 py-2">
                                        {item.name}
                                    </td>
                                    <td className="px-4 py-2">
                                        {item.phone || "-"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 text-center text-xs text-gray-500 border-t">
                    Last updated: July 2025
                </div>
            </div>
        </div>
    );
};

export default AllContact;
