import React from "react";

const tours = [
  {
    title: "Cruises",
    imageUrl:
      "https://images.pexels.com/photos/813011/pexels-photo-813011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    colSpan: "md:col-span-2", // spans 2 columns
    rowSpan: "row-span-2", // spans 2 rows
  },
  {
    title: "City Tours",
    imageUrl:
      "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260",
    colSpan: "md:col-span-1", // spans 1 column
    rowSpan: "row-span-1", // spans 1 row
  },
  {
    title: "Museum Tour",
    imageUrl:
      "https://images.pexels.com/photos/12315016/pexels-photo-12315016.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    colSpan: "md:col-span-1", // spans 1 column
    rowSpan: "row-span-2", // spans 1 row
  },
  {
    title: "Beach Tours",
    imageUrl:
      "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    colSpan: "md:col-span-1", // spans 1 column
    rowSpan: "row-span-1", // spans 1 row
  },
  {
    title: "Food",
    imageUrl:
      "https://images.pexels.com/photos/5710187/pexels-photo-5710187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    colSpan: "md:col-span-1", // spans 1 column
    rowSpan: "row-span-1", // spans 1 row
  },
];

const TourGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto  sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-8 text-center">
          Experience the <span className="text-[#ff385c]"> Best </span>
          of Our Resorts!
        </h2>
        <p className="text-center mb-12 text-[#747272]">
          From serene beachfront escapes and luxurious mountain retreats to
          family-friendly resorts.
        </p>

        {/* Keep the same grid layout for small screens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {tours.map((tour, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform transition duration-500 ${tour.colSpan} ${tour.rowSpan}`}
            >
              <img
                src={tour.imageUrl}
                alt={tour.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-start items-end p-4">
                <h3 className="text-white text-xl font-normal">{tour.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourGrid;
