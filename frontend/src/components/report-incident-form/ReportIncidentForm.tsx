"use client"

import type React from "react"

import { useState } from "react"
import { PlusCircle } from "lucide-react"
import type { Incident, SeverityType } from "../../lib/types"
import "./ReportIncidentForm.css"

interface ReportIncidentFormProps {
  onSubmit: (incident: Omit<Incident, "id">) => void
}

export function ReportIncidentForm({ onSubmit }: ReportIncidentFormProps) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [severity, setSeverity] = useState<SeverityType>("medium")
  const [errors, setErrors] = useState<{ title?: string; description?: string }>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    const newErrors: { title?: string; description?: string } = {}

    if (!title.trim()) {
      newErrors.title = "Title is required"
    }

    if (!description.trim()) {
      newErrors.description = "Description is required"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Clear errors
    setErrors({})

    // Submit the new incident
    onSubmit({
      title,
      description,
      severity,
      reportedAt: new Date().toISOString(),
    })

    // Reset form
    setTitle("")
    setDescription("")
    setSeverity("medium")
  }

  return (
    <div className="report-form-card">
      <div className="report-form-header">
        <h3 className="report-form-title">
          <PlusCircle size={18} className="report-form-icon" />
          Report New Incident
        </h3>
      </div>
      <div className="report-form-content">
        <form onSubmit={handleSubmit} className="report-form">
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Incident Title
            </label>
            <input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter incident title"
              className={`form-input ${errors.title ? "error" : ""}`}
            />
            {errors.title && <p className="form-error">{errors.title}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the incident in detail"
              className={`form-textarea ${errors.description ? "error" : ""}`}
            />
            {errors.description && <p className="form-error">{errors.description}</p>}
          </div>

          <div className="form-group">
            <label className="form-label">Severity Level</label>
            <div className="radio-group">
              <div className="radio-item">
                <input
                  type="radio"
                  id="low"
                  name="severity"
                  value="low"
                  checked={severity === "low"}
                  onChange={() => setSeverity("low")}
                  className="radio-input low"
                />
                <label htmlFor="low" className="radio-label">
                  Low
                </label>
              </div>
              <div className="radio-item">
                <input
                  type="radio"
                  id="medium"
                  name="severity"
                  value="medium"
                  checked={severity === "medium"}
                  onChange={() => setSeverity("medium")}
                  className="radio-input medium"
                />
                <label htmlFor="medium" className="radio-label">
                  Medium
                </label>
              </div>
              <div className="radio-item">
                <input
                  type="radio"
                  id="high"
                  name="severity"
                  value="high"
                  checked={severity === "high"}
                  onChange={() => setSeverity("high")}
                  className="radio-input high"
                />
                <label htmlFor="high" className="radio-label">
                  High
                </label>
              </div>
            </div>
          </div>

          <button type="submit" className="submit-button">
            Submit Incident Report
          </button>
        </form>
      </div>
    </div>
  )
}
