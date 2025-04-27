"use client"

import { useState, useEffect } from "react"
import { LayoutDashboard, AlertTriangle, BarChart2, FileBarChart, Settings, LogOut, PlusCircle, Menu, X, User, ExternalLink, FileText } from "lucide-react"
import "./Sidebar.css"

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    
    checkIfMobile();
    
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const handleSectionChange = (section: string) => {
    onSectionChange(section);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "incidents", label: "Incidents", icon: AlertTriangle },
    { id: "report", label: "Report Incident", icon: PlusCircle },
    { id: "statistics", label: "Statistics", icon: BarChart2 },
    { id: "reports", label: "Reports", icon: FileBarChart },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <>
      <button 
        className={`sidebar-toggle ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {isMobile && isOpen && (
        <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />
      )}
      
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <div className="sidebar-logo">
              <svg width="40" height="40" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="200" fill="#4A4A4A" />
                <circle cx="120" cy="120" r="40" fill="white" />
                <circle cx="280" cy="120" r="40" fill="white" />
                <circle cx="120" cy="200" r="40" fill="white" />
                <circle cx="200" cy="200" r="40" fill="white" />
                <circle cx="280" cy="200" r="40" fill="white" />
                <circle cx="120" cy="280" r="40" fill="white" />
                <circle cx="280" cy="280" r="40" fill="white" />
              </svg>
            </div>
            <div className="sidebar-title-container">
              <h1 className="sidebar-title">AI Safety Hub</h1>
              <p className="sidebar-subtitle">powered by Humanchain</p>
            </div>
          </div>

          <nav className="sidebar-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionChange(item.id)}
                className={`sidebar-nav-item ${activeSection === item.id ? "active" : ""}`}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="sidebar-recruiter-links">
          <a 
            href="https://priyanshk.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="sidebar-recruiter-link"
          >
            <ExternalLink size={16} />
            Visit My Portfolio
          </a>
          <a 
            href="https://drive.google.com/file/d/1f_ljNmdrx5dDdUCBjcU3tSwdPHEUjsAp/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="sidebar-recruiter-link"
          >
            <FileText size={16} />
            View My CV
          </a>
        </div>

        <div className="sidebar-footer">
          <div className="sidebar-separator"></div>
          <div className="sidebar-user">
            <div className="sidebar-avatar">
              <User size={24} />
            </div>
            <div className="sidebar-user-info">
              <p className="sidebar-user-name">Priyansh Khare</p>
              <p className="sidebar-user-role">Student</p>
            </div>
            <button className="sidebar-logout-button">
              <LogOut size={16} />
              <span className="sr-only">Log out</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}
