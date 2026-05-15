import React from 'react';
import './Events.css';
import Sidebar from '../components/SideBar';
import SEO from '../components/SEO';

const EventDetailsPage = () => {
  return (
    <>
    <SEO
      title="Events & organization"
      description="Configure Tilion events and organization details. Tilion is a kids social platform with parent and child dashboards and web advertising tools."
    />
    <Sidebar/>
    <div className="page-wrapper">
      <div className="content-area">
        <header className="page-header">
          <h1 className="page-title">Event Details</h1>
          <p className="page-subtitle">Manage your platform settings and preferences</p>
        </header>

        <div className="card-grid">
          {/* Organization Information Card */}
          <section className="card">
            <div className="card-header">
              <span className="card-icon">👤</span>
              <h2 className="card-title">Organization Information</h2>
            </div>
            <div className="card-body">
              <div className="form-group row">
                <div className="input-group half">
                  <label className="input-label" htmlFor="orgName">Organization Name</label>
                  <input className="input-field" type="text" id="orgName" defaultValue="Bonding Together" />
                </div>
                <div className="input-group half">
                  <label className="input-label" htmlFor="contactEmail">Contact Email</label>
                  <input className="input-field" type="email" id="contactEmail" defaultValue="info@bonding-together.com" />
                </div>
              </div>
              <div className="form-group row">
                <div className="input-group half">
                  <label className="input-label" htmlFor="phone">Phone Number</label>
                  <div className="input-with-icon">
                    <span className="input-icon">📞</span>
                    <input className="input-field" type="tel" id="phone" defaultValue="+20 123 456 7890" />
                  </div>
                </div>
                <div className="input-group half">
                  <label className="input-label" htmlFor="website">Website</label>
                  <div className="input-with-icon">
                    <span className="input-icon">🌐</span>
                    <input className="input-field" type="url" id="website" defaultValue="www.bonding-together.com" />
                  </div>
                </div>
              </div>
              <div className="input-group full">
                <label className="input-label" htmlFor="address">Address</label>
                <div className="input-with-icon">
                  <span className="input-icon">📍</span>
                  <input className="input-field" type="text" id="address" />
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button className="btn btn-primary">
                <span className="btn-icon">💾</span> Save Changes
              </button>
            </div>
          </section>

          {/* Notifications Card */}
          <section className="card">
            <div className="card-header">
              <span className="card-icon">🔔</span>
              <h2 className="card-title">Notifications</h2>
            </div>
            <div className="card-body">
              {[
                  { label: 'New Bookings', desc: 'Get notified when someone books an event', defaultChecked: true },
                { label: 'Payment Notifications', desc: 'Receive alerts for successful payments', defaultChecked: true },
                { label: 'New Reviews', desc: 'Get notified when users leave reviews', defaultChecked: true },
                { label: 'User Registration', desc: 'Alerts for new user sign-ups', defaultChecked: false },
                { label: 'Weekly Reports', desc: 'Receive weekly analytics summary', defaultChecked: true },
              ].map((item, index) => (
                  <div className="setting-item" key={index}>
                  <div className="setting-info">
                    <h3 className="setting-label">{item.label}</h3>
                    <p className="setting-desc">{item.desc}</p>
                  </div>
                  <label className="toggle-switch">
                    <input className="toggle-input" type="checkbox" defaultChecked={item.defaultChecked} />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              ))}
            </div>
          </section>

          {/* Security Card */}
          <section className="card">
            <div className="card-header">
              <span className="card-icon">🔒</span>
              <h2 className="card-title">Security</h2>
            </div>
            <div className="card-body">
              <div className="input-group full">
                <label className="input-label" htmlFor="currentPassword">Current Password</label>
                <input className="input-field" type="password" id="currentPassword" placeholder="Enter current password" />
              </div>
              <div className="form-group row">
                <div className="input-group half">
                  <label className="input-label" htmlFor="newPassword">New Password</label>
                  <input className="input-field" type="password" id="newPassword" placeholder="Enter new password" />
                </div>
                <div className="input-group half">
                  <label className="input-label" htmlFor="confirmPassword">Confirm New Password</label>
                  <input className="input-field" type="password" id="confirmPassword" placeholder="Confirm new password" />
                </div>
              </div>
              <div className="setting-item with-margin">
                <div className="setting-info">
                  <h3 className="setting-label">Two-Factor Authentication</h3>
                  <p className="setting-desc">Add an extra layer of security to your account</p>
                </div>
                <label className="toggle-switch">
                  <input className="toggle-input" type="checkbox" />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            <div className="card-actions">
              <button className="btn btn-primary">
                <span className="btn-icon">💾</span> Update Password
              </button>
            </div>
          </section>

          {/* Payment Settings Card */}
          <section className="card">
            <div className="card-header">
              <span className="card-icon">💳</span>
              <h2 className="card-title">Payment Settings</h2>
            </div>
            <div className="card-body">
              <div className="input-group full">
                <label className="input-label" htmlFor="currency">Default Currency</label>
                <input className="input-field" type="text" id="currency" defaultValue="EGP (Egyptian Pound)" readOnly />
              </div>
              <div className="input-group full">
                <label className="input-label" htmlFor="taxRate">Tax Rate (%)</label>
                <input className="input-field" type="text" id="taxRate" defaultValue="14" />
              </div>
              <div className="setting-item toggle-only">
                <div className="setting-info">
                  <h3 className="setting-label">Accept Visa/Mastercard</h3>
                  <p className="setting-desc">Enable credit card payments</p>
                </div>
                <label className="toggle-switch">
                  <input className="toggle-input" type="checkbox" defaultChecked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              <div className="setting-item toggle-only">
                <div className="setting-info">
                  <h3 className="setting-label">Accept Apple Pay</h3>
                  <p className="setting-desc">Enable Apple Pay for iOS users</p>
                </div>
                <label className="toggle-switch">
                  <input className="toggle-input" type="checkbox" />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              <div className="setting-item toggle-only">
                <div className="setting-info">
                  <h3 className="setting-label">Accept Google Pay</h3>
                  <p className="setting-desc">Enable Google Pay for Android users</p>
                </div>
                <label className="toggle-switch">
                  <input className="toggle-input" type="checkbox" />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            <div className="card-actions">
              <button className="btn btn-primary">
                <span className="btn-icon">💾</span> Save Settings
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
              </>
  );
};

export default EventDetailsPage;