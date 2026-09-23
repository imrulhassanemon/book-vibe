import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl  px-6 py-8">
      <div className="flex min-h-[310px] bg-slate-100 rounded-3xl items-center  justify-between rounded-2xl bg-[#f3f3f3] px-16">

        {/* Left Content */}
        <div className="max-w-[430px]">
          <h1 className="font-serif text-4xl font-bold leading-[1.2] text-gray-900">
            Books to freshen up
            <br />
            your bookshelf
          </h1>

          <button
            className="mt-8 rounded-md bg-green-600 px-5 py-3
                       text-sm font-semibold text-white
                       transition hover:bg-green-700"
          >
            View The List
          </button>
        </div>

        {/* Book Image */}
        <div className="flex items-center justify-center">
          <img
            src="/book.png"
            alt="Featured book"
            className="h-auto w-[400px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;