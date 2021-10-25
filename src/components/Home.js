import React from 'react';


function Home(props) {
    console.log('Home: ',props);

    return (
        <div>
            
        <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://m.media-amazon.com/images/I/714Mg+6MoFL._SX679_.jpg" alt="iPhone" />

                </div>
                <div className="text-wrapper item">
                    <span>iPhone</span>
                    <span>Price: 50000/-</span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>props.addToCartHandler({price: 50000, name: 'iPhone'})}>Add to cart</button>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>props.removeToCartHandler()}>Remove to cart</button>
                </div>
            </div>
            

        </div>

    )
}

export default Home;

//Image Links src : https://www.amazon.in/New-Apple-iPhone-11-64GB/dp/B08L8CV8GH/ref=asc_df_B08L8CV8GH/?tag=googleshopdes-21&linkCode=df0&hvadid=397005875659&hvpos=&hvnetw=g&hvrand=14249125364936851126&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061685&hvtargid=pla-1087950065228&psc=1&ext_vrnc=hi
