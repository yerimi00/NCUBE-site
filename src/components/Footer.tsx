export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-10 grid gap-6 md:grid-cols-2">
        <div>
          <div className="text-lg font-semibold">N-CUBE · 한국외대 IT 학회</div>
          <p className="mt-2 text-sm text-white/60">
            “새로운 기술, 미래를 향한 도약, 그리고 연결”
          </p>
          <p className="mt-1 text-xs text-white/40">
            N-CUBE는 새로운(New) 기술을 연구하고, 미래(Next)를 준비하며, 지식과
            사람을 연결(Nexus)하는 컴퓨터공학부 학회입니다.
          </p>
        </div>
        <div className="flex items-end md:justify-end">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} N-CUBE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
