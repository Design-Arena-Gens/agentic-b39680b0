import type { Activity } from "./data/dashboard";

const typeLabel: Record<Activity["type"], string> = {
  call: "Call",
  email: "Email",
  meeting: "Meeting",
  note: "Note"
};

const typeColor: Record<Activity["type"], string> = {
  call: "rgba(14, 165, 233, 0.16)",
  email: "rgba(16, 185, 129, 0.16)",
  meeting: "rgba(249, 115, 22, 0.16)",
  note: "rgba(12, 74, 110, 0.16)"
};

const typeText: Record<Activity["type"], string> = {
  call: "#0c4a6e",
  email: "#065f46",
  meeting: "#9a3412",
  note: "#0f172a"
};

type ActivityFeedProps = {
  items: Activity[];
};

export function ActivityFeed({ items }: ActivityFeedProps) {
  return (
    <section
      style={{
        display: "grid",
        gap: "20px",
        padding: "24px",
        borderRadius: "20px",
        background: "#ffffff",
        border: "1px solid rgba(148, 163, 184, 0.35)"
      }}
    >
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h2 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600 }}>Latest activity</h2>
          <p style={{ margin: 0, fontSize: "0.85rem", color: "#94a3b8" }}>
            Real-time pulse from your customer team
          </p>
        </div>
        <button
          style={{
            border: "none",
            cursor: "pointer",
            padding: "10px 18px",
            borderRadius: "999px",
            background: "#111827",
            color: "#f8fafc",
            fontSize: "0.85rem",
            fontWeight: 600
          }}
        >
          View timeline
        </button>
      </header>
      <div style={{ display: "grid", gap: "16px" }}>
        {items.map((activity) => (
          <article
            key={activity.id}
            style={{
              display: "grid",
              gap: "6px",
              padding: "16px",
              borderRadius: "16px",
              border: "1px solid rgba(203, 213, 225, 0.6)",
              background: "rgba(248, 250, 252, 0.8)"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: 600 }}>{activity.owner}</span>
              <span style={{ fontSize: "0.8rem", color: "#94a3b8" }}>{activity.timestamp}</span>
            </div>
            <p style={{ margin: 0, color: "#475569", fontSize: "0.9rem" }}>{activity.description}</p>
            <span
              style={{
                alignSelf: "flex-start",
                fontSize: "0.75rem",
                fontWeight: 600,
                padding: "6px 12px",
                borderRadius: "999px",
                background: typeColor[activity.type],
                color: typeText[activity.type]
              }}
            >
              {typeLabel[activity.type]}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
