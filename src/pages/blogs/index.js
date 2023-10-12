/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
const dummyBlogs = [
  {
    id: 1,
    title: "How to Build a React App",
    description: "Learn how to build a React app from scratch.",
    Category: "Programming",
    Summary:
      "In this tutorial, we will cover the basics of building a React app.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula urna sit amet...",
    createdAt: "2023-01-15",
    readTime: 10,
    imageUrl: "/img/number-sign.svg",
  },
  {
    id: 2,
    title: "Getting Started with Next.js",
    description: "A beginner's guide to Next.js.",
    Category: "Web Development",
    Summary: "Learn the fundamentals of Next.js and how to get started.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula urna sit amet...",
    createdAt: "2023-02-20",
    readTime: 8,
    imageUrl: "/img/number-sign.svg",
  },
  {
    id: 3,
    title: "Introduction to JavaScript",
    description: "Exploring the basics of JavaScript programming.",
    Category: "Programming",
    Summary: "Learn the fundamentals of JavaScript and how to get started.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula urna sit amet...",
    createdAt: "2023-03-10",
    readTime: 12,
  },
  {
    id: 4,
    title: "Web Design Best Practices",
    description: "Tips and tricks for designing beautiful websites.",
    Category: "Web Design",
    Summary: "Discover the key principles of effective web design.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula urna sit amet...",
    createdAt: "2023-04-05",
    readTime: 6,
    imageUrl: "/img/number-sign.svg",
  },
  {
    id: 5,
    title: "React State Management",
    description: "Mastering state management in React applications.",
    Category: "Programming",
    Summary: "Learn advanced techniques for handling state in React.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula urna sit amet...",
    createdAt: "2023-05-20",
    readTime: 15,
  },
  {
    id: 6,
    title: "UI/UX Design Principles",
    description:
      "Designing user-friendly interfaces with great user experiences.",
    Category: "UI/UX Design",
    Summary: "Explore the key principles of effective UI/UX design.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula urna sit amet...",
    createdAt: "2023-06-08",
    readTime: 9,
  },
  {
    id: 7,
    title: "Python for Data Science",
    description:
      "Data science with Python, from basics to advanced techniques.",
    Category: "Data Science",
    Summary: "Learn how Python is used in data analysis and machine learning.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula urna sit amet...",
    createdAt: "2023-07-15",
    readTime: 11,
  },
  {
    id: 8,
    title: "Web Accessibility Guidelines",
    description: "Ensuring your websites are accessible to all users.",
    Category: "Web Design",
    Summary: "Follow best practices for web accessibility and inclusivity.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula urna sit amet...",
    createdAt: "2023-08-30",
    readTime: 7,
  },
  {
    id: 9,
    title: "Node.js and Express.js",
    description: "Building web applications with Node.js and Express.js.",
    Category: "Web Development",
    Summary: "Explore the world of server-side JavaScript with Node.js.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula urna sit amet...",
    createdAt: "2023-09-12",
    readTime: 13,
  },
  {
    id: 10,
    title: "Cybersecurity Best Practices",
    description:
      "Protecting your digital assets with cybersecurity strategies.",
    Category: "Cybersecurity",
    Summary: "Learn how to keep your data and systems secure.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula urna sit amet...",
    createdAt: "2023-10-25",
    readTime: 10,
    imageUrl: "/img/number-sign.svg",
  },
];

const Blog = () => {
  const [searchText, setSearchText] = useState(""); // State to store the search input text
  const filteredBlogs = dummyBlogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-4xl text-salem font-bold my-16 text-your-custom-color text-center">
        Latest Blog Posts
      </h2>

      {/* Search input and button */}
      <div className="flex relative mb-8 text-center">
        <input
          type="text"
          placeholder="Search Blogs"
          value={searchText}
          onChange={handleSearchInputChange}
          className="border !p-6 rounded-lg text-xl"
        />
        <button
          className=" text-salem text-4xl absolute right-4 top-2 rounded-lg ml-2"
          onClick={() => {}}
        >
          <AiOutlineSearch />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBlogs.map((blog, index) => (
          <div
            key={blog.id}
            className={` p-2 pl-8 bg-salem/10 border items-center justify-between border-gray-200 rounded-xl shadow-md ${
              blog.imageUrl ? "" : "flex"
            }`}
          >
            {blog.imageUrl && (
              <div
                className={`md:!w-[50%] m-auto ${
                  index === 0 ? "md:!w-[50%]" : ""
                }`}
              >
                <img
                  className="rounded-2xl  object-cover mt-4 m-auto w-[40%] md:w-full max-h-[200px]   "
                  src={blog.imageUrl}
                  alt={blog.title}
                />
              </div>
            )}
            <div
              className={`w-full  my-auto  text-center align-middle mx-auto  p-5 `}
            >
              <h3 className="text-3xl mb-6 text-shark">{blog.title}</h3>
              <p className="text-onError font-bold  my-2">{blog.Category}</p>
              <p className="text-gray-700 my-2">
                {blog.Summary.length > 50
                  ? blog.Summary.slice(0, 50) + "..."
                  : blog.Summary}
              </p>
              <p className="">
                {blog.content?.length > 50
                  ? blog.content.slice(0, 50) + "..."
                  : blog.content}
              </p>
              <p className="text-gray-600 my-2">Created: {blog.createdAt}</p>
              <p className="text-gray-600 my-2">
                Read Time: {blog.readTime} minutes
              </p>
              <div className="text-center">
                <Link
                  href={`/blogs/${blog.id}`}
                  className="bg-salem  rounded-lg inline-block mt-5 p-8  mx-auto py-3 no-underline text-myWhite"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
