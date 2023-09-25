import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>OPPS!!!</h2>

           <Link to='/' >Go Home</Link>
        </div>
    );
};

export default ErrorPage;