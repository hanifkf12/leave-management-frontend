"use client"

import Link from "next/link";
import {useEffect, useState} from "react";
import api from "@/services/api";


export default function EmployeeList() {
    const [employees, setEmployeeList] = useState<Employee[]>([]);
    const fetchData = async () => {
        const response = await api.get("/employee");
        console.log(response.data);
        setEmployeeList(response.data);
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Employee List</h1>
            <Link href="/employees/create">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4">
                    Add New Employee
                </button>
            </Link>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                <tr>
                    <th className="border border-gray-300 px-4 py-2">Name</th>
                    <th className="border border-gray-300 px-4 py-2">Email</th>
                    <th className="border border-gray-300 px-4 py-2">Phone</th>
                    <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id} className="hover:bg-gray-100">
                        <td className="border border-gray-300 px-4 py-2">
                            {employee.firstName} {employee.lastName}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">{employee.email}</td>
                        <td className="border border-gray-300 px-4 py-2">{employee.phoneNumber}</td>
                        <td className="border border-gray-300 px-4 py-2">
                            <Link href={`/employees/${employee.id}`}>
                                <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                                    Edit
                                </button>
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}