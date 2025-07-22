import { Mail, Phone } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router';

const ContactCard = (props) => {
    console.log(props)
    const { name, phone, email, department } = props?.data;
    return (
        <div className="flex justify-between items-center" title={name + " ( " + department + " )"}>
            <div>
                <h1 className="text-2xl font-semibold text-gray-800">
                    {name}
                </h1>

                <h2 className="text-xl font-bold text-indigo-600 flex items-center mt-[10px]">
                    <Phone className="w-5 h-5 text-blue-600 mr-[10px]" />
                    {phone || "N/A"}
                </h2>
                {email && (
                    <Link to={`mailto:${email}`}>
                        <h2 className="text-xl font-bold text-indigo-600 flex items-center mt-[10px] cursor-pointer hover:text-indigo-500">
                            <Mail className="w-5 h-5 text-red-600 mr-[10px]" />
                            {email}
                        </h2>
                    </Link>
                )}
            </div>
            {
                department && (<h2 className="px-3 py-1 bg-red-500 text-white rounded-full font-medium tracking-wide shadow-lg">
                    {department}
                </h2>)
            }
        </div>
    )
}

export default ContactCard
