// src/WorkerRoutes.jsx
import React from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";
import data from "./data.json";

function WorkerProfile() {
  const { id } = useParams();
  const worker = data.workers.find((w) => w.id === id);

  if (!worker) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <p className="text-gray-600">Worker not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 sm:px-6 md:px-8 py-10">
      <Link
        to="/"
        className="inline-block mb-4 text-sm text-teal-600 hover:underline"
      >
        ← Back to Home
      </Link>

      {/* Profile header */}
      <section className="bg-white rounded-2xl shadow p-6 sm:p-8 border border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-teal-100 flex items-center justify-center text-2xl font-bold text-teal-700">
            {worker.fullName.charAt(0)}
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {worker.fullName}
            </h1>
            <p className="text-sm sm:text-base text-gray-700 mt-1">
              {worker.role} • {worker.location}
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="text-xs sm:text-sm text-gray-500">
                {worker.experienceLabel}
              </span>
              {worker.bisCertified && (
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-300 text-[11px] sm:text-xs">
                  <span className="font-semibold">BIS Certified</span>
                  <span className="hidden sm:inline">
                    (Bureau of Indian Standards)
                  </span>
                </span>
              )}
            </div>
          </div>
        </div>

        <p className="mt-5 text-sm sm:text-base text-gray-700">
          {worker.about}
        </p>

        <button className="mt-6 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700">
          Contact / Book
        </button>
      </section>

      {/* Reviews */}
      <section className="mt-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
          Reviews from Consumers
        </h2>

        <div className="space-y-4">
          {worker.reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-2xl shadow p-4 sm:p-5 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-1">
                <p className="font-semibold text-gray-800 text-sm sm:text-base">
                  {r.author}
                </p>
                <p className="text-xs sm:text-sm text-yellow-500">
                  {"★".repeat(r.rating)}{" "}
                  <span className="text-gray-500">({r.rating}/5)</span>
                </p>
              </div>
              <p className="text-xs sm:text-sm text-gray-700">{r.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default function WorkerRoutes() {
  return (
    <Routes>
      {/* /workers/:id → WorkerProfile */}
      <Route path=":id" element={<WorkerProfile />} />
    </Routes>
  );
}
