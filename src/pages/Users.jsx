import React, { Component } from 'react';
import SideBar from '../components/SideBar';

const Users = () => {
    return (
        <div className="dashboard-wrapper">
            <SideBar />
            <main className="main-content">
    
    
    
                <section className="page">
        <h1>Friend Connections</h1>
                    <p className="subtitle">Monitor approved connections between children</p>

                    <div className="kpi-grid">
                        <article className="kpi">
                            <p className="kpi__label">Total Connections</p>
                            <p className="kpi__value">8,942</p>
                        </article>
                        <article className="kpi">
                            <p className="kpi__label">This Week</p>
                            <p className="kpi__value kpi__value--green">156</p>
                        </article>
                        <article className="kpi">
                            <p className="kpi__label">Today</p>
                            <p className="kpi__value kpi__value--blue">24</p>
                        </article>
                        <article className="kpi">
                            <p className="kpi__label">Avg per Child</p>
                            <p className="kpi__value kpi__value--purple">11.2</p>
                        </article>
                    </div>

                    <article className="panel">
                        <div className="panel__head">
                            <h2 className="panel__title">All Approved Connections</h2>
                            <div className="btn-group">
                                <button className="btn">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.5 10 19 14 21 14 12.5 22 3"/></svg>
                                    Filter
                                </button>
                                <button className="btn">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
                                    Export
                                </button>
                            </div>
                        </div>

                        <div className="search-lite">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                            <input type="search" placeholder="Search connections..."/>
                        </div>

                        <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Connection ID</th>
                  <th>Child 1</th>
                  <th>Child 2</th>
                  <th>Parent 1</th>
                  <th>Parent 2</th>
                  <th>Approved Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>#1</td><td>Emma Smith</td><td>Olivia Chen</td><td>Sarah Johnson</td><td>Mike Chen</td><td>Mar 15, 2026</td><td><span class="status"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 12h8M12 8v8"/></svg>Active</span></td></tr>
                <tr><td>#2</td><td>Lucas Brown</td><td>Mason Lee</td><td>Lisa Brown</td><td>Robert Lee</td><td>Mar 14, 2026</td><td><span class="status"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 12h8M12 8v8"/></svg>Active</span></td></tr>
                <tr><td>#3</td><td>Noah Garcia</td><td>Isabella Taylor</td><td>Anna Garcia</td><td>Rachel Taylor</td><td>Mar 13, 2026</td><td><span class="status"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 12h8M12 8v8"/></svg>Active</span></td></tr>
                <tr><td>#4</td><td>Sophia Wilson</td><td>Ethan Anderson</td><td>Tom Wilson</td><td>Mark Anderson</td><td>Mar 12, 2026</td><td><span class="status"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 12h8M12 8v8"/></svg>Active</span></td></tr>
                <tr><td>#5</td><td>Liam Davis</td><td>Emma Smith</td><td>Emily Davis</td><td>Sarah Johnson</td><td>Mar 10, 2026</td><td><span class="status"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 12h8M12 8v8"/></svg>Active</span></td></tr>
                <tr><td>#6</td><td>Olivia Chen</td><td>Mason Lee</td><td>Mike Chen</td><td>Robert Lee</td><td>Mar 08, 2026</td><td><span class="status"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 12h8M12 8v8"/></svg>Active</span></td></tr>
                <tr><td>#7</td><td>Lucas Brown</td><td>Noah Garcia</td><td>Lisa Brown</td><td>Anna Garcia</td><td>Mar 05, 2026</td><td><span class="status"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 12h8M12 8v8"/></svg>Active</span></td></tr>
                <tr><td>#8</td><td>Emma Smith</td><td>Sophia Wilson</td><td>Sarah Johnson</td><td>Tom Wilson</td><td>Mar 02, 2026</td><td><span class="status"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 12h8M12 8v8"/></svg>Active</span></td></tr>
              </tbody>
            </table>
          </div>

                        <div className="table-footer">
                            <p className="muted">Showing 1-8 of 8,942 connections</p>
                            <div className="pager">
                                <button>Previous</button>
                                <button className="active">Next</button>
                            </div>
                        </div>
                    </article>
                </section>
    
            </main>
        </div>
    );
}
 
export default Users;