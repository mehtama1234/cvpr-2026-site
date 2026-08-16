export function buildWaves(manifest, batchSize = 5) {
  const waves = [];
  for (let start = 0; start < manifest.jobs.length; start += batchSize) {
    const jobs = manifest.jobs.slice(start, start + batchSize);
    waves.push({
      wave: waves.length,
      start,
      limit: batchSize,
      theme: jobs[0]?.theme,
      jobs: jobs.length,
      repos: new Set(jobs.map((job) => job.repo)).size,
      runCommand: `python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start ${start} --limit ${batchSize}`,
      dryRunCommand: `python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start ${start} --limit ${batchSize} --dry-run`
    });
  }
  return waves;
}

export function waveReady(wave) {
  return wave.jobs === 5 &&
    wave.repos === 5 &&
    wave.runCommand.includes(`--start ${wave.start} --limit ${wave.limit}`) &&
    wave.dryRunCommand.endsWith("--dry-run");
}

export function summarizeWaves(waves) {
  return {
    waves: waves.length,
    jobs: waves.reduce((sum, wave) => sum + wave.jobs, 0),
    repos: waves.reduce((sum, wave) => sum + wave.repos, 0),
    readyWaves: waves.filter(waveReady).length,
    themes: new Set(waves.map((wave) => wave.theme)).size,
    status: waves.length === 8 && waves.every(waveReady) ? "ready" : "block"
  };
}
