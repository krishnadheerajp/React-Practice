import { Link, Outlet } from 'react-router-dom'
function About() {
    return (
        <div className="about">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cum enim eveniet aspernatur expedita doloribus similique ex quaerat? Tenetur iure nulla quae animi harum nemo facilis. Aspernatur vel et deleniti.</p>
            <ul>
                <li>
                    <Link to="/about/image">Images</Link>
                </li>
                <li>
                    <Link to="/about/prices">Prices</Link>
                </li>
                <li>
                    <Link to="/about/location">Location</Link>
                </li>
            </ul>

            <Outlet />
        </div>
    )
}
export default About;