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

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center scroll-auto">
      <Button color="primary">abc</Button>
      <Select label="Select an animal" className="max-w-xs">
        <SelectItem key="Lion">Lion</SelectItem>
      </Select>
      <ThemeSwitcher />
      <div className="flex gap-4">
        <Chip color="default">Default</Chip>
        <Chip color="primary">Primary</Chip>
        <Chip color="secondary">Secondary</Chip>
        <Chip color="success">Success</Chip>
        <Chip color="warning">Warning</Chip>
        <Chip color="danger">Danger</Chip>
      </div>
      <div>
        <Table color={"warning"} selectionMode="single">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>ROLE</TableColumn>
            <TableColumn>STATUS</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>William Howard</TableCell>
              <TableCell>Community Manager</TableCell>
              <TableCell>Vacation</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
