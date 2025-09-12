import { useState } from "react"
import "./ShelterDashboard.css";
const Dashboard = () => {
  // Sample data - in a real app, this would come from a database
  const [dashboardData] = useState({
    pets: {
      total: 24,
      available: 18,
      adopted: 4,
      pending: 2,
    },
    care: {
      todayTasks: 12,
      completed: 8,
      overdue: 1,
      scheduled: 15,
    },
    applications: {
      total: 8,
      underReview: 3,
      approved: 2,
      pendingInterview: 2,
      rejected: 1,
    },
  })

  const [recentActivity] = useState([
    {
      id: 1,
      type: "adoption",
      message: "Buddy was adopted by Jennifer Smith",
      time: "2 hours ago",
      icon: "🏠",
    },
    {
      id: 2,
      type: "care",
      message: "Max completed post-surgery checkup",
      time: "4 hours ago",
      icon: "🏥",
    },
    {
      id: 3,
      type: "application",
      message: "New adoption application for Whiskers",
      time: "6 hours ago",
      icon: "📝",
    },
    {
      id: 4,
      type: "care",
      message: "Morning feeding completed for all pets",
      time: "8 hours ago",
      icon: "🍽️",
    },
    {
      id: 5,
      type: "pet",
      message: "New pet Luna added to the system",
      time: "1 day ago",
      icon: "🐕",
    },
  ])

  const [upcomingTasks] = useState([
    {
      id: 1,
      task: "Vaccination for Whiskers",
      time: "10:00 AM",
      priority: "high",
      type: "Medical",
    },
    {
      id: 2,
      task: "Grooming session for Max",
      time: "2:00 PM",
      priority: "medium",
      type: "Grooming",
    },
    {
      id: 3,
      task: "Evening feeding - all pets",
      time: "6:00 PM",
      priority: "high",
      type: "Feeding",
    },
    {
      id: 4,
      task: "Interview with Emily Chen",
      time: "3:30 PM",
      priority: "medium",
      type: "Interview",
    },
  ])

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "#fbb6a0"
      case "medium":
        return "#68d391"
      case "low":
        return "#e2e8f0"
      default:
        return "#e2e8f0"
    }
  }

  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#2d3748", marginBottom: "0.5rem" }}>Dashboard</h1>
        <p style={{ color: "#718096" }}>Welcome to the Animal Shelter Management System. Here's your daily overview.</p>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-3" style={{ marginBottom: "2rem" }}>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title" style={{ color: "#68d391" }}>
              Pet Statistics
            </h3>
          </div>
          <div className="stats-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#2d3748" }}>{dashboardData.pets.total}</div>
              <div style={{ fontSize: "0.8rem", color: "#718096" }}>Total Pets</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#68d391" }}>
                {dashboardData.pets.available}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#718096" }}>Available</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#fbb6a0" }}>
                {dashboardData.pets.adopted}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#718096" }}>Adopted</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#f6ad55" }}>
                {dashboardData.pets.pending}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#718096" }}>Pending</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title" style={{ color: "#68d391" }}>
              Care Tasks
            </h3>
          </div>
          <div className="stats-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#2d3748" }}>
                {dashboardData.care.todayTasks}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#718096" }}>Today's Tasks</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#68d391" }}>
                {dashboardData.care.completed}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#718096" }}>Completed</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#f56565" }}>
                {dashboardData.care.overdue}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#718096" }}>Overdue</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#fbb6a0" }}>
                {dashboardData.care.scheduled}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#718096" }}>Scheduled</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title" style={{ color: "#68d391" }}>
              Applications
            </h3>
          </div>
          <div className="stats-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#2d3748" }}>
                {dashboardData.applications.total}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#718096" }}>Total Apps</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#fbb6a0" }}>
                {dashboardData.applications.underReview}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#718096" }}>Under Review</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#68d391" }}>
                {dashboardData.applications.approved}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#718096" }}>Approved</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#f6ad55" }}>
                {dashboardData.applications.pendingInterview}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#718096" }}>Interviews</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-2">
        {/* Recent Activity */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Recent Activity</h2>
            <p className="card-subtitle">Latest updates from the shelter</p>
          </div>
          <div style={{ maxHeight: "400px", overflowY: "auto" }}>
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "1rem 0",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                <div
                  style={{
                    fontSize: "1.5rem",
                    marginRight: "1rem",
                    width: "40px",
                    textAlign: "center",
                  }}
                >
                  {activity.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, color: "#2d3748", fontSize: "0.9rem" }}>{activity.message}</p>
                  <p style={{ margin: 0, color: "#718096", fontSize: "0.8rem" }}>{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Today's Schedule</h2>
            <p className="card-subtitle">Upcoming tasks and appointments</p>
          </div>
          <div style={{ maxHeight: "400px", overflowY: "auto" }}>
            {upcomingTasks.map((task) => (
              <div
                key={task.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem 0",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, color: "#2d3748", fontSize: "0.9rem", fontWeight: "500" }}>{task.task}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.25rem" }}>
                    <span style={{ color: "#718096", fontSize: "0.8rem" }}>{task.time}</span>
                    <span
                      className="status-badge"
                      style={{
                        backgroundColor: getPriorityColor(task.priority),
                        color: "white",
                        fontSize: "0.7rem",
                        padding: "0.125rem 0.5rem",
                      }}
                    >
                      {task.type}
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: getPriorityColor(task.priority),
                    marginLeft: "1rem",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card" style={{ marginTop: "2rem" }}>
        <div className="card-header">
          <h2 className="card-title">Quick Actions</h2>
          <p className="card-subtitle">Common tasks and shortcuts</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
          <button className="btn btn-primary" style={{ padding: "1rem", textAlign: "left" }}>
            <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>🐕 Add New Pet</div>
            <div style={{ fontSize: "0.8rem", opacity: 0.9 }}>Register a new animal</div>
          </button>
          <button className="btn btn-secondary" style={{ padding: "1rem", textAlign: "left" }}>
            <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>📋 Log Care Activity</div>
            <div style={{ fontSize: "0.8rem", opacity: 0.9 }}>Record feeding, grooming, or medical care</div>
          </button>
          <button className="btn btn-outline" style={{ padding: "1rem", textAlign: "left" }}>
            <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>📧 Review Applications</div>
            <div style={{ fontSize: "0.8rem", opacity: 0.9 }}>Check new adoption requests</div>
          </button>
          <button className="btn btn-outline" style={{ padding: "1rem", textAlign: "left" }}>
            <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>📊 Generate Report</div>
            <div style={{ fontSize: "0.8rem", opacity: 0.9 }}>Monthly shelter statistics</div>
          </button>
        </div>
      </div>

      {/* Alerts and Notifications */}
      <div className="card" style={{ marginTop: "2rem", backgroundColor: "#fef5e7", border: "1px solid #fbb6a0" }}>
        <div className="card-header">
          <h2 className="card-title" style={{ color: "#744210" }}>
            Important Alerts
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "1.2rem" }}>⚠️</span>
            <span style={{ color: "#744210" }}>Max has a medical checkup overdue by 1 day</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "1.2rem" }}>📅</span>
            <span style={{ color: "#744210" }}>3 adoption interviews scheduled for this week</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "1.2rem" }}>🏥</span>
            <span style={{ color: "#744210" }}>Vaccination supplies running low - reorder needed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
