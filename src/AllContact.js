import React from "react";

const directoryList = [
    // ⬇️ No data change at all — same as your input
    ["204", "Admin Conf. Room"],
    ["209", "Conference Room"],
    ["220 / 200", "Swimming Pool"],
    ["242", "Gym"],
    ["501 / 201", "S. Mahendra Dev", "2842 5747 / 5337"],
    ["501 / 201", "Director", "2842 5747 / 5337"],
    ["502", "Shyamkant M. Ahire"],
    ["503", "Vijaylaxmi Pandey", "25768445"],
    ["504", "Vinita H."],
    ["505 / 205", "Jai Mohan Pandit", "2840 1336 / 1346"],
    ["505 / 205", "Registrar", "2840 1336 / 1346"],
    ["506", "Sangeeta H."],
    ["507", "Amit Gaikwad"],
    ["504 / 506 / 508 / 563 / 528", "Library"],
    ["507 / 562 / 560 / 596 / 502", "Maintenance Department"],
    ["590 / 510 / 532 / 565", "SPANDAN / TANDI II"],
    ["511 / 211", "Ramaswamy K.V."],
    ["512 / 212", "Ashima Goyal"],
    ["514", "Rajendra Vaidya"],
    ["514", "Dean"],
    ["515 / 215", "Suryanarayana M.H."],
    ["517", "Manisha Jain"],
    ["519", "Tanmay Joshi"],
    ["520", "Jayati Sarkar"],
    ["521 / 221", "Guruswamy Babu"],
    ["522", "A. Ganesh Kumar"],
    ["523", "Auditors"],
    ["527", "MFEME Office - Reshma"],
    ["528 / 228", "Pujar S."],
    ["529", "Mythili G."],
    ["530", "Sayli Charatkar"],
    ["531 / 231", "Sharma V.K."],
    ["533 / 233", "Sudhakar Yedla"],
    ["534", "Nachane D.M."],
    ["536 / 236", "Taniya Ghosh"],
    ["537 / 237", "Krishnan R."],
    ["538 / 238", "Kaushik S K"],
    ["539", "Lavina D souza"],
    ["540", "Faculty Lounge"],
    ["542", "Archana Sharma"],
    ["543 / 243", "Shubhro Sarkar"],
    ["544 / 244", "Sargam Gupta"],
    ["545", "Rupayan Pal"],
    ["547 / 247", "Digvijay Singh Negi"],
    ["548 / 248", "Lingaraj Panda"],
    ["548 / 579 / 580 / 581 / 582 / 583 / 595", "Computer Centre (Ist floor / Gr. Flr.)"],
    ["549 / 249", "Sudha Narayanan (on EOL)"],
    ["550 / 257", "Susan Thomas"],
    ["551 / 251", "Chandrasekhar S."],
    ["552 / 252", "Goprakumar Achathankutty"],
    ["554 / 254", "Bharti Nandwani"],
    ["555 / 255", "Rajeswari Sengupta"],
    ["556 / 256", "Veeramani C"],
    ["592 / 557 / 597", "ICSI-FSRR - Jyoti M."],
    ["558", "Placement Committee"],
    ["560", "Nelson D souza"],
    ["562 / 270", "Vinod Vijaykumar"],
    ["563 / 263", "Anjaneya Reddy"],
    ["9 / 564", "Tel. Operator"],
    ["566 / 271", "Mahesh Mohan"],
    ["567", "Seminar Halls"],
    ["568", "A.C. Plant"],
    ["569", "Gawde Narayan"],
    ["570 / 264", "Surka Ismail"],
    ["584 / 569 / 570 / 571 / 578", "Accounts"],
    ["571", "Mahesh Kumar"],
    ["572", "Pratiksha Worlikar"],
    ["574", "Lift - near Canteen"],
    ["575", "Lift - Library"],
    ["576", "Fabina D mello"],
    ["576 / 572", "Students Office"],
    ["577", "Subrata Sarkar"],
    ["580", "Pravin Dalvi"],
    ["581 / 583 / 580", "Helpdesk - CC"],
    ["582", "CC-Lab Security"],
    ["584 / 265", "Ranjana Jha"],
    ["585", "Martha Lobo"],
    ["586 / 276", "Jayshree Borkar"],
    ["578", "Vishakha Narvekar"],
    ["588 / 288", "Samir Parab"],
    ["588 / 586 / 585 / 542 / 530 / 519", "Administration"],
    ["594", "Doctor(s) Room"],
    ["596 / 274", "Ananthi T.S."],
    ["596", "New Hostel Incharge"],
    ["599", "Cafeteria"],
    ["309", "Car Park"],
    ["311 / 312", "Security Main Gate"],
    ["314", "Research Block-1 (Lift)"],
    ["315", "Research Block-2 (Lift)"],
    ["316", "Research Block-3 (Lift)"],
    ["317", "Office Boy at Admin Ground Floor"],
    ["318", "New Hostel Lift (North Side)"],
    ["319", "New Hostel Lift (South Side)"],
    ["320", "Office Boy at Admin First Floor"],
    ["321", "New Recreation (Gr & 1st Floor)"],
    ["322", "Office Boy at Accounts"],
    ["401", "Guest House"],
    ["411", "Guest House Reception"],
    ["412", "Dining Hall"],
    ["463", "Infrastructure Office"],
    ["3300", "New Hostel Main Gate"],
    ["3310", "New Hostel- Housekeeping"],
    ["Fire Brigade", "", "28712869 (W) / 28406729 (E)"],
    ["Police Station", "", "2877 0781"],
    ["Medical", "", "6909 6401"],
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
