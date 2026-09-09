import Link from 'next/link';
import TiltCard from './TiltCard';
import Magnetic from './Magnetic';
import Reveal from './Reveal';
import CountUp from './CountUp';
import ContactForm from './ContactForm';
import { FiArrowUpRight } from 'react-icons/fi';
import styles from './Portfolio.module.css';

const projects = [
  { name: 'BeMe', category: 'Conversational AI', visual: 'beme', title: 'Sales conversations that close themselves.', description: 'AI assistance across messaging, email, and voice. Shared business knowledge meets tools that schedule appointments and keep conversations moving.', tags: ['Agent tools', 'Knowledge retrieval', 'Cross-channel context'], handover: 'A person steps in only when the customer asks for one or identity cannot be confirmed. Everything else, including the booking, runs without a human.', numbers: '20+ business owners onboarded. 1M+ calls handled.', detail: 'WhatsApp, Instagram, Messenger, SMS, Gmail, and Outlook workers connect to a shared AI response system. Context providers combine business information, conversation history, and document retrieval. Channel-specific prompts shape the response.', decision: 'Customer identity confirmation controls access to cross-channel history. Appointment tools connect to Google and Microsoft calendars and check availability before booking.' },
  { name: 'xAIa', category: 'Voice AI & integrations', visual: 'xaia', title: 'Patient booking, from the call to the record.', description: 'Voice and WhatsApp agents that book patient appointments directly into the Simplex system, and push leads into the CRM without anyone retyping them.', tags: ['Voice agents', 'Multi-turn retrieval', 'CRM integrations'], handover: 'The appointment lands in Simplex during the call. If the CRM sync fails, it queues and replays. A human sees it only if the replay fails too.', numbers: '30k+ calls and 350k conversations a month. 63 live agents in production.', detail: 'Organization-scoped conversations, a bounded knowledge-retrieval loop, and queued lead processing connect the AI experience to business operations. The Odoo integration includes a failed-sync queue and replay controls.', decision: 'A custom Hamsa–Vapi bridge selects Arabic or English voices, supports Arabic dialect configuration, and converts synthesized WAV audio into PCM at the requested sample rate.' },
  { name: 'Play Lounge', category: 'Product & systems engineering', visual: 'play', title: 'Guest admission with no one at the list.', description: 'An event platform connecting venues, host requests, invitations, RSVPs, and guest admission in one operational flow.', tags: ['Event operations', 'QR check-in', 'Access control'], handover: 'Invitations, RSVPs, and QR admission run on their own. Staff handle only the exceptions the system flags, and check-in state survives the list changing mid-event.', numbers: '1k+ venue bookings a month.', detail: 'Venue and event management connect to guest invitations, RSVP responses, QR admission, staff coordination, and automated email communication.', decision: 'Guest-list updates preserve check-in state during an event. Role-based access and dedicated verification-team workflows support the people managing admission.' },
  { name: 'Track Loop', category: 'Performance automation', visual: 'track', title: 'Performance measured from the work, not a form.', description: 'Time tracking software where the AI scores employee performance from the task itself: what was done, when it was submitted, and how QA and live feedback rated the quality.', tags: ['Task tracking', 'QA scoring', 'Live feedback'], handover: 'No review forms. The score builds continuously from every task. A manager looks only when a score moves sharply or feedback and QA disagree.', numbers: 'Prototype. Every feature above was built and demonstrated end to end; it has not run inside a company yet.', detail: 'Tasks, submission times, QA results, and live feedback flow into one record per person. The model weighs on-time delivery against quality signals and produces a running performance view instead of a quarterly opinion.', decision: 'Quality is judged from QA outcomes and feedback on the actual submission, never from hours logged alone. The exceptions list surfaces sharp changes and conflicting signals for a human to read.' },
];

const awards = [
  { img: '/top-champ.webp', title: 'Top Champ Award', org: 'xLoop Digital, Cloud Division', text: 'Ranked first in the division for coding quality and delivery. Given by the company where I learned to think in products instead of screens.' },
  { img: '/teknofest.jpeg', pos: 'center 62%', title: 'Top 50 of 500+ at Teknofest Pakistan', org: 'AI / SaaS category, PKR 20,000 prize', text: 'My startup idea: employee productivity measured from the work itself, with automated tracking and recommendations. That idea became Track Loop, the fourth system above.' },
  { img: '/uopeople-logo.jpg', title: '100% scholarship, BSc Computer Science', org: 'University of the People, USA', text: 'Full tuition covered on academic merit at an accredited American university.' },
];
const testimonials = [
  ['Hammad Ali', 'Full Stack Developer, colleague', 'His ability to lead teams, solve complex problems, and deliver high-quality code makes him a valuable asset to any tech team.'],
  ['Shoaib Ahmad', 'Founder, client', 'Thoroughly impressed by his punctuality in meeting project timelines. A promising professional any company can rely on for delivering exceptional user experience.'],
  ['Muhammad Rohan', 'Digital Innovation and Transformation, senior colleague', 'His ability to grasp complex concepts swiftly and apply them effectively is remarkable. He delivers high-quality results and meets tight deadlines.'],
  ['Noor Ahmed Raza Pirwani', 'UX Designer, XLoop Digital', 'A true team player, always willing to go the extra mile to support his colleagues and ensure the success of the project.'],
  ['Jack Martin', 'Software Engineering Contractor, mentor at XLoop', 'A fountain of limitless energy and knowledge. Any organisation would be lucky to have him. Everyone around him grows in confidence and skill.'],
];
const stats: [string, string][] = [['1M+', 'calls handled by BeMe agents for 20+ businesses'], ['30k+', 'calls and 350k conversations a month through xAIa'], ['1k+', 'venue bookings a month on Play Lounge']];

function Arrow() { return <FiArrowUpRight aria-hidden="true" />; }


export function Page({ children }: { children: React.ReactNode }) {
  return <div className={styles.portfolio}>
    <Reveal />
    <a className={styles.skip} href="#main">Skip to content</a>
    <header className={styles.header}><Link className={styles.wordmark} href="/" aria-label="Hunain Parekh home"><span className={styles.monogram}>hp.</span><span>Hunain Parekh<small>AI process automation engineer</small></span></Link><nav aria-label="Main navigation"><Link href="/work">Case studies</Link><Link href="/approach">How I work</Link><Link href="/about">Journey</Link></nav><a className={styles.headerContact} href="/#contact">Let’s talk</a></header>
    <main id="main">{children}</main><footer className={styles.footer}><span>© {new Date().getFullYear()} Hunain Parekh</span><div><a href="https://github.com/hunain-parekh" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://www.linkedin.com/in/hunain-parekh" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="#main">Back to top</a></div></footer>
  </div>;
}

export function PageHead({ title, intro }: { title: React.ReactNode; intro: React.ReactNode }) {
  return <section className={styles.pageHead}><div><h1>{title}</h1><p>{intro}</p></div></section>;
}

export function Cta() {
  return <section className={styles.cta}><h2>What does your team<br />still do by hand?</h2><Magnetic strength={0.2}><Link href="/#contact">Tell me about it <Arrow /></Link></Magnetic></section>;
}

export function Hero() {
  return <>
      <section id="home" className={styles.hero}>
        <div className={styles.heroIdentity}><div className={styles.heroCopy}><h1>Business processes that run themselves.</h1><p className={styles.heroStatement}>I’m Hunain. I automate whole processes with AI, from the first message or call to the record in your system, so a person steps in only when the system asks. Patient bookings, guest admission, sales conversations, employee performance reviews so far. Next, whatever your team still does by hand.</p><div className={styles.heroActions}><Magnetic><a className={styles.lightButton} href="#contact">Tell me what you do by hand <Arrow /></a></Magnetic><Link href="/work">See the case studies</Link></div></div><figure className={styles.heroPortrait}><TiltCard className={styles.portraitPanel} max={6}><img src="/hunain-cutout.webp" alt="Cartoon portrait of Hunain Parekh, wearing glasses and a charcoal blazer" width="800" height="1000" fetchPriority="high" /></TiltCard></figure></div>
      </section>
      <div className={styles.focusStrip} aria-label="Areas of focus"><span>Voice, WhatsApp, email intake</span><span>Actions in your existing systems</span><span>Performance scored from the work itself</span><span>Human handover only on exceptions</span></div>
      {stats.length > 0 && <section className={styles.proof} aria-label="Results"><dl>{stats.map(([value, label]) => <div key={label}><dt><CountUp value={value} /></dt><dd>{label}</dd></div>)}</dl></section>}
  </>;
}
export function About() {
  return <>
      <section id="about" className={styles.about}><div className={styles.portrait} data-reveal><img src="/hunain-desk.webp" alt="Hunain at his desk with a headset on, working at two screens" width="1280" height="853" loading="lazy" /></div><div><h2 data-reveal>Hi, I’m Hunain.</h2><p>I’m a software engineer in Karachi. My work grew from internal business tools into full-stack products, and then into systems that do the work themselves instead of helping a person do it.</p><p>The goal is simple to say and hard to do: take a process a business runs by hand, whether that is booking a patient or reviewing an employee, and make it run alone, with a person involved only when the system asks. I care about the unglamorous parts that make that hold: the identity check, the replay queue, the exceptions list someone actually reads.</p><a href="https://www.linkedin.com/in/hunain-parekh" target="_blank" rel="noopener noreferrer">More about my experience</a></div></section>
  </>;
}
export function Deliver() {
  return <>
      <section id="deliver" className={styles.approach}><div className={styles.sectionHeading} data-reveal><h2>What I deliver.</h2><p>A process that runs on its own, with a person only on exceptions. <br />The same four parts every time. <Link href="/approach">How each part works</Link></p></div><svg className={styles.flow} viewBox="0 0 1000 150" aria-hidden="true" focusable="false"><path className={styles.flowLine} d="M0 40 H1000" /><path className={styles.flowBranch} d="M500 40 C 560 40, 570 118, 640 118 H1000" /><text className={styles.flowText} x="1000" y="140" textAnchor="end">a person steps in, only on exceptions</text><text className={styles.flowText} x="0" y="22">work arrives</text>{[125, 375, 625, 875].map(x => <circle key={x} className={styles.flowNode} cx={x} cy="40" r="9" style={{ animationDelay: `${(x / 1000) * 6}s` }} />)}{[0, 1, 2, 3, 4].map(i => <circle key={i} className={styles.flowDot} r="6" style={{ animationDelay: `${i * 1.2}s` }} />)}<circle className={`${styles.flowDot} ${styles.flowException}`} r="6" style={{ animationDelay: "3.6s" }} /></svg><div className={styles.loop}>
        {[
          ['Intake', 'Agents on every channel the work arrives on: phone, WhatsApp, email, forms. English and Arabic.'],
          ['Decide', 'Explicit logic for what the model decides, what a rule decides, and exactly when a human is asked.'],
          ['Act', 'Tools that write straight into the systems you already run, with permissions inside the tool.'],
          ['Recover', 'Failed actions queue and replay. The exceptions list is the only thing a person reads.'],
        ].map(([stage, text]) => <div key={stage} className={styles.station} data-reveal><strong>{stage}</strong><p>{text}</p></div>)}
      </div></section>
  </>;
}
export function Work({ featured = false, bare = false }: { featured?: boolean; bare?: boolean }) {
  return <>
      <section id="work" className={styles.work}>{!bare && <div className={styles.sectionHeading} data-reveal><h2>{featured ? <>One process,<br />running without people.</> : <>Four processes<br />running without people.</>}</h2><p>{featured ? <>Patient bookings, from the phone call to the clinic record. <br /><Link href="/work">See all four case studies</Link></> : <>Each one used to need a person at every step. <br />The green line says where a human is still involved.</>}</p></div>}
        {(featured ? projects.filter(p => p.name === 'xAIa') : projects).map(project => <article key={project.name} className={styles.project} data-reveal><TiltCard className={`${styles.projectVisual} ${styles[project.visual]}`} max={5}><div className={styles.visualHeading}><strong>{project.name}</strong><span>System illustration</span></div>
          {project.visual === 'beme' ? <div className={styles.conversation}><div className={styles.message}>Can we schedule a visit for Friday?</div><div className={styles.tool}><span aria-hidden="true">✳</span><div>Business context retrieved<small>Checking calendar availability</small></div></div><div className={styles.reply}>Let’s find a time that works.</div><div className={styles.result}><span aria-hidden="true">✓</span> Booked. No human involved.</div></div> : project.visual === 'xaia' ? <div className={styles.voiceIllustration}><div className={styles.wave} aria-hidden="true">{Array.from({ length: 35 }, (_, i) => <i key={i} style={{ height: `${16 + Math.abs(Math.sin(i * 1.8) * Math.cos(i * .3)) * 78}px` }} />)}</div><span>Call in. Appointment out.</span><div className={styles.voiceTags}><span>Arabic</span><span>English</span><span>Simplex</span></div></div> : project.visual === 'play' ? <div className={styles.ticket}><div><small>You’re on the list.</small><strong>Good times.<br />Great company.</strong></div><div className={styles.ticketBottom}><span>Play Lounge<br /><small>Guest experience</small></span><span className={styles.ticketMark} aria-hidden="true">✳</span></div></div> : null}
          {project.visual === 'track' && <div className={styles.scorecard}><div className={styles.signals}><span>Task<strong>Invoice module shipped</strong></span><span>Submitted<strong>2 days early</strong></span><span>QA<strong>Passed, 1 minor</strong></span><span>Live feedback<strong>Client: “exactly what we asked”</strong></span></div><div className={styles.score}><small>Performance this week</small><strong>92</strong><i style={{ width: "92%" }} /></div></div>}
        </TiltCard><div className={styles.projectCopy}><h3>{project.title}</h3><p>{project.description}</p><p className={styles.automated}>{project.handover}</p><p className={styles.numbers}>{project.numbers}</p><div className={styles.tags}>{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{bare ? <div className={`${styles.caseStudy} ${styles.caseStudyOpen}`}><h4>How it works</h4><p>{project.detail}</p><h4>Engineering detail</h4><p>{project.decision}</p></div> : <details><summary>Inside the system <span aria-hidden="true">+</span></summary><div className={styles.caseStudy}><h4>How it works</h4><p>{project.detail}</p><h4>Engineering detail</h4><p>{project.decision}</p></div></details>}</div></article>)}
      </section>
  </>;
}
export function Approach({ bare = false }: { bare?: boolean }) {
  return <>
      <section id="approach" className={styles.approach}>{!bare && <><div className={styles.sectionHeading} data-reveal><h2>How a process<br />stops needing people.</h2><p>The same four parts, whatever the process is. <br />Get each one right and the handover rate falls.</p></div><svg className={styles.flow} viewBox="0 0 1000 150" aria-hidden="true" focusable="false"><path className={styles.flowLine} d="M0 40 H1000" /><path className={styles.flowBranch} d="M500 40 C 560 40, 570 118, 640 118 H1000" /><text className={styles.flowText} x="1000" y="140" textAnchor="end">a person steps in, only on exceptions</text><text className={styles.flowText} x="0" y="22">work arrives</text>{[125, 375, 625, 875].map((x, i) => <circle key={x} className={styles.flowNode} cx={x} cy="40" r="9" style={{ animationDelay: `${(x / 1000) * 6}s` }} />)}{[0, 1, 2, 3, 4].map(i => <circle key={i} className={styles.flowDot} r="6" style={{ animationDelay: `${i * 1.2}s` }} />)}<circle className={`${styles.flowDot} ${styles.flowException}`} r="6" style={{ animationDelay: "3.6s" }} /></svg></>}<div className={styles.loop}>
        {[
          ['Intake', 'Work arrives as a phone call, a WhatsApp message, an email, or a form, and someone has to read it and type it somewhere.', 'Agents on every channel the work comes in on, in English and Arabic, that understand the request and pull the context they need.'],
          ['Decide', 'The rules live in someone’s head. The system either guesses or asks a person every time. Performance is judged once a quarter from memory.', 'Explicit decision logic: what the model decides, what a rule decides, and the exact conditions under which a human is asked. Scores and decisions come from the work record, not from a form.'],
          ['Act', 'The decision is made, and now someone still has to put it into the calendar, the CRM, the clinic system.', 'Tools that write directly into the systems you already run, with identity checks and permissions inside the tool.'],
          ['Recover', 'Something fails at 2am and nobody finds out until a customer complains.', 'Failed actions queue and replay. State survives interruptions. The system reports what it could not do, so the exceptions list is the only thing a person reads.'],
        ].map(([stage, wrong, me]) => <dl key={stage} className={styles.station} data-reveal><strong>{stage}</strong><dt>Where people get stuck</dt><dd>{wrong}</dd><dt>What I build</dt><dd>{me}</dd></dl>)}
      </div></section>
  </>;
}
export function Processes() {
  return <>
      <section id="processes" className={styles.processes}><div className={styles.sectionHeading} data-reveal><h2>What I automate.</h2><p>Anything a business does the same way twice. <br />The pattern is always the same: find where work enters, where a decision is made, where a system gets updated, and where things break. Then remove the person from everything except the exceptions.</p></div><div className={styles.processGrid}>
        {[
          ['Bookings and appointments', 'Patients into a clinic system like Simplex. Venues, trips, and visits, from the request to the confirmed record and the reminder.'],
          ['Sales and customer conversations', 'Every channel a customer uses, with the answer, the booking, and the CRM update handled in the same flow.'],
          ['Hiring', 'I built the Recourse Loop applicant tracking system with Outlook scheduling by hand at Xloop. The automated version has the same shape: screening, scheduling, follow-ups, with a person only for the final decision.'],
          ['Employee performance', 'Scored continuously from tasks, submission times, QA results, and live feedback, the way Track Loop does it. No review forms, no quarterly guesswork.'],
          ['Operations inside the team', 'Task allocation from incoming work, approvals, and the follow-ups that keep a project moving without a manager chasing.'],
          ['Events and access', 'Invitations, RSVPs, QR admission, and staff coordination, with state that survives changes mid-event.'],
          ['Whatever you do by hand', 'If it happens the same way every time and a person still has to be there, it fits the pattern. Tell me the process and I will map it.'],
        ].map(([title, text]) => <article key={title} data-reveal><h3>{title}</h3><p>{text}</p></article>)}
      </div><p className={styles.processNote}>What I measure on every one: the handover rate. How often a person had to step in, and why. That number is the product.</p></section>
  </>;
}
export function Journey({ bare = false }: { bare?: boolean }) {
  return <>
      <section id="journey" className={bare ? styles.timelineOnly : styles.journey}>{!bare && <div className={styles.journeyIntro} data-reveal><h2>I learned how businesses<br />run before I automated one.</h2><p>Each role taught me another layer of the work companies do by hand. That is why I know where the person is hiding in a process, and what it takes to remove them safely.</p><Link href="/work">See where that led</Link></div>}<div className={styles.timeline}>
        {[
          ['2021–2022', 'Global Clicks', 'Learning what the work actually is.', 'As Assistant IT Manager, I handled internal support and built a Laravel leave module. My first look at how much of a company runs on someone remembering to do something.'],
          ['2022', 'Cloud Data', 'Building the operational backbone.', 'Inventory and courier systems in .NET with SQL Server, barcode integration, and Google Maps tracking. The kind of system an automation later has to write into.'],
          ['2022–2024', 'Xloop Digital Services', 'Growing into product engineering.', 'ABHI, Gov Finder, timeline visualization, and the Recourse Loop ATS with Outlook integration. My first hiring pipeline, built by hand.'],
          ['2024–2025', 'Blackhawk DM', 'Connecting bigger systems.', 'A dynamic website builder, NestJS microservices, and RabbitMQ messaging. Queues and retries stopped being theory.'],
          ['Since Aug 2025', 'Hashone Global', 'Removing the person from the process.', 'WhatsApp assistants, VAPI voice agents, Simplex and Bitrix24 integrations, Azure OpenAI. Whole processes, running without a hand-off.'],
        ].map(([period, company, title, description]) => <article key={company} data-reveal><span>{period} / {company}</span><h3>{title}</h3><p>{description}</p></article>)}
      </div></section>
  </>;
}
export function Recognition() {
  return <>
      <section id="recognition" className={styles.awards}><div className={styles.sectionHeading} data-reveal><h2>Recognition.</h2><p>A few times other people decided <br />the work was good.</p></div>
        <div className={styles.awardGrid}>{awards.map(aw => <article key={aw.title} data-reveal><img src={aw.img} alt="" width="480" height="360" loading="lazy" style={{ objectPosition: aw.pos }} /><h3>{aw.title}</h3><span>{aw.org}</span><p>{aw.text}</p></article>)}</div>
      </section>
  </>;
}
export function Research() {
  return <>
      <section id="research" className={styles.research}><div className={styles.sectionHeading} data-reveal><h2>What I’m still<br />working out.</h2><p>The open questions in automating <br />whole processes, and where I am with them.</p></div><div className={styles.researchRows}>
        <article data-reveal><h3>When should the system ask a human?</h3><p>Too early and you have automated nothing. Too late and you have a mess. I design the handover conditions explicitly for each process, and I keep looking for a general rule.</p></article>
        <article data-reveal><h3>How do you test a process, not a function?</h3><p>Unit tests do not catch a model that starts deciding differently. I build evals around the business outcome, and I am still learning which ones predict trouble.</p></article>
        <article data-reveal><h3>What does an exceptions list need to say?</h3><p>If a person only reads what the system could not do, that list is the whole interface. What it says, and how fast a person can act on it, decides whether the automation holds.</p></article>
        <article data-reveal><h3>Can a model judge a person’s work fairly?</h3><p>Track Loop scores from tasks, timing, QA, and feedback, never from hours alone. The open question is which signals predict real performance and which just reward being fast. I keep the weights visible so a manager can argue with them.</p></article>
      </div></section>
  </>;
}
export function Toolbox() {
  return <>
      <section className={styles.toolbox}><h2>The stack, by part.</h2><p>What each part of an automated process is built with.</p><dl>
        <div><dt>Intake</dt><dd>VAPI, Hamsa, Twilio, WhatsApp, Instagram, Messenger, SMS, Gmail, Outlook</dd></div>
        <div><dt>Decision</dt><dd>Azure OpenAI, retrieval pipelines, tool schemas, explicit rules, evals</dd></div>
        <div><dt>Systems it writes into</dt><dd>Simplex, Odoo, Bitrix24, Google and Microsoft calendars</dd></div>
        <div><dt>Backend and data</dt><dd>Node.js, NestJS, RabbitMQ, WebSockets, PostgreSQL, MongoDB, SQL Server, AWS S3</dd></div>
        <div><dt>Interface</dt><dd>TypeScript, React, Next.js, Tailwind CSS</dd></div>
      </dl></section>
  </>;
}
export function Code() {
  return <>
      <section id="code" className={styles.code}><div className={styles.sectionHeading} data-reveal><h2>Code you can read.</h2><p>Two repositories that show how I build, <br />outside client work I cannot publish.</p></div><div className={styles.codeGrid}>
        <a href="https://github.com/hunain-parekh/maqsam-oddo-automation" target="_blank" rel="noopener noreferrer" data-reveal><strong>Maqsam to Odoo sync</strong><span>Call records become CRM leads on a schedule. Deduplication, paging, and a state file that only advances after every record lands, so a failed Odoo run retries the same window instead of losing calls.</span><em>Node.js, n8n, Odoo</em></a>
        <a href="https://github.com/hunain-parekh/repoguard" target="_blank" rel="noopener noreferrer" data-reveal><strong>RepoGuard</strong><span>A git-aware scanner for injected code, malicious dependency changes, committed secrets, and history rewrites. Scores the signals a payload cannot drop and still work.</span><em>Go</em></a>
      </div></section>
  </>;
}
export function Testimonials() {
  return <>
      <section id="testimonials" className={styles.quotes}><div className={styles.sectionHeading} data-reveal><h2>What people say<br />after working with me.</h2><p>Colleagues, a client, and a mentor. <br /><a href="https://www.linkedin.com/in/hunain-parekh/details/recommendations/" target="_blank" rel="noopener noreferrer">Read them in full on LinkedIn</a></p></div><div className={styles.quoteStack} style={{ "--n": testimonials.length } as React.CSSProperties}>
        {testimonials.map(([name, role, text], i) => <blockquote key={name} style={{ animationDelay: `${i * 7}s` }}><p>{text}</p><footer>{name}<span>{role}</span></footer></blockquote>)}
      </div></section>
  </>;
}
export function Faq() {
  return <>
      <section className={styles.faq}><h2>A few things<br />you might ask.</h2><div><details><summary>What kind of role are you looking for?<span aria-hidden="true">+</span></summary><p>A senior engineering role where the job is to take real business processes and make them run without people. I’m most useful where the system has to act in other systems, not just answer questions.</p></details><details><summary>Does “automate everything” mean no humans at all?<span aria-hidden="true">+</span></summary><p>No. It means a person handles exceptions the system flags, instead of every step. Deciding exactly when to ask a human is part of the design, and I treat the handover rate as the main measure of the work.</p></details><details><summary>Can AI really score employee performance?<span aria-hidden="true">+</span></summary><p>It can score the work. Track Loop reads what was delivered, when, how QA rated it, and what the client said, and keeps a running score. A manager still owns the conversation and the final call. The system removes the form-filling and the guesswork, not the manager.</p></details><details><summary>Do you only do the AI part?<span aria-hidden="true">+</span></summary><p>No. I build the interface, the backend, the queues, and the integrations around the model. The model is one part of the process.</p></details><details><summary>What’s the best way to start?<span aria-hidden="true">+</span></summary><p>Email me with one process your team does by hand, from where the work comes in to where it ends up. That gives us something concrete to talk about.</p><a href="mailto:hunain.parekh@hotmail.com">hunain.parekh@hotmail.com</a></details></div></section>
  </>;
}
export function Contact() {
  return <>
      <section id="contact" className={styles.contact}><h2 data-reveal>What does your team still do by hand?</h2><div className={styles.contactGrid}><div><p>Bookings, hiring, performance reviews, task allocation, approvals, follow-ups. If it happens the same way every time and a person still has to be there, that is the work I do. Describe it in the form, or reach me directly.</p><dl className={styles.details}><div><dt>Email</dt><dd><a href="mailto:hunain.parekh@hotmail.com">hunain.parekh@hotmail.com</a></dd></div><div><dt>Phone and WhatsApp</dt><dd><a href="tel:+923132967563">+92 313 296 7563</a></dd></div><div><dt>LinkedIn</dt><dd><a href="https://www.linkedin.com/in/hunain-parekh" target="_blank" rel="noopener noreferrer">linkedin.com/in/hunain-parekh</a></dd></div><div><dt>GitHub</dt><dd><a href="https://github.com/hunain-parekh" target="_blank" rel="noopener noreferrer">github.com/hunain-parekh</a></dd></div><div><dt>Based in</dt><dd>Karachi, Pakistan. Working with teams in any time zone.</dd></div></dl></div><ContactForm /></div></section>
  </>;
}

export default function Portfolio() {
  return <Page><Hero /><About /><Deliver /><Work featured /><Testimonials /><Contact /></Page>;
}
