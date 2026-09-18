/* Josh V. Cinense — content + behaviour.
   Terminal identity kept. Canvas rain, auto-type boot and the sudo joke removed.
   Disclosure, reveals, sticky state and the ambient grid are CSS. */
var DATA = {
  domains: [
    { k: "Identity forensics and hybrid sync", t: "Entra · AD Connect",
      d: "Lockout and authentication forensics read from security event-log sub-status codes and logon types, tracing stale credentials held by services and scheduled tasks.",
      e: "Azure AD Connect ImmutableID mismatches, connector-space and attribute-flow errors." },
    { k: "Email threat investigation", t: "SPF · DKIM · DMARC",
      d: "Full header tracing, authentication record analysis, quarantine and filter policy tuning, spoof testing.",
      e: "Business email compromise and phishing investigation methodology." },
    { k: "Compromised account response", t: "Entra · Intune",
      d: "Sign-in and unified audit review, Intune log triage, session and credential revocation.",
      e: "Scoping and documenting access during an account compromise." },
    { k: "Log analysis and root cause", t: "Event logs · Audit data",
      d: "Correlating Windows event logs, sign-in logs and unified audit data down to a single cause, then documenting it with the exact syntax and error codes so it is reproducible.",
      e: "Log correlation is the default method, not the escalation path." },
    { k: "Active Directory and Group Policy", t: "ADUC · GPMC",
      d: "Account lifecycle in ADUC: UPN and SamAccountName corrections, OU and group placement, attribute edits through ADSI. GPO authoring and troubleshooting, not just reading the failures.",
      e: "Printer deployment by Group Policy, with auto-mapped network drives and driver distribution." },
    { k: "Microsoft 365 tenant administration", t: "M365 · Exchange",
      d: "Full tenant administration across the estate, not one console: Exchange Online mail flow and transport rules, shared and resource mailboxes, SharePoint and OneDrive, Teams, licence assignment and reclamation, retention and compliance policy.",
      e: "Tenant and control-panel administration in a multi-tenant environment." },
    { k: "Scripting and automation", t: "PowerShell · Batch",
      d: "PowerShell against AD and Microsoft Graph for bulk changes, audits and reporting. Batch and scheduled tasks for the rest, deployed through RMM so a fix applies across an estate instead of one machine.",
      e: "Runbooks written alongside the scripts." },
    { k: "Endpoint and device", t: "Intune · RMM",
      d: "Provisioning, rebuilds, profile and data migration, enrolment and policy application, remote remediation, GravityZone cleanup, NOC alert response for disk, memory and offline devices.",
      e: "Reformats and rebuilds, profile and data migration, depot repair dispatch." },
    { k: "Application support", t: "Line-of-business software",
      d: "Whatever software is in use, not a fixed list: installs, licensing, configuration, profile and data issues, integration faults between systems, and the problems vendors would rather not own.",
      e: "Taking a fault up with the vendor and staying on it until they fix their side." },
    { k: "Printers, peripherals and hardware", t: "Deployment · Procurement",
      d: "Driver and print-queue faults, deployment and mapping, scanner and peripheral setup. Spec and sourcing, warranty and depot repair dispatch, hardware EOL audits.",
      e: "Group Policy printer deployment with auto-mapped drives and driver distribution." },
    { k: "Network, server and recovery", t: "FortiGate · Windows Server",
      d: "Policy and IPsec phase negotiation, NAT and VIP misconfiguration, VPN credential conflicts, DNS and routing. Post-outage server recovery, file-share and domain-controller health, NTFS ownership and ACL repair, BitLocker key compliance audits.",
      e: "Post-outage recovery, connectivity loss, BIOS-level fixes, ISP and vendor escalation." }
  ],
  tools: [
    { g: "Directory and Group Policy", i: ["Active Directory", "ADUC", "ADSI Edit", "GPMC", "Group Policy authoring", "Print Management", "Drive and printer mapping", "Windows Admin Center"] },
    { g: "Microsoft 365 administration", i: ["M365 admin center", "Exchange Online", "Exchange on-prem", "SharePoint", "OneDrive", "Teams", "Licensing", "Purview", "Microsoft Entra ID", "Azure AD Connect"] },
    { g: "Scripting and automation", i: ["PowerShell", "Microsoft Graph", "Batch", "Scheduled Tasks", "robocopy", "takeown / icacls", "Python", "n8n"] },
    { g: "Log analysis", i: ["Event Viewer", "Get-WinEvent", "Entra sign-in logs", "M365 Unified Audit Log", "Sysmon", "Wireshark"] },
    { g: "Endpoint and monitoring", i: ["NinjaOne", "Microsoft Intune", "Defender", "Bitdefender GravityZone", "Zabbix", "Splashtop"] },
    { g: "Email security", i: ["Proofpoint", "Barracuda", "SpamHero", "MXToolbox", "Message Header Analyzer"] },
    { g: "Network and firewall", i: ["FortiGate", "FortiClient VPN", "OPNsense", "IPFire", "Cloudflare", "DNS", "NAT / VIP", "IPsec"] },
    { g: "Servers and virtualization", i: ["Windows Server", "Linux", "Proxmox", "Hyper-V", "VMware", "VirtualBox", "WSL2", "Azure"] },
    { g: "Self-hosting and containers", i: ["Proxmox", "Docker", "Portainer", "Nextcloud", "Pi-hole", "Tailscale", "Cloudflare Tunnels", "OPNsense", "IPFire", "Reverse proxy", "Backups and monitoring"] },
    { g: "OSINT and recon", i: ["Shodan", "Sherlock", "Google dorks", "whois", "Wayback Machine"] },
    { g: "Forensics and malware analysis", i: ["Any.run", "binwalk", "Aperisolve", "ExifTool", "file", "Autopsy", "VirusTotal"] },
    { g: "Security testing", i: ["Burp Suite", "Nmap", "Nikto", "Ghidra", "Nessus", "CyberChef", "Postman", "curl / wget"] },
    { g: "Build", i: ["PHP", "MySQL", "XAMPP", "JavaScript", "Godot 4", "ESP32 / Arduino", "Git"] }
  ],
  roles: [
    { from: "Aug 2025", to: "Present", place: "Nueva Ecija, PH", title: "Technical Support Specialist, Global Service Desk", org: "MotivIT", bullets: [
      "Front-line support in a multi-tenant managed services environment, across identity, email security, endpoint, network, server and application work.",
      "Active Directory and Microsoft 365 administration: Exchange Online, SharePoint, OneDrive, Teams, licensing, and Group Policy including printer and drive mapping deployment.",
      "Application support across whatever line-of-business and third-party software is in use: installs, licensing, configuration, integration faults, and taking it up with the vendor when it is their side.",
      "Printers, peripherals and hardware: driver and queue faults, deployment and mapping, spec and procurement, repair dispatch.",
      "Identity forensics: lockout and authentication tracing from event-log sub-status codes and logon types, directory sync and attribute-flow failures, stale service credentials.",
      "Log correlation as the default method, reducing event and sign-in audit data to a root cause and documenting it.",
      "Automation in PowerShell and batch deployed through RMM, with runbooks for recurring issues."
    ] },
    { from: "2025", to: "", place: "Nueva Ecija, PH", title: "Cybersecurity OJT — Vulnerability Assessment and Penetration Testing", org: "NEECO II Area I, CITET Department", bullets: [
      "Ran vulnerability assessments and penetration tests across web and network infrastructure.",
      "Analyzed security flaws, documented risk, and proposed prioritized mitigations.",
      "Built a lab environment to simulate threats and validate defenses.",
      "Produced both technical and executive reporting for stakeholders."
    ] },
    { from: "2023", to: "2025", place: "OLSHCO Chapter", title: "Founder and Director, Special Projects", org: "Philippine Computer Society", bullets: [
      "Founded the chapter's BSIT Special Projects arm and set up how it ran technical projects and competitive events.",
      "Founded and captained Cy83r_Cru54d3r5, the chapter's CTF team, through two years of regional competition."
    ] },
    { from: "2024", to: "2025", place: "Guimba, PH", title: "Full Stack Developer and System Administrator", org: "Romel Garcia Digital Video and Photography", bullets: [
      "Built and maintained the company site plus its hosting and server administration.",
      "Database architecture, API integrations and media delivery tuned for high-resolution assets."
    ] },
    { from: "2024", to: "", place: "Guimba, PH", title: "Lead Developer, Work Immersion Website", org: "Dr. Ramon De Santos National High School", bullets: [
      "Led the project end to end: set the technical architecture, owned backend logic, database design, UI/UX planning, hosting and deployment.",
      "Ran the team as lead — delegated front-end and documentation, coordinated against the schedule, and delivered on time."
    ] }
  ],
  lead: [
    { id: "ctf", d: "security", name: "Cy83r_Cru54d3r5", kind: "CTF team · founder and captain",
      blurb: "Founded and captain the CTF team under the JPCS OLSHCO chapter. Competing across web exploitation, cryptography, reverse engineering and forensics. Placed individually at HACKFORGOV Region 3: 6th in 2023, 10th in 2024. MetaCTF Flash: top 17%, 163rd of 1000 individually.",
      tech: ["Web exploitation", "Cryptography", "Reverse engineering", "Forensics", "Steganography"] },
    { id: "lab", d: "security", name: "Cybersecurity Homelab", kind: "Offensive and defensive research",
      blurb: "Fully virtualized lab for offensive and defensive research. Proxmox host, Docker and Portainer services, OPNsense segmentation. Used for pen-testing simulation, malware analysis and threat intel.",
      tech: ["Proxmox", "OPNsense", "Docker", "Portainer", "Linux"] },
    { id: "distro", d: "security", name: "Custom Arch Security Distro", kind: "Red / blue / purple team OS",
      blurb: "Self-built Arch-based distribution tuned for offensive, defensive and threat-hunting workflows. Customized Hyprland and KDE desktops, tooling preloaded, built for speed.",
      tech: ["Arch Linux", "Hyprland", "KDE", "Red team", "Blue team"] },
    { id: "vape", d: "hardware", name: "Vape Detection IoT System", kind: "Embedded firmware",
      blurb: "A multi-sensor detector built for a senior high school as a low-cost alternative to commercial units. Rather than alarming on particulates alone, the firmware cross-references particulate, VOC, CO and climate readings through a 0 to 100 heuristic score, so vaping, cigarettes and cooking smoke are told apart instead of setting off the same alert. Iterated to v8 against real false positives: match strikes, air freshener, warm exhale. Events and 15-minute baselines stream to Firestore.",
      tech: ["ESP32", "C++", "PMS5003", "MQ-135 / MQ-7", "DHT22", "Firestore"] },
    { id: "booking", d: "web", name: "Rommel Garcia Appointment System", kind: "Production web application",
      blurb: "A booking platform running for a photography studio. Client-facing package browsing and appointment requests, plus an admin dashboard with live statistics, a FullCalendar view with drag-to-reschedule, history with CSV export, bulk status operations and a gallery CMS. RESTful PHP API over MySQL, bcrypt admin auth, PDO prepared statements throughout, output escaping and error logging.",
      tech: ["PHP", "MySQL", "PDO", "REST API", "Tailwind", "bcrypt"] },
    { id: "immersion", d: "web", name: "Work Immersion Website", kind: "Full stack · project lead",
      blurb: "Led delivery of a production site for Dr. Ramon De Santos National High School, from architecture through launch. I owned the backend logic, the database design, the UI/UX planning, and the hosting and deployment. As project lead I set the technical direction and held it, delegated the front-end and documentation work, coordinated the team against the schedule, and shipped on time.",
      tech: ["PHP", "MySQL", "Database design", "UI/UX", "Hosting", "Deployment", "Team lead"] },
    { id: "mp", d: "games", name: "Missing Presence", kind: "Commissioned game",
      blurb: "A client brought art and a script; I turned it into a shipping Windows game. Five acts routing to good, neutral and bad endings through a tracked affinity variable, with autoloaded scene flow, save and autosave, transitions and SFX written from scratch in GDScript. Custom Dialogic theme, plus an in-game phone carrying social-media and whiteboard minigames.",
      tech: ["Godot 4.6", "GDScript", "Dialogic", "Branching narrative", "Save system"] }
  ],
  more: [
    { id: "selfhost", d: "security", name: "Self-Hosted Infrastructure", blurb: "Proxmox running Nextcloud plus web and media services in Docker, reached over Cloudflare Tunnels and Tailscale with no exposed ports. Pi-hole handles DNS and filtering across the tailnet. Monitoring and backups." },
    { id: "pix", d: "games", name: "Pix-Tac-Toe", blurb: "Tic-tac-toe in Godot 4. Pixel art, win detection, turn state, full UI pass." }
  ],
  results: [
    { date: "Jan 2025", title: "MetaCTF Flash CTF", detail: "Individual — top 17%, 163rd of 1000" },
    { date: "Jun 2024", title: "HACKFORGOV Region 3", detail: "Individual — 10th place" },
    { date: "Sep 2023", title: "HACKFORGOV Region 3", detail: "Individual — 6th place" }
  ],
  certs: [
    { date: "Dec 2024", title: "SOC Member", issuer: "LetsDefend" },
    { date: "Apr 2024", title: "Operating Systems Basics", issuer: "Cisco",
      url: "https://www.credly.com/badges/76a40b3c-e6a1-431d-9933-56809e82e6db/public_url" },
    { date: "Jan 2024", title: "Network Defense", issuer: "Cisco",
      url: "https://www.credly.com/badges/3b1cd866-f152-4d2c-b74b-e006c5a8441e/public_url" },
    { date: "Nov 2023", title: "Cyber Threat Management", issuer: "Cisco",
      url: "https://www.credly.com/badges/68ecbac7-869f-4214-95cf-6eb22bc60975/public_url" },
    { date: "Nov 2023", title: "Python Essentials 1", issuer: "Cisco",
      url: "https://www.credly.com/badges/473c1eee-04c3-47d2-adea-8beb9799e674/public_url" }
  ]
};
/* ---------- helpers ---------- */
var esc = function (s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); };
var el = function (id) { return document.getElementById(id); };
/* Content is pre-rendered into index.html so crawlers that do not execute
   JavaScript still see it. Only fill a container if it arrived empty. */
var put = function (id, h) {
  var n = el(id);
  if (n && !n.firstElementChild) n.innerHTML = h;
};
var map = function (a, f) { return a.map(f).join(""); };
/* ---------- render ---------- */
function render() {
  put("domains", map(DATA.domains, function (o) {
    return '<div class="entry"><dt>' + esc(o.k) + '<span class="tag">' + esc(o.t) + '</span></dt>' +
      '<dd><p>' + esc(o.d) + '</p><p class="eg">' + esc(o.e) + '</p></dd></div>';
  }));
  put("tools", map(DATA.tools, function (t) {
    return '<div class="run"><h3>' + esc(t.g) + '</h3><p>' + esc(t.i.join(", ")) + '</p></div>';
  }));
  put("roles", map(DATA.roles, function (r) {
    return '<article class="role"><div class="when"><time>' + esc(r.from) + '</time>' +
      (r.to ? '<time class="to">' + esc(r.to) + '</time>' : "") +
      '<span>' + esc(r.place) + '</span></div><div class="what"><h3>' + esc(r.title) + '</h3>' +
      '<p class="org">' + esc(r.org) + '</p><ul>' +
      map(r.bullets, function (b) { return "<li>" + esc(b) + "</li>"; }) + "</ul></div></article>";
  }));
  put("lead", map(DATA.lead, function (p) {
    return '<article class="lead" data-d="' + p.d + '" style="view-transition-name:p-' + p.id + '">' +
      '<header><h3>' + esc(p.name) + '</h3><span class="kind">' + esc(p.kind) + '</span></header>' +
      '<p>' + esc(p.blurb) + '</p><p class="tech">' + esc(p.tech.join("  ·  ")) + '</p></article>';
  }));
  put("more", map(DATA.more, function (p) {
    return '<details data-d="' + p.d + '" style="view-transition-name:p-' + p.id + '">' +
      '<summary><span class="nm">' + esc(p.name) + '</span></summary>' +
      '<div class="dc"><p>' + esc(p.blurb) + '</p></div></details>';
  }));
  put("results", map(DATA.results, function (c) {
    return "<tr><td>" + esc(c.title) + '</td><td class="dt">' + esc(c.detail) + '</td><th scope="row">' + esc(c.date) + "</th></tr>";
  }));
  put("certs", map(DATA.certs, function (c) {
    var name = c.url
      ? '<a href="' + c.url + '" target="_blank" rel="noopener" class="verify">' + esc(c.title) + "</a>"
      : esc(c.title);
    return "<tr><td>" + name + '</td><td class="dt">' + esc(c.issuer) + '</td><th scope="row">' + esc(c.date) + "</th></tr>";
  }));
  var counts = { all: DATA.lead.length + DATA.more.length };
  DATA.lead.concat(DATA.more).forEach(function (p) { counts[p.d] = (counts[p.d] || 0) + 1; });
  put("filters", map([["all", "everything"], ["security", "security & infra"], ["web", "web"], ["games", "games"], ["hardware", "hardware"]],
    function (f, i) {
      return '<button type="button" class="pf' + (i ? "" : " on") + '" data-f="' + f[0] + '" aria-pressed="' +
        (i ? "false" : "true") + '">' + esc(f[1]) + ' <i>' + (counts[f[0]] || 0) + "</i></button>";
    }));
}
/* ---------- project filter, morphing via view transitions ---------- */
function applyFilter(key) {
  document.querySelectorAll("[data-d]").forEach(function (n) {
    n.hidden = !(key === "all" || n.dataset.d === key);
  });
  document.querySelectorAll(".pf").forEach(function (b) {
    var on = b.dataset.f === key;
    b.classList.toggle("on", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });
}
var vtBusy = false;
function filter(key) {
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  // starting a second transition while one is running aborts the first and logs
  // "Transition was skipped" — fall back to an instant swap instead.
  if (document.startViewTransition && !reduce && !vtBusy) {
    vtBusy = true;
    var t = document.startViewTransition(function () { applyFilter(key); });
    t.finished.then(function () { vtBusy = false; }, function () { vtBusy = false; });
  } else {
    applyFilter(key);
  }
}
/* ---------- console ---------- */
var CMD = {
  help: ["whoami         one line", "desk           the eight domains I cover", "stack          tools and platforms",
         "ls work        the project list", "experience     role history", "record         competitions and certs",
         "contact        how to reach me", "resume         download the PDF", "clear          wipe scrollback"],
  whoami: ["josh_cinense — Technical Support Specialist at MotivIT.", "Active Directory and Group Policy, full Microsoft 365 tenant administration,", "identity forensics, PowerShell automation, email security, endpoint and recovery.", "Central Luzon, PH."],
  desk: function () { return DATA.domains.map(function (o) { return "• " + o.k + "  [" + o.t + "]"; }); },
  stack: function () { return DATA.tools.map(function (t) { return t.g + ":\n  " + t.i.join(", "); }); },
  "ls work": function () { return DATA.lead.concat(DATA.more).map(function (p) { return p.name + "  [" + p.d + "]"; }); },
  experience: function () { return DATA.roles.map(function (r) { return r.from + (r.to ? "–" + r.to : "") + "  " + r.title + " @ " + r.org; }); },
  record: function () { return DATA.results.map(function (c) { return c.date + "  " + c.title + "  " + c.detail; }); },
  contact: ["email      jacercinense@gmail.com", "linkedin   linkedin.com/in/cinense-josh-vengco", "github     github.com/JASHiNSENNiN"],
  resume: ["→ src/CinenseJoshResumeV3.pdf  (or use the Résumé button above)"]
};
function run(q) {
  q = q.trim().toLowerCase();
  if (!q) return [];
  if (q === "clear") return null;
  var v = CMD[q];
  if (!v) return ["command not found: " + q + ". try `help`"];
  return typeof v === "function" ? v() : v;
}
function submit(cmd) {
  if (!cmd || !cmd.trim()) return;
  var out = el("term-out"), lines = run(cmd);
  if (lines === null) { out.innerHTML = ""; }
  else {
    var e = document.createElement("div");
    e.className = "term-entry";
    e.innerHTML = '<div class="term-cmd"><span class="prompt">$</span> ' + esc(cmd.trim()) + "</div>" +
      map(lines, function (l) { return '<div class="term-line">' + esc(l) + "</div>"; });
    out.appendChild(e);
  }
  el("term-input").value = "";
  out.scrollTop = out.scrollHeight;
}
/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", function () {
  render();
  // fx.js binds to nodes this creates, so announce when they exist
  document.dispatchEvent(new CustomEvent("content:ready"));
  el("term-form").addEventListener("submit", function (e) { e.preventDefault(); submit(el("term-input").value); });
  put("term-chips", map(["help", "whoami", "desk", "stack", "ls work", "record", "contact"], function (c) {
    return '<button type="button" data-cmd="' + c + '">' + c + "</button>";
  }));
  document.addEventListener("click", function (e) {
    var c = e.target.closest("[data-cmd]"); if (c) { submit(c.dataset.cmd); el("term-input").focus(); return; }
    var f = e.target.closest(".pf"); if (f) { filter(f.dataset.f); return; }
    var t = e.target.closest(".nav-toggle");
    if (t) { var open = el("nav-links").classList.toggle("open"); t.setAttribute("aria-expanded", open); return; }
    var b = e.target.closest("[data-copy]");
    if (b) navigator.clipboard.writeText(b.dataset.copy).then(function () {
      b.dataset.state = "done"; setTimeout(function () { delete b.dataset.state; }, 1600);
    }, function () {});
  });
});
