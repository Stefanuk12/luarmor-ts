export interface IStatus {
  // v3
  version: string
  // true
  active: boolean
  // API is up and working!
  message: string
  // false
  warning: boolean
  // No warning
  warning_message: string
}