import React from "react";
import { useState } from "react";

const ComplaintList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };
  const mockComplaints = [
    {
      complaint_id: 11,
      user_id: 999,
      name: "Mind",
      issue: "I was insulted by Ygritte.",
      description:
        "Hello, there was a problem with user ‘Ygritte’ who insulted me! Can you please do something.",
      date_submitted: "2022-11-25",
      complaint_status: "New",
      resolved_by: "1",
    },
    {
      complaint_id: 1,
      user_id: 94,
      name: "Biddie",
      issue:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
      description:
        "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
      date_submitted: "31/08/2022",
      complaint_status: "Canceled",
    },
    {
      complaint_id: 2,
      user_id: 78,
      name: "Luca",
      issue:
        "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
      description:
        "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
      date_submitted: "10/09/2022",
      complaint_status: "Pending",
    },
    {
      complaint_id: 3,
      user_id: 2,
      name: "Marylynne",
      issue:
        "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
      description:
        "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      date_submitted: "02/01/2022",
      complaint_status: "Resolved",
    },
    {
      complaint_id: 4,
      user_id: 13,
      name: "Mindy",
      issue:
        "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      description: "Nullam varius.",
      date_submitted: "07/09/2022",
      complaint_status: "Resolved",
    },
    {
      complaint_id: 5,
      user_id: 69,
      name: "Niles",
      issue:
        "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      description:
        "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
      date_submitted: "15/02/2022",
      complaint_status: "New",
    },
    {
      complaint_id: 6,
      user_id: 92,
      name: "Onofredo",
      issue:
        "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
      description:
        "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      date_submitted: "16/10/2022",
      complaint_status: "Resolved",
    },
    {
      complaint_id: 7,
      user_id: 20,
      name: "Sean",
      issue:
        "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      description:
        "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
      date_submitted: "03/02/2022",
      complaint_status: "Resolved",
    },
    {
      complaint_id: 8,
      user_id: 96,
      name: "Marge",
      issue:
        "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      description:
        "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      date_submitted: "10/09/2022",
      complaint_status: "New",
    },
    {
      complaint_id: 9,
      user_id: 14,
      name: "Elsi",
      issue: "Nulla ac enim.",
      description:
        "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      date_submitted: "24/06/2022",
      complaint_status: "Pending",
    },
    {
      complaint_id: 10,
      user_id: 3,
      name: "Ade",
      issue:
        "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
      description:
        "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
      date_submitted: "14/03/2022",
      complaint_status: "New",
    },
    {
      complaint_id: 11,
      user_id: 43,
      name: "Herminia",
      issue:
        "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
      description:
        "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      date_submitted: "08/06/2022",
      complaint_status: "Resolved",
    },
    {
      complaint_id: 12,
      user_id: 77,
      name: "Tiffi",
      issue: "In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      description:
        "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      date_submitted: "06/12/2021",
      complaint_status: "New",
    },
    {
      complaint_id: 13,
      user_id: 25,
      name: "Brittni",
      issue: "Etiam vel augue.",
      description:
        "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
      date_submitted: "25/06/2022",
      complaint_status: "Canceled",
    },
    {
      complaint_id: 14,
      user_id: 1,
      name: "Aurea",
      issue:
        "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
      description: "Donec posuere metus vitae ipsum.",
      date_submitted: "01/07/2022",
      complaint_status: "Resolved",
    },
    {
      complaint_id: 15,
      user_id: 36,
      name: "Jeanette",
      issue:
        "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
      description:
        "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
      date_submitted: "03/01/2022",
      complaint_status: "Resolved",
    },
    {
      complaint_id: 16,
      user_id: 5,
      name: "Adrien",
      issue:
        "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      description:
        "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
      date_submitted: "23/02/2022",
      complaint_status: "Resolved",
    },
    {
      complaint_id: 17,
      user_id: 7,
      name: "Thatch",
      issue:
        "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      description:
        "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      date_submitted: "15/10/2022",
      complaint_status: "Pending",
    },
    {
      complaint_id: 18,
      user_id: 61,
      name: "Katharine",
      issue:
        "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      description:
        "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
      date_submitted: "05/07/2022",
      complaint_status: "Resolved",
    },
    {
      complaint_id: 19,
      user_id: 100,
      name: "Aylmar",
      issue:
        "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      description:
        "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      date_submitted: "24/01/2022",
      complaint_status: "Pending",
    },
    {
      complaint_id: 20,
      user_id: 48,
      name: "Tobiah",
      issue:
        "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
      description:
        "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
      date_submitted: "16/08/2022",
      complaint_status: "Resolved",
    },
  ];

  return (
    <div className="w-[100%] h-[100%] flex flex-col items-start justify-start">
      <div className=" nav-bar w-[80vw] h-[13vh] bg-white border-b-2 flex flex-row items-center justify-between">
        <div className="ml-[4rem] text-[2.5em] font-[700]">Complaint List</div>
        <div className="flex flex-row justify-between border-3 mr-[4rem]">
          <div className=" search-box relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>

            <input
              type="search"
              id="default-search"
              className="block w-[300px] h-[100%] p-4 pl-10 text-[1em] font-[400] placeholder-[#9AA1B9] border border-gray-300 rounded-[10px] bg-gray-50 focus:ring-[#AF2758] focus:border-[#AF2758]"
              placeholder="Search..."
            />
          </div>
          <div>
            <button
              id="dropdownAdminDefault"
              data-dropdown-toggle="adminDropdown"
              className="ml-3 w-[15rem] h-[100%] text-[#9AA1B9] bg-gray-50 border border-gray-300 rounded-[10px] focus:ring-[#AF2758] focus:border-[#AF2758] focus:border-2 text-[16px] font-[400] px-4 py-2.5 text-center inline-flex items-center justify-between "
              type="button"
              onClick={() => {
                handleDropDown();
              }}
            >
              All Status{" "}
              <img
                className="h-1.5 ml-1"
                src="../../../public/asset/adminPanelControl/dropdown.svg"
                alt="dropdown button"
              />
            </button>

            <div
              id="adminDropdown"
              className={`z-30 w-[210px] ml-5 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 ${
                isOpen ? "fixed" : "hidden"
              } `}
            >
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownAdminDefault"
              >
                <li>
                  <a
                    href="#"
                    className="new-option block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <p className="w-fit p-1 px-2 font-[500] text-[1em] bg-[#FAF1ED] rounded-[8px] text-[#7B4429]">
                      {" "}
                      New
                    </p>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="resolved-option block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <p className="w-fit p-1 px-2 font-[500] text-[1em] bg-[#E7FFE7] rounded-[8px]  text-[#197418]  ">
                      {" "}
                      Resolved
                    </p>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="pending-option block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <p className="w-fit p-1 px-2 font-[500] text-[1em] bg-[#FFF6D5] rounded-[8px] text-[#393735]">
                      {" "}
                      Pending
                    </p>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="canceled-option block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <p className="w-fit p-1 px-2 font-[500] text-[1em] bg-[#F1F2F6] rounded-[8px] text-[#646D89]">
                      {" "}
                      Canceled
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="complaint-list w-[80vw] h-[90vh] bg-[#F6F7FC]  items-center">
        <div className=" w-full h-full overflow-y-scroll border-b-2 rounded-b-[30px]">
          <div className="bg-[#D6D9E4] h-[90px] w-[90%] mt-[2.5%] rounded-t-[30px] flex flex-row items-center justify-between font-[500] text-[22px]  ml-[5%]">
            <span className="ml-[5%] w-[120px]">User</span>
            <span className="w-[12%] ml-5 ">Issue</span>
            <span className="w-[35%]">Description</span>
            <span className="mr-5">Date Submitted</span>
            <span className="mr-[6%]">Status</span>
          </div>

          {/* complaints */}
          {mockComplaints.map((complaint) => {
            return (
              <div
                key={complaint.complaint_id}
                className="bg-[#ffffff] h-[120px] w-[90%] flex flex-row items-center justify-between font-[500] text-[22px] border-b-2 ml-[5%]"
              >
                <span className="ml-[5%] w-[120px] truncate">
                  {complaint.name}
                </span>
                <span className="w-[12%] ml-5 truncate">{complaint.issue}</span>
                <span className="w-[30%] truncate">
                  {complaint.description}
                </span>
                <span className="w-[10%] ml-[3.5%] text-left">
                  {complaint.date_submitted}
                </span>
                {complaint.complaint_status === "New" ? (
                  <span className="mr-[3.5%] w-[6%]">
                    <span className="w-fit p-1 px-2 font-[500] text-[1em] bg-[#FAF1ED] rounded-[8px] text-[#7B4429]">
                      {" "}
                      New{" "}
                    </span>
                  </span>
                ) : complaint.complaint_status === "Pending" ? (
                  <span className="mr-[3.5%] w-[6%]">
                    <p className="w-fit p-1 px-2 font-[500] text-[1em] bg-[#FFF6D5] rounded-[8px] text-[#393735]">
                      {" "}
                      Pending
                    </p>
                  </span>
                ) : complaint.complaint_status === "Resolved" ? (
                  <span className="mr-[3.5%] w-[6%]">
                    <p className="w-fit p-1 px-2 font-[500] text-[1em] bg-[#E7FFE7] rounded-[8px]  text-[#197418]  ">
                      {" "}
                      Resolved
                    </p>
                  </span>
                ) : complaint.complaint_status === "Canceled" ? (
                  <span className="mr-[3.5%] w-[6%]">
                    <p className="w-fit p-1 px-2 font-[500] text-[1em] bg-[#F1F2F6] rounded-[8px] text-[#646D89]">
                      {" "}
                      Canceled
                    </p>
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ComplaintList;
