"use client";

interface SearchComponentProps {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  position: string;
  setPosition: (val: string) => void;
}
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./input";

function SelectNew({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a position" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Position</SelectLabel>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="top">Top</SelectItem>
          <SelectItem value="mid">Mid</SelectItem>
          <SelectItem value="jg">Jungle</SelectItem>
          <SelectItem value="support">Support</SelectItem>
          <SelectItem value="adc">ADC</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default function SearchComponent({
  searchTerm,
  setSearchTerm,
  position,
  setPosition,
}: SearchComponentProps) {
  return (
    <section className="flex flex-col gap-4 w-full items-center justify-center">
      <div className="w-full flex flex-col gap-3 lg:flex-row lg:w-fit">
        <Input
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SelectNew value={position} onChange={setPosition} />
      </div>
    </section>
  );
}
