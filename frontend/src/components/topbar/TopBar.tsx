"use client"

import { Search, Bell } from "lucide-react"
import "./TopBar.css"

interface TopBarProps {
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function TopBar({ searchQuery, onSearchChange }: TopBarProps) {
  return (
    <div className="topbar">
      <div className="topbar-content">
        <div className="search-container">
          <Search className="search-icon" size={18} />
          <input
            type="search"
            placeholder="Search incidents..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <div className="topbar-actions">
          <button className="notification-button">
            <Bell size={20} />
            <span className="notification-badge">3</span>
            <span className="sr-only">Notifications</span>
          </button>
        </div>
      </div>
    </div>
  )
}
