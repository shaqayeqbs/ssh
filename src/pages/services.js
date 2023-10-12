import React, { useState } from "react";

const servicesData = [
  {
    id: 1,
    title: "Android App",
    categories: ["Mobile"],
  },
  {
    id: 2,
    title: "iOS App",
    categories: ["Mobile"],
  },
  {
    id: 3,
    title: "Cross-platform App – Flutter",
    categories: ["Mobile", "AI"],
  },
  {
    id: 4,
    title: "Cross-platform App – React Native",
    categories: ["Mobile", "Design"],
  },
  {
    id: 5,
    title: "Cross-platform App – Ionic",
    categories: ["Mobile", "Design"],
  },
  {
    id: 6,
    title: "Cross-platform App - Electron",
    categories: ["Custom Software"],
  },
  {
    id: 7,
    title: "Website",
    categories: ["Web", "Design"],
  },
  {
    id: 8,
    title: "UI/UX",
    categories: ["Design"],
  },
  {
    id: 9,
    title: "Custom Software",
    categories: ["Custom Software"],
  },
  {
    id: 10,
    title: "Computer Vision",
    categories: ["AI"],
  },
  {
    id: 11,
    title: "Recommender System",
    categories: ["AI"],
  },
  {
    id: 12,
    title: "Testing",
    categories: ["Test"],
  },
];

const categories = [
  "All",
  "Web",
  "Mobile",
  "Test",
  "Design",
  "AI",
  "Custom Software",
  "Consulting",
];

function Services() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter((service) =>
          service.categories.includes(selectedCategory)
        );

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl text-salem font-bold my-8 text-your-custom-color text-center"></h1>

      <div className="flex align-middle   m-auto justify-center my-9">
        <label
          htmlFor="categoryFilter"
          className="text-CarrotOrange mr-2 my-auto"
        >
          Filter our Services:
        </label>
        <select
          id="categoryFilter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded-lg"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <ul className="grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredServices.map((service) => (
          <li
            key={service.id}
            className="p-4 bg-salem/10 border border-gray-200 rounded-xl shadow-md"
          >
            <h3 className="text-2xl mb-2 text-your-custom-color">
              {service.title}
            </h3>
            <p className="text-gray-700">
              Categories: {service.categories.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
