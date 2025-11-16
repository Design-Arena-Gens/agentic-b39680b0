import type { Task } from "./data/dashboard";

const palette: Record<Task["priority"], string> = {
  low: "rgba(45, 212, 191, 0.18)",
  medium: "rgba(251, 191, 36, 0.2)",
  high: "rgba(248, 113, 113, 0.2)"
};

const badgeText: Record<Task["priority"], string> = {
  low: "#0f172a",
  medium: "#92400e",
  high: "#991b1b"
};

const statusLabel: Record<Task["status"], string> = {
  "in-progress": "In Progress",
  open: "Open",
  blocked: "Blocked"
};

const statusColor: Record<Task["status"], string> = {
  open: "rgba(79, 70, 229, 0.12)",
  "in-progress": "rgba(37, 99, 235, 0.16)",
  blocked: "rgba(239, 68, 68, 0.16)"
};

const statusText: Record<Task["status"], string> = {
  open: "#3730a3",
  "in-progress": "#1d4ed8",
  blocked: "#b91c1c"
};

type TaskListProps = {
  tasks: Task[];
};

export function TaskList({ tasks }: TaskListProps) {
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
          <h2 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600 }}>Team focus</h2>
          <p style={{ margin: 0, fontSize: "0.85rem", color: "#94a3b8" }}>
            High-impact tasks keeping deals in motion
          </p>
        </div>
        <button
          style={{
            border: "none",
            cursor: "pointer",
            padding: "10px 18px",
            borderRadius: "12px",
            background: "#0f172a",
            color: "#f8fafc",
            fontSize: "0.85rem",
            fontWeight: 600
          }}
        >
          Add task
        </button>
      </header>
      <div style={{ display: "grid", gap: "14px" }}>
        {tasks.map((task) => (
          <article
            key={task.id}
            style={{
              display: "grid",
              gap: "10px",
              padding: "16px",
              borderRadius: "16px",
              border: "1px solid rgba(203, 213, 225, 0.6)",
              background: "rgba(248, 250, 252, 0.8)"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: 600, color: "#0f172a" }}>{task.title}</span>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  padding: "6px 12px",
                  borderRadius: "999px",
                  background: palette[task.priority],
                  color: badgeText[task.priority]
                }}
              >
                {task.priority.toUpperCase()}
              </span>
            </div>
            <p style={{ margin: 0, fontSize: "0.85rem", color: "#475569" }}>
              Owned by {task.owner} · Due {task.due}
            </p>
            <span
              style={{
                justifySelf: "flex-start",
                fontSize: "0.75rem",
                fontWeight: 600,
                padding: "6px 12px",
                borderRadius: "999px",
                background: statusColor[task.status],
                color: statusText[task.status]
              }}
            >
              {statusLabel[task.status]}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
