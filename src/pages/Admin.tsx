

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { mockChain } from "@/lib/mockChain";

const Admin = () => {
  const [searchId, setSearchId] = useState("");
  const [reportLoading, setReportLoading] = useState(false);
  const [reportUrl, setReportUrl] = useState("");
  const [historyBatch, setHistoryBatch] = useState(null);
  const [certificateBatch, setCertificateBatch] = useState(null);
  const batches = mockChain.listBatches();
  const onChainCommitment = 100;
  const costReduction = 99;
  const exportReadiness = 62;

  const filteredBatches = searchId
    ? batches.filter((b) =>
        (b.batchId || "").toString().toLowerCase().includes(searchId.trim().toLowerCase())
      )
    : batches;

  const handleGenerateReport = () => {
    setReportLoading(true);
    setTimeout(() => {
      setReportUrl("/dummy-compliance-report.pdf");
      setReportLoading(false);
    }, 1200);
  };

  const handleViewHistory = (batch) => {
    setHistoryBatch(batch);
  };

  const handleLaunchCertificate = (batch) => {
    setCertificateBatch(batch);
  };

  // Simulate live feed: last 5 batches
  const liveFeedBatches = batches.slice(-5).reverse();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-20 space-y-8">
        <div className="mb-8">
          <div className="uppercase text-xs tracking-widest text-slate-500 font-semibold mb-2 flex items-center gap-2">
            <span>National Regulatory Oversight</span>
          </div>
          <h1 className="text-4xl font-extrabold mb-2">Admin & Govt Dashboard</h1>
          <p className="text-lg text-slate-600 max-w-2xl">End-to-end traceability, food safety monitoring, and policy impact analytics for the agriculture sector.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 flex flex-col justify-between">
            <div className="text-xs font-semibold text-slate-500 mb-1">ON-CHAIN COMMITMENT</div>
            <div className="text-4xl font-extrabold">{onChainCommitment}%</div>
            <div className="text-slate-500 text-sm mt-2">Fully automated blockchain contracts</div>
          </Card>
          <Card className="p-6 flex flex-col justify-between">
            <div className="text-xs font-semibold text-slate-500 mb-1">COST REDUCTION</div>
            <div className="text-4xl font-extrabold">{costReduction}%</div>
            <div className="text-slate-500 text-sm mt-2">Fee reduction from ₹500 to ₹15</div>
          </Card>
          <Card className="p-6 flex flex-col justify-between">
            <div className="text-xs font-semibold text-slate-500 mb-1">EXPORT READINESS</div>
            <div className="text-4xl font-extrabold">{exportReadiness}%</div>
            <div className="text-slate-500 text-sm mt-2">Batches meeting global quality standards</div>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <Input
            placeholder="Search Batch ID"
            className="max-w-xs"
            value={searchId}
            onChange={e => setSearchId(e.target.value)}
          />
          <Button onClick={handleGenerateReport} disabled={reportLoading} className="ml-0 md:ml-4">
            {reportLoading ? "Generating..." : "Generate Compliance Report"}
          </Button>
          {reportUrl && (
            <a
              href={reportUrl}
              download
              className="ml-2 text-blue-600 underline text-sm"
              onClick={e => {
                // Fallback: if file not found, show alert
                fetch(reportUrl, { method: 'HEAD' })
                  .then(res => { if (!res.ok) { alert('Report file not found.'); e.preventDefault(); } })
                  .catch(() => { alert('Report file not found.'); e.preventDefault(); });
              }}
            >
              Download Report
            </a>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="p-6">
            <div className="font-bold text-lg mb-2">Regional Production & Quality</div>
            <div className="text-slate-500 text-sm mb-4">District-wise performance and verification data</div>
            <div className="h-48 bg-slate-100 rounded flex items-center justify-center text-slate-400">[Chart Coming Soon]</div>
          </Card>
          <Card className="p-6">
            <div className="font-bold text-lg mb-2">Life-Cycle Status</div>
            <div className="text-slate-500 text-sm mb-4">Current state of all tracked batches</div>
            <div className="h-48 bg-slate-100 rounded flex items-center justify-center text-slate-400">[Donut Chart Coming Soon]</div>
          </Card>
        </div>

        <div className="mb-8">
          <Card className="p-6">
            <div className="font-bold text-lg mb-4">All Transactions</div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="px-3 py-2 text-left">Batch ID</th>
                    <th className="px-3 py-2 text-left">Crop</th>
                    <th className="px-3 py-2 text-left">Quantity (kg)</th>
                    <th className="px-3 py-2 text-left">Farmer</th>
                    <th className="px-3 py-2 text-left">Owner</th>
                    <th className="px-3 py-2 text-left">Status</th>
                    <th className="px-3 py-2 text-left">History</th>
                    <th className="px-3 py-2 text-left">Certificate</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBatches.length === 0 ? (
                    <tr><td colSpan={8} className="text-center py-6 text-slate-400">No batches found.</td></tr>
                  ) : filteredBatches.map((b) => (
                    <tr key={b.batchId} className="border-b">
                      <td className="px-3 py-2 font-mono">{b.batchId}</td>
                      <td className="px-3 py-2">{b.cropType}</td>
                      <td className="px-3 py-2">{b.quantityKg}</td>
                      <td className="px-3 py-2 font-mono text-xs">{b.farmer.slice(0, 8)}...</td>
                      <td className="px-3 py-2 font-mono text-xs">{b.owner.slice(0, 8)}...</td>
                      <td className="px-3 py-2">{b.status}</td>
                      <td className="px-3 py-2">
                        <Button size="sm" variant="outline" className="text-xs" onClick={() => handleViewHistory(b)}>View</Button>
                      </td>
                      <td className="px-3 py-2">
                        <Button size="sm" variant="outline" className="text-xs" onClick={() => handleLaunchCertificate(b)}>Launch</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Batch History Modal */}
        {historyBatch && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">Batch History: {historyBatch.batchId}</h2>
              <div className="mb-4 text-sm text-slate-700">
                <div>Crop: {historyBatch.cropType}</div>
                <div>Quantity: {historyBatch.quantityKg} kg</div>
                <div>Farmer: {historyBatch.farmer}</div>
                <div>Owner: {historyBatch.owner}</div>
                <div>Status: {historyBatch.status}</div>
                <div>Created: {historyBatch.createdAt}</div>
              </div>
              <Button onClick={() => setHistoryBatch(null)} className="mt-2">Close</Button>
            </div>
          </div>
        )}

        {/* Certificate Modal */}
        {certificateBatch && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">Batch Certificate: {certificateBatch.batchId}</h2>
              <div className="mb-4 text-sm text-slate-700">
                <div>Crop: {certificateBatch.cropType}</div>
                <div>Quantity: {certificateBatch.quantityKg} kg</div>
                <div>Farmer: {certificateBatch.farmer}</div>
                <div>Owner: {certificateBatch.owner}</div>
                <div>Status: {certificateBatch.status}</div>
                <div>Created: {certificateBatch.createdAt}</div>
              </div>
              <Button onClick={() => setCertificateBatch(null)} className="mt-2">Close</Button>
            </div>
          </div>
        )}

        <div className="mb-8">
          <Card className="p-6">
            <div className="font-bold text-lg mb-4">Live Feed</div>
            <div className="space-y-2">
              {liveFeedBatches.length === 0 ? (
                <div className="text-slate-400">No recent activity.</div>
              ) : liveFeedBatches.map((b) => (
                <div key={b.batchId} className="bg-slate-50 rounded p-2 flex items-center gap-4">
                  <span className="font-mono text-xs">{b.batchId}</span>
                  <span className="text-slate-700">{b.cropType}</span>
                  <span className="text-slate-500 text-xs">{b.status}</span>
                  <span className="text-slate-400 text-xs">{b.createdAt}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Admin;
