import Image from "next/image";
import Link from "next/link";

interface Link {
  link: string;
  title: string;
  describe: string;
  image?: string;
}
const links = [
  { link: "/article-preview/", title: "Article Preview", describe: "", image: "" },
  { link: "/recipe-page/", title: "Recipe Page", describe: "", image: "" },
  { link: "/social-links/", title: "Social Links", describe: "", image: "" },
  { link: "/rest-countries/", title: "Countries", describe: "", image: "" },
];
export default function Home() {
  return (
    <>
      <div className="h-[90vh] flex flex-col gap-2xl  justify-center text-zinc-900 items-center">
        {links.map((item) => (
          <div className="text-2xl" key={item.link}>
            <Link href={item.link}>{item.title}</Link>
          </div>
        ))}
      </div>
    </>
  );
}
