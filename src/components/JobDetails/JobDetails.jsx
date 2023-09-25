import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  AiOutlineDollarCircle,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineHome,
} from "react-icons/ai";

import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { saveJobApplication } from "../../Utility/localStorege";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id == idInt);

  const handleApply = ()=>{

    saveJobApplication(idInt);

    toast('Apply succeded');

  }

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 p-5 ">
        <div className=" p-4 col-span-3 space-y-3">
          <h2 className="text-3xl font-bold">Job details of:{id}</h2>
          <p>
            {" "}
            <span className="font-extrabold">Job description :</span>{" "}
            {job.job_description}
          </p>
          <p>
            <p>
              <span className="font-extrabold">Educational Requirments:</span>{" "}
              {job.job_responsibility}
            </p>

            {job.educational_requirements}
          </p>

          <p>
            <span className="font-extrabold">experiences:</span>{" "}
            {job.experiences}
          </p>
          <p>
            <span className="font-extrabold">Contact Information:</span>{" "}
            {job.contact_information.phone}
          </p>
          <p>
            <span className="font-extrabold">Email:</span>{" "}
            {job.contact_information.email}
          </p>

          <p>
            <span className="font-extrabold">Adress:</span>{" "}
            {job.contact_information.address}
          </p>
        </div>

        <div className=" text-black p-4 space-y-4 rounded-2xl bg-cyan-100 shadow-2xl ">
          <h1 className="text-3xl font-bold">Job Details</h1>
          <hr />
          <p className="flex items-center gap-1">
            <AiOutlineDollarCircle></AiOutlineDollarCircle>
            <span>Salary:</span> {job.salary}
          </p>

          <p className="flex flex-wrap items-center gap-5">
            <BsFillJournalBookmarkFill></BsFillJournalBookmarkFill>{" "}
            <span>Job Title:</span>
            {job.job_title}
          </p>

          <h2 className="text-xl font-bold">Contact Information</h2>
          <hr />

          <p className="flex items-center gap-5">
            <AiOutlinePhone></AiOutlinePhone> {job.contact_information.phone}
          </p>

          <p className="flex gap-5 items-center">
            <AiOutlineMail></AiOutlineMail>
            {job.contact_information.email}
          </p>

          <p className="flex gap-5 items-center flex-wrap">
            <AiOutlineHome className="text-xl"></AiOutlineHome>{" "}
            <span className="font-extrabold">Adress :</span>
            {job.contact_information.address}
          </p>
          <div>
            <button onClick= {handleApply} className="btn btn-secondary w-full">apply Now</button>
          
          </div>
        </div>
      </div>
     <ToastContainer />
    </div>
  );
};

export default JobDetails;
