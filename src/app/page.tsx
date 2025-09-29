import Header from "@/components/Header";
import Footer from "@/components/Footer";

const activities: Record<string, string[]> = {
  "2025": [
    "AI/LLM 스터디(Hands-on): RAG·프롬프팅 실습",
    "오픈소스 기여 주간 · 깃허브 이슈 트라이",
    "캡스톤·해커톤 동아리 연합 세미나",
  ],
  "2024": [
    "웹 프론트엔드 스터디(Next.js + Tailwind)",
    "AWS 기초 인프라 실습 · CI/CD 파이프라인 입문",
    "알고리즘 풀이 나이트(월 1회)",
  ],
  "2023": [
    "모바일 앱(React Native) 미니프로젝트",
    "백엔드 기본기(REST, DB, ORM) 워크숍",
  ],
};

const LINKS = {
  github: "https://github.com/your-org-or-repo", // ← 깃허브 주소 넣기
  gmail: "mailto:yourid@gmail.com", // ← G-mail 주소 넣기
  instagram: "https://instagram.com/your-handle", // ← 인스타 주소 넣기
};

export default function Page() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="section">
        <div className="container grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 badge">
              N-CUBE : New · Next · Nexus
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
              새로운 기술,
              <br className="hidden md:block" />
              미래를 향한 도약,
              <br className="hidden md:block" />
              그리고 연결.
            </h1>
            <p className="mt-4 text-white/70">
              N-CUBE는 새로운(New) 기술을 연구하고, 미래(Next)를 준비하며,
              지식과 사람을 연결(Nexus)하는 한국외대 컴퓨터공학부 학회입니다.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#about" className="btn">
                학회 소개
              </a>
              <a href="#activities" className="btn">
                활동 살펴보기
              </a>
              <a href="#contact" className="btn">
                문의/참여
              </a>
            </div>
          </div>
          <div className="card p-6">
            <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-cyan-400/30 to-blue-400/20 grid place-items-center text-white/80">
              <div className="text-center">
                <div className="text-6xl">🧊</div>
                <div className="mt-2 text-sm">N-CUBE Showcase</div>
              </div>
            </div>
            <ul className="mt-6 grid gap-2 text-sm text-white/70">
              <li>• 정기 스터디 & 실습 (웹/모바일/AI)</li>
              <li>• 팀 프로젝트 & 해커톤 참여</li>
              <li>• 커리어 네트워킹 · 세미나</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container grid gap-8 md:grid-cols-2">
          <div className="card p-8">
            <h2 className="text-2xl font-bold">학회 소개</h2>
            <p className="mt-3 text-white/70">
              N-CUBE는 학습 → 적용 → 공유의 선순환을 지향합니다. 기초 다지기부터
              실전 프로젝트까지 단계적으로 성장해요.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 p-4">
                <div className="text-xl">🔬</div>
                <div className="mt-2 font-semibold">New</div>
                <div className="text-sm text-white/60">
                  최신 기술 트렌드 연구
                </div>
              </div>
              <div className="rounded-xl border border-white/10 p-4">
                <div className="text-xl">🚀</div>
                <div className="mt-2 font-semibold">Next</div>
                <div className="text-sm text-white/60">
                  프로젝트로 실전 역량 강화
                </div>
              </div>
              <div className="rounded-xl border border-white/10 p-4">
                <div className="text-xl">🧩</div>
                <div className="mt-2 font-semibold">Nexus</div>
                <div className="text-sm text-white/60">
                  사람과 지식을 잇는 네트워킹
                </div>
              </div>
              <div className="rounded-xl border border-white/10 p-4">
                <div className="text-xl">🏆</div>
                <div className="mt-2 font-semibold">Impact</div>
                <div className="text-sm text-white/60">
                  해커톤/공모전 도전 & 성과
                </div>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h3 className="text-xl font-bold">모집/운영</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
              <li>정기 활동: 스터디(주 1회) + 프로젝트/세미나(월 1~2회)</li>
              <li>분야: Web(Next.js), Mobile(RN/Expo), AI/LLM, DevOps</li>
              <li>참여 방식: 개인/팀 지원 → OT → 트랙 배치</li>
            </ul>
            <div className="mt-6">
              <a href="#contact" className="btn">
                지원/문의하기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section id="activities" className="section">
        <div className="container">
          <h2 className="text-2xl font-bold">년도별 활동</h2>
          <div className="mt-6 grid gap-4">
            {Object.entries(activities).map(([year, items]) => (
              <details key={year} className="card overflow-hidden">
                <summary className="cursor-pointer select-none bg-white/5 px-6 py-4 text-lg font-semibold">
                  {year}
                </summary>
                <ul className="px-6 py-4 text-sm text-white/80 space-y-2">
                  {items.map((it, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container grid gap-8 md:grid-cols-2">
          <div className="card p-8">
            <h2 className="text-2xl font-bold">문의 · 소셜</h2>
            <p className="mt-2 text-white/70">
              아래 채널로 언제든 연락 주세요.
            </p>
            <div className="mt-6 grid gap-3">
              <a
                className="btn"
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
              >
                깃허브
              </a>
              <a className="btn" href={LINKS.gmail}>
                G-mail
              </a>
              <a
                className="btn"
                href={LINKS.instagram}
                target="_blank"
                rel="noreferrer"
              >
                인스타그램
              </a>
            </div>
          </div>
          <div className="card p-8">
            <h3 className="text-xl font-bold">N-CUBE 소개문</h3>
            <p className="mt-3 text-sm text-white/70">
              N-CUBE : New, Next, Nexus — “새로운 기술, 미래를 향한 도약, 그리고
              연결”
              <br />
              N-CUBE는 새로운(New) 기술을 연구하고, 미래(Next)를 준비하며,
              지식과 사람을 연결(Nexus)하는 컴퓨터공학부 학회입니다!
            </p>
            <div className="mt-6">
              <a href="#activities" className="btn">
                활동 더 보기
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
