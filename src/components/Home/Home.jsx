import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { faTruckFast, faShieldHalved, faBox, faCoins } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <div className="bg-base-200">
            <div className='w-11/12 mx-auto'>
                {/* hero section  */}
                <div>
                    <div className="hero-content lg:flex-row mx-auto">
                        <img src="https://devtechnosys.com/insights/wp-content/uploads/2020/11/chatbots.gif" className="max-w-sm drop-shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Welcome to <span className='text-primary'>HAPPY MART</span></h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente distinctio perferendis culpa, numquam cumque laboriosam soluta placeat ex sit tenetur!</p>
                            <Link className="btn btn-primary w-96 text-3xl h-20" to='/shop'>Shop  Now</Link>
                        </div>
                    </div>
                </div>

                {/* product category section */}
                <p className='text-5xl text-center font-bold mt-10 mb-10 underline'>Our Products</p>
                <div className='flex justify-center gap-10'>
                    <div className="card w-96 shadow-xl max-h-96" style={{ padding: 0 }}>
                        <figure className='max-h-96 rounded-xl'>
                            <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/kids-shoe/s/p/h/-original-imaghryxgffvemjc.jpeg?q=90" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center absolute top-40 left-24 m-auto">
                            <h2 className="card-title text-5xl text-white">Shoes</h2>
                        </div>
                    </div>
                    <div className="card w-96 shadow-xl max-h-96" style={{ padding: 0 }}>
                        <figure className='max-h-96 rounded-xl'>
                            <img src="https://www.californian.co.za/wp-content/uploads/2021/08/A587-K7-TRACK-PANTS-RED6.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center absolute top-32 left-24 m-auto">
                            <h2 className="card-title text-5xl text-white">Track Pants</h2>
                        </div>
                    </div>
                    <div className="card w-96 shadow-xl max-h-96" style={{ padding: 0 }}>
                        <figure className='max-h-96 rounded-xl'>
                            <img src="https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center absolute top-40 left-24 m-auto">
                            <h2 className="card-title text-5xl text-white">T-Shirts</h2>
                        </div>
                    </div>
                    <div className="card w-96 shadow-xl max-h-96" style={{ padding: 0 }}>
                        <figure className='rounded-xl'>
                            <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/22122312/2023/2/25/429d0910-d8e8-47e1-9b78-1eb5befc3e531677312652095ForeverGlambyPantaloonsGreyPUBowlingHandheldBagwithApplique1.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center absolute top-40 left-24 m-auto">
                            <h2 className="card-title text-5xl text-white">Backpack</h2>
                        </div>
                    </div>
                </div>


                <div>
                    <h1 className='text-5xl text-center font-bold mt-32 underline mb-10'>Why We Are?</h1>
                    <div>
                        <div>
                            <div className="hero-content flex-col lg:flex-row">
                                <span className='text-9xl text-primary'><FontAwesomeIcon icon={faTruckFast}></FontAwesomeIcon></span>
                                <div>
                                    <h1 className="text-5xl font-bold pt-9">Fastest Delivery</h1>
                                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi veritatis quia doloremque, quas veniam maxime saepe fuga in dolorem, quidem nihil vel corporis beatae modi voluptatum dicta corrupti, enim optio. Accusamus unde aperiam mollitia suscipit similique officiis nisi temporibus adipisci!</p>
                                </div>
                            </div>
                        </div>


                        <div className='flex justify-end'>
                            <div className="hero-content flex-col lg:flex-row">
                                <div>
                                    <h1 className="text-5xl font-bold pt-9 text-right">Safe & Trusted</h1>
                                    <p className="py-6 text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi veritatis quia doloremque, quas veniam maxime saepe fuga in dolorem, quidem nihil vel corporis beatae modi voluptatum dicta corrupti, enim optio. Accusamus unde aperiam mollitia suscipit similique officiis nisi temporibus adipisci!</p>
                                </div>
                                <span class='text-9xl text-primary'><FontAwesomeIcon icon={faShieldHalved}></FontAwesomeIcon></span>
                            </div>
                        </div>

                        <div>
                            <div className="hero-content flex-col lg:flex-row">
                                <span className='text-9xl text-primary'><FontAwesomeIcon icon={faBox}></FontAwesomeIcon></span>
                                <div>
                                    <h1 className="text-5xl font-bold pt-9">On Demand Products</h1>
                                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi veritatis quia doloremque, quas veniam maxime saepe fuga in dolorem, quidem nihil vel corporis beatae modi voluptatum dicta corrupti, enim optio. Accusamus unde aperiam mollitia suscipit similique officiis nisi temporibus adipisci!</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-end'>
                            <div className="hero-content flex-col lg:flex-row">
                                <div>
                                    <h1 className="text-5xl font-bold pt-9 text-right">Money Back Policy</h1>
                                    <p className="py-6 text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi veritatis quia doloremque, quas veniam maxime saepe fuga in dolorem, quidem nihil vel corporis beatae modi voluptatum dicta corrupti, enim optio. Accusamus unde aperiam mollitia suscipit similique officiis nisi temporibus adipisci!</p>
                                </div>
                                <span class='text-9xl text-primary'><FontAwesomeIcon icon={faCoins}></FontAwesomeIcon></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* powered by section  */}
                <div>
                    <h1 className='text-5xl text-center font-bold mt-32 underline mb-10'>Co-Powerd By</h1>
                    <div className='flex gap-20 justify-center align-center'>
                        <img className='h-40' src="https://logos-world.net/wp-content/uploads/2022/05/Daraz-Emblem.png" alt="" />
                        <img className='h-40' src="https://vectorseek.com/wp-content/uploads/2023/07/Myntra-Logo-Vector.svg-.png" alt="" />
                        <img className='h-40' src="https://companieslogo.com/img/orig/BABA-2884ac04.png?t=1668769348" alt="" />
                        <img className='h-40' src="https://companieslogo.com/img/orig/AMZN-e9f942e4.png?t=1632523695" alt="" />
                        <img className='h-40' src="https://logos-world.net/wp-content/uploads/2020/11/eBay-Emblem.png" alt="" />
                    </div>
                </div>


                {/* customer reviews */}
                <div>
                    <h1 className='text-5xl text-center font-bold mt-32 underline'>What people are saying</h1>
                    <div class="max-w-7xl p-4 mx-auto">
                        <div class="mb-2">
                            <div class="h-3 text-3xl text-left text-primary">“</div>
                            <p class="px-4 text-center">
                                The Landscaping Professionals were quick, courteous and very helpful. They
                                helped me restore my lawn and gardens completely after putting in my deck.
                                I was worried it wouldn’t be done in time for my garden party, but they
                                finished the job with time to spare!”
                            </p>
                            <div class="h-3 text-3xl text-right text-primary">”</div>
                            <div class="text-center">
                                <h5 class="font-bold text-primary">John Doe</h5>
                                <p class="text-sm text-gray-600">Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;