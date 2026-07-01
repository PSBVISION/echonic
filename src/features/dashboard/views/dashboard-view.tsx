import { PageHeader } from "@/components/page-header";
import { HeroPattern } from "../components/hero-pattern";


export function DashboardView() {
  return (
    <div className='relative'><PageHeader title="Home" className="lg:hidden" /><HeroPattern /></div>
  )
}
