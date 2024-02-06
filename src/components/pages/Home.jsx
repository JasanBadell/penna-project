import HomeBanner from "../HomeBanner";
import Offerts from "../Offerts";
import Productions from "../Productions";
import News from "../News";
import Clients from "../Clients";

const Home = () => {
  return (
    <div className="lg:pt-20 pt-2 mb-4">
      <HomeBanner />
      <Offerts />
      <Productions />
      <News />
      <Clients />
    </div>
  );
};

export default Home;
