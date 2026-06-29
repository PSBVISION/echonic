import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface MenuItem {
  title: string;
  url?: string;
  icon: LucideIcon;
  onclick?: () => void;
}

interface NavSelectionProps {
  label?: string;
  items: MenuItem[];
  pathname: string;
}

function NavSelection({ label, items, pathname }: NavSelectionProps) {
  return (
    <SidebarGroup>
      {label && (
        <SidebarGroupLabel className="text-[13px] uppercase text-muted-foreground">
          {label}
        </SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuButton
              asChild={!!item.url}
              isActive={
                item.url
                  ? item.url === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.url)
                  : false
              }
              onClick={item.onclick}
              tooltip={item.title}
            >
              {item.url ? (
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              ) : (
                <>
                  <item.icon />
                  <span>{item.title}</span>
                </>
              )}
            </SidebarMenuButton>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
