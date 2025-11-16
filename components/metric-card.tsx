import type { Metric } from "./data/dashboard";

type MetricCardProps = {
  metric: Metric;
};

const changeColor = (change: number) => (change >= 0 ? "#0f766e" : "#a21caf");
const changePrefix = (change: number) => (change >= 0 ? "+" : "−");

export function MetricCard({ metric }: MetricCardProps) {
  const { label, value, change } = metric;
  const absChange = Math.abs(change).toFixed(1);

  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "24px",
        borderRadius: "20px",
        border: "1px solid #e2e8f0",
        background: "linear-gradient(180deg, #ffffff, #f8fafc)",
        boxShadow: "0 18px 45px rgba(15, 23, 42, 0.06)"
      }}
    >
      <span style={{ fontSize: "0.9rem", fontWeight: 500, color: "#64748b" }}>{label}</span>
      <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
        <span style={{ fontSize: "2.3rem", fontWeight: 600 }}>{value}</span>
        <span
          style={{
            fontSize: "0.9rem",
            fontWeight: 600,
            color: changeColor(change)
          }}
        >
          {changePrefix(change)}
          {absChange}%
        </span>
      </div>
      <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>vs last 30 days</span>
    </article>
  );
}
