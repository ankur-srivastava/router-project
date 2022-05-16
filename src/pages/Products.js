import { Link } from "react-router-dom"

const Products = () => {
    return <section>
        <ul>
            <li>
                <Link to="/products/1">First Product</Link>
            </li>
            <li>
                <Link to="/products/2">Second Product</Link>
            </li>
            <li>
                <Link to="/products/3">Third Product</Link>
            </li>
        </ul>
    </section>
}

export default Products
