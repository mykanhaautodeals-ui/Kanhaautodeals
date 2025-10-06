import React from "react";


const blogs = [
  {
    id: 1,
    title: "Selling vs Scrapping a Vehicle in 2025 | What's Smarter?",
    date: "29 Jul 2025",
    image: "/src/assets/sellingVSscrapping.jpg",
    excerpt:
      "Read this blog to know why scrapping a vehicle is better than selling in 2025. Understand the risks of resale and...",
  },
  {
    id: 2,
    title: "Documents Required for Vehicle Scrapping in India",
    date: "28 Jul 2025",
    image: "/src/assets/DocumentRequired.jpg",
    excerpt:
      "Find out what documents are required for vehicle scrapping in India. Get a complete checklist, process...",
  },
  {
    id: 3,
    title: "RVSF Explained: Why Government-Authorized Scrapping Matters",
    date: "28 Jul 2025",
    image: "/src/assets/GoverementAuthorised.jpg",
    excerpt:
      "Learn why choosing a Registered Vehicle Scrapping Facility (RVSF) matters. Get legal protection, incentives...",
  },
  {
    id: 4,
    title: "5 Mistakes to Avoid When Choosing a Vehicle Scrapping Service",
    date: "24 Jul 2025",
    image: "/src/assets/vehicleScrapping.png",
    excerpt:
      "Choosing a vehicle scrapping service? Know about 5 common mistakes to avoid and learn how to ensure a...",
  },
];

function BlogSection() {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Blog Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{blog.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Blog Sidebar */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold mb-4">Recent Blog</h3>
          <ul className="space-y-4">
            {blogs.map((blog) => (
              <li
                key={blog.id}
                className="flex items-center space-x-3 border-b pb-2 last:border-none"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-16 h-12 object-cover rounded overflow-hidden"
                />
                <div>
                  <p className="text-xs text-gray-500">{blog.date}</p>
                  <p className="text-sm font-medium text-gray-700 truncate w-40">
                    {blog.title}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
