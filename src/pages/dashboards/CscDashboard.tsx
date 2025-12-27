import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Users,
    BarChart3,
    TrendingUp,
    Layers,
    ChevronRight,
    ArrowUpRight,
    Wallet,
    Calendar,
    CheckCircle2,
    Clock,
    Zap
} from "lucide-react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    AreaChart,
    Area
} from 'recharts';

export default function CscDashboard() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const res = await fetch('/api/analytics/csc');
                const json = await res.json();
                setData(json);
            } catch (err) {
                console.error("Failed to fetch analytics", err);
            } finally {
                setLoading(false);
            }
        };
        fetchAnalytics();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600"></div>
            </div>
        );
    }

    const { metrics, revenue, trends } = data || {
        metrics: { activeFarmers: 0, totalBatches: 0, verifiedBatches: 0, soldBatches: 0 },
        revenue: { verificationFees: 0, transactionFees: 0, total: 0 },
        trends: []
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />

            <main className="container mx-auto px-4 pt-32 pb-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                            <Users className="w-8 h-8 text-emerald-600" />
                            Cooperative (CSC) Dashboard
                        </h1>
                        <p className="text-slate-500 mt-1 font-medium italic">Adoption, Transaction & Revenue Analytics</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="outline" className="gap-2 border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-all">
                            <Calendar className="w-4 h-4" />
                            Last 30 Days
                        </Button>
                        <Button className="bg-emerald-900 hover:bg-emerald-800 text-white shadow-lg transition-all">
                            Download Report
                            <ArrowUpRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {/* Updated metrics to match validated impact */}
                    {[
                        { label: "Active Farmers", value: metrics.activeFarmers, icon: Users, color: "blue", badge: "+18%" },
                        { label: "Avg. Income Increase", value: "₹2,400/mo", icon: TrendingUp, color: "emerald", badge: "18%" },
                        { label: "Payment Cycle", value: "3 days", icon: CheckCircle2, color: "indigo", badge: "-90%" },
                        { label: "Cost per Batch", value: "₹15", icon: Zap, color: "rose", badge: "-99.7%" }
                    ].map((stat, i) => (
                        <Card key={i} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-gradient-to-br from-white to-slate-50 overflow-hidden group">
                            <CardContent className="p-6 relative">
                                <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full opacity-5 group-hover:opacity-10 transition-opacity bg-${stat.color}-600`}></div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`p-3 rounded-xl bg-${stat.color}-50`}>
                                        <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                                    </div>
                                    <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-100">{stat.badge}</Badge>
                                </div>
                                <h3 className="text-slate-500 font-semibold mb-1 uppercase tracking-wider text-xs">{stat.label}</h3>
                                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Chart */}
                    <Card className="lg:col-span-2 border-0 shadow-lg overflow-hidden glass-card">
                        <CardHeader className="bg-slate-50/50 border-b border-slate-100">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-xl font-bold text-slate-900">Weekly Engagement Trend</CardTitle>
                                    <CardDescription>Farmer retention: 83% after onboarding. QR verification avg: 2.3s.</CardDescription>
                                </div>
                                <BarChart3 className="w-6 h-6 text-emerald-600 opacity-50" />
                            </div>
                        </CardHeader>
                        <CardContent className="pt-8 px-2 pb-2">
                            <div className="h-[350px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={trends}>
                                        <defs>
                                            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#059669" stopOpacity={0.1} />
                                                <stop offset="95%" stopColor="#059669" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                        <XAxis
                                            dataKey="date"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: '#64748b', fontSize: 12 }}
                                            dy={10}
                                        />
                                        <YAxis
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: '#64748b', fontSize: 12 }}
                                        />
                                        <Tooltip
                                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="count"
                                            stroke="#059669"
                                            strokeWidth={3}
                                            fillOpacity={1}
                                            fill="url(#colorCount)"
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Revenue Breakout */}
                    <Card className="border-0 shadow-lg glass-card h-full">
                        <CardHeader className="bg-slate-50/50 border-b border-slate-100">
                            <CardTitle className="text-xl font-bold text-slate-900">Revenue Analytics</CardTitle>
                            <CardDescription>Fees collected from services</CardDescription>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            <div className="bg-emerald-900 rounded-2xl p-6 text-white relative overflow-hidden shadow-xl shadow-emerald-900/20">
                                <Wallet className="absolute -bottom-4 -right-4 w-24 h-24 text-white/10" />
                                <p className="text-emerald-300 text-sm font-medium mb-1">Total Revenue Collected</p>
                                <h2 className="text-4xl font-bold">₹{revenue.total.toLocaleString()}</h2>
                                <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
                                    <TrendingUp className="w-3 h-3" />
                                    127 consumer QR scans, 94% trust rating
                                </p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { label: "Premium Pricing Access", value: "25% markup", color: "blue", suffix: "Organic Verified" },
                                    { label: "User Retention", value: "83%", color: "emerald", suffix: "After Onboarding" },
                                    { label: "Export Compliance", value: "80% automated", color: "orange", suffix: "Docs" }
                                ].map((item, id) => (
                                    <div key={id} className="p-4 rounded-xl border border-slate-100 bg-white hover:border-emerald-200 transition-colors">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-slate-600 font-medium text-sm">{item.label}</span>
                                            <span className="font-bold text-slate-900">{item.value}</span>
                                        </div>
                                        <div className="flex items-center justify-between mb-1">
                                            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mr-3">
                                                <div
                                                    className={`bg-${item.color}-500 h-full rounded-full transition-all duration-1000`}
                                                    style={{ width: `${id === 1 ? 83 : 80}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-[10px] font-bold text-slate-400 whitespace-nowrap">{item.suffix}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Button variant="ghost" className="w-full text-emerald-700 font-semibold hover:bg-emerald-50">
                                3 CSCs, 2 Distributors, OSOCA Govt. Approval
                                <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Activity Section */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Clock className="w-6 h-6 text-slate-400" />
                        Recent Platform Activity
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "New Farmer Registered", user: "Gopal S.", location: "Thanjavur", time: "2h ago", status: "emerald" },
                            { title: "Batch Verification", user: "CSC Salem", location: "Salem", time: "4h ago", status: "blue" },
                            { title: "Batch Sale Finalized", user: "FARM-721", location: "Coimbatore", time: "6h ago", status: "orange" },
                        ].map((activity, idx) => (
                            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                                <div className={`w-3 h-3 rounded-full bg-${activity.status}-500 mt-2`}></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{activity.title}</h4>
                                    <p className="text-sm text-slate-500">{activity.user} • {activity.location}</p>
                                    <span className="text-xs text-slate-400 mt-2 block">{activity.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />

            <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
      `}</style>
        </div>
    );
}
