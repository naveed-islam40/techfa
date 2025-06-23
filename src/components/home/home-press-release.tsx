const blogPosts = [
  {
    id: 1,
    title: "Lorem Title Blog One",
    date: "Friday, 16 Nov 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    image: "",
    slug: "lorem-title-blog-one-1",
  },
  {
    id: 2,
    title: "Lorem Title Blog One",
    date: "Friday, 16 Nov 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    image: "",
    slug: "lorem-title-blog-one-2",
  },
  {
    id: 3,
    title: "Lorem Title Blog One",
    date: "Friday, 16 Nov 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    image: "",
    slug: "lorem-title-blog-one-3",
  },
  {
    id: 4,
    title: "Lorem Title Blog One",
    date: "Friday, 16 Nov 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    image: "",
    slug: "lorem-title-blog-one-4",
  },
];

export default function PressRelease() {
  return (
    <div className="bg-[#fff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-8">
        <h1 className="text-2xl md:text-5xl font-bold text-center py-5 pb-14 lg:pb-20">
          Press Releases - News Releases
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-r-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row">
                <img
                  src={post.image || "/img/press_1.png"}
                  alt={post.title}
                  className={" lg:w-[200px] xl:w-[250px] h-[300px] xl:h-[374px] object-cover"}
                />

                <div className="py-5 md:p-5 flex flex-col justify-center items-start">
                  <div className="text-sm md:text-base xl:text-lg text-gray-500 mb-2">
                    {post.date}
                  </div>
                  <h2 className="text-lg md:text-2xl font-medium text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-sm md:text-lg text-gray-600 mb-4 leading-relaxed">
                    {post.description}
                  </p>
                  <button className="font-medium text-sm md:text-lg hover:underline transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
