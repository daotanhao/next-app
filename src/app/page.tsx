"use client";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import {
  Button,
  Chip,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import HomePage from "./HomePage";

export default function Home() {
  return (
    <div className="w-full scroll-auto px-[88px]">
      <HomePage />
    </div>
  );
}
