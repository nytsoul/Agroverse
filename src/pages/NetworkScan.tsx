import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Activity,
    ShieldCheck,
    Zap,
    Globe,
    Database,
    Server,
    Cpu,
    Search,
    CheckCircle2,
    AlertCircle,
    Network
} from "lucide-react";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    BarChart,
    Bar
} from 'recharts';


export default function NetworkScan() {
    const { t } = useTranslation();
    const [systemData, setSystemData] = useState<any>(null);
    const [adminData, setAdminData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [logs, setLogs] = useState<any[]>([]);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const [sysRes, adminRes, networkRes] = await Promise.all([
                    fetch('/api/analytics/system'),
                    fetch('/api/analytics/admin'),
                    fetch('/api/analytics/network')
                ]);
                const sysJson = await sysRes.json();
                const adminJson = await adminRes.json();
                const networkJson = await networkRes.json();

                setSystemData(sysJson);
                setAdminData(adminJson);
                setLogs(networkJson);
            } catch (err) {
                console.error("Failed to fetch network scan data", err);
            } finally {
                setLoading(false);
            }
        };
        fetchAllData();
    }, []);

    const techMetrics = [
        { label: t('networkScan.blockchainFinality'), value: "1.2s", icon: Zap, status: t('networkScan.optimized'), color: "emerald" },
        { label: t('networkScan.costReduction'), value: "99%", icon: Search, status: "₹500 → ₹15", color: "blue" },
        { label: t('networkScan.rpcStatus'), value: t('networkScan.active'), icon: Server, status: t('networkScan.fallbackReady'), color: "indigo" },
        { label: t('networkScan.apiUptime'), value: systemData?.uptime || "99.9%", icon: Activity, status: t('networkScan.healthy'), color: "emerald" }
    ];

    if (loading) return <div className="min-h-screen bg-slate-950 flex items-center justify-center"><Activity className="w-12 h-12 text-emerald-500 animate-spin" /><span className="ml-4 text-white text-lg">{t('networkScan.loading')}</span></div>;

    return (
        <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-emerald-500/30">
            <Navigation />

            <main className="pt-28 pb-20 container mx-auto px-4">
                {/* Technical Header */}
                <div className="relative mb-16">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
                    <div className="max-w-4xl">
                        <Badge variant="outline" className="mb-4 border-emerald-500/20 bg-emerald-500/5 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                            <Network className="w-3.5 h-3.5 mr-2" />
                            {t('networkScan.architectureScan')}
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-none">
                            {t('networkScan.engineOf')} <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">{t('networkScan.digitalTrust')}</span>.
                        </h1>
                        <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl">
                            {t('networkScan.monitoringDesc')}
                        </p>
                    </div>
                </div>

                {/* Tech Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {techMetrics.map((m, i) => (
                        <Card key={i} className="bg-slate-900/50 border-white/5 backdrop-blur-xl overflow-hidden group hover:border-emerald-500/30 transition-all">
                            <CardContent className="p-8">
                                <div className={`w-12 h-12 rounded-xl bg-${m.color}-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <m.icon className={`w-6 h-6 text-${m.color}-400`} />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">{m.label}</h3>
                                    <div className="text-3xl font-black text-white">{m.value}</div>
                                    <div className={`text-[11px] font-bold text-${m.color}-400/80`}>{m.status}</div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                    {/* Live Activity Stream */}
                    <Card className="xl:col-span-4 bg-slate-900/50 border-white/5 backdrop-blur-xl h-[600px] flex flex-col">
                        <CardHeader className="p-8 border-b border-white/5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-lg font-black text-white px-2">{t('networkScan.liveNodeFeed')}</CardTitle>
                                    <CardDescription className="text-slate-500 text-xs mt-1 uppercase tracking-widest px-2">{t('networkScan.realTimeBlockActivity')}</CardDescription>
                                </div>
                                <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1 rounded-full">
                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Live Syncing</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 flex-1 overflow-y-auto">
                            <div className="space-y-4">
                                {logs.map((log, id) => (
                                    <div key={id} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-4 hover:bg-white/[0.07] transition-colors">
                                        <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-start mb-1">
                                                <span className="text-xs font-black text-white uppercase tracking-tighter">{log.action}</span>
                                                <span className="text-[10px] text-slate-500 font-bold">{log.time}</span>
                                            </div>
                                            <p className="text-[11px] text-slate-400 font-mono truncate">
                                                {log.type === 'sync' ? log.id : `Batch #${log.id} • ${log.district}`}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Network Throughput Chart */}
                    <Card className="xl:col-span-8 bg-slate-900/50 border-white/5 backdrop-blur-xl p-8">
                        <CardHeader className="p-0 mb-8 px-2">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-2xl font-black text-white">Network Throughput</CardTitle>
                                    <CardDescription className="text-slate-500 font-medium">Batch registration volume by District (Tamil Nadu)</CardDescription>
                                </div>
                                <ShieldCheck className="w-8 h-8 text-emerald-500/50" />
                            </div>
                        </CardHeader>
                        <div className="h-[400px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={adminData?.regionalData || []}>
                                    <defs>
                                        <linearGradient id="cyberGreen" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10, fontWeight: 700 }} dy={15} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10 }} />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', background: '#0f172a', color: '#fff' }}
                                        itemStyle={{ color: '#10b981', fontWeight: 'bold' }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="production"
                                        stroke="#10b981"
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#cyberGreen)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-emerald-500/10">
                                    <Database className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Verified Data</span>
                                    <span className="text-xl font-black text-white">{adminData?.traceability?.totalBatches || 0} Batches</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-blue-500/10">
                                    <Cpu className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Gas Efficiency</span>
                                    <span className="text-xl font-black text-white">-99% Savings</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-indigo-500/10">
                                    <ShieldCheck className="w-5 h-5 text-indigo-400" />
                                </div>
                                <div>
                                    <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Crypto Security</span>
                                    <span className="text-xl font-black text-white">Full Audit</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Commitment Banner */}
                <section className="mt-20 p-12 rounded-[48px] bg-gradient-to-br from-emerald-600 to-green-700 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl text-center md:text-left">
                            <h2 className="text-4xl font-black text-white mb-4">100% On-Chain Promise.</h2>
                            <p className="text-emerald-50 text-lg font-medium">
                                Our architecture ensures that every rupee, every batch, and every quality report is immutable.
                                We are reducing supply chain costs by 99% using optimized Layer-2 technology.
                            </p>
                        </div>
                        <div className="bg-emerald-950/30 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                            <div className="flex items-center gap-6 mb-4">
                                <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                                <div>
                                    <div className="text-3xl font-black text-white">₹15 <span className="text-sm font-medium text-emerald-300">/ batch</span></div>
                                    <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Optimized Network Fee</div>
                                </div>
                            </div>
                            <div className="w-full h-1 bg-emerald-500/20 rounded-full overflow-hidden">
                                <div className="w-[10%] h-full bg-emerald-400 animate-[pulse_2s_infinite]" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            <style>{`
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(2, 6, 23, 1);
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.2);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(16, 185, 129, 0.4);
        }
      `}</style>
        </div>
    );
}
