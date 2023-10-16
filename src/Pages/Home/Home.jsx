import { useEffect } from "react";
import Banner from "../../Banner/Banner";
import Footer from "../../Footer/Footer";
import Service from "../../Service/Service";
import FeturedSection from "../FeturedSection/FeturedSection";
import OurTeamMember from "../OurTeamMember/OurTeamMember";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(() => {
        Aos.init()
    })
    return (
        <div>

            <Banner></Banner>
            <Service></Service>
            <div data-aos="fade-up">
                <FeturedSection></FeturedSection>
            </div>
            <div data-aos="zoom-in-up">
                <OurTeamMember></OurTeamMember>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;