import facebook from '../Images/icons8-facebook-30.png'
import twitter from '../Images/icons8-twitter-30.png'
import instagram from '../Images/icons8-instagram-30.png'

const Footer = () => {
    return (
        <div>
            <div className="mt-10">

                <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-20 md:container md:mx-auto">
                    <nav>
                        <h3 className="font-black text-4xl">Book Vibe</h3>
                    </nav>
                    <nav>
                        <p className="text-gray-500">Explore our online book page where every book is meticulously <br /> provided for guilt-free indulgence.
                        </p>
                    </nav>
                    <nav>
                        <div className="grid grid-flow-col gap-4">
                            <img className=' cursor-pointer' src={facebook} alt="" />
                            <img className=' cursor-pointer' src={twitter} alt="" />
                            <img className=' cursor-pointer' src={instagram} alt="" />
                        </div>
                    </nav>
                    <aside>
                        <div className="lg:w-[825px] w-[215px] h-1 bg-[#1313181A]"></div>
                        <p className="text-gray-500 mt-7">2024, All Rights Reserved.</p>
                    </aside>
                </footer>

            </div>
        </div>
    );
};

export default Footer;