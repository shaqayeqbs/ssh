
import config from '../components/utils/config';

const BlogDetail = ({ blog }) => {
    console.log('eeeeeeeeeeeeeeeeee');
    console.log(blog);
  return (
    <div className="container mx-auto px-8 py-10  my-20 bg-secondary/10 border  border-gray-200 rounded-xl shadow-md">
      <h2 className="text-3xl  font-semibold mb-16 text-your-custom-color text-center">
        {blog.attributes.title}
      </h2>
      <div className='flex justify-between '>
      <div className="max-w-[50%] py-10 mr-8 my-auto ">
        <p className="text-onError text-lg">{blog.attributes.Category}</p>
        <p className="text-gray-700 text-your-custom-color">{blog.attributes.content}</p>
      </div>
      <div className="max-w-[50%] max-h-[410px]">
        <img
          className="rounded-2xl object-cover w-full h-full"
          src={config.baseUrl + blog?.attributes?.Banner?.data.attributes.url}
          alt={blog.attributes.title}
        />
      </div>
      </div>
     
    </div>
  );
};

export default BlogDetail;
