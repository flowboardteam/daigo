export interface Industry {
  id: string;
  num: string;
  title: string;
  description: string;
  graphicType: "orbit" | "grid" | "nodes" | "radar" | "network" | "helix" | "gear" | "route" | "molecule" | "poly" | "voronoi" | "globe";
  capabilities?: string[];
  metrics?: string;
}

export const INDUSTRIES: Industry[] = [
  {
    id: "energy",
    num: "01",
    title: "Energy & Utilities",
    description: "Increase power grid uptime, prevent costly generator and turbine failures, optimize generation asset yields, and turn raw electrical and utility telemetry into immediate operator actions.",
    graphicType: "grid",
    capabilities: ["Predictive Vibration Triage", "Grid Load Balancing", "Turbine Yield Maximization"],
    metrics: "99.4% unplanned outage prevention",
  },
  {
    id: "mining",
    num: "02",
    title: "Mining",
    description: "Maximize ore recovery rates, automate heavy equipment predictive maintenance, eliminate pit-to-port logistics bottlenecks, and monitor environmental safety compliance across open-pit and underground operations.",
    graphicType: "radar",
    capabilities: ["Pit-to-Port Telemetry", "Heavy Equipment Maintenance AI", "Ore Grade Computer Vision"],
    metrics: "35% reduction in haulage downtime",
  },
  {
    id: "finance",
    num: "03",
    title: "Financial Services",
    description: "Automate complex institutional risk reconciliation, accelerate cross-border compliance diligence, and synthesize multi-source transaction and mobile money signals in real time.",
    graphicType: "nodes",
    capabilities: ["Multi-Asset Risk Modeling", "AML / Sanctions Synthesis", "High-throughput Transaction Graph"],
    metrics: "85% reduction in compliance triage lag",
  },
  {
    id: "agriculture",
    num: "04",
    title: "Agriculture & Agribusiness",
    description: "Optimize crop yields, predict harvest supply chain bottlenecks, automate pest and soil triage from aerial telemetry, and stabilize commodity pricing across agribusiness value chains.",
    graphicType: "orbit",
    capabilities: ["Satellite & Drone Telemetry", "Predictive Yield Modeling", "Agribusiness Supply Routing"],
    metrics: "24% harvest loss reduction",
  },
  {
    id: "supply-chain",
    num: "05",
    title: "Supply Chain",
    description: "Eliminate stockouts and excess inventory by orchestrating demand forecasts, safety stocks, and multi-tier supplier purchase orders in a single control tower.",
    graphicType: "network",
    capabilities: ["Control Tower Automation", "Dynamic Safety Stock Optimization", "Tier-N Supplier Visibility"],
    metrics: "$63.8M working capital liberated",
  },
  {
    id: "healthcare",
    num: "06",
    title: "Healthcare",
    description: "Faster reviews, clearer information at the point of care and tighter control of medical supplies, all designed around patient privacy and clinical oversight.",
    graphicType: "helix",
    capabilities: ["Automated Clinical Evidence Extraction", "Payer-Provider Protocol Matching", "Adverse Event Early Warning"],
    metrics: "60% faster utilization review cycle",
  },
  {
    id: "manufacturing",
    num: "07",
    title: "Manufacturing and Industrials",
    description: "Predict line bottlenecks, automate root-cause triage across sensor data, and optimize assembly margins without adding operational overhead.",
    graphicType: "gear",
    capabilities: ["Assembly Line OEE Optimization", "Computer Vision Defect Detection", "Sensor Anomaly Root-Cause Analysis"],
    metrics: "18% assembly throughput increase",
  },
  {
    id: "transportation",
    num: "08",
    title: "Transportation & Mobility",
    description: "Dynamic fleet routing, predictive maintenance dispatch, and real-time cargo reconciliation across high-density intermodal networks.",
    graphicType: "route",
    capabilities: ["Intermodal Dynamic Routing", "Depot Predictive Turnaround", "Cold-chain Telemetry Monitoring"],
    metrics: "22% fuel and turnaround savings",
  },
  {
    id: "pharma",
    num: "09",
    title: "Pharma & Life Sciences",
    description: "Accelerate batch release compliance, trace regulated raw materials end-to-end, and automate audit-ready pharmacovigilance logging.",
    graphicType: "molecule",
    capabilities: ["GxP Continuous Compliance", "Raw Material Genealogies", "Pharmacovigilance Alert Synthesis"],
    metrics: "3x faster release batch certification",
  },
  {
    id: "asset-mgmt",
    num: "10",
    title: "Asset Management",
    description: "Real-time surveillance of distributed capital assets, automated anomaly scoring, and proactive lifecycle servicing alerts.",
    graphicType: "poly",
    capabilities: ["Distributed Telemetry Ingestion", "Lifecycle Depreciation Forecasting", "Automated Maintenance Work Orders"],
    metrics: "30% extension in equipment operating life",
  },
  {
    id: "retail",
    num: "11",
    title: "Grocery Retail & CPG",
    description: "Shrink perishability losses, harmonize store-level demand forecasting, and dynamically balance distribution center replenishment.",
    graphicType: "voronoi",
    capabilities: ["Perishable Waste Reduction", "Hyperlocal Store Demand Modeling", "Dynamic Warehouse Balancing"],
    metrics: "34% reduction in fresh inventory spoilage",
  },
  {
    id: "logistics",
    num: "12",
    title: "Global Logistics",
    description: "Automate multimodal customs clearance, track port congestion impact, and coordinate freight forwarding handoffs with predictive ETA confidence.",
    graphicType: "globe",
    capabilities: ["Cross-border Customs AI Processing", "Port Demurrage Risk Mitigation", "Real-Time Container ETA Recalculation"],
    metrics: "48h faster customs clearance turnaround",
  },
];

