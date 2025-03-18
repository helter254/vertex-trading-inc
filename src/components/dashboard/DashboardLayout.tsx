
import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import { 
  Home, LineChart, BarChart3, Wallet, CreditCard, 
  TrendingUp, History, Settings, PlayCircle
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  // Navigation items for the sidebar with proper paths
  const navItems = [
    { icon: Home, label: "Dashboard", id: "dashboard", path: "/dashboard" },
    { icon: LineChart, label: "Markets", id: "markets", path: "/market" },
    { icon: BarChart3, label: "Trading", id: "trading", path: "/dashboard?tab=trading" },
    { icon: Wallet, label: "Assets", id: "assets", path: "/assets" },
    { icon: PlayCircle, label: "Demo", id: "demo", path: "/demo" },
    { icon: CreditCard, label: "Deposit/Withdraw", id: "funding", path: "/dashboard?tab=funding" },
    { icon: TrendingUp, label: "Bots & Strategies", id: "bots", path: "/dashboard?tab=bots" },
    { icon: History, label: "History", id: "history", path: "/dashboard?tab=history" },
    { icon: Settings, label: "Settings", id: "settings", path: "/settings" },
  ];
  
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <DashboardSidebar navItems={navItems} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <DashboardHeader />
        
        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
