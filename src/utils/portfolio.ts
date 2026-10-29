export interface Project {
  id: string;
  title: string;
  category: 'cloud' | 'ai' | 'systems';
  categoryLabel: string;
  tag: string;
  shortDesc: string;
  fullDesc: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  highlights: string[];
  githubUrl: string;
  liveDemoAvailable?: boolean;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'programming' | 'cloud' | 'algorithms' | 'math' | 'tools';
  categoryLabel: string;
  level: string;
  description: string;
  iconName: string;
}

export function filterProjects(
  projects: Project[],
  category: string,
  searchQuery: string = ''
): Project[] {
  return projects.filter((project) => {
    const matchesCategory =
      category === 'all' || project.category === category;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      q === '' ||
      project.title.toLowerCase().includes(q) ||
      project.shortDesc.toLowerCase().includes(q) ||
      project.techStack.some((t) => t.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });
}

export function calculateCloudMetrics(loadPercent: number, instanceCount: number) {
  const safeInstances = Math.max(1, instanceCount);
  const normalizedLoad = Math.max(0, Math.min(100, loadPercent));
  
  // CPU utilization distributed across instances
  const cpuPerInstance = Math.min(99.9, (normalizedLoad * 1.2) / safeInstances + 12);
  // Latency increases when CPU gets saturated (> 75%)
  const latencyMs = cpuPerInstance > 75 
    ? Math.round(35 + (cpuPerInstance - 75) * 4.5) 
    : Math.round(18 + cpuPerInstance * 0.22);
  // Throughput in requests per second
  const throughputRps = Math.round((normalizedLoad * safeInstances * 14.5) + 80);
  
  const healthStatus: 'optimal' | 'warning' | 'critical' = 
    cpuPerInstance > 90 ? 'critical' : cpuPerInstance > 75 ? 'warning' : 'optimal';

  return {
    cpuUtilization: Number(cpuPerInstance.toFixed(1)),
    latencyMs,
    throughputRps,
    healthStatus,
  };
}

export function evaluateModelPerformance(threshold: number, datasetSize: number = 1000) {
  const t = Math.max(0.01, Math.min(0.99, threshold));
  // Standard sigmoid / roc trade-off
  const precision = Number((0.65 + 0.33 * Math.pow(t, 0.7)).toFixed(3));
  const recall = Number((0.98 - 0.45 * Math.pow(t, 1.4)).toFixed(3));
  const f1Score = Number(((2 * precision * recall) / (precision + recall)).toFixed(3));
  const falsePositives = Math.round(datasetSize * (1 - precision) * 0.3);
  const truePositives = Math.round(datasetSize * recall * 0.5);

  return {
    precision,
    recall,
    f1Score,
    truePositives,
    falsePositives,
  };
}
