/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const dummyBlogs = [
  {
    id: 1,
    title: "How to Build a React App",
    description: "Learn how to build a React app from scratch.",
    Category: "Programming",
    Summary:
      "In this tutorial, we will cover the basics of building a React app.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula urna sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula urna sit amet",
    createdAt: "2023-01-15",
    readTime: 10,
    imageUrl: "/img/bg.jpg",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula urna sit amet",
    createdAt: "2023-03-10",
    readTime: 12,
    imageUrl: "/img/number-sign.svg",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula urna sit amet",
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

const BlogDetail = ({ blog }) => {
  console.log(blog);
  return (
    <div className="container mx-auto my-20 py-12">
      <div className="grid grid-cols-1">
        <div
          className={`p-2 md:pl-8 bg-salem/10 border  border-gray-200 rounded-xl shadow-md ${
            blog.imageUrl ? "md:flex" : "item-center"
          }`}
        >
          {blog?.imageUrl && (
            <div className="md:max-w-[40%] md:w-[500px] md:!h-[300px]  text-center">
              <img
                className="rounded-2xl object-cover w-full max-h-[300px] mx-auto md:h-full"
                src={blog.imageUrl}
                alt={blog.title}
              />
            </div>
          )}
          <div
            className={`${
              blog?.imageUrl ? "" : "text-center align-middle mx-auto my-auto"
            } py-10 h-[rem] md:w-[56%]`}
          >
            <h3 className=" text-2xl md:text-4xl mb-6 text-your-custom-color">
              {blog?.title}
            </h3>
            <p className="text-onError text-md my-2">{blog?.Category}</p>
            <p className="text-gray-700 my-2">{blog?.Summary}</p>
            <p className="text-xl  ">{blog?.content}</p>
            <p className="text-gray-600 my-2">Created: {blog?.createdAt}</p>
            <p className="text-gray-600 my-2">
              Read Time: {blog?.readTime} minutes
            </p>
          </div>
        </div>
      </div>
      <div className="my-10 text-center">
        <Link href="/blogs">
          <p className="bg-salem rounded-lg inline-block p-3 px-10 no-underline text-myWhite">
            Back to Blogs
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;

export async function getServerSideProps({ params }) {
  const id = params.id;

  // Fetch the blog data based on the ID (params.id)
  // Replace this with your actual data fetching logic
  const blog = dummyBlogs.find((item) => item.id == id);

  return {
    props: { blog },
  };
}
