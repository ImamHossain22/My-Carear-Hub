import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorege";

import { AiOutlineDollarCircle, AiOutlineHome } from "react-icons/ai";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs , setDisplayJobs] = useState ([]);

  const hanleJobsFilter = filter =>{
    if(filter === 'all'){
        setDisplayJobs(appliedJobs);
    }
    else if(filter === 'remote') {
        const remoteJobs = appliedJobs.filter(job  => job.remote_or_onsite === 'Remote');
        setDisplayJobs(remoteJobs)
    }
    else if (filter === 'onsite'){
        const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
        setDisplayJobs(onsiteJobs);
    }
  }

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }

      setAppliedJobs(jobsApplied);

      setDisplayJobs(jobsApplied);
    }
  }, []);

  return (
    <div className=" space-y-3">
      <h3 className="text-3xl font-bold text-center">Jobs I applied: {appliedJobs.length}</h3>

      <details className="dropdown mb-32 ">
        <summary className="m-1 btn btn-outline btn-secondary ">Filter</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={()=>hanleJobsFilter('all')}>
            <a>All</a>
          </li>
          <li onClick={()=>hanleJobsFilter('remote')}>
            <a>Remote</a>
          </li>
          <li onClick={()=>hanleJobsFilter('onsite')}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>

      {displayJobs.map((job) => (
        <div key={job.id}>
          <div className="border flex items-center space-x-7 p-5 m-4 rounded-xl drop-shadow-2xl">
            <img src={job.logo} alt="" />

            <div className="flex-grow">
              <h2>{job.job_title}</h2>
              <p>{job.company_name}</p>
              <div className="flex items-center gap-5">
                <p>{job.remote_or_onsite}</p>
                <p>{job.job_type}</p>
              </div>
              <div className="flex items-center gap-4">
                <p className="flex items-center gap-2">
                  <span>
                    <AiOutlineHome></AiOutlineHome>
                  </span>
                  {job.location}
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    {" "}
                    <AiOutlineDollarCircle></AiOutlineDollarCircle>
                  </span>
                  {job.salary}
                </p>
              </div>
            </div>
            <button className="btn btn-secondary">view details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppliedJobs;
