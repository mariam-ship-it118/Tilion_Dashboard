// SettingsPage.jsx
import React from 'react';
import './Settings.css';
import Sidebar from '../components/SideBar';

// Simple Icons using SVG paths or unicode for easy use
const ShieldIcon = () => (
  <svg className="icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 7V12.09C3 17.52 6.84 22.48 12 24C17.16 22.48 21 17.52 21 12.09V7L12 2Z" fill="#EBF4FF" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BellIcon = () => (
  <svg className="icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6981 21.5547 10.4458 21.3031 10.27 21" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const UserGroupIcon = () => (
  <svg className="icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25393 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75607 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SettingsPage = () => {
  return (
    <>
    <Sidebar/>
   
    <div className="settings-wrapper">
      <div className="settings-container">
        <header className="page-header">
          <h1>Settings</h1>
          <p>Platform configuration and administrative settings</p>
        </header>

        <div className="dashboard-grid">
          {/* Left Column */}
          <div className="dashboard-left">
            {/* Safety & Security Card */}
            <div className="settings-card safety-card">
              <div className="card-header">
                <ShieldIcon />
                <div className="header-text">
                  <h3>Safety & Security</h3>
                  <p>Configure platform safety features</p>
                </div>
              </div>
              <div className="card-content">
                {[
                  { label: 'Automatic Content Filtering', desc: 'Filter inappropriate content automatically', checked: true },
                  { label: 'Require Parent Approval for All Connections', desc: 'Both parents must approve connection requests', checked: true },
                  { label: 'Enable Safety Monitoring', desc: 'Monitor for unusual activity patterns', checked: true },
                  { label: 'Age Verification Required', desc: 'Require age verification for parent accounts', checked: true },
                ].map((item, index) => (
                  <div className="setting-item" key={index}>
                    <div className="setting-label">
                      <h4>{item.label}</h4>
                      <p>{item.desc}</p>
                    </div>
                    <label className="switch">
                      <input type="checkbox" defaultChecked={item.checked} />
                      <span className="slider round"></span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Alert & Notifications Card */}
            <div className="settings-card alerts-card">
              <div className="card-header">
                <BellIcon />
                <div className="header-text">
                  <h3>Alert & Notifications</h3>
                  <p>Manage admin notification preferences</p>
                </div>
              </div>
              <div className="card-content">
                {[
                  { label: 'Safety Alert Notifications', desc: 'Receive alerts for flagged activities', checked: true },
                  { label: 'Daily Activity Summary', desc: 'Receive daily platform activity reports', checked: true },
                  { label: 'User Growth Updates', desc: 'Weekly updates on new user registrations', checked: false },
                ].map((item, index) => (
                  <div className="setting-item" key={index}>
                    <div className="setting-label">
                      <h4>{item.label}</h4>
                      <p>{item.desc}</p>
                    </div>
                    <label className="switch">
                      <input type="checkbox" defaultChecked={item.checked} />
                      <span className="slider round"></span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* User Management Card */}
            <div className="settings-card user-mgmt-card">
              <div className="card-header">
                <UserGroupIcon />
                <div className="header-text">
                  <h3>User Management</h3>
                  <p>Configure user account settings</p>
                </div>
              </div>
              <div className="card-content">
                {[
                  { label: 'Maximum Connections per Child', value: '25', recommended: '15-30 connections' },
                  { label: 'Minimum Child Age', value: '9', recommended: '9 years old' },
                  { label: 'Maximum Child Age', value: '13', recommended: '13 years old' },
                ].map((item, index) => (
                  <div className="setting-input-item" key={index}>
                    <label>
                      <h4>{item.label}</h4>
                      <input type="text" defaultValue={item.value} readOnly className="styled-input" />
                    </label>
                    <p>{item.label === 'Maximum Connections per Child' ? `Recommended: ${item.recommended}` : `Current ${item.label.includes('Minimum') ? 'minimum' : 'maximum'}: ${item.recommended}`}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="dashboard-right">
            {/* Platform Information Card */}
            <div className="status-card platform-info-card">
              <h3>Platform Information</h3>
              <div className="info-grid">
                {[
                  { label: 'Version', value: '2.4.1' },
                  { label: 'Environment', value: 'Production' },
                  { label: 'Uptime', value: '99.98%', status: 'green' },
                  { label: 'Last Updated', value: 'Mar 10, 2026' },
                ].map((item, index) => (
                  <div className="info-item" key={index}>
                    <span className="info-label">{item.label}</span>
                    <span className={`info-value ${item.status === 'green' ? 'status-green' : ''}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Admin Account Card */}
            <div className="status-card admin-account-card">
              <h3>Admin Account</h3>
              <div className="info-grid">
                {[
                  { label: 'Name', value: 'Admin User' },
                  { label: 'Email', value: 'admin@kidsafe.com' },
                  { label: 'Role', value: 'Super Administrator', style: { color: '#2563EB', textDecoration: 'underline', cursor: 'pointer' } },
                ].map((item, index) => (
                  <div className="info-item" key={index}>
                    <span className="info-label">{item.label}</span>
                    <span className="info-value" style={item.style}>{item.value}</span>
                  </div>
                ))}
              </div>
              <button className="change-password-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Change Password
              </button>
            </div>

            {/* Quick Actions Card */}
            <div className="action-card quick-actions-card">
              <h3>Quick Actions</h3>
              <div className="action-buttons">
                <button className="action-btn email-parents">
                  ✉️ Email All Parents
                </button>
                <button className="action-btn platform-announcement">
                  🌐 Platform Announcement
                </button>
                <button className="action-btn emergency-mode">
                  ⚠️ Emergency Mode
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     </>
  );
};

export default SettingsPage;