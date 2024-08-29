import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import PieCharts from "./pages/charts/PieCharts";
import LineCharts from "./pages/charts/LineCharts";


const Stopwatch = lazy(() => import("./pages/apps/Stopwatch"));
const Coupon = lazy(() => import("./pages/apps/Coupon"));
const Toss = lazy(() => import("./pages/apps/Toss"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Product = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transactions"));
const Customers = lazy(() => import("./pages/Customers"));
const NewProduct = lazy(() => import("./pages/managements/NewProduct"));
const TransactionManagement = lazy(
  () => import("./pages/managements/TransactionManagement")
);
const ProductManagement = lazy(
  () => import("./pages/managements/ProductManagement")
);
const BarChart = lazy(() => import("./pages/charts/BarChart"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Link className="start" to="/admin/dashboard">
          <button>Visit Dashboard</button></Link>} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Product />} />
          <Route path="/admin/customer" element={<Customers />} />
          <Route path="/admin/transaction" element={<Transaction />} />

          {/* charts */}
          <Route path="/admin/chart/bar" element={<BarChart />} />
          <Route path="/admin/chart/pie" element={<PieCharts />} />
          <Route path="/admin/chart/line" element={<LineCharts />} />

          {/* apps */}
          <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
          <Route path="/admin/app/coupon" element={<Coupon />} />
          <Route path="/admin/app/toss" element={<Toss />} />
          {/* managements */}
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
