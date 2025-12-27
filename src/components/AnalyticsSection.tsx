import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    BarChart3,
    TrendingUp,
    ShieldCheck,
    Globe,
    Zap,
    Activity,
    CheckCircle2
} from "lucide-react";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from 'recharts';

export default function AnalyticsSection() {
    const [systemData, setSystemData] = useState<any>(null);
    const [adminData, setAdminData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const [sysRes, adminRes] = await Promise.all([
                    fetch('/api/analytics/system'),
                    fetch('/api/analytics/admin')
                ]);
                const sysJson = await sysRes.json();
                const adminJson = await adminRes.json();
                setSystemData(sysJson);
                setAdminData(adminJson);
            } catch (err) {
                console.error("Failed to fetch landing analytics", err);
            } finally {
                setLoading(false);
            }
        };
        fetchAllData();
    }, []);

    const stats = [
        { label: "On-Chain Commitment", value: "100%", icon: ShieldCheck, color: "emerald", sub: "Fully Automated Contracts" },
        { label: "Cost Reduction", value: "99%", icon: Zap, color: "rose", sub: "₹500 → ₹15 per Batch" },
        { label: "Active Nodes", value: "12+", icon: Globe, color: "indigo", sub: "Decentralized Network" },
        { label: "System Uptime", value: systemData?.uptime || "99.9%", icon: Activity, color: "blue", sub: "Real-time Sync" }
    ];

    if (loading) return null;

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-50 rounded-full blur-[120px] opacity-50" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-50" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                        <div className="max-w-2xl">
                            <Badge variant="outline" className="mb-4 border-emerald-200 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-tight">
                                <BarChart3 className="w-4 h-4 mr-2" />
                                Live Network Transparency
                            </Badge>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6 leading-[1.1]">
                                Monitoring the Future of <span className="text-emerald-600">Trust in Agriculture</span>.
                            </h2>
                            <p className="text-lg text-slate-600 font-medium">
                                The AgroVerse Network provides immutable proof of origin, quality, and fair trade.
                                Our real-time dashboard showcases the scale of transparency across the supply chain.
                            </p>
                        </div>

                        <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-[32px] border border-slate-100 italic font-semibold text-slate-500">
                            <div>
                                <span className="block text-slate-400 text-xs uppercase tracking-widest mb-1">Impact Highlight</span>
                                <span className="text-2xl text-emerald-700">{adminData?.impact?.incomeUplift || "+22%"}</span> Farmer Income Growth
                            </div>
                            <div className="w-px h-12 bg-slate-200" />
                            <TrendingUp className="w-8 h-8 text-emerald-600" />
                        </div>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {stats.map((s, i) => (
                            <div key={i} className="group p-8 rounded-[40px] bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/5">
                                <div className={`w-14 h-14 rounded-2xl bg-${s.color}-600 flex items-center justify-center mb-6 shadow-xl shadow-${s.color}-900/20 group-hover:scale-110 transition-transform`}>
                                    <s.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-2">{s.label}</h3>
                                <div className="text-3xl font-black text-slate-900 mb-1">{s.value}</div>
                                <p className="text-xs text-slate-400 font-bold">{s.sub}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                        {/* Main Visual: Regional Distribution */}
                        <Card className="xl:col-span-8 border-0 shadow-2xl shadow-slate-200/50 rounded-[48px] overflow-hidden glass-card">
                            <CardHeader className="p-10 border-b border-slate-50/50">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardTitle className="text-2xl font-black text-slate-900 tracking-tight">Regional Production Scale</CardTitle>
                                        <CardDescription className="text-slate-500 font-medium font-mono text-xs mt-1 uppercase tracking-widest">Real-time throughput by District</CardDescription>
                                    </div>
                                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                                </div>
                            </CardHeader>
                            <CardContent className="p-10">
                                <div className="h-[350px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={adminData?.regionalData || []}>
                                            <defs>
                                                <linearGradient id="colorProd" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#059669" stopOpacity={0.1} />
                                                    <stop offset="95%" stopColor="#059669" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }} dy={15} />
                                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11 }} />
                                            <Tooltip
                                                contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)' }}
                                                itemStyle={{ color: '#0f172a', fontWeight: 'bold' }}
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="production"
                                                stroke="#059669"
                                                strokeWidth={4}
                                                fillOpacity={1}
                                                fill="url(#colorProd)"
                                                animationDuration={2000}
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Sidebar Visual: Verification Status */}
                        <Card className="xl:col-span-4 border-0 shadow-2xl shadow-slate-200/50 rounded-[48px] bg-slate-900 text-white overflow-hidden p-10 flex flex-col justify-between">
                            <div>
                                <Badge className="bg-emerald-500 text-white border-none mb-6">Active Syncing</Badge>
                                <h3 className="text-3xl font-black leading-tight mb-4">Securing the Supply Chain.</h3>
                                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                                    Every batch moving through AgroVerse is verified by authorized cooperatives, insuring compliance with food safety and fair-price regulations.
                                </p>
                            </div>

                            <div className="space-y-6 mt-12">
                                <div className="flex items-center justify-between group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                                            <ShieldCheck className="w-5 h-5 text-emerald-400 group-hover:text-white" />
                                        </div>
                                        <div>
                                            <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Compliance</span>
                                            <span className="text-xl font-black">94.2%</span>
                                        </div>
                                    </div>
                                    <div className="text-emerald-500 font-black">+2.4%</div>
                                </div>

                                <div className="flex items-center justify-between group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                                            <Zap className="w-5 h-5 text-blue-400 group-hover:text-white" />
                                        </div>
                                        <div>
                                            <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest">L2 Finality</span>
                                            <span className="text-xl font-black">1.2s</span>
                                        </div>
                                    </div>
                                    <div className="text-blue-500 font-black">Stable</div>
                                </div>
                            </div>

                            <div className="mt-12 pt-10 border-t border-white/10 flex items-center justify-between">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className={`w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold`}>
                                            {i === 4 ? "+500" : ""}
                                        </div>
                                    ))}
                                </div>
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Stakeholders Joined</span>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

            <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
      `}</style>
        </section>
    );
}
