import { useParams } from 'react-router-dom'

const ProductDetail = (props) => {
    const params = useParams()
    return <section>
        <h1>
            Details for {params.productId}
        </h1>
    </section>
}

export default ProductDetail
