import React, { Component } from 'react';
import './Dashboard.css';
import Sidebar from '../components/SideBar';

class Dashboard extends Component {
  render() {
    return (<>
    
    
        <Sidebar/>
    
    
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1>Dashboard</h1>
          <p>Platform overview and key metrics.</p>
        </header>

        {/* Top Metrics Cards */}
        <section className="metrics-grid fade-in-up delay-1">
          <div className="card metric-card">
            <div className="metric-info">
              <span className="metric-label">Total Children</span>
              <h2 className="metric-value">5,234</h2>
              <span className="metric-trend positive">+12.5% from last month</span>
            </div>
            <div className="metric-icon blue">
               <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
          </div>

          <div className="card metric-card">
            <div className="metric-info">
              <span className="metric-label">Total Parents</span>
              <h2 className="metric-value">4,856</h2>
              <span className="metric-trend positive">+10.2% from last month</span>
            </div>
            <div className="metric-icon green">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            </div>
          </div>

          <div className="card metric-card">
            <div className="metric-info">
              <span className="metric-label">Active Users (Daily)</span>
              <h2 className="metric-value">1,820</h2>
              <span className="metric-trend neutral">Weekly average: 1,555</span>
            </div>
            <div className="metric-icon purple">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
            </div>
          </div>

          <div className="card metric-card">
            <div className="metric-info">
              <span className="metric-label">Approved Connections</span>
              <h2 className="metric-value">8,942</h2>
              <span className="metric-trend positive">+150 this week</span>
            </div>
            <div className="metric-icon orange">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            </div>
          </div>
        </section>

        {/* Middle Section: Charts & Requests */}
        <section className="middle-grid">
          <div className="card activity-overview fade-in-up delay-2">
            <div className="card-header">
              <h3>Activity Overview</h3>
              <p>Daily logins and interactions over the past week</p>
            </div>
            <div className="chart-container">
               <svg className="mock-chart" viewBox="0 0 500 200" preserveAspectRatio="none">
                 <defs>
                   <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="rgba(102, 126, 234, 0.3)" />
                     <stop offset="100%" stopColor="rgba(102, 126, 234, 0)" />
                   </linearGradient>
                 </defs>
                 <path d="M0 120 Q 50 110 100 130 T 200 110 T 300 130 T 400 160 T 500 110 L 500 200 L 0 200 Z" fill="url(#chartGradient)" />
                 <path d="M0 120 Q 50 110 100 130 T 200 110 T 300 130 T 400 160 T 500 110" fill="none" stroke="#667eea" strokeWidth="3" />
                 <path d="M0 160 Q 50 150 100 165 T 200 150 T 300 170 T 400 180 T 500 150" fill="none" stroke="#b088f9" strokeWidth="2" strokeDasharray="5,5" />
               </svg>
               <div className="chart-x-axis">
                  <span>Mar 11</span><span>Mar 12</span><span>Mar 13</span><span>Mar 14</span><span>Mar 15</span><span>Mar 16</span><span>Mar 17</span><span>Mar 18</span>
               </div>
            </div>
            <div className="chart-legend">
              <span className="legend-item"><span className="dot blue"></span> Logins</span>
              <span className="legend-item"><span className="dot purple"></span> Interactions</span>
            </div>
          </div>

          <div className="card requests-monitoring fade-in-up delay-3">
            <div className="card-header">
              <h3>Requests Monitoring</h3>
              <p>Recent parent-to-parent approvals</p>
            </div>
            <div className="pending-alert">
              <span className="icon">⏱️</span>
              <div className="alert-text">
                <strong>Pending</strong>
                <span>awaiting approval</span>
              </div>
              <span className="alert-count">24</span>
            </div>
            
            <ul className="request-list">
              <li>
                <div className="req-info">
                  <strong>Sarah Johnson → Mike Chan</strong>
                  <span>5 min ago</span>
                </div>
                <span className="badge pending">Pending</span>
              </li>
              <li>
                <div className="req-info">
                  <strong>Emily Davis → John Smith</strong>
                  <span>12 min ago</span>
                </div>
                <span className="badge approved">Approved</span>
              </li>
              <li>
                <div className="req-info">
                  <strong>Robert Lee → Anna Garcia</strong>
                  <span>28 min ago</span>
                </div>
                <span className="badge approved">Approved</span>
              </li>
               <li>
                <div className="req-info">
                  <strong>Lisa Brown → Tom Wilson</strong>
                  <span>41 min ago</span>
                </div>
                <span className="badge pending">Pending</span>
              </li>
            </ul>
            <button className="view-all-btn">View all requests →</button>
          </div>
        </section>

        {/* Recent Activity Feed */}
        <section className="card recent-feed fade-in-up delay-4">
           <div className="card-header">
              <h3>Recent Activity Feed</h3>
              <p>System logs and user actions</p>
            </div>
            <ul className="feed-list">
              <li>
                <span className="feed-icon dot-green"></span>
                <div className="feed-content">
                  <p><strong>Parent approved new connection</strong></p>
                  <span>Sarah Johnson</span>
                </div>
                <span className="feed-time">3 min ago</span>
              </li>
              <li>
                <span className="feed-icon dot-blue"></span>
                <div className="feed-content">
                  <p><strong>Child account created</strong></p>
                  <span>Emma Smith (age 10)</span>
                </div>
                <span className="feed-time">8 min ago</span>
              </li>
              <li>
                <span className="feed-icon dot-grey"></span>
                <div className="feed-content">
                  <p><strong>Connection request sent</strong></p>
                  <span>Mike Chan → Anna Garcia</span>
                </div>
                <span className="feed-time">15 min ago</span>
              </li>
               <li>
                <span className="feed-icon dot-red"></span>
                <div className="feed-content">
                  <p><strong>Parent rejected connection request</strong></p>
                  <span>Robert Lee</span>
                </div>
                <span className="feed-time">22 min ago</span>
              </li>
               <li>
                <span className="feed-icon dot-blue"></span>
                <div className="feed-content">
                  <p><strong>Child account created</strong></p>
                  <span>Lucas Brown (age 12)</span>
                </div>
                <span className="feed-time">35 min ago</span>
              </li>
              <li>
                <span className="feed-icon dot-green"></span>
                <div className="feed-content">
                  <p><strong>Parent approved new connection</strong></p>
                  <span>Emily Davis</span>
                </div>
                <span className="feed-time">41 min ago</span>
              </li>
            </ul>
            <button className="view-all-btn center">View complete activity log →</button>
        </section>

        {/* Screen Time Distribution */}
        <section className="card screen-time fade-in-up delay-5">
          <div className="card-header flex-header">
            <div className="header-title-icon">
               <span className="icon">⏱️</span>
               <h3>Screen Time Distribution</h3>
            </div>
            <span className="goal-text">Goal: Healthy, non-addictive usage</span>
          </div>
          
          <div className="screen-time-content">
            <div className="pie-chart-wrapper">
               <div className="css-pie-chart"></div>
               <span className="pie-label l-green">0-30 min: 55%</span>
               <span className="pie-label l-blue">30-60 min: 26%</span>
               <span className="pie-label l-yellow">60-90 min: 13%</span>
               <span className="pie-label l-red">90+ min: 5%</span>
            </div>
            
            <div className="screen-time-stats">
               <div className="stat-row">
                 <div className="stat-label"><span className="box bg-green"></span> 0-30 min</div>
                 <strong>145 users</strong>
               </div>
               <div className="stat-row">
                 <div className="stat-label"><span className="box bg-blue"></span> 30-60 min</div>
                 <strong>69 users</strong>
               </div>
               <div className="stat-row">
                 <div className="stat-label"><span className="box bg-yellow"></span> 60-90 min</div>
                 <strong>34 users</strong>
               </div>
               <div className="stat-row">
                 <div className="stat-label"><span className="box bg-red"></span> 90+ min</div>
                 <strong>12 users</strong>
               </div>
               
               <div className="healthy-summary">
                 <span className="check-icon">✓</span> 63% of users maintain healthy screen time (&lt;30 min)
               </div>
            </div>
          </div>
        </section>
      </div>
      </>
    );
  }
}

export default Dashboard;