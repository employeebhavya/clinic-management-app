import React from "react";

function About2() {
  return (
    <div>
      <section className="">
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                We Are Experts in Clinic Management.
              </p>
              <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                We understand the complexities of managing clinics across
                different locations. Our system ensures seamless operations,
                enabling you to focus on patient care while we handle the rest.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://www.svgrepo.com/show/503163/api-settings.svg" />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Powerful API
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Easily integrate with third-party tools and applications to
                    enhance your clinic’s functionality and improve operational
                    efficiency.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Easy-to-Use Interface
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    A user-friendly dashboard designed to streamline daily
                    tasks, from appointment scheduling to patient management.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Cost-Effective Solutions
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Reduce operational costs with our affordable and efficient
                    clinic management system.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Comprehensive Analytics
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Gain insights into your clinic’s performance with our
                    powerful dashboard, helping you make informed decisions
                    effortlessly.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About2;
