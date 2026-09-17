/* Josh V. Cinense — portfolio behaviour
   content data, terminal, matrix rain, reveal, parallax, hover trace, mobile nav */

var DATA = {
  ops: [
    { k: "Active Directory & account administration", d: "Account provisioning and lifecycle through ADUC — attributes, UPN and SamAccountName corrections, group and OU placement, GPO troubleshooting — plus tenant and control-panel administration across the estate." },
    { k: "Identity & lockout forensics", d: "Lockout and authentication tracing from security event-log sub-status codes and logon types, stale credentials held by services or scheduled tasks, and privileged access hygiene." },
    { k: "Compromised account investigation", d: "Intune and Entra log triage, sign-in and unified audit review for suspicious activity, session and credential response, and post-incident write-up of what was reached and when." },
    { k: "Directory sync & log analysis", d: "Azure AD Connect faults — ImmutableID mismatches, connector-space and attribute-flow errors — correlated across event logs and audit data to a single documented root cause." },
    { k: "Device onboarding & lifecycle", d: "New-device setup and provisioning, reformats and rebuilds, profile and data migration, enrolment and policy application, through to handover with the user actually working." },
    { k: "Application support", d: "App-specific troubleshooting across the line-of-business software each client runs — installs, licensing, configuration, integration faults and the escalations vendors would rather avoid." },
    { k: "Email security", d: "Full header tracing, SPF/DKIM/DMARC analysis, BEC and phishing campaign investigation, quarantine and filter policy tuning, spoof testing." },
    { k: "Network & VPN", d: "FortiGate policy and IPsec phase negotiation, NAT and VIP misconfigurations, client VPN credential conflicts, DNS and routing investigations." },
    { k: "Endpoint & malware", d: "Remote remediation through RMM, Bitdefender GravityZone cleanup, NOC alert response for disk, memory and offline devices." },
    { k: "Situational breakages & recovery", d: "The unplanned kind: servers down after an outage, file shares unreachable, site-wide connectivity loss. Restore service under pressure, then remove the cause." },
    { k: "Server & infrastructure", d: "Post-outage recovery, BIOS-level fixes, depot repair dispatch, file-server and domain-controller health monitoring." },
    { k: "Backup & data integrity", d: "Scheduled-task backup failures, NTFS ownership and ACL repair, BitLocker recovery-key compliance audits across workstation estates." },
    { k: "Hardware, procurement & vendor escalation", d: "Spec, sourcing and international shipping coordination; server EOL/EOSL audits; ISP circuit escalation, on-site technician coordination, and formal written escalation when vendor installs stall." }
  ],
  principles: [
    { n: "01", t: "Not a spec of dust left unlifted", d: "I go through everything. Not the parts that looked relevant — everything. If there's a corner I haven't checked I already know it's there, and it bothers me until I've been in it. Thoroughness isn't a stage of the work for me, it's the whole way I move through it." },
    { n: "02", t: "I need to know why", d: "If a fix landed and I can't explain the mechanism, I keep pulling until the cause has a name. Anything I can't explain tends to come back, and I would rather meet it now than at 2am." },
    { n: "03", t: "Verified, not remembered", d: "I don't run on recall. I read the documentation, test against something disposable before anything real is touched, and confirm the behaviour matches what the docs promised — then write it down with the exact syntax, addresses and error codes so it's reproducible by anyone." },
    { n: "04", t: "Always moving", d: "I don't have an idle setting. When I'm not deep in a system I'm studying, taking on games, websites and IoT builds as commissions, or competing in CTFs — the same restlessness that makes me finish things properly is what keeps me building past what the day asked for." }
  ],
  tools: [
    { g: "Identity & directory", i: ["Active Directory", "ADUC", "ADSI attributes", "Group Policy / GPMC", "Azure AD Connect", "Microsoft Entra / Azure AD", "Microsoft 365 / Exchange", "Exchange on-prem", "Windows Admin Center", "Google Admin Console", "Control Panel administration"] },
    { g: "Log analysis & investigation", i: ["Windows Event Viewer", "PowerShell Get-WinEvent", "Sysmon", "Wireshark", "Entra sign-in logs", "M365 Unified Audit Log", "MXToolbox", "Message Header Analyzer"] },
    { g: "Endpoint & management", i: ["NinjaOne", "Splashtop", "Microsoft Intune", "Intune log triage", "Microsoft Defender", "Bitdefender GravityZone", "Zabbix", "BitLocker"] },
    { g: "Email & threat protection", i: ["Proofpoint", "Barracuda", "SpamHero", "Microsoft Purview", "SPF / DKIM / DMARC"] },
    { g: "Network & firewall", i: ["FortiGate", "FortiClient VPN", "OPNsense", "IPFire", "Pi-hole", "Tailscale", "Cloudflare", "Cloudflare Tunnels"] },
    { g: "Offensive security & CTF", i: ["Burp Suite", "OWASP ZAP", "Nmap", "Metasploit", "sqlmap", "ffuf / Gobuster", "Nikto", "Hydra", "John the Ripper", "Hashcat", "Ghidra", "pwntools", "Nuclei", "Nessus", "OpenVAS", "Snyk", "CyberChef", "Shodan", "Qualys SSL Labs"] },
    { g: "Forensics & analysis", i: ["Autopsy", "binwalk", "steghide", "ExifTool", "VirusTotal", "Any.run"] },
    { g: "Scripting & automation", i: ["PowerShell", "Batch", "Python", "n8n", "robocopy", "takeown / icacls", "Scheduled Tasks"] },
    { g: "Servers & virtualization", i: ["Windows Server", "Linux", "Hyper-V", "Proxmox", "Docker", "Portainer", "Microsoft Azure"] },
    { g: "Web development", i: ["PHP", "JavaScript", "HTML / CSS", "Tailwind CSS", "Bootstrap", "jQuery", "REST APIs", "MySQL / MariaDB", "PDO", "Composer", "Flask", "Git"] },
    { g: "Game development", i: ["Godot 4", "GDScript", "Dialogic", "Branching narrative", "Save systems", "Game UI", "Pixel art", "Desktop export"] },
    { g: "Other languages", i: ["C#", "Java", "C++", "SQL", "Flutter / Firebase"] },
    { g: "Embedded & IoT", i: ["ESP32", "Arduino IDE", "esptool", "C++", "Sensor integration", "Voltage dividers", "Firebase Firestore"] },
    { g: "Practice ranges", i: ["TryHackMe", "Hack The Box", "LetsDefend", "picoCTF", "OverTheWire"] },
    { g: "Coursework", i: ["Cisco Networking Academy", "Network Defense", "Cyber Threat Management", "Operating Systems Basics", "Python Programming Essentials"] }
  ],
  roles: [
    { tag: "CURRENT", period: "Aug 2025 — Present", place: "Nueva Ecija, PH · On-site", title: "Technical Support Specialist · Global Service Desk", org: "MotivIT", bullets: [
      "Front-line support across a multi-client managed estate — healthcare, legal, logistics, manufacturing, construction and hospitality — on a high-volume queue spanning identity, network, email security, endpoint and server work.",
      "Active Directory and hybrid identity are the bulk of the work: lockout and authentication forensics from security event-log sub-status codes and logon types, Azure AD Connect sync and attribute-flow failures, and stale service credentials.",
      "Log analysis is the default method — correlate event logs and sign-in audit data to one root cause, and handle situational breakages (servers or shares down, site-wide connectivity loss) by restoring service first and removing the cause after.",
      "Investigate email threats end to end — header tracing, SPF/DKIM/DMARC analysis, BEC campaign documentation, and quarantine and filter policy tuning.",
      "Troubleshoot firewall and VPN faults including IPsec phase negotiation, NAT policy and VIP misconfiguration, and coordinate ISP and hardware vendor escalations to resolution.",
      "Automate the repeatable parts: PowerShell and batch scripting deployed through RMM, plus reusable runbooks so recurring issues get closed permanently.",
      "Write documentation to an engineering standard — standard work instructions, root cause analyses and client-facing reports with exact syntax, error codes and evidence."
    ] },
    { tag: "SECURITY", period: "2025", place: "Nueva Ecija, PH", title: "Cybersecurity OJT", org: "NEECO II Area I — CITET Department", bullets: [
      "Ran vulnerability assessments and penetration tests across web and network infrastructure.",
      "Analyzed security flaws, documented risk, and proposed prioritized mitigations.",
      "Built a lab environment to simulate threats and validate defenses.",
      "Produced both technical and executive reporting for stakeholders."
    ] },
    { tag: "FOUNDER", period: "2023 — 2025", place: "JPCS OLSHCO Chapter", title: "Founder & Director — Special Projects", org: "Philippine Computer Society, OLSHCO Chapter", bullets: [
      "Founded the chapter's BSIT Special Projects arm and served as its Director, setting up how the chapter ran technical projects and competitive events.",
      "Founded and captained Cy83r_Cru54d3r5, the chapter's capture-the-flag team.",
      "Led the team through HACKFORGOV Region 3 in 2023 (6th) and 2024 (10th), alongside open competitions across the year.",
      "Competed across web exploitation, cryptography, reverse engineering and forensics."
    ] },
    { tag: "FULL STACK", period: "2024 — 2025", place: "Guimba, PH", title: "Full Stack Web Developer & System Administrator", org: "Romel Garcia Digital Video and Photography", bullets: [
      "Built and maintained the company website plus its hosting and server administration.",
      "Designed backend infrastructure — database architecture, API integrations, media delivery.",
      "Optimized a scalable store for high-resolution media with fast load times and reliability."
    ] },
    { tag: "LEAD", period: "2024", place: "Guimba, PH", title: "Lead Developer — Work Immersion Website", org: "Dr. Ramon De Santos National High School", bullets: [
      "Owned backend logic, database design, UI/UX planning, hosting, and deployment.",
      "Acted as project lead: coordinated the team and delivered on schedule.",
      "Delegated front-end and documentation work while holding technical architecture."
    ] }
  ],
  projects: [
    { idx: "01", d: "security", name: "Cybersecurity Homelab", kind: "Infrastructure & virtualization", blurb: "Fully virtualized lab for offensive and defensive research — Proxmox host, Docker/Portainer services, OPNsense segmentation. Used for pen-testing simulations, malware analysis, and threat intel.", tech: ["Proxmox", "Docker", "Portainer", "OPNsense", "Linux"] },
    { idx: "02", d: "security", name: "Self-Hosted Infrastructure", kind: "System administration", blurb: "Home server running web and media services with secure remote access over Cloudflare Tunnels. Built for uptime — monitoring, backups, and zero exposed ports.", tech: ["Linux Server", "Cloudflare", "Docker", "High Availability"] },
    { idx: "03", d: "security", name: "Cy83r_Cru54d3r5 — CTF Team", kind: "Competitive hacking · founder & captain", blurb: "Founded and captain the team under the JPCS OLSHCO chapter. Competing across web exploitation, cryptography, reverse engineering and forensics — 6th at HACKFORGOV Region 3 in 2023, 10th in 2024, top 17% at MetaCTF Flash.", tech: ["CTF", "Web Exploitation", "Cryptography", "Reverse Engineering", "Forensics"] },
    { idx: "04", d: "security", name: "Custom Arch Linux Security Distro", kind: "Red / blue / purple team OS", blurb: "Self-built Arch-based distribution tuned for offensive, defensive, and threat-hunting workflows. Customized Hyprland and KDE desktops, tooling preloaded, built for speed.", tech: ["Arch Linux", "Hyprland", "KDE", "Red Team", "Blue Team", "Ricing"] },
    { idx: "05", d: "games", name: "Missing Presence", kind: "Game development · commissioned build", blurb: "Commissioned to turn a client’s art and script into a shipping game. Built the whole thing in Godot 4.6: five acts routing to good, neutral and bad endings through a tracked affinity variable, with autoloaded scene flow, save/autosave, transitions, SFX and cheat-code layers written in GDScript. Custom Dialogic VN theme, plus an in-game phone carrying social-media and whiteboard minigames. Art and writing by the client; engineering, systems and Windows release by me.", tech: ["Godot 4.6", "GDScript", "Dialogic", "Branching narrative", "Save system", "Windows export"] },
    { idx: "06", d: "games", name: "Pix-Tac-Toe", kind: "Game development", blurb: "Pixel-art tic-tac-toe built in Godot 4 — win detection, turn state and a full pixel UI pass. Small on purpose: a clean, finished, shippable loop.", tech: ["Godot 4", "GDScript", "Pixel art", "Game UI"] },
    { idx: "07", d: "web", name: "Rommel Garcia Appointment System", kind: "Full stack web development", blurb: "Production booking platform for a photography studio. Client-facing package browsing and appointment requests, plus an admin dashboard: live statistics, FullCalendar view with drag-to-reschedule, history with CSV export, bulk status operations, debounced search and a gallery CMS. RESTful PHP API over MySQL with bcrypt admin auth, PDO prepared statements throughout, output escaping and error logging — security built in, not bolted on.", tech: ["PHP", "MySQL / MariaDB", "PDO", "REST API", "Tailwind CSS", "Bootstrap", "jQuery", "FullCalendar", "Composer", "bcrypt"] },
    { idx: "08", d: "web", name: "Work Immersion Website", kind: "Full stack web development", blurb: "Led delivery of a production site for Dr. Ramon De Santos NHS — backend logic, database design, UI/UX, hosting, deployment, and coordination of the build team.", tech: ["Full Stack", "UI/UX", "Backend", "Deployment", "Project Management"] },
    { idx: "09", d: "hardware", name: "Vape Detection IoT System", kind: "Embedded hardware & firmware", blurb: "Designed, built and programmed a multi-sensor detector for school restrooms as a low-cost alternative to commercial units. Rather than alarming on particulates alone, firmware cross-references particulate, VOC, CO and climate readings through a 0–100 heuristic score to separate vaping from cigarettes from cooking smoke. Iterated to v8; events and 15-minute baselines stream to Firestore.", tech: ["ESP32", "Arduino IDE", "esptool", "C++", "PMS5003", "MQ-135 / MQ-7", "DHT22", "Firebase Firestore"] }
  ],
  skills: [
    { name: "Security operations & defense", items: ["Incident Response", "Log Analysis", "Network Security", "Cyber Defense", "Risk Assessment", "Cyber Threat Intelligence", "Computer Forensics", "Web Application Security"] },
    { name: "Offensive security", items: ["Web Exploitation", "Penetration Testing", "Vulnerability Assessment", "Reverse Engineering", "Cryptography", "Steganography", "Ethical Hacking", "CTF"] },
    { name: "Technical support & systems", items: ["Endpoint Support", "Ticket Triage", "Windows Server", "Linux", "Microsoft Azure", "Database Administration", "Remote Troubleshooting", "Documentation"] },
    { name: "Web development", items: ["PHP", "Back-End Web", "REST APIs", "Database Design", "Admin Dashboards", "Auth & Access Control", "Responsive UI", "Deployment"] },
    { name: "Game development", items: ["Godot 4", "GDScript", "Narrative Design", "Branching Systems", "Game Architecture", "Save Systems", "Shipping Builds"] },
    { name: "Development & delivery", items: ["Python", "C#", "Java", "OOP", "Version Control", "Project Management", "Team Leadership"] }
  ],
  certs: [
    { date: "Jan 2025", title: "MetaCTF Flash CTF — Top 17% (163/1000)", issuer: "MetaCTF" },
    { date: "Dec 2024", title: "SOC Member", issuer: "LetsDefend" },
    { date: "Nov 2024", title: "Security Concepts in Azure", issuer: "STYAVA.DEV" },
    { date: "Oct 2024", title: "Building a Cybersecurity Career", issuer: "Xaltius Academy" },
    { date: "Jun 2024", title: "HACKFORGOV 2024 Region 3 CTF — 10th place", issuer: "DICT Philippines" },
    { date: "Apr 2024", title: "Operating Systems Basics", issuer: "Cisco" },
    { date: "Jan 2024", title: "Network Defense", issuer: "Cisco" },
    { date: "Nov 2023", title: "Cyber Threat Management", issuer: "Cisco" },
    { date: "Nov 2023", title: "Python Programming Essentials", issuer: "DICT Philippines" },
    { date: "Sep 2023", title: "HACKFORGOV 2023 Region 3 CTF — 6th place", issuer: "DICT Philippines" },
    { date: "May 2023", title: "2nd Regional Cyber Security Conference", issuer: "Holy Angel University" },
    { date: "Jan 2023", title: "Founder & Director, Special Projects — OLSHCO Chapter", issuer: "Philippine Computer Society" },
    { date: "Oct 2022", title: "5th Regional Assembly on IT Education — Video Editing", issuer: "PSITE Central Luzon" }
  ],
  ticker: ["ACTIVE DIRECTORY & ENTRA", "HYBRID IDENTITY SYNC REPAIR", "EVENT LOG & SIGN-IN LOG ANALYSIS", "ROOT CAUSE ANALYSIS", "SPF / DKIM / DMARC FORENSICS", "FIREWALL & IPSEC VPN", "ENDPOINT REMEDIATION", "POWERSHELL · BATCH", "BURP · NMAP · GHIDRA · AUTOPSY", "GODOT 4 · GDSCRIPT", "PHP · MYSQL · REST APIS", "HACKFORGOV R3 — 10TH"],
  chips: ["help", "whoami", "motivit", "tickets", "stack", "ls projects", "team", "games", "web", "iot", "certs", "contact"]
};

var el = function (tag, cls, html) {
  var n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};
var esc = function (s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

/* ---------- render content ---------- */
function render() {
  var ops = document.getElementById("ops");
  DATA.ops.forEach(function (o) {
    var c = el("div", "card", "<h3>" + esc(o.k) + "</h3><p>" + esc(o.d) + "</p>");
    c.setAttribute("data-reveal", "1");
    c.setAttribute("data-trace", "1");
    ops.appendChild(c);
  });

  var pr = document.getElementById("principles");
  DATA.principles.forEach(function (p) {
    var c = el("div", "card", '<div class="card-num">' + p.n + "</div><h3>" + esc(p.t) + "</h3><p>" + esc(p.d) + "</p>");
    c.setAttribute("data-reveal", "1");
    c.setAttribute("data-trace", "1");
    pr.appendChild(c);
  });

  var tg = document.getElementById("tools-grid");
  DATA.tools.forEach(function (t) {
    var items = t.i.map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("");
    var c = el("div", "tool", '<div class="card-label">' + esc(t.g) + '</div><div class="tool-items">' + items + "</div>");
    c.setAttribute("data-reveal", "1");
    c.setAttribute("data-trace", "1");
    tg.appendChild(c);
  });

  var rs = document.getElementById("roles");
  DATA.roles.forEach(function (r) {
    var lis = r.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("");
    var c = el("div", "role",
      '<div class="role-head"><div class="role-id"><span class="tag">' + r.tag + '</span>' +
      '<span class="role-title">' + esc(r.title) + '</span><span class="role-org">' + esc(r.org) + "</span></div>" +
      '<span class="role-when">' + esc(r.period) + "<br>" + esc(r.place) + "</span></div><ul>" + lis + "</ul>");
    c.setAttribute("data-reveal", "1");
    c.setAttribute("data-trace", "1");
    rs.appendChild(c);
  });

  var pw = document.getElementById("projects-rows");
  DATA.projects.forEach(function (p) {
    var tech = p.tech.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("");
    var row = el("div", "prow");
    row.setAttribute("data-disc", p.d);
    row.innerHTML =
      '<button class="prow-head" type="button" aria-expanded="false">' +
        '<span class="prow-id">' + p.idx + "</span>" +
        '<span class="prow-name">' + esc(p.name) + "</span>" +
        '<span class="prow-kind">' + esc(p.kind) + "</span>" +
        '<span class="prow-open">open</span>' +
      "</button>" +
      '<div class="prow-body"><div class="prow-inner">' +
        '<p class="prow-sum">' + esc(p.blurb) + "</p>" +
        '<div class="prow-tech">' + tech + "</div>" +
      "</div></div>";
    pw.appendChild(row);
  });

  var rows = [].slice.call(pw.querySelectorAll(".prow"));
  rows.forEach(function (row) {
    row.querySelector(".prow-head").addEventListener("click", function () {
      var isOpen = row.classList.contains("open");
      rows.forEach(function (r) {
        r.classList.remove("open");
        r.querySelector(".prow-head").setAttribute("aria-expanded", "false");
        r.querySelector(".prow-open").textContent = "open";
      });
      if (!isOpen) {
        row.classList.add("open");
        this.setAttribute("aria-expanded", "true");
        row.querySelector(".prow-open").textContent = "close";
      }
    });
  });

  var filters = document.getElementById("proj-filters");
  var counts = { all: DATA.projects.length };
  DATA.projects.forEach(function (p) { counts[p.d] = (counts[p.d] || 0) + 1; });
  [["all", "everything"], ["security", "security & infra"], ["web", "web"], ["games", "games"], ["hardware", "hardware"]].forEach(function (f, i) {
    var b = el("button", i === 0 ? "pf on" : "pf", esc(f[1]) + ' <i>' + (counts[f[0]] || 0) + "</i>");
    b.type = "button";
    b.addEventListener("click", function () {
      [].forEach.call(filters.children, function (x) { x.classList.remove("on"); });
      b.classList.add("on");
      rows.forEach(function (r) {
        var hit = f[0] === "all" || r.getAttribute("data-disc") === f[0];
        r.style.display = hit ? "" : "none";
      });
    });
    filters.appendChild(b);
  });

  var cs = document.getElementById("certs");
  DATA.certs.forEach(function (c) {
    cs.appendChild(el("div", "cert", "<b>" + esc(c.title) + "</b><i>" + esc(c.issuer) + "</i><em>" + c.date + "</em>"));
  });

  var sk = document.getElementById("skills");
  DATA.skills.forEach(function (g) {
    var items = g.items.map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("");
    sk.appendChild(el("div", "card", '<div class="card-label">' + esc(g.name) + '</div><div class="tool-items">' + items + "</div>"));
  });

  var tk = document.getElementById("ticker");
  var run = DATA.ticker.map(function (t, i) {
    return '<span' + (i % 4 === 1 ? ' class="amber"' : "") + ">" + esc(t) + "</span>";
  }).join("");
  tk.innerHTML = run + run;

  var ch = document.getElementById("term-chips");
  DATA.chips.forEach(function (c) {
    var b = el("button", null, esc(c));
    b.type = "button";
    b.addEventListener("click", function () { submit(c); });
    ch.appendChild(b);
  });
}

/* ---------- terminal ---------- */
var out, input;
var cmdLog = [], hIdx = -1;

var COMMANDS = ["help", "whoami", "motivit", "tickets", "stack", "ls projects", "games", "web", "iot",
  "cat experience", "certs", "skills", "linkedin", "contact", "resume", "education", "clients", "neofetch", "clear"];

function complete(partial) {
  var q = partial.trim().toLowerCase();
  if (!q) return null;
  var hits = COMMANDS.filter(function (c) { return c.indexOf(q) === 0; });
  return hits.length ? hits[0] : null;
}

function run(cmd) {
  var q = cmd.trim().toLowerCase();
  if (!q) return [""];
  if (q === "help") return [
    "whoami         who I am in one line",
    "motivit        my current role, in detail",
    "tickets        the support domains I cover",
    "stack          tools and platforms I work in",
    "ls projects    the project list",
    "iot            the vape-detection build, in detail",
    "team           the CTF team I founded",
    "games          what I've built in Godot",
    "web            web development work",
    "cat experience full role history",
    "certs          certifications, newest first",
    "skills         capability areas",
    "linkedin       my LinkedIn profile",
    "contact        every way to reach me",
    "resume         download the PDF",
    "education      degree and honors",
    "clear          wipe the scrollback"
  ];
  if (q === "whoami") return ["josh_cinense — Technical Support Specialist at MotivIT. Cybersecurity practitioner, full-stack developer, CTF competitor. Guimba, Central Luzon, PH."];
  if (q === "motivit" || q === "cat current_role.txt") return [
    "Technical Support Specialist · Global Service Desk · MotivIT · Full-time",
    "Aug 2025 — Present · Nueva Ecija, Central Luzon, PH · On-site",
    "",
    "Multi-client managed estate: ~15 organizations across healthcare, legal,",
    "logistics, manufacturing, construction and hospitality.",
    "AD & account administration · identity forensics · compromised account triage",
    "device onboarding · application support · email security · network & VPN",
    "endpoint · server recovery · backup integrity · automation",
    "→ run `tickets` for domains, `stack` for tooling."
  ];
  if (q === "tickets" || q === "ops" || q === "domains") return DATA.ops.map(function (o) { return "• " + o.k; });
  if (q === "stack" || q === "tools") return DATA.tools.map(function (t) { return t.g + ":\n  " + t.i.join(", "); });
  if (q === "clients") return ["~15 client organizations across healthcare, legal, logistics, manufacturing,", "construction, hospitality and professional services.", "Names withheld — client confidentiality."];
  if (q === "ls projects" || q === "ls" || q === "projects") return DATA.projects.map(function (p) { return p.idx + "  " + p.name + "  — " + p.kind; });
  if (q === "iot" || q === "vape" || q === "hardware") return [
    "Vape Detection IoT System — designed, built and programmed",
    "",
    "ESP32 (38-pin) · PMS5003 particulate · MQ-135 VOC · MQ-7 CO · DHT22 climate",
    "Voltage dividers on the MQ lines — 5V sensor output into 3.3V GPIO.",
    "",
    "Firmware v8: 0–100 heuristic score with guardrails, bypass paths,",
    "deferred classification and a tail guard. Cross-references all four",
    "sensors so vaping, cigarettes and cooking smoke are told apart",
    "instead of alarming on particulates alone.",
    "",
    "Firestore backend — vape_events for alerts, sensor_logs for 15-min baselines.",
    "Built for a senior high school as a low-cost alternative to commercial units."
  ];
  if (q === "games" || q === "gamedev" || q === "godot") return [
    "Game development — Godot 4, GDScript",
    "",
    "Missing Presence — commissioned visual novel. Client brought the art",
    "  and script; I turned it into a working game.",
    "  Five acts routing to good / neutral / bad endings via a tracked",
    "  affinity variable. Architecture written from scratch: autoloaded",
    "  scene flow, save + autosave, transitions, SFX, cheat codes.",
    "  Custom Dialogic VN theme, plus an in-game phone",
    "  with social-media and whiteboard minigames. Shipped as a Windows build.",
    "",
    "Pix-Tac-Toe — pixel-art tic-tac-toe. Small, finished, shippable."
  ];
  if (q === "web" || q === "webdev") return [
    "Web development",
    "",
    "Rommel Garcia Appointment System — PHP + MySQL booking platform.",
    "  Admin dashboard with live stats, FullCalendar drag-to-reschedule,",
    "  CSV export, bulk operations, gallery CMS. RESTful API, bcrypt auth,",
    "  PDO prepared statements and output escaping throughout.",
    "",
    "Work Immersion Website — led delivery for Dr. Ramon De Santos NHS.",
    "",
    "Stack: PHP · MySQL · Tailwind · Bootstrap · jQuery · Flask · REST"
  ];
  if (q === "team" || q === "ctf") return [
    "JPCS OLSHCO — Special Projects · founder & director, 2023 — 2025",
    "Cy83r_Cru54d3r5 — the chapter's CTF team · founder & captain",
    "",
    "Categories: web exploitation · cryptography · reverse engineering · forensics",
    "HACKFORGOV Region 3 — 6th (2023), 10th (2024)",
    "MetaCTF Flash — top 17% (163/1000)"
  ];
  if (q === "cat experience" || q === "experience" || q === "roles") return DATA.roles.map(function (r) { return r.period + "  " + r.title + " @ " + r.org; });
  if (q === "certs" || q === "ls certs" || q === "certifications") return DATA.certs.map(function (c) { return c.date + "  " + c.title + "  [" + c.issuer + "]"; });
  if (q === "skills" || q === "ls skills") return DATA.skills.map(function (g) { return g.name + ": " + g.items.slice(0, 5).join(", ") + "…"; });
  if (q === "linkedin" || q === "open linkedin") return ["linkedin.com/in/cinense-josh-vengco", "→ connect there for roles, referrals, and the full work history."];
  if (q === "contact") return ["email      jacercinense@gmail.com", "linkedin   linkedin.com/in/cinense-josh-vengco", "github     github.com/JASHiNSENNiN", "phone      +63 926 900 3279", "discord    _j4shin"];
  if (q === "resume" || q === "cv") return ["→ src/CinenseJoshResumeV3.pdf — use the RÉSUMÉ button up top to download."];
  if (q === "education") return ["BS Information Technology, Cum Laude", "Our Lady of the Sacred Heart College of Guimba Inc.", "JPCS OLSHCO Chapter — Special Projects Director"];
  if (q === "neofetch") return ["OS      Arch Linux (custom security build)", "WM      Hyprland / KDE", "Host    homelab.proxmox", "Shell   zsh", "Uptime  3+ years in IT & security"];
  if (q.indexOf("sudo") === 0) return ["nice try. josh is not in the sudoers file. this incident has been logged."];
  if (q === "clear") return null;
  return ["command not found: " + cmd.trim() + " — try `help`"];
}

function submit(cmd) {
  if (!cmd || !cmd.trim()) return;
  var lines = run(cmd);
  if (lines === null) {
    out.innerHTML = "";
  } else {
    var entry = el("div", "term-entry");
    entry.appendChild(el("div", "term-cmd", '<span class="prompt">$</span> ' + esc(cmd.trim())));
    lines.forEach(function (l) { entry.appendChild(el("div", "term-line", esc(l))); });
    out.appendChild(entry);
  }
  cmdLog.push(cmd.trim());
  hIdx = cmdLog.length;
  input.value = "";
  out.scrollTop = out.scrollHeight;
}

/* ---------- matrix rain ---------- */
function rain(canvas) {
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  var glyphs = "01<>/$#@*{}[]ABCDEF".split("");
  var size = 14;
  var cols = Math.ceil(canvas.width / size);
  var y = [];
  for (var i = 0; i < cols; i++) y.push(Math.random() * -40);
  var live = true;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (e) { live = e[0].isIntersecting; }).observe(canvas);
  }
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) live = false;
    else live = canvas.getBoundingClientRect().bottom > 0;
  });
  setInterval(function () {
    if (!live) return;
    ctx.fillStyle = "rgba(8,10,9,0.09)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = size + "px monospace";
    for (var i = 0; i < cols; i++) {
      ctx.fillStyle = Math.random() > 0.97 ? "#d8ffe9" : "#3ddc84";
      ctx.fillText(glyphs[(Math.random() * glyphs.length) | 0], i * size, y[i] * size);
      y[i] = y[i] * size > canvas.height && Math.random() > 0.975 ? 0 : y[i] + 1;
    }
  }, 62);
}

/* ---------- motion: reveal, parallax, hover trace ---------- */
function motion() {
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // scroll progress — runs even with reduced motion (it's information, not decoration)
  var bar = document.getElementById("progress");
  function progress() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", progress, { passive: true });
  progress();

  // copy-to-clipboard
  [].forEach.call(document.querySelectorAll(".copy"), function (b) {
    b.addEventListener("click", function () {
      var val = b.getAttribute("data-copy");
      var done = function () {
        b.textContent = "copied";
        b.classList.add("done");
        setTimeout(function () { b.textContent = "copy"; b.classList.remove("done"); }, 1600);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(val).then(done, done);
      else done();
    });
  });

  if (reduced) return;

  // headline word reveal
  var h1 = document.querySelector("[data-split]");
  if (h1) {
    var words = h1.textContent.split(" ");
    h1.innerHTML = words.map(function (w, i) {
      return '<span class="w" style="transition-delay:' + (i * 55) + 'ms">' + esc(w) + "</span>";
    }).join(" ");
    h1.classList.add("split");
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { h1.classList.add("in"); });
    });
    // failsafe: once the run is over, drop the animation classes so the
    // headline can never be left hidden by a missed frame or interrupted paint
    setTimeout(function () {
      h1.classList.remove("split", "in");
      [].forEach.call(h1.querySelectorAll(".w"), function (w) { w.style.transitionDelay = ""; });
    }, 600 + words.length * 55);
  }

  // hero cursor spotlight
  var hero = document.querySelector(".hero");
  var spot = document.getElementById("hero-spot");
  if (hero && spot) {
    hero.addEventListener("mousemove", function (e) {
      var r = hero.getBoundingClientRect();
      spot.style.transform = "translate3d(" + (e.clientX - r.left) + "px," + (e.clientY - r.top) + "px,0)";
    }, { passive: true });
  }

  motionLayer();

  // hover border trace
  [].forEach.call(document.querySelectorAll("[data-trace]"), function (card) {
    var frame = el("div", "trace");
    card.appendChild(frame);
    card.addEventListener("mouseenter", function () {
      if (!frame.animate) { frame.style.opacity = "1"; frame.style.clipPath = "inset(0)"; return; }
      frame.animate([
        { opacity: 1, clipPath: "inset(0 100% 100% 0)" },
        { opacity: 1, clipPath: "inset(0 0 100% 0)", offset: 0.35 },
        { opacity: 1, clipPath: "inset(0 0 0 0)" }
      ], { duration: 520, easing: "cubic-bezier(.4,0,.2,1)", fill: "forwards" });
    });
    card.addEventListener("mouseleave", function () {
      if (!frame.animate) { frame.style.opacity = "0"; return; }
      frame.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 240, easing: "ease-out", fill: "forwards" });
    });
  });

}

/* ---------- motion layer — Motion (MIT), motion.dev ----------
   Springs and ScrollTimeline instead of hand-tuned CSS transitions.
   Loaded lazily: if the CDN is unreachable the page just renders static. */
var MOTION_SRC = "https://cdn.jsdelivr.net/npm/motion@13.4.0/+esm";

function motionGroups() {
  var hosts = ["#ops", "#principles", "#tools-grid", "#roles", "#projects-rows", "#certs", "#skills"];
  hosts.forEach(function (sel) {
    var host = document.querySelector(sel);
    if (!host) return;
    host.setAttribute("data-m-group", "1");
    [].forEach.call(host.children, function (c) { c.setAttribute("data-m", "1"); });
  });
  [].forEach.call(document.querySelectorAll(".sec-head, .method-head, .proj-filters, .foot-inner"), function (n) {
    n.setAttribute("data-m-group", "1");
    [].forEach.call(n.children, function (c) { c.setAttribute("data-m", "1"); });
  });
}

var releaseAll = function () {};

function motionLayer() {
  motionGroups();
  var root = document.documentElement;
  root.classList.add("pre");
  var give = setTimeout(function () { root.classList.remove("pre"); releaseAll(); }, 1500);
  // unconditional safety net: whatever happens above, nothing stays hidden
  setTimeout(function () { root.classList.remove("pre"); releaseAll(); }, 5000);

  import(MOTION_SRC).then(function (M) {
    clearTimeout(give);
    var animate = M.animate, scroll = M.scroll, inView = M.inView, stagger = M.stagger;
    var hover = M.hover, press = M.press;
    var rise = { type: "spring", stiffness: 340, damping: 30 };
    var guard = function (fn) { try { fn(); } catch (e) { root.classList.remove("pre"); } };

    // choreographed entrances, spring-driven, once per group.
    // Elements start hidden via the .pre CSS rule, not via a keyframe — so a
    // stalled timeline or a cancelled animation leaves them VISIBLE, never blank.
    guard(function () {
      inView("[data-m-group]", function (host) {
        var items = [].slice.call(host.querySelectorAll("[data-m]"));
        if (!items.length) return;
        items.forEach(function (el) { el.setAttribute("data-shown", "1"); });
        animate(items, { opacity: 1, y: [14, 0] },
          { delay: stagger(0.038), type: "spring", stiffness: 340, damping: 30 });
      }, { amount: 0.1 });
    });

    // release every group still waiting when the document is about to be
    // printed, captured, or hidden — cancel pending animations so CSS wins
    releaseAll = function () {
      [].forEach.call(document.querySelectorAll("[data-m]"), function (el) {
        el.setAttribute("data-shown", "1");
      });
      document.getAnimations().forEach(function (a) {
        if (a.playState !== "finished") { try { a.cancel(); } catch (e) {} }
      });
    };
    window.addEventListener("beforeprint", releaseAll);
    if (window.matchMedia) {
      var mq = window.matchMedia("print");
      if (mq.addEventListener) mq.addEventListener("change", function (e) { if (e.matches) releaseAll(); });
    }
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState !== "visible") releaseAll();
    });
    setTimeout(releaseAll, 8000);

    // scroll-linked hero — hardware-accelerated where ScrollTimeline exists
    guard(function () {
      var hero = document.querySelector(".hero");
      if (!hero) return;
      var span = { target: hero, offset: ["start start", "end start"] };
      scroll(animate(".rain", { y: [0, 130] }, { ease: "linear" }), span);
      scroll(animate(".hero-inner", { y: [0, 54], opacity: [1, 0.45] }, { ease: "linear" }), span);
    });

    // gesture springs — lift on hover, give on press
    guard(function () {
      if (hover) {
        hover(".card, .tool, .role", function (el) {
          animate(el, { y: -3 }, rise);
          return function () { animate(el, { y: 0 }, rise); };
        });
      }
      if (press) {
        press(".btn, .pf, .term-chips button, .prow-head, .copy", function (el) {
          animate(el, { scale: 0.972 }, { type: "spring", stiffness: 700, damping: 32 });
          return function () { animate(el, { scale: 1 }, { type: "spring", stiffness: 420, damping: 22 }); };
        });
      }
    });

  }).catch(function () {
    clearTimeout(give);
    root.classList.remove("pre");
    releaseAll();
  });
}

/* ---------- nav ---------- */
function nav() {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  [].forEach.call(links.querySelectorAll("a"), function (a) {
    a.addEventListener("click", function () {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  var sections = [].slice.call(document.querySelectorAll("section[id], footer[id]"));
  var queued = false;
  function mark() {
    var best = null;
    sections.forEach(function (s) {
      var t = s.getBoundingClientRect().top;
      if (t <= 140 && (!best || t > best.top)) best = { id: s.id, top: t };
    });
    var activeLink = null;
    [].forEach.call(links.querySelectorAll("a"), function (a) {
      var on = !!best && a.getAttribute("href") === "#" + best.id;
      a.classList.toggle("active", on);
      if (on) activeLink = a;
    });
    var ink = links.querySelector(".nav-ink");
    if (ink && window.innerWidth > 1100) {
      if (activeLink) {
        ink.style.width = activeLink.offsetWidth + "px";
        ink.style.transform = "translateX(" + activeLink.offsetLeft + "px)";
        ink.style.opacity = "1";
      } else {
        ink.style.opacity = "0";
      }
    } else if (ink) {
      ink.style.opacity = "0";
    }
  }
  window.addEventListener("scroll", function () {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () { queued = false; mark(); });
  }, { passive: true });
  mark();
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", function () {
  render();
  out = document.getElementById("term-out");
  input = document.getElementById("term-input");

  document.getElementById("term-form").addEventListener("submit", function (e) {
    e.preventDefault();
    submit(input.value);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) { e.preventDefault(); input.focus(); }
  });

  input.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!cmdLog.length) return;
      hIdx = Math.max(0, hIdx - 1);
      input.value = cmdLog[hIdx];
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!cmdLog.length) return;
      hIdx = Math.min(cmdLog.length, hIdx + 1);
      input.value = hIdx === cmdLog.length ? "" : cmdLog[hIdx];
    } else if (e.key === "Tab") {
      e.preventDefault();
      var hit = complete(input.value);
      if (hit) input.value = hit;
    }
  });

  rain(document.querySelector(".rain"));
  nav();
  motion();

  // console types its first command by itself
  if (!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
    var boot = "whoami", ci = 0;
    var t = setInterval(function () {
      if (ci > boot.length) { clearInterval(t); submit(boot); return; }
      input.value = boot.slice(0, ci);
      ci++;
    }, 95);
  }
});
