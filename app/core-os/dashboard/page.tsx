import React from "react"
import { OverviewChart } from "@/components/core/charts/OverviewChart"
import { LicenseTable } from "@/components/core/tables/Datatable"

import { ColumnDef } from "@tanstack/react-table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="space-y-6 p-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1,240</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Licenses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">875</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Usage Today</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">132</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">98%</p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart */}
      <div className="bg-card rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Weekly Usage</h3>
        <OverviewChart />
      </div>

      {/* License Table */}
      <div className="bg-card rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">License Overview</h3>
        <LicenseTable />
      </div>
    </div>
  )
}
