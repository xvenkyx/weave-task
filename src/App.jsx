import { useState } from 'react';
import { engineers, subsystems } from './data';
import './index.css';

function App() {
  const [activeId, setActiveId] = useState(engineers[0].id);
  const activeEngineer = engineers.find(e => e.id === activeId);

  return (
    <div className="dashboard">
      <header>
        <div>
          <h1>Engineering Impact</h1>
          <p>PostHog Repository • Last 90 Days</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p>Evaluation Period: Dec 2025 - Mar 2026</p>
          <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>Updated in real-time</span>
        </div>
      </header>

      <div className="main-grid">
        <section className="leaderboard">
          <h2 style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            Top 5 Most Impactful Engineers
          </h2>
          {engineers.map((eng) => (
            <div 
              key={eng.id} 
              className={`engineer-card ${activeId === eng.id ? 'active' : ''}`}
              onClick={() => setActiveId(eng.id)}
            >
              <img src={eng.avatar} alt={eng.name} className="avatar" />
              <div className="info">
                <h3>{eng.name}</h3>
                <span>{eng.role}</span>
              </div>
              <div className="score-badge">{eng.impactScore}</div>
            </div>
          ))}

          <div style={{ marginTop: 'auto', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <strong>Metric Methodology:</strong> Impact is a weighted composite of Delivery (40%), Collaboration (30%), Ownership (20%), and Stability (10%).
          </div>
        </section>

        <section className="details-panel" key={activeEngineer.id}>
          <div className="details-header">
            <div>
              <span className="tagline">{activeEngineer.tagline}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <h2>{activeEngineer.name}</h2>
                <span style={{ 
                  fontSize: '0.7rem', 
                  background: 'var(--accent-primary)', 
                  color: 'white', 
                  padding: '2px 8px', 
                  borderRadius: '10px', 
                  fontWeight: '700',
                  textTransform: 'uppercase'
                }}>{activeEngineer.archetype}</span>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', borderLeft: '4px solid var(--accent-primary)' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'block' }}>Why this matters</span>
            <p style={{ fontSize: '1rem', lineHeight: '1.4' }}>{activeEngineer.whyItMatters}</p>
          </div>

          <div className="stats-row">
            <div className="stat-box">
              <strong>{activeEngineer.stats.mergedPRs}</strong>
              <label>Merged PRs</label>
            </div>
            <div className="stat-box">
              <strong>{activeEngineer.stats.reviews}</strong>
              <label>Code Reviews</label>
            </div>
            <div className="stat-box">
              <strong>{activeEngineer.stats.commits}</strong>
              <label>Commits</label>
            </div>
          </div>

          <div className="metrics-grid">
            <div className="metric-item">
              <span className="metric-label" title="Frequency of merged PRs and commits">Delivery</span>
              <div className="metric-value-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${activeEngineer.metrics.velocity}%` }}></div>
                </div>
                <span className="metric-number">{activeEngineer.metrics.velocity}</span>
              </div>
            </div>
            <div className="metric-item">
              <span className="metric-label" title="PR reviews given and unblocking activity">Collaboration</span>
              <div className="metric-value-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${activeEngineer.metrics.assistance}%` }}></div>
                </div>
                <span className="metric-number">{activeEngineer.metrics.assistance}</span>
              </div>
            </div>
            <div className="metric-item">
              <span className="metric-label" title="Breadth of influence across subsystems">Ownership</span>
              <div className="metric-value-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${activeEngineer.metrics.complexity}%` }}></div>
                </div>
                <span className="metric-number">{activeEngineer.metrics.complexity}</span>
              </div>
            </div>
            <div className="metric-item">
              <span className="metric-label" title="Consistency of contribution over 90 days">Stability</span>
              <div className="metric-value-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${activeEngineer.metrics.stability}%` }}></div>
                </div>
                <span className="metric-number">{activeEngineer.metrics.stability}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              High-Impact Contributions
            </h3>
            <ul className="contribution-list">
              {activeEngineer.highImpactWork.map((work, idx) => (
                <li key={idx}>{work}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <section className="risk-section">
        <h2 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          ⚠️ Subsystem Bus Factor Risk
        </h2>
        <div className="risk-grid">
          {subsystems.map((sys, idx) => (
            <div key={idx} className="risk-card">
              <span className="risk-badge" style={{ backgroundColor: `${sys.color}22`, color: sys.color, border: `1px solid ${sys.color}` }}>
                {sys.risk} Risk
              </span>
              <h4>{sys.name}</h4>
              <div className="risk-detail">
                <span>Bus Factor:</span>
                <span>{sys.busFactor}</span>
              </div>
              <div className="risk-detail">
                <span>Top Contributor:</span>
                <span>{sys.topContributor} ({sys.share})</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
