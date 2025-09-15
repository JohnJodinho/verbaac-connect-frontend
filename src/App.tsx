import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import DashboardLayout from "./layout/DashboardLayout";
import AuthLayout from "./layout/AuthLayout";
import Home from "./modules/home/Home";
import Login from "./modules/auth/Login";
import Register from "./modules/auth/Register";
import NotFound from "./modules/error-pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/faq" element={<div>FAQ Page</div>} />
          <Route path="/terms" element={<div>Terms of Service</div>} />
          <Route path="/privacy" element={<div>Privacy Policy</div>} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/maintenance" element={<div>Maintenance</div>} />
        </Route>

        {/* Auth routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-email" element={<div>Verify Email</div>} />
          <Route path="/forgot-password" element={<div>Forgot Password</div>} />
          <Route path="/reset-password/:token" element={<div>Reset Password</div>} />
          <Route path="/onboarding" element={<div>Onboarding</div>} />
        </Route>

        {/* Housing module */}
        <Route element={<MainLayout />}>
          <Route path="/housing" element={<div>Housing Listings</div>} />
          <Route path="/housing/:id" element={<div>Housing Detail</div>} />
          <Route path="/housing/list-property" element={<div>List Property</div>} />
          <Route path="/housing/my-listings" element={<div>My Listings</div>} />
        </Route>

        {/* Marketplace module */}
        <Route element={<MainLayout />}>
          <Route path="/marketplace" element={<div>Marketplace</div>} />
          <Route path="/marketplace/:id" element={<div>Product Detail</div>} />
          <Route path="/marketplace/cart" element={<div>Cart</div>} />
          <Route path="/marketplace/order-summary" element={<div>Order Summary</div>} />
          <Route path="/marketplace/post" element={<div>Post Item</div>} />
          <Route path="/marketplace/my-items" element={<div>My Items</div>} />
          <Route path="/marketplace/wishlist" element={<div>Wishlist</div>} />
          <Route path="/marketplace/delivery-status/:id" element={<div>Delivery Status</div>} />
        </Route>

        {/* Agreements module */}
        <Route element={<MainLayout />}>
          <Route path="/agreements" element={<div>Agreements</div>} />
          <Route path="/agreements/create" element={<div>Create Agreement</div>} />
          <Route path="/agreements/:id" element={<div>Agreement Details</div>} />
          <Route path="/agreements/review/:id" element={<div>Review Agreement</div>} />
          <Route path="/agreements/sign/:id" element={<div>Sign Agreement</div>} />
          <Route path="/agreements/success" element={<div>Agreement Success</div>} />
        </Route>

        {/* Roommates module */}
        <Route element={<MainLayout />}>
          <Route path="/roommates" element={<div>Roommate Match</div>} />
          <Route path="/roommates/result" element={<div>Match Results</div>} />
          <Route path="/roommates/profile/:id" element={<div>Roommate Profile</div>} />
          <Route path="/roommates/invite/:id" element={<div>Invite Roommate</div>} />
        </Route>

        {/* Dashboard */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<div>Dashboard Overview</div>} />
          <Route path="/dashboard/profile" element={<div>Profile Settings</div>} />
          <Route path="/dashboard/security" element={<div>Security & 2FA</div>} />
          <Route path="/dashboard/kyc" element={<div>KYC Verification</div>} />
          <Route path="/dashboard/activity" element={<div>Activity Logs</div>} />
          <Route path="/dashboard/wallet" element={<div>Wallet</div>} />
          <Route path="/dashboard/rewards" element={<div>Referral Rewards</div>} />
        </Route>

        {/* Messaging & Notifications */}
        <Route element={<MainLayout />}>
          <Route path="/messages" element={<div>Messages Inbox</div>} />
          <Route path="/messages/:threadId" element={<div>Message Thread</div>} />
          <Route path="/notifications" element={<div>Notifications</div>} />
        </Route>

        {/* Admin */}
        <Route element={<DashboardLayout />}>
          <Route path="/admin" element={<div>Admin Dashboard</div>} />
          <Route path="/admin/users" element={<div>User Management</div>} />
          <Route path="/admin/listings" element={<div>Listing Moderation</div>} />
          <Route path="/admin/disputes" element={<div>Dispute Resolution</div>} />
          <Route path="/admin/payments" element={<div>Payment Logs</div>} />
          <Route path="/admin/analytics" element={<div>Analytics Dashboard</div>} />
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
