import React from "react";

const directoryList = [
  ["501 / 201", "Basanta K Pradhan"],
  ["554 / 254", "Bharti Nandwani"],
  ["551 / 251", "Chandrasekhar S."],
  ["553 / 253", "Disha Gupta"],
  ["522", "Ganesh Kumar"],
  ["552 / 252", "Gopakumar Achuthankutty"],
  ["517", "Manisha Jain"],
  ["514", "Rajendra Vaidya"],
  ["555 / 255", "Rajeswari Sengupta"],
  ["545", "Rupayan Pal"],
  ["544 / 244", "Sargam Gupta"],
  ["543", "Shubhro Sarkar"],
  ["533 / 233", "Sudhakar Yedla"],
  ["523 / 246", "Swati Sharma"],
  ["536 / 236", "Taniya Ghosh"],
  ["507", "Amit Gaikwad"],
  ["542", "Archana Sharma"],
  ["576", "Fabina D’mello"],
  ["569", "Gawde Narayan"],
  ["505 / 205", "Jai Mohan Pandit"],
  ["539", "Lavina D’souza"],
  ["548 / 248", "Lingaraj Panda"],
  ["571", "Mahesh Kumar"],
  ["566", "Martha Lobo"],
  ["538 / 238", "Mukund Bhambere"],
  ["560", "Nelson D’souza"],
  ["572", "Pratiksha Worlikar"],
  ["580", "Pravin Dalvi"],
  ["528 / 228", "Pujar S."],
  ["584 / 265", "Ranjana Jha"],
  ["588 / 288", "Samir Parab"],
  ["530", "Sayli Charatkar"],
  ["578", "Vishakha Narvekar"],
  ["504", "Vinita H."],

  // Sites / Facilities
  ["568", "A.C. Plant"],
  ["204", "Admin Conf. Room"],
  ["599", "Cafeteria"],
  ["300", "CCTV Operator"],
  ["309", "Driver’s Room"],
  ["594", "Doctor's Room"],
  ["412", "Dining Hall"],
  ["540", "Faculty Lounge"],
  ["411", "Guest House Visitor’s Lounge"],
  ["401", "Guest House Reception"],
  ["581 / 583", "Helpdesk - CC"],
  ["574", "Lift - near Canteen"],
  ["575", "Lift - Library"],
  ["242", "Gym"],
  ["596", "New Hostel Incharge"],
  ["3300", "New Hostel Main Gate"],
  ["3310", "New Hostel Housekeeping"],
  ["475", "New Hostel Lift (North Side)"],
  ["476", "New Hostel Lift (South Side)"],
  ["477", "New Recreation (Gr & 1st Floor)"],
  ["472", "Research Block-1 (Lift)"],
  ["473", "Research Block-2 (Lift)"],
  ["474", "Research Block-3 (Lift)"],
  ["209", "Seanza Hall"],
  ["301 / 302", "Security Main Gate"],
  ["567", "Seminar Halls"],
  ["220", "Swimming Pool"],
  ["9 / 564", "Tel. Operator / Reception"],
  ["303", "Office Boy at Admin Ground Floor"],
  ["304", "Office Boy at Admin First Floor"],
  ["305", "Office Boy at Accounts"],

  // Emergency section
  ["28712869 (W)", "Emergency - Dindoshi"],
  ["28406729 (E)", "Emergency - Dindoshi"],
  ["2877 0781", "Fire Brigade"],
  ["2877 0781", "Police Station (Dindoshi)"],
  ["323", "IQAC Office"],
  ["558", "Placement Committee"],
  ["527", "MFEME Office"]
];

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
                            {directoryList.map(([location, name, contact], idx) => (
                                <tr
                                    key={idx}
                                    className={`border-b ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                                        } hover:bg-indigo-50 transition`}
                                >
                                    <td className="px-4 py-2 font-medium">{location}</td>
                                    <td className="px-4 py-2">{name}</td>
                                    <td className="px-4 py-2">{contact || "-"}</td>
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
