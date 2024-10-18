import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  links?: {
    github?: string
    live?: string
  };
}

export function ProjectCard({ title, description, tags, links }: Props) {
  return (
    <Card className="flex flex-col rounded-sm overflow-hidden border border-slate-700 p-3">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {title}
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {links && Object.values(links)?.map(link => (
              link.replace("https://", "").replace("www.", "").replace("/", "")
            ))}
          </div>
          <CardDescription className="text-xs print:text-[10px]">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col gap-y-2">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-x-2">
          {links && Object.entries(links).map(link => (
            <Link
              key={link[1]}
              href={link[1]}
              target="_blank"
              className="flex w-1/2 items-center justify-center px-2 py-2.5 rounded-md capitalize text-background bg-primary hover:bg-primary/90"
            >
              {link[0]}
              <ExternalLink className="size-4 ml-2" />
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
