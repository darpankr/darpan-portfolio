
import DashboardAdmin from "../../components/DashboardAdmin";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="mb-4">This is the admin dashboard. You can manage your portfolio settings here.</p>
        {/* Add your dashboard components here */}
        <DashboardAdmin />
      </div>
    </main>
  );
}