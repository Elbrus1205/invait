const metrics = [
  ["Telegram accounts", "0"],
  ["Online", "0"],
  ["Active tasks", "0"],
  ["Workers", "0"],
];

export default function DashboardPage() {
  return (
    <main className="dashboard-shell">
      <aside className="sidebar">
        <div className="brand">Telegram Panel</div>
        <nav aria-label="Main navigation">
          {["Dashboard", "Accounts", "Chats", "Contacts", "Invitations", "Tasks", "Proxies", "Workers", "Logs", "Settings"].map((item) => (
            <a className={item === "Dashboard" ? "nav-item active" : "nav-item"} href="#" key={item}>{item}</a>
          ))}
        </nav>
      </aside>
      <section className="content">
        <header className="page-header">
          <div>
            <p className="eyebrow">Operations</p>
            <h1>Dashboard</h1>
          </div>
          <span className="environment">Development</span>
        </header>
        <section className="metrics" aria-label="System metrics">
          {metrics.map(([label, value]) => <article className="metric" key={label}><span>{label}</span><strong>{value}</strong></article>)}
        </section>
        <section className="empty-state">
          <h2>Connect your first Telegram account</h2>
          <p>Account health, task progress, and worker events will appear here once the backend is configured.</p>
          <button type="button">Add account</button>
        </section>
      </section>
    </main>
  );
}
