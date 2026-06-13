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
  const newLeads = leads.filter((l) => l.Status === 'New').length;

  return (
    <main style={{ padding: 24, fontFamily: 'Arial' }}>
      <h1>ChinaHere Admin Dashboard</h1>

      <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
        <div style={cardStyle}>
          <h3>Total Leads</h3>
          <h2>{total}</h2>
        </div>

        <div style={cardStyle}>
          <h3>New Leads</h3>
          <h2>{newLeads}</h2>
        </div>
      </div>

      <input
        placeholder="Search leads..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: 12,
          width: '100%',
          marginBottom: 20,
          border: '1px solid #ccc',
          borderRadius: 8,
        }}
      />

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {[
                'Date',
                'Name',
                'Phone',
                'Country',
                'Product',
                'Quantity',
                'Budget',
                'Status',
                'WhatsApp',
              ].map((h) => (
                <th key={h} style={thStyle}>{h}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filtered.map((lead, i) => (
              <tr key={i}>
                <td style={tdStyle}>{lead.Date}</td>
                <td style={tdStyle}>{lead.Name}</td>
                <td style={tdStyle}>{lead.Phone}</td>
                <td style={tdStyle}>{lead.Country}</td>
                <td style={tdStyle}>{lead.Product}</td>
                <td style={tdStyle}>{lead.Quantity}</td>
                <td style={tdStyle}>{lead.Budget}</td>
                <td style={tdStyle}>{lead.Status || 'New'}</td>
                <td style={tdStyle}>
                  {lead['WhatsApp Link'] ? (
                    <a href={lead['WhatsApp Link']} target="_blank">
                      Open
                    </a>
                  ) : (
                    '-'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

const cardStyle = {
  padding: 20,
  border: '1px solid #ddd',
  borderRadius: 12,
  minWidth: 180,
  background: '#f8f8f8',
};

const thStyle = {
  borderBottom: '1px solid #ddd',
  padding: 10,
  textAlign: 'left' as const,
  background: '#f3f3f3',
};

const tdStyle = {
  borderBottom: '1px solid #eee',
  padding: 10,
};