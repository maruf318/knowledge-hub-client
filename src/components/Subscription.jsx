const Subscription = () => {
  return (
    <div>
      <section className="py-20 relative z-50">
        <div className="container">
          <div className="mx-auto max-w-2xl sm:text-center">
            <span className="font-medium text-gray-400 tracking-widest">
              our price
            </span>
            <h2 className="md:text-5xl text-3xl font-medium tracking-tight mt-7">
              Price Plans
            </h2>
            <div className="w-10 mx-auto mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 h-[2px]"></div>
            <p className="mt-6 text-xl/8 text-gray-600 dark:text-gray-400">
              Choose the plan that suits your needs best and enjoy the extra
              features of Knowledge Hub
            </p>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 2xl:px-28 mt-20">
            <div className="flex flex-col border bg-white border-gray-300 rounded-xl overflow-hidden dark:border-gray-700">
              <div className="text-center pt-10">
                <h5 className="text-xl font-semibold">Basic</h5>
                <h2 className="text-5xl mt-8 mb-3 items-center align-middle">
                  <sup className="text-2xl align-middle">$</sup>11
                </h2>
                <span>per user, per month</span>
              </div>

              <div className="p-10">
                <ul className="mb-10 text-center">
                  <li className="my-4">
                    <h5 className="font-medium dark:text-gray-300">
                      Access to the library book collection
                    </h5>
                  </li>
                  <li>
                    <h5 className="font-medium dark:text-gray-300">
                      Ability to borrow physical books.
                    </h5>
                  </li>
                  <li className="my-4">
                    <h5 className="font-medium dark:text-gray-300">
                      Access to e-books and digital resources
                    </h5>
                  </li>
                  <li>
                    <h5 className="font-medium dark:text-gray-300">
                      Online book reservations
                    </h5>
                  </li>
                  <li className="my-4">
                    <h5 className="font-medium dark:text-gray-300">
                      Notifications for due dates and reservations
                    </h5>
                  </li>
                  <li className="my-4">
                    <h5 className="font-medium text-gray-500 line-through dark:text-gray-300">
                      Access to user reviews and ratings
                    </h5>
                  </li>
                  <li className="my-4">
                    <h5 className="font-medium text-gray-500 line-through dark:text-gray-300">
                      Faster Book Delivery
                    </h5>
                  </li>
                  <li className="my-4">
                    <h5 className="font-medium text-gray-500 line-through dark:text-gray-300">
                      Premium Customer Support
                    </h5>
                  </li>
                </ul>
                <div className="flex justify-center">
                  <a
                    href="#"
                    className="py-3 px-6 font-medium border rounded-md bg-primary text-black hover:bg-secondary hover:text-white transition-all duration-500"
                  >
                    Get Basic
                  </a>
                </div>
              </div>
            </div>

            <div className="relative z-20">
              <div className="absolute top-0 inset-x-0">
                <div className="flex justify-center">
                  <span className="text-xs font-medium uppercase border border-gray-700 text-white bg-black px-2 py-1 rounded-md -mt-3">
                    most popular
                  </span>
                </div>
              </div>
              <div className="group">
                <div className="border rounded-xl border-gray-300 bg-white dark:border-gray-700 dark:bg-neutral-900">
                  <div className="text-center">
                    <div className="flex flex-col">
                      <div className="text-center pt-10">
                        <h5 className="text-xl font-semibold">Professional</h5>
                        <h2 className="text-5xl mt-8 mb-3 items-center align-middle">
                          <sup className="text-2xl align-middle">$</sup>69
                        </h2>
                        <span>per user, per month</span>
                      </div>

                      <div className="p-10">
                        <ul className="mb-10 text-center">
                          <li className="my-4">
                            <h5 className="font-medium dark:text-gray-300">
                              Access to the library book collection
                            </h5>
                          </li>
                          <li>
                            <h5 className="font-medium dark:text-gray-300">
                              Ability to borrow physical books.
                            </h5>
                          </li>
                          <li className="my-4">
                            <h5 className="font-medium dark:text-gray-300">
                              Access to e-books and digital resources
                            </h5>
                          </li>
                          <li>
                            <h5 className="font-medium dark:text-gray-300">
                              Online book reservations
                            </h5>
                          </li>
                          <li className="my-4">
                            <h5 className="font-medium dark:text-gray-300">
                              Notifications for due dates and reservations
                            </h5>
                          </li>
                          <li className="my-4">
                            <h5 className="font-medium dark:text-gray-300">
                              Access to user reviews and ratings
                            </h5>
                          </li>
                          <li className="my-4">
                            <h5 className="font-medium dark:text-gray-300">
                              Faster Book Delivery
                            </h5>
                          </li>
                          <li className="my-4">
                            <h5 className="font-medium text-gray-500 line-through dark:text-gray-300">
                              Premium Customer Support
                            </h5>
                          </li>
                        </ul>
                        <div className="flex justify-center">
                          <a
                            href="#"
                            className="py-3 px-6 font-medium border rounded-md  bg-primary text-black hover:text-white hover:bg-secondary"
                          >
                            Get Pro
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-neutral-300/30 rounded-xl dark:bg-neutral-700 h-full left-0 top-0 w-full translate-x-2 translate-y-2 -z-10"></div>
              </div>
            </div>

            <div className="flex flex-col border border-gray-300 rounded-xl overflow-hidden dark:border-gray-700">
              <div className="text-center pt-10">
                <h5 className="text-xl font-semibold">Ultimate</h5>
                <h2 className="text-5xl mt-8 mb-3 items-center align-middle">
                  <sup className="text-2xl align-middle">$</sup>89
                </h2>
                <span>per user, per month</span>
              </div>

              <div className="p-10">
                <ul className="mb-10 text-center">
                  <li className="my-4">
                    <h5 className="font-medium dark:text-gray-300">
                      Access to the library book collection
                    </h5>
                  </li>
                  <li>
                    <h5 className="font-medium dark:text-gray-300">
                      Ability to borrow physical books.
                    </h5>
                  </li>
                  <li className="my-4">
                    <h5 className="font-medium dark:text-gray-300">
                      Access to e-books and digital resources
                    </h5>
                  </li>
                  <li>
                    <h5 className="font-medium dark:text-gray-300">
                      Online book reservations
                    </h5>
                  </li>
                  <li className="my-4">
                    <h5 className="font-medium dark:text-gray-300">
                      Notifications for due dates and reservations
                    </h5>
                  </li>
                  <li className="my-4">
                    <h5 className="font-medium dark:text-gray-300">
                      Access to user reviews and ratings
                    </h5>
                  </li>
                  <li className="my-4">
                    <h5 className="font-medium dark:text-gray-300">
                      Faster Book Delivery
                    </h5>
                  </li>
                  <li className="my-4">
                    <h5 className="font-medium dark:text-gray-300">
                      Premium Customer Support
                    </h5>
                  </li>
                </ul>
                <div className="flex justify-center">
                  <a
                    href="#"
                    className="py-3 px-6 font-medium border rounded-md bg-primary text-black hover:bg-secondary hover:text-white transition-all duration-500"
                  >
                    Get Ultimate
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h5 className="text-center font-medium mt-14">
            lnterested in a custom plan?{" "}
            <a href="#" className="text-secondary">
              Get in touch
            </a>
          </h5>
        </div>
      </section>
    </div>
  );
};

export default Subscription;
