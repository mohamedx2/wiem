import test from 'node:test';
import assert from 'node:assert/strict';
import { filterProjects, calculateCloudMetrics, evaluateModelPerformance, Project } from './portfolio.ts';

const mockProjects: Project[] = [
  {
    id: 'p1',
    title: 'Cloud Infrastructure Dashboard',
    category: 'cloud',
    categoryLabel: 'Cloud Infrastructure',
    tag: 'Cloud Infrastructure',
    shortDesc: 'Monitoring and scaling cloud-based microservices.',
    fullDesc: 'Comprehensive cloud monitoring suite built for distributed services.',
    techStack: ['Docker', 'Kubernetes', 'Python', 'FastAPI'],
    metrics: [{ label: 'Uptime', value: '99.98%' }],
    highlights: ['Multi-region support'],
    githubUrl: 'https://github.com/wiemsaidi',
  },
  {
    id: 'p2',
    title: 'AI Model Evaluator',
    category: 'ai',
    categoryLabel: 'Machine Learning & AI',
    tag: 'Machine Learning & AI',
    shortDesc: 'A tool for benchmarking machine learning datasets.',
    fullDesc: 'Evaluation dashboard assessing precision, recall, and ROC curves.',
    techStack: ['PyTorch', 'Python', 'Scikit-Learn', 'Streamlit'],
    metrics: [{ label: 'Speedup', value: '4.2x' }],
    highlights: ['Automated cross-validation'],
    githubUrl: 'https://github.com/wiemsaidi',
  },
];

test('filterProjects filters by category properly', () => {
  const cloudOnly = filterProjects(mockProjects, 'cloud');
  assert.equal(cloudOnly.length, 1);
  assert.equal(cloudOnly[0].id, 'p1');

  const aiOnly = filterProjects(mockProjects, 'ai');
  assert.equal(aiOnly.length, 1);
  assert.equal(aiOnly[0].id, 'p2');

  const all = filterProjects(mockProjects, 'all');
  assert.equal(all.length, 2);
});

test('filterProjects filters by search query', () => {
  const searchPyTorch = filterProjects(mockProjects, 'all', 'PyTorch');
  assert.equal(searchPyTorch.length, 1);
  assert.equal(searchPyTorch[0].id, 'p2');

  const searchBenchmarking = filterProjects(mockProjects, 'all', 'benchmarking');
  assert.equal(searchBenchmarking.length, 1);
  assert.equal(searchBenchmarking[0].id, 'p2');

  const searchNonExistent = filterProjects(mockProjects, 'all', 'RustLang');
  assert.equal(searchNonExistent.length, 0);
});

test('calculateCloudMetrics scales logically with instances and load', () => {
  const metrics1 = calculateCloudMetrics(50, 1);
  const metrics2 = calculateCloudMetrics(50, 4);

  // More instances handle the same load with lower per-instance CPU
  assert.ok(metrics2.cpuUtilization < metrics1.cpuUtilization, 'CPU per instance should decrease with more instances');
  assert.ok(metrics1.latencyMs >= 10, 'Latency should be a realistic positive number');
  assert.ok(metrics2.throughputRps > 0, 'Throughput should be positive');
});

test('evaluateModelPerformance trade-off behaves consistently', () => {
  const lowThreshold = evaluateModelPerformance(0.2);
  const highThreshold = evaluateModelPerformance(0.8);

  // Increasing classification threshold typically raises precision and lowers recall
  assert.ok(highThreshold.precision >= lowThreshold.precision, 'Precision should rise with threshold');
  assert.ok(highThreshold.recall <= lowThreshold.recall, 'Recall should fall with higher threshold');
  assert.ok(lowThreshold.f1Score > 0 && lowThreshold.f1Score <= 1, 'F1 score should be in valid [0, 1] range');
});
