import Link from "next/link";

const contactInfo = [
  {
    id: 1,
    social: "facebook",
    link: "sujonhowlader01",
    href: "https://www.facebook.com/mdsujon.howlader.165470",
  },
  {
    id: 2,
    social: "email",
    link: "sujonhowlader578@gmail.com",
    href: "mailto:sujonhowlader578@gmail.com",
  },
  {
    id: 3,
    social: "github",
    link: "sujonhiro",
    href: "https://github.com/mdsujonhowlader",
  },
  {
    id: 4,
    social: "linkedin",
    link: "sujonhowlader",
    href: "https://www.linkedin.com/in/sujon-howlader",
  },
  {
    id: 5,
    social: "twitter",
    link: "sujontwiter",
    href: "https://www.twitter.com",
  },
  {
    id: 6,
    social: "telegram",
    link: "sujonhowader",
    href: "https://t.me/sujon",
  },
  {
    id: 7,
    social: "peerlist",
    link: "sujondev",
    href: "https://peerlist.io/sujon",
  },
];

export default function Contact() {
  return (
    <div className="  text-white p-4">
      <pre className="overflow-x-auto">
        {/* Line 1 */}
        <div className="flex">
          <span className="w-6 text-gray-500 select-none">1</span>
          <span className="text-[var(--color-accent)] mb-1 pl-8">
            .social &#123;
          </span>
        </div>

        {contactInfo.map((info, index) => (
          <div key={info.id} className="flex space-y-1.5">
            <span className="w-6 text-gray-500 select-none">{index + 2}</span>
            <span className="pl-20">
              <span className="text-emerald-400">{info.social}</span>
              <span className="text-white">: </span>
              <Link
                href={info.href}
                className="text-[var(--color-accent)] hover:underline underline-offset-3 transition-all duration-200"
                target="_blank"
                rel="noopener"
              >
                {info.link}
              </Link>
            </span>
          </div>
        ))}

        {/* Closing bracket */}
        <div className="flex">
          <span className="w-6 text-gray-500 select-none">
            {contactInfo.length + 2}
          </span>
          <span className="text-pink-400 pl-10">&#125;</span>
        </div>
      </pre>
    </div>
  );
}
