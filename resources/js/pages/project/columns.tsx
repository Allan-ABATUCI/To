"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface Project {
    id: number;
    name: string;
    description?: string;
    end_date?: Date;
    status: "en attente" | "en cours" | "terminé";
    image_path?: string;
    created_by: number;
    updated_by: number;
    updated_at: Date;
    created_at: Date;
}

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