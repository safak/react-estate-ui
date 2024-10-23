const clientLogos = [
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-1.png",
    alt: "",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-2.png",
    alt: "",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-3.png",
    alt: "",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-4.png",
    alt: "",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-5.png",
    alt: "",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-6.png",
    alt: "",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-7.png",
    alt: "",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-8.png",
    alt: "",
  },
];

const ClientLogo8 = () => {
  return (
    <section className="ezy__clients8 py-14 md:py-14 bg-white dark:text-zinc-900">
      <div className="container px-4 mx-auto">
        {/* Text Section */}
        <div className="grid grid-cols-14 justify-center mb-16">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
            <h2 className="font-bold text-[25px] lg:text-[45px] leading-none mb-6">
              Meet Our <span className="text-[#ff385c]">Clients</span> &
              Partners
            </h2>
            <p className="text-lg leading-6 opacity-70">
              Create amazing carousel to display your client or partner logos
              with extensive design controls.
            </p>
          </div>
        </div>

        {/* Centered Logo Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
            {clientLogos.map((client, i) => (
              <div key={i}>
                <div className="bg-slate-100 rounded-lg h-full grid place-items-center p-4 lg:p-9">
                  <img
                    src={client.logo}
                    alt={client.alt}
                    className="max-h-[30px] h-auto max-w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogo8;
