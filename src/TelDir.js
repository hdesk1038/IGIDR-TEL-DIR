import React, { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "antd";
import { contactsData } from "../utils/contactsData";
import ContactCard from "./ContactCard";
import { IGIDR_LOGO } from "../utils/constant";
import EmergencyContacts from "./EmergencyContact";

const TelDir = () => {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const filtered = contactsData.filter((c) =>
        `${c.name} ${c.phone ?? ""} ${c.department ?? ""}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen py-8 px-3 sm:px-4 md:px-6 bg-[#E1E4E8]">
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-200 p-6 sm:p-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-6 sm:mb-8 tracking-tight flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                    <img src={IGIDR_LOGO} alt="IGIDR Logo" className="w-12 sm:w-14 h-auto" />
                    <span>IGIDR Telephone Directory</span>
                    <span className="text-xl sm:text-2xl">📞</span>
                </h1>

                <EmergencyContacts />

                {/* Search Bar */}
                <div className="relative mb-8">
                    <Input
                        placeholder="🔍 Search by name, phone, or department"
                        size="large"
                        value={search}
                        onChange={handleSearch}
                        className="w-full pl-14 pr-4 py-3 text-base rounded-full border border-gray-300 bg-white placeholder-gray-400 text-gray-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 shadow-md hover:shadow-lg transition duration-200 ease-in-out"
                    />
                </div>


                {/* Results */}
                {search.trim() !== "" && (
                    <>
                        {filtered.length === 0 ? (
                            <p className="text-center text-black italic animate-fade-in">
                                No contacts found...
                            </p>
                        ) : (
                            <ul className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 animate-fade-in">
                                {filtered.map((contact) => (
                                    <li
                                        key={contact.name}
                                        className="bg-gradient-to-br from-indigo-50 via-sky-50 to-pink-50 border border-gray-200 rounded-2xl p-4 sm:p-6 shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <ContactCard data={contact} />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default TelDir;
