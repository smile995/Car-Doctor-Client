import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img5 from '../../assets/images/banner/5.jpg'
import img6 from '../../assets/images/banner/6.jpg'




const Banner = () => {

    return (
        <div className='my-10'  >
            <div className="carousel w-full h-[600px]  ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full " />
                    <div className="bg-gradient-to-r flex items-center from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute  w-full h-full  text-white">
                        <div className='w-3/5 mx-10 space-y-5' >
                            <h1 className='md:text-7xl text-3xl font-bold'>Affordable <br />Price For Car <br /> Servicing</h1>
                            <p>There are many variations of passages of  available, but <br />the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className="btn btn-warning">Discover More</button>
                                <button className="btn btn-outline btn-error">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-warning btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-warning btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full " />
                    <div className="bg-gradient-to-r flex items-center from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute  w-full h-full  text-white">
                        <div className='w-3/5 mx-10 space-y-5' >
                            <h1 className='md:text-7xl text-3xl font-bold'>Affordable <br />Price For Car <br /> Servicing</h1>
                            <p>There are many variations of passages of  available, but <br />the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className="btn btn-warning">Discover More</button>
                                <button className="btn btn-outline btn-error">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end md:gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle btn-warning">❮</a>
                        <a href="#slide3" className="btn btn-circle btn-warning">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full " />
                    <div className="bg-gradient-to-r flex items-center from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute  w-full h-full  text-white">
                        <div className='w-3/5 mx-10 space-y-5' >
                            <h1 className='md:text-7xl text-3xl font-bold'>Affordable <br />Price For Car <br /> Servicing</h1>
                            <p>There are many variations of passages of  available, but <br />the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className="btn btn-warning">Discover More</button>
                                <button className="btn btn-outline btn-error">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle btn-warning">❮</a>
                        <a href="#slide4" className="btn btn-circle btn-warning">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img5} className="w-full " />
                    <div className="bg-gradient-to-r flex items-center from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute  w-full h-full  text-white">
                        <div className='w-3/5 mx-10 space-y-5' >
                            <h1 className='md:text-7xl text-3xl font-bold'>Affordable <br />Price For Car <br /> Servicing</h1>
                            <p>There are many variations of passages of  available, but <br />the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className="btn btn-warning">Discover More</button>
                                <button className="btn btn-outline btn-error">Latest Project</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle btn-warning">❮</a>
                        <a href="#slide5" className="btn btn-circle btn-warning">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={img6} className="w-full " />
                    <div className="bg-gradient-to-r flex items-center from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute  w-full h-full  text-white">
                        <div className='w-3/5 mx-10 space-y-5' >
                            <h1 className='md:text-7xl text-3xl font-bold'>Affordable <br />Price For Car <br /> Servicing</h1>
                            <p>There are many variations of passages of  available, but <br />the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className="btn btn-warning">Discover More</button>
                                <button className="btn btn-outline btn-error">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle btn-warning">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-warning">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;