const data: {
  title: string;
  lines: { property: string; value: string; link: boolean }[];
}[] = [
  {
    title: "Connect With Us:",
    lines: [
      {
        property: "Address:",
        value: "123 Flavor Street, Foodtown, ST 12345",
        link: false,
      },
      {
        property: "Phone:",
        value: "(123) 456-7890",
        link: false,
      },
      {
        property: "Email:",
        value: "info@rollerite.com",
        link: false,
      },
    ],
  },
  {
    title: "Follow Us:",
    lines: [
      {
        property: "Facebook",
        link: true,
        value: "https://facebook.com",
      },
      {
        property: "Instagram",
        link: true,
        value: "https://instagram.com",
      },
      {
        property: "Twitter",
        link: true,
        value: "https://x.com",
      },
    ],
  },
  {
    title: "Our Program:",
    lines: [
      {
        property: "Mon-Thurs",
        link: false,
        value: "11AM - 10PM",
      },
      {
        property: "Fri-Sat",
        link: false,
        value: "11AM - 11PM",
      },
      {
        property: "Sun",
        link: false,
        value: "10AM - 9PM",
      },
    ],
  },
];
const Footer = () => {
  return (
    <div className="min-h-60 bg-white w-full border-t-2 border-t-accent flex justify-evenly flex-col lg:flex-row items-center lg:items-start gap-8 py-10 px-2 text-center lg:text-start">
      {data.map((d) => (
        <div className="space-y-4">
          <p className="text-[32px] text-accent">{d.title}</p>
          <div className="space-y-2">
            {d.lines.map(line => {
              if (line.link) {
                return (
                  <>
                    <a className="text-[#FF9E0C] text-[18px]" href={line.value}>
                      {line.property}
                    </a> <br />
                  </>
                );
              } else {
                return <p><span className="text-[#FF9E0C] text-[18px]">{line.property}</span> {" "} {line.value}</p>
              }
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
