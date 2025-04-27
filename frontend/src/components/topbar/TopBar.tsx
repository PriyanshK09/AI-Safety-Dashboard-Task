"use client"

import { useState, useEffect, useRef } from "react"
import { Search, Bell, X } from "lucide-react"
import "./TopBar.css"
import type { Incident } from "../../lib/types"
import { formatDate } from "../../lib/utils"

interface TopBarProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  recentIncidents: Incident[]
  onNotificationsViewed: () => void
  notificationCount: number
}

export function TopBar({ 
  searchQuery, 
  onSearchChange, 
  recentIncidents,
  onNotificationsViewed,
  notificationCount
}: TopBarProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationRef.current && 
          !notificationRef.current.contains(event.target as Node) && 
          showNotifications) {
        setShowNotifications(false);
        onNotificationsViewed();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNotifications, onNotificationsViewed]);

  const handleNotificationToggle = () => {
    const newState = !showNotifications;
    setShowNotifications(newState);
    if (newState) {
      onNotificationsViewed();
    }
  };

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
          <div className="notification-container" ref={notificationRef}>
            <button 
              className="notification-button"
              onClick={handleNotificationToggle}
              aria-label="Notifications"
            >
              <Bell size={20} />
              {notificationCount > 0 && (
                <span className="notification-badge">{notificationCount}</span>
              )}
              <span className="sr-only">Notifications</span>
            </button>
            
            {showNotifications && (
              <div className="notification-dropdown">
                <div className="notification-header">
                  <h3 className="notification-title">Recent Incidents</h3>
                  <button 
                    className="notification-close-button"
                    onClick={() => {
                      setShowNotifications(false);
                      onNotificationsViewed();
                    }}
                    aria-label="Close notifications"
                  >
                    <X size={16} />
                  </button>
                </div>
                <div className="notification-list">
                  {recentIncidents.length > 0 ? (
                    recentIncidents.map((incident) => (
                      <div key={incident.id} className={`notification-item notification-item-${incident.severity}`}>
                        <div className={`notification-indicator ${incident.severity}`}></div>
                        <div className="notification-content">
                          <p className="notification-text">{incident.title}</p>
                          <p className="notification-time">{formatDate(incident.reportedAt)}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="notification-empty">No recent incidents</p>
                  )}
                </div>
                <div className="notification-footer">
                  <button className="view-all-button">View All Incidents</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
