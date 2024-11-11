import { Link, NavLink } from "react-router-dom"
import { itemsMenu } from "../constants/items-menu"
import NavItem from "./NavItem"

// rafce

const Navbar = () => {

   

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Educación IT</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

                {
                    itemsMenu.map((item) => (
                            <NavItem item={item} key={item.id} />
                        )
                    )
                }
                
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar