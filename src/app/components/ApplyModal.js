"use client";

import { useState } from "react";

export default function ApplyModal({ isOpen, onClose, onSubmit, handleApplyClick }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    resume: null,
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); 
    setFormData({
      fullName: "",
      email: "",
      resume: null,
      coverLetter: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 h-screen px-5">
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Apply Now</h2>         
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Resume (optional)</label>
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Cover Letter</label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              required
              rows="4"
              className="block w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none"
              onClick={handleApplyClick}
            >
              Submit Application
            </button>
            <button
              type="button"
              onClick={onClose}
              className="py-2 px-4 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
