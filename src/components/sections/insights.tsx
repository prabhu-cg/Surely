import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { CtaButton } from "@/components/ui/cta-button";

const FOUNDERS = {
  builder: { name: "The Builder", avatar: "/images/founder-builder.png" },
  explorer: { name: "The Explorer", avatar: "/images/founder-explorer.png" },
  thinker: { name: "The Thinker", avatar: "/images/founder-thinker.png" },
} as const;

const ARTICLES = [
  {
    title: "Why do we still do it this way?",
    author: FOUNDERS.builder,
    readTime: "3 min read",
    image: "insight-featured.jpg",
    featured: true,
  },
  {
    title: "The best answer may not be the first one.",
    author: FOUNDERS.explorer,
    readTime: "3 min read",
    image: "insight-02.jpg",
  },
  {
    title: "Small shifts. Different outcomes.",
    author: FOUNDERS.thinker,
    readTime: "3 min read",
    image: "insight-03.jpg",
  },
  {
    title: "Why the room you're in shapes the ideas you have.",
    author: FOUNDERS.explorer,
    readTime: "4 min read",
    image: "insight-04.jpg",
  },
];

function AuthorMeta({
  author,
  readTime,
}: {
  author: { name: string; avatar: string };
  readTime: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="relative size-6 shrink-0 overflow-hidden rounded-full">
        <Image src={author.avatar} alt={author.name} fill sizes="24px" className="object-cover" />
      </span>
      <p className="text-body-sm text-midnight-400">
        {author.name} · {readTime}
      </p>
    </div>
  );
}

function CompactInsights() {
  return (
    <section className="bg-cloud-50 py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div className="flex flex-col gap-4">
          <SectionEyebrow>Insights</SectionEyebrow>
          <h2 className="text-heading-md font-extrabold text-midnight-800 uppercase sm:text-heading-lg">
            We ask questions out loud.
          </h2>
          <p className="max-w-sm text-body-lg text-midnight-600">
            Not every thought becomes a product. Sometimes it&rsquo;s worth
            writing down instead.
          </p>
          <div>
            <CtaButton href="/insights" variant="dark">
              Read our insights
            </CtaButton>
          </div>
        </div>

        <ul className="flex flex-col">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.title} delay={i * 70}>
              <li className="border-t border-cloud-600 py-5 last:border-b">
                <Link
                  href="/insights"
                  className="group flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-body-lg font-bold text-midnight-800 underline decoration-4 decoration-transparent underline-offset-4 transition-colors duration-200 group-hover:decoration-lime-500">
                    {a.title}
                  </span>
                  <span className="shrink-0 text-body-sm text-midnight-400">
                    {a.author.name} · {a.readTime}
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function Insights({ variant = "full" }: { variant?: "full" | "compact" }) {
  if (variant === "compact") return <CompactInsights />;

  const [featured, ...rest] = ARTICLES;

  return (
    <section className="bg-cloud-50 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="flex flex-col gap-5 rounded-2xl border border-cloud-600 p-5">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
              <Image
                src={`/images/${featured.image}`}
                alt="Team reviewing ideas pinned to a board"
                fill
                sizes="(min-width: 1024px) 540px, 100vw"
                className="object-cover"
              />
              <span className="absolute top-4 left-4 rounded-full bg-lime-500 px-3 py-1 text-body-xs font-semibold text-midnight-900">
                Featured insight
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/insights"
                className="inline-block w-fit text-heading-xs font-bold text-midnight-800 underline decoration-4 decoration-transparent underline-offset-4 transition-colors duration-200 hover:decoration-lime-500"
              >
                {featured.title}
              </Link>
              <p className="text-body-md text-midnight-600">
                The most interesting problems often begin with something
                that feels normal. Until you look closer.
              </p>
              <AuthorMeta author={featured.author} readTime={featured.readTime} />
              <span className="text-body-sm font-semibold text-midnight-300">
                Full article coming soon
              </span>
            </div>
          </article>

          <div className="flex flex-col gap-6">
            {rest.map((insight) => (
              <article key={insight.title} className="flex gap-4 rounded-2xl border border-cloud-600 p-5">
                <div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-xl sm:w-32">
                  <Image
                    src={`/images/${insight.image}`}
                    alt={insight.title}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <Link
                    href="/insights"
                    className="inline-block w-fit text-body-lg font-bold text-midnight-800 underline decoration-4 decoration-transparent underline-offset-4 transition-colors duration-200 hover:decoration-lime-500"
                  >
                    {insight.title}
                  </Link>
                  <AuthorMeta author={insight.author} readTime={insight.readTime} />
                  <span className="text-body-sm font-semibold text-midnight-300">
                    Full article coming soon
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
