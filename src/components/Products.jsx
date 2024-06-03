import { useEffect, useState } from 'react'

function Products() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((res) => res.json())
            .then((result) => setData(result));
    }, [])

    return (
        <div className=' mx-auto grid grid-cols-3 m-5 '>
            {
                data.length ? data.map(({ id, title, price, images }) => (

                    <div key={id} className="hidden sm:flex :w-52 card w-72 bg-base-100 shadow-xl mb-10">
                        <figure><img src={images} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {title}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <div className="card-actions justify-between">
                                <h4 className='mt-4 font-medium'>Price:{price / 1000}$</h4>
                                <div className="btn rounded-full">
                                    <h1 className='text-[22px]'>+</h1>
                                </div>
                            </div>
                        </div>
                    </div>)) : <h1>Loader...</h1>
            }

        </div>
    )
}

export default Products