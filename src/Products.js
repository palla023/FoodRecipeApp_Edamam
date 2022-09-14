import React from 'react'

const Products = ({ data }) => {
    return (
        <div>
            <div className='container'>
                <div className="row">
                    {data.map(data =>
                        <div className="col-md-4">
                            <div class="card shadow" style={{ "width": "18rem" }}>
                                {/* image attribute should be inside of recipe object */}
                                <img class="card-img-top" src={data.recipe.image} alt="Card image cap" />
                                <div class="card-body">
                                    <center>
                                        <h5 class="card-title">{data.recipe.label}</h5>
                                        <p class="card-text">Total Amount Of Calories : {Math.round(data.recipe.calories)}</p>
                                        <a href="#" class="btn btn-primary">Buy</a>
                                    </center>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Products
