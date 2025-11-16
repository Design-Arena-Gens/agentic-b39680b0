"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import {
  activities as activityFeed,
  metricSnapshots,
  pipeline,
  tasks as taskItems
} from "../components/data/dashboard";
import { ActivityFeed } from "../components/activity-feed";
import { MetricCard } from "../components/metric-card";
import { PipelineStageCard } from "../components/pipeline-stage-card";
import { TaskList } from "../components/task-list";

type TimeframeKey = keyof typeof metricSnapshots;

const timeframeOptions: { label: string; value: TimeframeKey }[] = [
  { label: "7 days", value: "7" },
  { label: "30 days", value: "30" },
  { label: "Quarter", value: "90" }
];

export default function DashboardPage() {
  const [timeframe, setTimeframe] = useState<TimeframeKey>("30");
  const metrics = metricSnapshots[timeframe];
  const totalDeals = pipeline.reduce((acc, stage) => acc + stage.deals, 0);
  const averageConversion = Math.round(
    pipeline.reduce((acc, stage) => acc + stage.conversion, 0) / pipeline.length
  );

  const headerStyle: CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "24px",
    justifyContent: "space-between",
    alignItems: "center"
  };

  const chipButton: CSSProperties = {
    border: "1px solid rgba(148, 163, 184, 0.45)",
    background: "#ffffff",
    borderRadius: "999px",
    padding: "10px 16px",
    fontSize: "0.85rem",
    fontWeight: 600,
    cursor: "pointer",
    color: "#111827",
    transition: "all 0.2s ease"
  };

  const activeChip: CSSProperties = {
    borderColor: "#1d4ed8",
    background: "linear-gradient(90deg, #1d4ed8, #6366f1)",
    color: "#f8fafc",
    boxShadow: "0 8px 18px rgba(29, 78, 216, 0.25)"
  };

  const gridStyle: CSSProperties = {
    display: "grid",
    gap: "24px",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))"
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "48px",
        display: "grid",
        gap: "36px",
        background:
          "linear-gradient(140deg, rgba(255,255,255,0.95), rgba(226,232,240,0.65))"
      }}
    >
      <header style={headerStyle}>
        <div style={{ display: "grid", gap: "12px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "0.85rem",
              color: "#64748b",
              fontWeight: 500
            }}
          >
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#10b981",
                boxShadow: "0 0 0 6px rgba(16, 185, 129, 0.18)"
              }}
            />
            Live pipeline snapshot
          </div>
          <h1 style={{ margin: 0, fontSize: "2.25rem", fontWeight: 600, color: "#0f172a" }}>
            CRM Control Center
          </h1>
          <p style={{ margin: 0, fontSize: "0.95rem", color: "#64748b", maxWidth: "520px" }}>
            Unified view of revenue momentum, deal health, and team execution. Make confident moves
            without digging through multiple tools.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            background: "rgba(15, 23, 42, 0.85)",
            padding: "18px 20px",
            borderRadius: "18px",
            color: "#e2e8f0",
            boxShadow: "0 18px 36px rgba(15, 23, 42, 0.22)"
          }}
        >
          <div style={{ display: "grid", gap: "4px" }}>
            <span style={{ fontSize: "0.75rem", color: "rgba(226, 232, 240, 0.72)" }}>
              Pipeline conversion
            </span>
            <strong style={{ fontSize: "1.4rem", lineHeight: 1 }}>{averageConversion}%</strong>
          </div>
          <span
            style={{
              width: "1px",
              alignSelf: "stretch",
              background: "rgba(148, 163, 184, 0.35)"
            }}
          />
          <div style={{ display: "grid", gap: "4px" }}>
            <span style={{ fontSize: "0.75rem", color: "rgba(226, 232, 240, 0.72)" }}>
              Active deals
            </span>
            <strong style={{ fontSize: "1.4rem", lineHeight: 1 }}>{totalDeals}</strong>
          </div>
        </div>
      </header>

      <section style={{ display: "grid", gap: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600, color: "#0f172a" }}>
            Revenue signals
          </h2>
          <div style={{ display: "flex", gap: "10px" }}>
            {timeframeOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setTimeframe(option.value)}
                style={Object.assign(
                  {},
                  chipButton,
                  option.value === timeframe ? activeChip : undefined
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div style={gridStyle}>
          {metrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gap: "20px"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h2 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600, color: "#0f172a" }}>
              Pipeline posture
            </h2>
            <p style={{ margin: 0, fontSize: "0.85rem", color: "#94a3b8" }}>
              Track progression from prospecting to closed won
            </p>
          </div>
          <button
            type="button"
            style={{
              border: "none",
              cursor: "pointer",
              padding: "10px 16px",
              borderRadius: "12px",
              background: "rgba(15, 23, 42, 0.08)",
              color: "#0f172a",
              fontSize: "0.85rem",
              fontWeight: 600
            }}
          >
            Export snapshot
          </button>
        </div>
        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))"
          }}
        >
          {pipeline.map((stage) => (
            <PipelineStageCard key={stage.id} stage={stage} />
          ))}
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.6fr)",
          gap: "24px"
        }}
      >
        <ActivityFeed items={activityFeed} />
        <TaskList tasks={taskItems} />
      </section>
    </main>
  );
}
