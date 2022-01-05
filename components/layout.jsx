export default function Layout({ children, background, home, isNav }) {
  return (
    <div className={`layout-container ${isNav ? "nav-layout" : ""}`}>
      <main style={{ backgroundColor: background, borderBottomRightRadius: home ? "35rem" : "" }}>
        {children}
      </main>
    </div>
  );
}
