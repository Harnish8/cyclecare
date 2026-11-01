import Image from "next/image";
import logo from "../public/logo.jpg";
import Toc from "../components/Toc";
import LinkText from "../components/LinkText";
import { policyMeta, sections } from "./policyContent";

export default function PrivacyPolicyPage() {
  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <Image src={logo} alt="" width={40} height={40} className="logo logo-sm" priority />
          <span className="brand-name">CycleCare</span>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <Image src={logo} alt="CycleCare logo" width={88} height={88} className="logo logo-lg" priority />
            <h1>{policyMeta.title}</h1>
            <dl className="meta">
              <div>
                <dt>Last updated</dt>
                <dd>{policyMeta.lastUpdated}</dd>
              </div>
              <div>
                <dt>Developer</dt>
                <dd>{policyMeta.developer}</dd>
              </div>
              <div>
                <dt>Contact</dt>
                <dd>{policyMeta.contact}</dd>
              </div>
            </dl>
          </div>
        </section>

        <div className="layout">
          <aside className="toc-wrap">
            <Toc items={sections} />
          </aside>

          <div className="document">
            <blockquote className="draft-note">{policyMeta.note}</blockquote>

            {sections.map((s) => (
              <section
                key={s.id}
                id={s.id}
                className={`policy-section tone-${s.tone}${s.callout ? " is-callout" : ""}`}
                aria-labelledby={`${s.id}-title`}
              >
                <h2 id={`${s.id}-title`}>
                  <span className="badge" aria-hidden="true">{s.num}</span>
                  <span className="sr-only">{s.num}. </span>
                  {s.title}
                </h2>
                <p>
                  <LinkText text={s.body} />
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <Image src={logo} alt="" width={28} height={28} className="logo logo-xs" />
        <span>CycleCare</span>
      </footer>
    </>
  );
}
