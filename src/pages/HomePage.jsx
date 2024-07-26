import HelpCard from "../components/HelpCard";
import QnACard from "../components/QnaCard/index.jsx";
import DashboardStats from "../components/StatsCArd.jsx";

const HomePage = () => {
  return (
    <div className="container">
      <DashboardStats></DashboardStats>
      <HelpCard></HelpCard>
      <QnACard></QnACard>
    </div>
  );
};

export default HomePage;
