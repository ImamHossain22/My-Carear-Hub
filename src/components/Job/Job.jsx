import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  
    const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

  return (
    <div className="card card-compact p-5 bg-slate-600 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <h3>{company_name}</h3>
        <div className="text-white flex gap-2">
          <button className="btn-sm bg-red-400 rounded-sm">
            {remote_or_onsite}
          </button>
          <button className="btn-sm bg-red-400 rounded-sm">{job_type}</button>
        </div>

        <div className="flex">
          <p className="flex items-center gap-2">
            <MdOutlineLocationOn></MdOutlineLocationOn>
            {location}
          </p>

          <p className="flex items-center gap-2">
            <AiOutlineDollarCircle></AiOutlineDollarCircle> Salary:{salary}
          </p>
        </div>

        <div className="card-actions">
         <Link to={`/job/${id}`} >
         <button className="btn btn-primary">view details</button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
