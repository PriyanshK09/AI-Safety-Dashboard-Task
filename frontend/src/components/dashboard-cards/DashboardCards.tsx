import { AlertTriangle, AlertCircle, AlertOctagon, Activity } from "lucide-react"
import "./DashboardCards.css"

interface DashboardCardsProps {
  stats: {
    total: number
    high: number
    medium: number
    low: number
  }
}

export function DashboardCards({ stats }: DashboardCardsProps) {
  const cards = [
    {
      title: "Total Incidents",
      value: stats.total,
      icon: Activity,
      colorClass: "blue",
    },
    {
      title: "High Severity",
      value: stats.high,
      icon: AlertOctagon,
      colorClass: "red",
    },
    {
      title: "Medium Severity",
      value: stats.medium,
      icon: AlertTriangle,
      colorClass: "amber",
    },
    {
      title: "Low Severity",
      value: stats.low,
      icon: AlertCircle,
      colorClass: "green",
    },
  ]

  return (
    <div className="dashboard-cards">
      {cards.map((card, index) => (
        <div key={index} className={`dashboard-card ${card.colorClass}`}>
          <div className="dashboard-card-content">
            <div className="dashboard-card-header">
              <h3 className="dashboard-card-title">{card.title}</h3>
              <div className={`dashboard-card-icon ${card.colorClass}`}>
                <card.icon size={18} />
              </div>
            </div>
            <p className="dashboard-card-value">{card.value}</p>
            <div className="dashboard-card-indicators">
              <span className={`indicator ${card.colorClass}`}></span>
              <span className={`indicator ${card.colorClass} medium`}></span>
              <span className={`indicator ${card.colorClass} light`}></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
