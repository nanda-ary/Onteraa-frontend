// components/core/tables/DataTable.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function LicenseTable() {
  const licenses = [
    { id: "LIC001", name: "Pro Plan", user: "John Doe", status: "Active" },
    { id: "LIC002", name: "Enterprise Plan", user: "Jane Smith", status: "Expired" },
    { id: "LIC003", name: "Basic Plan", user: "Mike Adams", status: "Active" },
  ]

  return (
    <div className="rounded-xl border bg-card p-4 shadow-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>License</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {licenses.map((license) => (
            <TableRow key={license.id}>
              <TableCell>{license.id}</TableCell>
              <TableCell>{license.name}</TableCell>
              <TableCell>{license.user}</TableCell>
              <TableCell>
                <span
                  className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${
                    license.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {license.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
