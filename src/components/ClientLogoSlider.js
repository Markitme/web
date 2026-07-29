import Image from "next/image";

const clientLogos = [
{
name: "Navira Settlements",
logo: "/images/clients/navira.png",
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
name: "Excella Life Sciences",
logo: "/images/clients/excella.png",
},
{
name: "King of Management",
logo: "/images/clients/king-of-management.png",
},
{
name: "Client Logo",
logo: "/images/clients/client-6.png",
},
];

export default function ClientLogoSlider() {
const duplicatedLogos = [...clientLogos, ...clientLogos];

return ( <section className="overflow-hidden border-y border-white/10 bg-[#0d0d0d] py-16 sm:py-20"> <div className="container-custom mb-10 text-center"> <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#c8ff00]">
Trusted by ambitious brands </p>


    <h2 className="mt-4 text-2xl font-black tracking-[-0.04em] text-white sm:text-4xl">
      Building growth together.
    </h2>
  </div>

  <div className="client-logo-marquee">
    <div className="client-logo-track">
      {duplicatedLogos.map((client, index) => (
        <div
          key={`${client.name}-${index}`}
          className="client-logo-item"
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
