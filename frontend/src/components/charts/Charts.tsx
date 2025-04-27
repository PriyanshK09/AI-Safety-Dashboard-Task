import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from "chart.js"
import { Pie } from "react-chartjs-2"
import type { Incident } from "../../lib/types"
import { formatDate } from "../../lib/utils"
import "./Charts.css"

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title)

interface ChartsProps {
  incidents: Incident[]
}

export function Charts({ incidents }: ChartsProps) {
  // Count incidents by severity
  const severityCounts = {
    low: incidents.filter((i) => i.severity === "low").length,
    medium: incidents.filter((i) => i.severity === "medium").length,
    high: incidents.filter((i) => i.severity === "high").length,
  }

  // Prepare data for pie chart
  const pieData = {
    labels: ["Low", "Medium", "High"],
    datasets: [
      {
        data: [severityCounts.low, severityCounts.medium, severityCounts.high],
        backgroundColor: [
          "rgba(16, 185, 129, 0.7)", // Green for low
          "rgba(245, 158, 11, 0.7)", // Amber for medium
          "rgba(239, 68, 68, 0.7)", // Red for high
        ],
        borderColor: ["rgba(16, 185, 129, 1)", "rgba(245, 158, 11, 1)", "rgba(239, 68, 68, 1)"],
        borderWidth: 1,
      },
    ],
  }

  // Get recent incidents (last 5)
  const recentIncidents = [...incidents]
    .sort((a, b) => new Date(b.reportedAt).getTime() - new Date(a.reportedAt).getTime())
    .slice(0, 5)

  return (
    <div className="charts-container">
      <div className="chart-card">
        <div className="chart-header">
          <h3 className="chart-title">Incident Distribution</h3>
        </div>
        <div className="chart-content">
          <div className="pie-chart-container">
            <Pie
              data={pieData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "bottom",
                    labels: {
                      color: "rgba(255, 255, 255, 0.7)",
                      font: {
                        size: 12,
                      },
                    },
                  },
                  tooltip: {
                    backgroundColor: "rgba(26, 29, 35, 0.9)",
                    titleColor: "#ffffff",
                    bodyColor: "rgba(255, 255, 255, 0.8)",
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    borderWidth: 1,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      <div className="chart-card">
        <div className="chart-header">
          <h3 className="chart-title">Recent Activity</h3>
        </div>
        <div className="chart-content">
          <div className="recent-activity">
            {recentIncidents.map((incident) => (
              <div key={incident.id} className="activity-item">
                <div className={`activity-indicator ${incident.severity}`}></div>
                <div className="activity-details">
                  <p className="activity-title">{incident.title}</p>
                  <p className="activity-date">{formatDate(incident.reportedAt)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
