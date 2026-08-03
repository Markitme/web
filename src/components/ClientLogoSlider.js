import Image from "next/image";

const clientLogos = [
{
name: "Navira Settlements",
logo: "/images/clients/navira.webp",
},
{
name: "Harmony Rehab",
logo: "/images/clients/harmony.png",
},
{
name: "Medtrion",
logo: "/images/clients/medtrion.png",
},
{
name: "Joincrescendo",
logo: "/images/clients/Joincrescendo.png",
},
{
name: "infinite Real Estate",
logo: "/images/clients/infinite.png",
},
{
name: "New Construction",
logo: "/images/clients/new-const.webp",
},
];

export default function ClientLogoSlider() {
const duplicatedLogos = [...clientLogos, ...clientLogos];

return ( <section className="overflow-hidden border-y border-black/10 bg-[#f7f7f5] py-16 transition-colors duration-300 sm:py-20 dark:border-white/10 dark:bg-[#0d0d0d]"> <div className="container-custom mb-10 text-center"> <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#6f8f00] dark:text-[#a7d503]">
Trusted by ambitious brands </p>


    <h2 className="mt-5 text-2xl font-black tracking-[-0.04em] text-black sm:text-4xl dark:text-white">
      Building growth together.
    </h2>
  </div>

  <div className="client-logo-marquee">
    <div className="client-logo-track">
      {duplicatedLogos.map((client, index) => (
        <div
          key={`${client.name}-${index}`}
          className="client-logo-item border border-black/10 bg-white dark:border-white/10 dark:bg-white/[0.03]"
        >
          <Image
            src={client.logo}
            alt={`${client.name} logo`}
            width={180}
            height={80}
            className="h-12 w-auto max-w-[160px] object-contain"
          />
        </div>
      ))}
    </div>
  </div>
</section>


);
}
