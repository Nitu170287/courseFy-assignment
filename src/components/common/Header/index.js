import { Link } from "react-router-dom"
import "./style.css"

const Header = ()=>{
    return(
        <div className="navbar">
           <h1 className="logo">CourseFy</h1>
           <div className="links">
            <Link to="/"><p>Courses</p></Link>
            <Link to="/dashboard"><p>Dashboard</p></Link>
           </div>
        </div>
    )
}
export default Header