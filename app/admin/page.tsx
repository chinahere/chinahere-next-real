'use client';

import { useEffect, useMemo, useState } from 'react';

export default function AdminPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/api/admin/leads')
      .then((res) => res.json())
      .then((data) => setLeads(data.leads || []));
  }, []);

  const filtered = useMemo(() => {
    return leads.filter((lead) =>
      JSON.stringify(lead).toLowerCase().includes(search.toLowerCase())
    );
  }, [leads, search]);

  const total = leads.length;
  const newLeads = leads.filter((l) => (l.Status || 'New') === 'New').length;

  return (
    <main style={page}>
      <header style={header}>
        <div>
          <h1 style={title}>ChinaHere Admin Dashboard</h1>
          <p style={subtitle}>Manage leads, follow-ups, and WhatsApp contact links.</p>
        </div>

        <div style={cards}>
          <div style={card}>
            <span style={cardLabel}>Total Leads</span>
            <strong style={cardNumber}>{total}</strong>
          </div>

          <div style={card}>
            <span style={cardLabel}>New Leads</span>
            <strong style={cardNumber}>{newLeads}</strong>
          </div>
        </div>
      </header>

      <section style={panel}>
        <input
          placeholder="Search by name, phone, country, product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={searchInput}
        />

        <div style={{ overflowX: 'auto' }}>
          <table style={table}>
            <thead>
              <tr>
                {['Date', 'Name', 'Phone', 'Country', 'Product', 'Qty', 'Budget', 'Status', 'WhatsApp'].map((h) => (
                  <th key={h} style={th}>{h}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filtered.map((lead, i) => (
                <tr key={i}>
                  <td style={td}>{lead.Date}</td>
                  <td style={tdStrong}>{lead.Name}</td>
                  <td style={td}>{lead.Phone}</td>
                  <td style={td}>{lead.Country}</td>
                  <td style={td}>{lead.Product}</td>
                  <td style={td}>{lead.Quantity}</td>
                  <td style={td}>{lead.Budget}</td>
                  <td style={td}>
                    <span style={statusBadge}>{lead.Status || 'New'}</span>
                  </td>
                  <td style={td}>
                    {lead['WhatsApp Link'] ? (
                      <a href={lead['WhatsApp Link']} target="_blank" style={whatsappBtn}>
                        Open WhatsApp
                      </a>
                    ) : (
                      <span style={{ color: '#888' }}>No link</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

const page = {
  direction: 'ltr' as const,
  minHeight: '100vh',
  background: '#0f172a',
  color: '#111827',
  padding: 32,
  fontFamily: 'Arial, sans-serif',
};

const header = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 24,
  marginBottom: 28,
};

const title = {
  color: '#ffffff',
  fontSize: 32,
  margin: 0,
};

const subtitle = {
  color: '#cbd5e1',
  marginTop: 8,
};

const cards = {
  display: 'flex',
  gap: 16,
};

const card = {
  background: '#ffffff',
  padding: '18px 24px',
  borderRadius: 16,
  minWidth: 150,
  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
};

const cardLabel = {
  display: 'block',
  color: '#64748b',
  fontSize: 14,
};

const cardNumber = {
  display: 'block',
  marginTop: 8,
  fontSize: 30,
  color: '#0f172a',
};

const panel = {
  background: '#ffffff',
  borderRadius: 18,
  padding: 20,
  boxShadow: '0 15px 40px rgba(0,0,0,0.18)',
};

const searchInput = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: 12,
  border: '1px solid #cbd5e1',
  marginBottom: 20,
  fontSize: 15,
};

const table = {
  width: '100%',
  borderCollapse: 'collapse' as const,
  fontSize: 14,
};

const th = {
  textAlign: 'left' as const,
  padding: 14,
  background: '#f1f5f9',
  color: '#334155',
  borderBottom: '1px solid #e2e8f0',
  whiteSpace: 'nowrap' as const,
};

const td = {
  padding: 14,
  borderBottom: '1px solid #e5e7eb',
  color: '#334155',
  whiteSpace: 'nowrap' as const,
};

const tdStrong = {
  ...td,
  fontWeight: 700,
  color: '#0f172a',
};

const statusBadge = {
  background: '#dbeafe',
  color: '#1d4ed8',
  padding: '6px 10px',
  borderRadius: 999,
  fontWeight: 700,
};

const whatsappBtn = {
  display: 'inline-block',
  background: '#22c55e',
  color: '#ffffff',
  padding: '8px 12px',
  borderRadius: 10,
  textDecoration: 'none',
  fontWeight: 700,
};