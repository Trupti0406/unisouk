import React from "react";
import { featuredBlogs, recentBlogs } from "../utils/blogData";

const BlogCard = ({
  category,
  title,
  excerpt,
  image,
  bgColor,
  badgeText,
  secondaryBgColor,
  textColor,
}) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <div className={`relative ${bgColor}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-80 object-contain mb-4 p-10 hover:scale-125"
        />
        <div className={`${secondaryBgColor} h-60  p-6 relative`}>
          <span
            className={`absolute -top-4 inline-block px-3 py-1 text-sm font-semibold ${badgeText} bg-white rounded-full mb-2`}>
            {category}
          </span>
          <h3 className={`text-5xl font-bold mb-3 ${textColor}`}>{title}</h3>
          <p className={`${textColor} opacity-90 mb-0 text-xl sm:text-lg`}>
            {excerpt}
          </p>
        </div>
      </div>
    </div>
  );
};

const SmallBlogCard = ({ title, image, excerpt, category, badgeColor }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-76">
      <div className=" bg-white">
        <img
          src={image}
          alt={title}
          className="w-full h-44 object-cover mb-4 hover:scale-125"
        />
        <div className="bg-white h-28  px-6 relative">
          <span
            className={`absolute -top-8 inline-block px-3 py-1 text-sm text-white font-semibold ${badgeColor} rounded-full`}>
            {category}
          </span>
          <h3 className={`text-xl font-bold mb-2 text-black`}>{title}</h3>
          <p className={`text-black opacity-90 mb-0 text-xl sm:text-lg`}>
            {excerpt}
          </p>
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <div className="bg-gray-50">
      <div className="px-6 md:px-12 max-w-7xl mx-auto py-16 " id="blog">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">The Project Blog</h2>
          <p className="text-gray-600">
            Design and layouts to help you with your app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredBlogs.map((blog, index) => (
            <BlogCard
              key={index}
              category={blog.category}
              title={blog.title}
              excerpt={blog.excerpt}
              image={blog.image}
              bgColor={blog.bgColor}
              secondaryBgColor={blog.secondaryBgColor}
              textColor={blog.textColor}
              badgeText={blog.badgeText}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentBlogs.map((blog, index) => (
            <SmallBlogCard
              key={index}
              title={blog.title}
              image={blog.image}
              excerpt={blog.excerpt}
              badgeColor={blog.badgeColor}
              category={blog.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
