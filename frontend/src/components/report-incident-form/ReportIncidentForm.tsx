"use client"

import type React from "react"

import { useState } from "react"
import { PlusCircle, AlertCircle, AlertTriangle, AlertOctagon, Check } from "lucide-react"
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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

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

    setErrors({})
    
    setIsSubmitting(true)

    setTimeout(() => {
      onSubmit({
        title,
        description,
        severity,
        reportedAt: new Date().toISOString(),
      })

      setIsSubmitting(false)
      setSubmitSuccess(true)
      
      setTimeout(() => {
        setTitle("")
        setDescription("")
        setSeverity("medium")
        setSubmitSuccess(false)
      }, 1500)
    }, 600)
  }

  const getSeverityIcon = (level: SeverityType) => {
    switch(level) {
      case "low": return <AlertCircle size={16} className="severity-icon low" />;
      case "medium": return <AlertTriangle size={16} className="severity-icon medium" />;
      case "high": return <AlertOctagon size={16} className="severity-icon high" />;
    }
  }

  return (
    <div className="report-form-card">
      <div className="report-form-header">
        <h3 className="report-form-title">
          <PlusCircle size={20} className="report-form-icon" />
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
              disabled={isSubmitting || submitSuccess}
            />
            {errors.title && (
              <p className="form-error">
                <AlertCircle size={14} />
                {errors.title}
              </p>
            )}
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
              disabled={isSubmitting || submitSuccess}
            />
            {errors.description && (
              <p className="form-error">
                <AlertCircle size={14} />
                {errors.description}
              </p>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Severity Level</label>
            <div className="radio-group">
              <label className="radio-item" htmlFor="low">
                <input
                  type="radio"
                  id="low"
                  name="severity"
                  value="low"
                  checked={severity === "low"}
                  onChange={() => setSeverity("low")}
                  className="radio-input low"
                  disabled={isSubmitting || submitSuccess}
                />
                <span className="radio-label">
                  {getSeverityIcon("low")}
                  Low
                </span>
              </label>
              
              <label className="radio-item" htmlFor="medium">
                <input
                  type="radio"
                  id="medium"
                  name="severity"
                  value="medium"
                  checked={severity === "medium"}
                  onChange={() => setSeverity("medium")}
                  className="radio-input medium"
                  disabled={isSubmitting || submitSuccess}
                />
                <span className="radio-label">
                  {getSeverityIcon("medium")}
                  Medium
                </span>
              </label>
              
              <label className="radio-item" htmlFor="high">
                <input
                  type="radio"
                  id="high"
                  name="severity"
                  value="high"
                  checked={severity === "high"}
                  onChange={() => setSeverity("high")}
                  className="radio-input high"
                  disabled={isSubmitting || submitSuccess}
                />
                <span className="radio-label">
                  {getSeverityIcon("high")}
                  High
                </span>
              </label>
            </div>
          </div>

          <button 
            type="submit" 
            className={`submit-button ${isSubmitting ? 'submitting' : ''} ${submitSuccess ? 'success' : ''}`}
            disabled={isSubmitting || submitSuccess}
          >
            {submitSuccess ? (
              <>
                <Check size={18} />
                Incident Reported
              </>
            ) : isSubmitting ? (
              <>Submitting...</>
            ) : (
              <>Submit Incident Report</>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
