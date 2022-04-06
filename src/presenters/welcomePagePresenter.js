import WelcomePageView from "@/views/welcomePageView";
import animateBike from "../views/animateBike.js";

const WelcomePage = {
  mounted() {
    animateBike();
  },
  render() {
    return <WelcomePageView />;
  },
};

export default WelcomePage;
