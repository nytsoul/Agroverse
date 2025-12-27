import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    ShieldCheck,
    Map as MapIcon,
    Search,
    FileText,
    Globe,
    Activity,
    ExternalLink,
    ChevronRight,
    ClipboardCheck,
    Zap,
    Leaf
} from "lucide-react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend
} from 'recharts';

export default function AdminDashboard() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const res = await fetch('/api/analytics/admin');
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
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-slate-900"></div>
            </div>
        );
    }

    const { traceability, regionalData, compliance, impact } = data || {
        traceability: { totalBatches: 0, inTransit: 0, delivered: 0 },
        regionalData: [],
        compliance: { exportReady: 0, certified: 0, auditTrails: 0 },
        impact: { incomeUplift: "0%", middlemanReduction: "0%", farmerEngagement: "Low" }
    };

    const PIE_COLORS = ['#0f172a', '#334155', '#475569', '#64748b', '#94a3b8'];

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            <main className="container mx-auto px-4 pt-32 pb-12">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-2 text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">
                            <ShieldCheck className="w-4 h-4 text-slate-900" />
                            National Regulatory Oversight
                        </div>
                        <h1 className="text-4xl font-black text-slate-900 tracking-tighter sm:text-5xl">
                            Admin & Govt Dashboard
                        </h1>
                        <p className="text-slate-500 mt-3 max-w-2xl text-lg">
                            End-to-end traceability, food safety monitoring, and policy impact analytics for the agriculture sector.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Button variant="outline" className="h-12 px-6 rounded-xl border-slate-200">
                            <Search className="w-4 h-4 mr-2" />
                            Search Batch ID
                        </Button>
                        <Button className="h-12 px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-xl shadow-slate-900/10 transition-all">
                            Generate Compliance Report
                            <FileText className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>

                {/* Global Impact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                        { label: "On-Chain Commitment", value: "100%", icon: ShieldCheck, color: "emerald", desc: "Fully automated blockchain contracts" },
                        { label: "Cost Reduction", value: "99%", icon: Zap, color: "rose", desc: "Fee reduction from ₹500 to ₹15" },
                        { label: "Export Readiness", value: "62%", icon: ClipboardCheck, color: "orange", desc: "Batches meeting global quality standards" }
                    ].map((stat, i) => (
                        <div key={i} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl relative overflow-hidden group hover:border-slate-300 transition-all">
                            <stat.icon className={`absolute -bottom-6 -right-6 w-32 h-32 text-slate-200 group-hover:text-${stat.color}-100 transition-colors`} />
                            <h3 className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-4">{stat.label}</h3>
                            <div className="text-5xl font-black text-slate-900 mb-2">{stat.value}</div>
                            <p className="text-sm text-slate-500 font-medium">{stat.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                    {/* Regional Production Analytics */}
                    <Card className="xl:col-span-8 border-0 shadow-2xl shadow-slate-200/50 rounded-3xl overflow-hidden">
                        <CardHeader className="p-8 border-b border-slate-50">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-2xl font-bold text-slate-900">Regional Production & Quality</CardTitle>
                                    <CardDescription>District-wise performance and verification data</CardDescription>
                                </div>
                                <MapIcon className="w-8 h-8 text-slate-300" />
                            </div>
                        </CardHeader>
                        <CardContent className="p-8">
                            <div className="h-[400px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={regionalData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontWeight: 600 }} dy={10} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                                        <Tooltip
                                            cursor={{ fill: '#f8fafc' }}
                                            contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                                        />
                                        <Legend verticalAlign="top" height={36} />
                                        <Bar name="Production (Kg)" dataKey="production" fill="#0f172a" radius={[6, 6, 0, 0]} barSize={40} />
                                        <Bar name="Quality Index" dataKey="quality" fill="#059669" radius={[6, 6, 0, 0]} barSize={40} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Traceability Summary */}
                    <Card className="xl:col-span-4 border-0 shadow-2xl shadow-slate-200/50 rounded-3xl overflow-hidden flex flex-col">
                        <CardHeader className="p-8 border-b border-slate-50">
                            <CardTitle className="text-2xl font-bold text-slate-900">Life-Cycle Status</CardTitle>
                            <CardDescription>Current state of all tracked batches</CardDescription>
                        </CardHeader>
                        <CardContent className="p-8 flex-1 flex flex-col justify-center">
                            <div className="h-[300px] w-full mb-8">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={[
                                                { name: 'On Farm', value: traceability.totalBatches - traceability.inTransit - traceability.delivered },
                                                { name: 'In Transit', value: traceability.inTransit },
                                                { name: 'Delivered', value: traceability.delivered }
                                            ]}
                                            innerRadius={80}
                                            outerRadius={110}
                                            paddingAngle={8}
                                            dataKey="value"
                                        >
                                            {[0, 1, 2].map((_, index) => (
                                                <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { label: "Global Traceability", value: "99.2%", icon: Globe },
                                    { label: "Active Audit Trails", value: compliance.auditTrails, icon: FileText },
                                    { label: "System Uptime", value: "99.9%", icon: Activity }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                                        <div className="flex items-center gap-3">
                                            <item.icon className="w-5 h-5 text-slate-400" />
                                            <span className="text-sm font-bold text-slate-600 uppercase tracking-wider">{item.label}</span>
                                        </div>
                                        <span className="font-black text-slate-900">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Compliance & Export Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                    <div className="bg-slate-900 text-white rounded-[40px] p-12 relative overflow-hidden">
                        <Leaf className="absolute -top-12 -right-12 w-64 h-64 text-white/5 rotate-12" />
                        <h3 className="text-3xl font-black mb-4">Export-Readiness Hub</h3>
                        <p className="text-slate-400 mb-8 max-w-md"> Monitor batches ready for international markets based on certification logs and food safety standards.</p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                                <div className="text-3xl font-bold text-emerald-400 mb-1">{compliance.exportReady}</div>
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Batches Qualified</div>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                                <div className="text-3xl font-bold text-blue-400 mb-1">{compliance.certified}</div>
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Certification Logs</div>
                            </div>
                        </div>

                        <Button className="mt-8 bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8 py-6 h-auto font-bold">
                            Launch Certification Portal
                            <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>

                    <div className="bg-emerald-50 rounded-[40px] p-12 border border-emerald-100">
                        <h3 className="text-3xl font-black text-slate-900 mb-4">Food Safety Monitoring</h3>
                        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-200 text-emerald-800 rounded-full text-[10px] font-black uppercase tracking-widest w-fit mb-6">
                            Real-time Alert System
                        </div>
                        <p className="text-slate-600 mb-8 max-w-md">Rapid identification of contamination sources using on-chain traceability data and IPFS-stored environmental logs.</p>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-emerald-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                    <span className="text-sm font-bold text-slate-700">No active contamination alerts</span>
                                </div>
                                <Button variant="link" className="text-emerald-700 font-bold p-0">View History</Button>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-emerald-100 opacity-60">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                    <span className="text-sm font-bold text-slate-700">Audit in progress - Tiruvarur Region</span>
                                </div>
                                <ExternalLink className="w-4 h-4 text-slate-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
