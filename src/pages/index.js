import React from "react"
import Button from "../components/button"

export default () => {
  return (
    <main className="container mx-auto">
      <div className="flex items-center justify-center h-screen">
        <div className="grid grid-cols-3 gap-4">
          <Button>Click me</Button>
          <Button variant="primary">Click me</Button>
          <Button variant="secondary">Click me</Button>
        </div>
      </div>
    </main>
  )
}
