import Banner from "../../Banner/Banner";
import Footer from "../../Footer/Footer";
import Service from "../../Service/Service";
import FeturedSection from "../FeturedSection/FeturedSection";
import OurTeamMember from "../OurTeamMember/OurTeamMember";

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Service></Service>
            <FeturedSection></FeturedSection>
            <OurTeamMember></OurTeamMember>
            <Footer></Footer>
        </div>
    );
};

export default Home;