import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from "chart.js"
import { Pie } from "react-chartjs-2"
import type { Incident } from "../../lib/types"
import "./Charts.css"

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title)

interface ChartsProps {
  incidents: Incident[]
}

export function Charts({ incidents }: ChartsProps) {
  const severityCounts = {
    low: incidents.filter((i) => i.severity === "low").length,
    medium: incidents.filter((i) => i.severity === "medium").length,
    high: incidents.filter((i) => i.severity === "high").length,
  }

  const pieData = {
    labels: ["Low", "Medium", "High"],
    datasets: [
      {
        data: [severityCounts.low, severityCounts.medium, severityCounts.high],
        backgroundColor: [
          "rgba(16, 185, 129, 0.7)",
          "rgba(245, 158, 11, 0.7)",
          "rgba(239, 68, 68, 0.7)",
        ],
        borderColor: ["rgba(16, 185, 129, 1)", "rgba(245, 158, 11, 1)", "rgba(239, 68, 68, 1)"],
        borderWidth: 1,
      },
    ],
  }

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
                        family: "Inter, sans-serif"
                      },
                    },
                  },
                  tooltip: {
                    backgroundColor: "rgba(26, 29, 35, 0.9)",
                    titleColor: "#ffffff",
                    bodyColor: "rgba(255, 255, 255, 0.8)",
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    borderWidth: 1,
                    bodyFont: {
                      family: "Inter, sans-serif"
                    },
                    titleFont: {
                      family: "Inter, sans-serif"
                    }
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
