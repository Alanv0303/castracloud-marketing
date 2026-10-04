import {
  ArrowRight, Github, ShieldCheck, Cloud, Network, Bug, Brain,
  CheckCircle2, Terminal, LockKeyhole, Activity, ChevronRight
} from "lucide-react";

const github = "https://github.com/Alanv0303/CastraCloud";

const features = [
  { icon: Cloud, title: "Cloud visibility", text: "Discover cloud resources and understand what is exposed across your environment." },
  { icon: ShieldCheck, title: "Posture management", text: "Find security misconfigurations and turn noisy cloud data into actionable findings." },
  { icon: Network, title: "Attack paths", text: "Connect assets, exposure and permissions to reveal realistic paths to impact." },
  { icon: Bug, title: "Vulnerability management", text: "Surface vulnerable workloads and prioritize issues that matter to your environment." },
  { icon: Brain, title: "AI security assistant", text: "Use your preferred LLM to investigate findings, summarize risk and accelerate triage." },
  { icon: LockKeyhole, title: "Security controls", text: "Built-in RBAC, MFA, tenant isolation and encrypted cloud credentials for the control plane." }
];

const steps = [
  ["01", "Connect", "Connect your cloud accounts and bring your environment into one security view."],
  ["02", "Discover", "Inventory resources and continuously evaluate them against security controls."],
  ["03", "Prioritize", "Move beyond severity scores with exposure, attack paths and contextual analysis."],
  ["04", "Remediate", "Give defenders the context they need to fix the highest-impact risks first."]
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#">
          <span className="brandMark"><span /></span>
          <span>Castra<span>Cloud</span></span>
        </a>
        <div className="navLinks">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#open-source">Open source</a>
        </div>
        <a className="navGithub" href={github} target="_blank" rel="noreferrer">
          <Github size={16} /> GitHub
        </a>
      </nav>

      <section className="hero">
        <div className="heroGlow" />
        <div className="eyebrow"><span className="pulse" /> OPEN-SOURCE CLOUD SECURITY PLATFORM</div>
        <h1>See the cloud<br /><em>the way an attacker does.</em></h1>
        <p className="heroText">
          CastraCloud is an open-source CSPM platform for discovering cloud risk,
          connecting exposure to attack paths, and helping security teams act faster.
        </p>
        <div className="heroActions">
          <a className="button primary" href={github} target="_blank" rel="noreferrer">
            View on GitHub <ArrowRight size={17} />
          </a>
          <a className="button secondary" href="#features">Explore the platform</a>
        </div>
        <div className="heroMeta">
          <span><CheckCircle2 size={14} /> AWS · GCP · Azure</span>
          <span><CheckCircle2 size={14} /> Go + Next.js</span>
          <span><CheckCircle2 size={14} /> MIT licensed</span>
        </div>

        <div className="productFrame">
          <div className="frameTop">
            <div className="windowDots"><i/><i/><i/></div>
            <span>castracloud / security overview</span>
            <span className="live"><Activity size={11}/> LIVE</span>
          </div>
          <div className="dash">
            <aside>
              <div className="miniLogo"><span className="brandMark small"><span/></span> CastraCloud</div>
              {["Overview", "Cloud Integrations", "Findings", "Attack Paths", "Vulnerabilities", "Compliance"].map((x, i) =>
                <div className={"sideItem " + (i === 0 ? "active" : "")} key={x}>{x}</div>
              )}
              <div className="sideBottom">AI Security Assistant</div>
            </aside>
            <div className="dashMain">
              <div className="dashHeader"><div><small>SECURITY OVERVIEW</small><h3>Cloud posture</h3></div><button>Last 24 hours ▾</button></div>
              <div className="statGrid">
                <Stat label="Resources" value="1,284" note="+12.4%" />
                <Stat label="Critical findings" value="18" note="−22.1%" />
                <Stat label="Attack paths" value="07" note="3 new" />
                <Stat label="Compliance" value="86%" note="+6.8%" />
              </div>
              <div className="dashGrid">
                <div className="panel chartPanel"><div className="panelHead"><span>Risk exposure</span><small>30 DAYS</small></div><div className="chart"><div className="gridline g1"/><div className="gridline g2"/><div className="gridline g3"/><svg viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M0 123 C55 112 70 125 105 100 S170 116 210 77 S275 92 315 57 S370 70 410 35 S455 53 500 18" fill="none" stroke="currentColor" strokeWidth="3"/><path d="M0 123 C55 112 70 125 105 100 S170 116 210 77 S275 92 315 57 S370 70 410 35 S455 53 500 18 V150 H0Z" fill="currentColor" opacity=".08"/></svg></div></div>
                <div className="panel findings"><div className="panelHead"><span>Top findings</span><small>VIEW ALL</small></div>{[["Public S3 bucket","Critical","Production"],["Over-permissive IAM role","High","AWS"],["Unencrypted database","High","Postgres"],["Open security group","Medium","Network"]].map(([a,b,c]) => <div className="finding" key={a}><span className={"severity " + b.toLowerCase()} /> <div><b>{a}</b><small>{c}</small></div><ChevronRight size={14}/></div>)}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="strip">
        <span>BUILT FOR SECURITY TEAMS</span>
        <b>DISCOVER</b><i>→</i><b>UNDERSTAND</b><i>→</i><b>PRIORITIZE</b><i>→</i><b>REMEDIATE</b>
      </section>

      <section className="section" id="features">
        <div className="sectionLabel">01 — CAPABILITIES</div>
        <div className="sectionIntro"><h2>One security view.<br /><span>Every cloud risk.</span></h2><p>From the first asset discovered to the final remediation, CastraCloud gives defenders the context to understand what matters.</p></div>
        <div className="featureGrid">{features.map(({icon: Icon, title, text}) => <article className="feature" key={title}><div className="iconBox"><Icon size={19}/></div><h3>{title}</h3><p>{text}</p><a href={github} target="_blank" rel="noreferrer">Explore <ArrowRight size={14}/></a></article>)}</div>
      </section>

      <section className="darkSection" id="how">
        <div className="sectionLabel">02 — WORKFLOW</div>
        <div className="sectionIntro"><h2>From cloud sprawl<br /><span>to clear action.</span></h2><p>Designed around the workflow security teams already follow: know what exists, understand the exposure, then fix what matters.</p></div>
        <div className="steps">{steps.map(([num,title,text]) => <div className="step" key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
      </section>

      <section className="aiSection">
        <div className="aiCopy"><div className="sectionLabel">03 — AI SECURITY ASSISTANT</div><h2>Bring your own intelligence.</h2><p>Use an OpenAI-compatible provider, Anthropic, Groq, DeepSeek, OpenRouter or Ollama to investigate findings without locking your security workflow to one model.</p><div className="providerRow"><span>OPENAI</span><span>ANTHROPIC</span><span>GROQ</span><span>OLLAMA</span></div></div>
        <div className="terminal"><div className="termHead"><Terminal size={14}/> AI / ANALYZE <span>●</span></div><div className="termBody"><p><b>› finding:</b> Publicly accessible production storage</p><p className="muted">Analyzing exposure, identity permissions and reachable assets…</p><p><b>› assessment:</b></p><p className="answer">This resource can be reached from the public internet and contains production data. The attached role also permits read access to related storage resources.</p><p className="risk">RISK <strong>CRITICAL</strong> <span>·</span> prioritize remediation</p></div></div>
      </section>

      <section className="openSection" id="open-source">
        <div className="openBadge"><Github size={18}/> OPEN SOURCE</div>
        <h2>Security should be<br /><span>open to everyone.</span></h2>
        <p>CastraCloud is built in the open so security teams and developers can inspect the code, run it themselves, contribute improvements and shape what comes next.</p>
        <div className="openActions"><a className="button primary" href={github} target="_blank" rel="noreferrer"><Github size={17}/> View repository</a><a className="button secondary" href={github + "#readme"} target="_blank" rel="noreferrer">Read the documentation <ArrowRight size={16}/></a></div>
        <div className="codeLine"><span>MIT</span><span>GO</span><span>NEXT.JS</span><span>POSTGRESQL</span><span>AWS · GCP · AZURE</span></div>
      </section>

      <footer><a className="brand" href="#"><span className="brandMark"><span/></span><span>Castra<span>Cloud</span></span></a><p>Open-source cloud security, built for defenders.</p><a href={github} target="_blank" rel="noreferrer"><Github size={17}/></a><small>© 2026 CastraCloud · MIT License</small></footer>
    </main>
  );
}

function Stat({label,value,note}:{label:string,value:string,note:string}) {
  return <div className="stat"><small>{label}</small><strong>{value}</strong><span>{note}</span></div>
}