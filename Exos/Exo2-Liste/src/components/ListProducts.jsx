import PropTypes from 'prop-types';

const ListProducts = (props) => {

    const { list } = props;

    const listItems = list.map(produit => (
        <li key={produit.id}>
            {produit.productName} : 
            <span style={produit.isPromo ? {color: 'red'} : null}>
                {produit.productPrice} €
            </span>
        </li>
    ))

    // return (
    //     <ul>
    //         {listItems}
    //     </ul>
    // )

    return (
        <ul>
            {list.map(produit => (
                <li key={produit.id}>
                    {produit.productName} : 
                    <span style={produit.isPromo ? {color: 'red'} : null}>
                        {produit.productPrice} €
                    </span>
                </li>
                ))
            }
        </ul>
    )
}

ListProducts.propTypes = {
    list: PropTypes.array
}

export default ListProducts;