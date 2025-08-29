"use client"

import { ColumnDef } from "@tanstack/react-table"
import { type Project } from "@/types";

export const columns: ColumnDef<Project>[] = [
    {
    accessorKey: "name",
    header: "Nom",
  },
  {
    accessorKey: "description",
    header: "Déscription",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "end_date",
    header: "Date de Fin",
  },
]