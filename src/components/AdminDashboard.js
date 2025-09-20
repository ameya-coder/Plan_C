import React, { useState } from "react";
import "./App2.css";

export default function AdminDashboard({setPage}) {
  const [activeTab, setActiveTab] = useState("reported"); // "reported" | "plan"
  const [selectedReportName, setSelectedReportName] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [messageText, setMessageText] = useState("Add message");

  const handleSelectReport = (name) => {
    setSelectedReportName((prev) => (prev === name ? null : name));
    setShowConfirmation(false);
  };

  const handleShare = () => {
    setShowConfirmation(true);
  };

  const handleDownload = (name) => {
    alert(`Downloading ${name}`);
  };

  const handleDelete = (name) => {
    alert(`Deleting ${name}`);
    if (selectedReportName === name) setSelectedReportName(null);
  };

  return (
    <div className="admin-dashboard">
      <div className="navbar">Admin Dashboard</div>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === "reported" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("reported");
            setShowConfirmation(false);
          }}
          aria-selected={activeTab === "reported"}
        >
          Reported Users
        </button>
        <button
          className={`tab ${activeTab === "plan" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("plan");
            setShowConfirmation(false);
          }}
          aria-selected={activeTab === "plan"}
        >
          Plan Sharing
        </button>
      </div>

      {/* Reported Users Section */}
      {activeTab === "reported" && (
        <div className="card">
          <h3>Total reported users: 2 | Pending Review: 2</h3>
          <input
            type="text"
            placeholder="Search reported users by user id or reason"
            className="search-box"
          />
          <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Reported Count</th>
                <th>Reason</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>user_id_002</td>
                <td>10</td>
                <td>Spam</td>
                <td>29/08/25</td>
                <td>
                  <div class="action-container">
                    <button class="action-btn block">Block</button>
                    <button class="action-btn approve">Approve</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>user_id_001</td>
                <td>1</td>
                <td>Fake Profile</td>
                <td>29/08/25</td>
                <td>
                  <div class="action-container">
                    <button class="action-btn block">Block</button>
                    <button class="action-btn approve">Approve</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Plan Sharing Section */}
      {activeTab === "plan" && (
        <div className="card">
          {!showConfirmation && (
            <>
              <div style={{ marginBottom: "8px" }}>
                <strong>Chosen file:</strong> {selectedReportName || "No file chosen"}
              </div>

              <button className="share-btn" onClick={handleShare}>
                SHARE
              </button>

              {selectedReportName && (
                <div style={{ marginTop: "10px", marginBottom: "12px" }}>
                  <input
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="message-input"
                    placeholder="Add message"
                    style={{ width: "100%", padding: "8px" }}
                  />
                </div>
              )}

              <table>
                <thead>
                  <tr>
                    <th>Select</th>
                    <th>Filename</th>
                    <th>Size</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedReportName === "Report_002"}
                        onChange={() => handleSelectReport("Report_002")}
                        aria-label="Select Report_002"
                      />
                    </td>
                    <td>Report_002</td>
                    <td>2mb</td>
                    <td>Generated</td>
                    <td>29/08/25</td>
                    <td>
                      <button
                        className="action-btn download"
                        onClick={() => handleDownload("Report_002")}
                      >
                        Download
                      </button>
                      <button
                        className="action-btn delete"
                        onClick={() => handleDelete("Report_002")}
                        style={{ marginLeft: "8px" }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedReportName === "Report_001"}
                        onChange={() => handleSelectReport("Report_001")}
                        aria-label="Select Report_001"
                      />
                    </td>
                    <td>Report_001</td>
                    <td>10kb</td>
                    <td>Pending</td>
                    <td>19/07/25</td>
                    <td>
                      <button
                        className="action-btn download"
                        onClick={() => handleDownload("Report_001")}
                      >
                        Download
                      </button>
                      <button
                        className="action-btn delete"
                        onClick={() => handleDelete("Report_001")}
                        style={{ marginLeft: "8px" }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          )}

          {showConfirmation && (
            <div className="confirmation">
              <p>Report Sent Successfully</p>
              <span>The report has been successfully submitted.</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}