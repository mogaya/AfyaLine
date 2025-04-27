import StatCard from "../components/Dashboard/StatCard";
import { Notebook, Users } from "lucide-react";

const Dashboard = () => {
  return (
    <>
      <StatCard
        bgColor="#E6F0FF"
        icon={Users}
        iconColor="#007BFF"
        title="Total Clients"
        value={5}
      ></StatCard>
    </>
  );
};

export default Dashboard;
