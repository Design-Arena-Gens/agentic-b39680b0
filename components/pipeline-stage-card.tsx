import type { PipelineStage } from "./data/dashboard";

type PipelineStageCardProps = {
  stage: PipelineStage;
};

export function PipelineStageCard({ stage }: PipelineStageCardProps) {
  const progress = Math.min(100, Math.round((stage.value / stage.target) * 100));

  return (
    <article
      style={{
        display: "grid",
        gap: "16px",
        padding: "20px",
        borderRadius: "18px",
        border: "1px solid rgba(148, 163, 184, 0.35)",
        background: "#ffffff"
      }}
    >
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: 600 }}>{stage.name}</h3>
          <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>{stage.deals} active deals</span>
        </div>
        <span
          style={{
            fontSize: "0.85rem",
            fontWeight: 600,
            padding: "6px 12px",
            borderRadius: "999px",
            background: "rgba(79, 70, 229, 0.1)",
            color: "#4c1d95"
          }}
        >
          {stage.conversion}% conversion
        </span>
      </header>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <strong style={{ fontSize: "1.2rem" }}>{stage.value}</strong>
        <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>of {stage.target} target</span>
      </div>
      <div
        style={{
          position: "relative",
          height: "6px",
          borderRadius: "999px",
          background: "#e2e8f0",
          overflow: "hidden"
        }}
      >
        <span
          style={{
            position: "absolute",
            inset: 0,
            width: `${progress}%`,
            background: "linear-gradient(90deg, #6366f1, #3b82f6)"
          }}
        />
      </div>
      <footer
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.8rem",
          color: "#94a3b8"
        }}
      >
        <span>Forecast</span>
        <span>{progress}% of goal</span>
      </footer>
    </article>
  );
}
