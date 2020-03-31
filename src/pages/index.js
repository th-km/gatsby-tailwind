import React from "react"
import Button from "../components/button"

export default () => {
  return (
    <main className="container mx-auto">
      <div className="flex items-center justify-center h-screen">
        <Button className="mr-4">Click me</Button>
        <Button variant="muted">Click me</Button>
      </div>
    </main>
  )
}
