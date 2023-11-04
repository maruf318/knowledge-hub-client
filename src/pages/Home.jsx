import Banner from "../components/Banner";
import Categories from "../components/Categories";

import Stats from "../components/Stats";
import Subscription from "../components/Subscription";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <Stats></Stats>

      <Subscription></Subscription>
    </div>
  );
};

export default Home;
