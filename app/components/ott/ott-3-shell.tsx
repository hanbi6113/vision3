// components/ott/ott-3-shell.tsx
import Image from "next/image";
import Link from "next/link";
import {
  discoverData,
  genreMenu,
  type GenreKey,
} from "@/data/discover-data";

type Props = {
  activeGenre: GenreKey;
};

const genreImages: Record<GenreKey, string[]> = {
  rofan: ["/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg", "/images/img4.jpg"],
  romance: ["/images/img5.jpg", "/images/img6.jpg", "/images/img7.jpg", "/images/img8.jpg"],
  sf: ["/images/img9.jpg", "/images/img10.jpg", "/images/img11.jpg", "/images/img12.jpg"],
  murim: ["/images/img13.jpg", "/images/img14.jpg", "/images/img15.jpg", "/images/img16.jpg"],
  horror: ["/images/img17.jpg", "/images/img18.jpg", "/images/img19.jpg", "/images/img20.jpg"],
};

const editionMeta: Record<
  GenreKey,
  {
    edition: string;
    intro: string;
    sectionA: string;
    sectionB: string;
    sectionC: string;
    sectionD: string;
    footer: string;
  }
> = {
  rofan: {
    edition: "Vision3 Premiere",
    intro:
      "장르보다 먼저 브랜드가 보이고, 장면보다 오래 남는 무드가 느껴지는 하이엔드 OTT 홈.",
    sectionA: "Featured Story",
    sectionB: "Signature Picks",
    sectionC: "Story Chapters",
    sectionD: "Editorial Notes",
    footer:
      "화려한 세계, 위태로운 관계, 오래 남는 감정. 이 장르는 브랜드 안에서 더 선명하게 정리된다.",
  },
  romance: {
    edition: "Vision3 Premiere",
    intro:
      "장르보다 먼저 브랜드가 보이고, 장면보다 오래 남는 무드가 느껴지는 하이엔드 OTT 홈.",
    sectionA: "Featured Story",
    sectionB: "Signature Picks",
    sectionC: "Story Chapters",
    sectionD: "Editorial Notes",
    footer:
      "조용한 시선, 느린 감정선, 가까워지기 전의 거리감. 이 장르는 브랜드 안에서 더 깊게 보인다.",
  },
  sf: {
    edition: "Vision3 Premiere",
    intro:
      "장르보다 먼저 브랜드가 보이고, 장면보다 오래 남는 무드가 느껴지는 하이엔드 OTT 홈.",
    sectionA: "Featured Story",
    sectionB: "Signature Picks",
    sectionC: "Story Chapters",
    sectionD: "Editorial Notes",
    footer:
      "도시, 시스템, 기억의 균열. 차갑고 정교한 이야기일수록 강한 브랜드 프레임 안에서 더 힘이 생긴다.",
  },
  murim: {
    edition: "Vision3 Premiere",
    intro:
      "장르보다 먼저 브랜드가 보이고, 장면보다 오래 남는 무드가 느껴지는 하이엔드 OTT 홈.",
    sectionA: "Featured Story",
    sectionB: "Signature Picks",
    sectionC: "Story Chapters",
    sectionD: "Editorial Notes",
    footer:
      "기세와 정적, 문파의 질서와 검객의 결심. 이 장르는 절제된 편집 안에서 더 묵직하게 드러난다.",
  },
  horror: {
    edition: "Vision3 Premiere",
    intro:
      "장르보다 먼저 브랜드가 보이고, 장면보다 오래 남는 무드가 느껴지는 하이엔드 OTT 홈.",
    sectionA: "Featured Story",
    sectionB: "Signature Picks",
    sectionC: "Story Chapters",
    sectionD: "Editorial Notes",
    footer:
      "보이지 않기 때문에 더 오래 남는 불안. 이 장르는 과한 장식 없이 정리될수록 더 서늘해진다.",
  },
};

const activeChipClass =
  "border border-white/15 bg-white/10 text-white shadow-[0_8px_24px_rgba(255,255,255,0.08)]";
const idleChipClass =
  "border border-white/10 bg-white/[0.04] text-white/65 hover:bg-white/[0.08] hover:text-white";
const shellClass =
  "border border-white/10 bg-white/[0.05] shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl";
const softPanelClass =
  "border border-white/10 bg-white/[0.04] shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl";

export default function OttThreeShell({ activeGenre }: Props) {
  const content = discoverData[activeGenre];
  const images = genreImages[activeGenre];
  const meta = editionMeta[activeGenre];

  const heroImage = images[0];
  const sideImageA = images[1];
  const sideImageB = images[2];
  const sideImageC = images[3];

  const signatureCards = Array.from({ length: 6 }, (_, index) => ({
    title: content.panels[index % content.panels.length].title,
    desc: content.panels[index % content.panels.length].desc,
    tag: content.panels[index % content.panels.length].tag,
    image: images[index % images.length],
  }));

  const chapterCards = content.story.beats.map((beat, index) => ({
    chapter: `Chapter ${String(index + 1).padStart(2, "0")}`,
    title: beat,
    desc: content.notes[index % content.notes.length].desc,
    image: images[(index + 1) % images.length],
  }));

  const editorialCards = [
    {
      label: content.notes[0].label,
      title: content.notes[0].title,
      desc: content.notes[0].desc,
    },
    {
      label: content.notes[1].label,
      title: content.notes[1].title,
      desc: content.notes[1].desc,
    },
    {
      label: "Project Note",
      title: content.project.point,
      desc: content.project.desc,
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#182134_0%,#0d1320_30%,#090d16_60%,#05070d_100%)]" />
        <div className="absolute left-[-100px] top-[-90px] h-[360px] w-[360px] rounded-full bg-[#6c87ff]/14 blur-[120px]" />
        <div className="absolute right-[-90px] top-[100px] h-[320px] w-[320px] rounded-full bg-[#7ee6ff]/10 blur-[120px]" />
        <div className="absolute bottom-[-120px] left-[20%] h-[360px] w-[360px] rounded-full bg-[#ffffff]/[0.04] blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:34px_34px] opacity-[0.06]" />
      </div>

      <div className="mx-auto max-w-[1500px] px-4 py-6 md:px-6 lg:px-8">
        {/* header */}
        <header className="mb-6">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.30em] text-white/55">
                Vision3 OTT
              </p>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                OTT 3
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/65 sm:text-base">
                장르별 스킨보다 브랜드를 더 강하게 보여주는 프리미엄 에디토리얼 홈.
                이미지와 카피가 장르성을 만들고, 디자인은 하나의 서비스 정체성으로 통일돼.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Link
                href="/"
                className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white/70 transition hover:bg-white/[0.08] hover:text-white"
              >
                ← home
              </Link>

              {genreMenu.map((item) => {
                const isActive = item.key === activeGenre;

                return (
                  <Link
                    key={item.key}
                    href={`/ott/ott-3/${item.key}`}
                    className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                      isActive ? activeChipClass : idleChipClass
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </header>

        {/* hero */}
        <section className={`overflow-hidden rounded-[36px] ${shellClass}`}>
          <div className="grid gap-0 xl:grid-cols-[1.22fr_0.78fr]">
            <div className="relative min-h-[760px] overflow-hidden">
              <Image
                src={heroImage}
                alt={`${content.project.title} hero`}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 62vw"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,7,13,0.90)_10%,rgba(5,7,13,0.20)_44%,rgba(5,7,13,0.04)_100%)]" />

              <div className="absolute left-6 top-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white">
                  {meta.edition}
                </span>
                <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/75">
                  Brand Unified
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 xl:p-10">
                <div className="max-w-3xl">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/60">
                    {meta.sectionA}
                  </p>
                  <h2 className="mt-3 text-4xl font-extrabold leading-tight text-white sm:text-6xl">
                    {content.project.title}
                  </h2>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
                    {meta.intro}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    {[
                      ["Lead", content.protagonist.name],
                      ["Episode", content.project.episode],
                      ["Point", content.project.point],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-[18px] border border-white/12 bg-black/20 px-4 py-4"
                      >
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">
                          {label}
                        </p>
                        <p className="mt-2 text-sm font-semibold leading-6 text-white">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* 버튼 자리 - 사용자가 추가 */}
                  <div className="mt-7 flex flex-wrap gap-3" />
                </div>
              </div>
            </div>

            <div className="grid gap-0 border-l border-white/10">
              <article className="grid min-h-[250px] border-b border-white/10 md:grid-cols-[0.42fr_0.58fr] xl:min-h-[253px] xl:grid-cols-1">
                <div className="relative min-h-[220px] xl:min-h-[160px]">
                  <Image
                    src={sideImageA}
                    alt="side visual a"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 38vw"
                  />
                </div>
                <div className="p-5 xl:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/45">
                    Manifesto
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold text-white">
                    {content.hero.note}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/65">
                    {content.hero.desc}
                  </p>
                </div>
              </article>

              <article className="grid min-h-[250px] border-b border-white/10 md:grid-cols-[0.42fr_0.58fr] xl:min-h-[253px] xl:grid-cols-1">
                <div className="relative min-h-[220px] xl:min-h-[160px]">
                  <Image
                    src={sideImageB}
                    alt="side visual b"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 38vw"
                  />
                </div>
                <div className="p-5 xl:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/45">
                    Lead Profile
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold text-white">
                    {content.protagonist.name}
                  </h3>
                  <p className="mt-2 text-sm text-white/55">
                    {content.protagonist.role}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/65">
                    {content.protagonist.desc}
                  </p>
                </div>
              </article>

              <article className="grid min-h-[250px] md:grid-cols-[0.42fr_0.58fr] xl:min-h-[253px] xl:grid-cols-1">
                <div className="relative min-h-[220px] xl:min-h-[160px]">
                  <Image
                    src={sideImageC}
                    alt="side visual c"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 38vw"
                  />
                </div>
                <div className="p-5 xl:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/45">
                    Story Seed
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/65">
                    {content.story.desc}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {content.protagonist.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-white/75"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* signature grid */}
        <section className="pt-8">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">
                {meta.sectionB}
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-white">
                Signature Picks
              </h2>
            </div>
            <div className="text-sm font-semibold text-white/55">
              Curated Selection
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-[1.18fr_0.82fr]">
            <article className={`overflow-hidden rounded-[34px] ${softPanelClass}`}>
              <div className="relative h-[520px]">
                <Image
                  src={signatureCards[0].image}
                  alt={signatureCards[0].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 55vw"
                />
              </div>
              <div className="p-6 md:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                  {signatureCards[0].tag}
                </p>
                <h3 className="mt-3 text-3xl font-extrabold text-white">
                  {signatureCards[0].title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  {signatureCards[0].desc}
                </p>
              </div>
            </article>

            <div className="grid gap-5">
              {signatureCards.slice(1, 3).map((item, index) => (
                <article
                  key={`${item.title}-${index}`}
                  className={`overflow-hidden rounded-[30px] ${softPanelClass}`}
                >
                  <div className="grid md:grid-cols-[0.44fr_0.56fr]">
                    <div className="relative min-h-[220px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1280px) 100vw, 30vw"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                        {item.tag}
                      </p>
                      <h3 className="mt-3 text-2xl font-extrabold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-white/65">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* chapters */}
        <section className="pt-8">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">
                {meta.sectionC}
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-white">
                Narrative Wall
              </h2>
            </div>
            <div className="text-sm font-semibold text-white/55">
              {content.story.title}
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-3">
            {chapterCards.map((item, index) => (
              <article
                key={`${item.chapter}-${index}`}
                className={`overflow-hidden rounded-[32px] ${softPanelClass}`}
              >
                <div className="relative h-[320px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                    {item.chapter}
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/65">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* notes + stats */}
        <section className="pt-8">
          <div className="grid gap-5 xl:grid-cols-[0.92fr_1.08fr]">
            <div className="grid gap-5">
              {editorialCards.map((item) => (
                <article
                  key={item.title}
                  className={`rounded-[30px] p-6 md:p-7 ${softPanelClass}`}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">
                    {item.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/65">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {content.stats.map((stat) => (
                <article
                  key={stat.label}
                  className={`rounded-[30px] p-6 ${softPanelClass}`}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.20em] text-white/45">
                    {stat.label}
                  </p>
                  <h3 className="mt-4 text-4xl font-extrabold text-white">
                    {stat.value}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/65">
                    {stat.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* footer */}
        <section className="pb-8 pt-10">
          <article className={`overflow-hidden rounded-[38px] ${shellClass}`}>
            <div className="grid gap-0 xl:grid-cols-[0.94fr_1.06fr]">
              <div className="p-7 md:p-8 lg:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.26em] text-white/45">
                  Vision3 Premiere
                </p>
                <h3 className="mt-3 text-3xl font-extrabold text-white">
                  {meta.edition}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">
                  {meta.footer}
                </p>

                {/* 버튼 자리 - 사용자가 추가 */}
                <div className="mt-7 flex flex-wrap gap-3" />
              </div>

              <div className="grid grid-cols-2">
                {[heroImage, sideImageA, sideImageB, sideImageC].map((image, index) => (
                  <div key={`${image}-${index}`} className="relative min-h-[180px]">
                    <Image
                      src={image}
                      alt={`footer collage ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1280px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}