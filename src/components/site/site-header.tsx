import { Container } from "@/components/ui/container";
import { SchoolBrand } from "./school-brand";
import { Navigation } from "./navigation";

export function SiteHeader() {
  return <header className="site-header"><Container className="header-inner">
    <SchoolBrand /><Navigation />
  </Container></header>;
}
