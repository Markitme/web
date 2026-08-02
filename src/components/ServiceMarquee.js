import {
BadgeCheck,
BarChart3,
BriefcaseBusiness,
Megaphone,
MonitorSmartphone,
Palette,
Search,
Target,
} from "lucide-react";

const services = [
{
name: "Brand Strategy",
icon: Target,
},
{
name: "Website Design & Development",
icon: MonitorSmartphone,
},
{
name: "SEO & Content Strategy",
icon: Search,
},
{
name: "Digital Marketing",
icon: Megaphone,
},
{
name: "Social Media Marketing",
icon: BriefcaseBusiness,
},
{
name: "Brand Identity & Design",
icon: Palette,
},
{
name: "Lead Generation",
icon: BarChart3,
},
{
name: "Marketing Strategy",
icon: BadgeCheck,
},
];

export default function ServiceMarquee() {
// Duplicate services for a seamless infinite loop
const marqueeServices = [...services, ...services];

return ( <section className="service-marquee-section border-y border-black/10 bg-[#a7d503] py-7 transition-colors duration-300"> <div className="service-marquee"> <div className="service-marquee-track">
{marqueeServices.map((service, index) => {
const Icon = service.icon;


        return (
          <div
            key={`${service.name}-${index}`}
            className="service-marquee-item text-black transition-colors duration-300 "
          >
            <Icon
              size={21}
              strokeWidth={1.8}
              aria-hidden="true"
              className="text-black transition-colors duration-300 dark:text-white"
            />

            <span>{service.name}</span>
          </div>
        );
      })}
    </div>
  </div>
</section>


);
}
