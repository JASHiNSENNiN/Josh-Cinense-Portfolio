# Josh V. Cinense

**Security practitioner · Technical Support Specialist**
Central Luzon, Philippines

### → [jashinsennin.github.io/Josh-Cinense-Portfolio](https://jashinsennin.github.io/Josh-Cinense-Portfolio/)

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-3ddc84?style=flat-square)](https://jashinsennin.github.io/Josh-Cinense-Portfolio/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0a66c2?style=flat-square)](https://www.linkedin.com/in/cinense-josh-vengco/)
[![Résumé](https://img.shields.io/badge/R%C3%A9sum%C3%A9-PDF-888?style=flat-square)](https://jashinsennin.github.io/Josh-Cinense-Portfolio/src/CinenseJoshResumeV3.pdf)

---

## About

Technical Support Specialist at MotivIT, working in a multi-tenant managed services
environment. Directory and tenant administration, security, networks, endpoints, servers,
and the software that runs on top of all of it.

Outside work I self-host, build firmware, web applications and games, and captain a CTF team.

**The full record lives on the site:**
**[jashinsennin.github.io/Josh-Cinense-Portfolio](https://jashinsennin.github.io/Josh-Cinense-Portfolio/)**

---

## What I work on

Eleven areas, security first.

| Area | |
|---|---|
| Identity forensics and hybrid sync | Lockout and authentication tracing, event-log sub-status codes and logon types, directory sync and attribute-flow failures |
| Email threat investigation | Header tracing, SPF / DKIM / DMARC, quarantine and filter policy tuning, spoof testing |
| Compromised account response | Sign-in and unified audit review, log triage, session and credential revocation |
| Log analysis and root cause | Correlating event, sign-in and audit data down to a single documented cause |
| Active Directory and Group Policy | Account lifecycle, ADUC and ADSI, GPO authoring, printer and drive mapping deployment |
| Microsoft 365 tenant administration | Exchange Online, SharePoint, OneDrive, Teams, licensing, retention and compliance |
| Scripting and automation | PowerShell and Microsoft Graph, batch, scheduled tasks, RMM deployment, runbooks |
| Endpoint and device | Provisioning, rebuilds, enrolment and policy, remote remediation, alert response |
| Application support | Line-of-business and third-party software: installs, licensing, integration faults |
| Printers, peripherals and hardware | Driver and queue faults, deployment, procurement, repair dispatch |
| Network, server and recovery | Firewall policy, IPsec, NAT and VIP, DNS and routing, post-outage recovery |

[Full detail →](https://jashinsennin.github.io/Josh-Cinense-Portfolio/#desk)

---

## Selected work

| Project | |
|---|---|
| **Cy83r_Cru54d3r5** | CTF team — founder and captain. Web exploitation, cryptography, reverse engineering, forensics |
| **Cybersecurity Homelab** | Proxmox, Docker, Portainer, OPNsense segmentation. Pen-testing simulation, malware analysis, threat intel |
| **Custom Arch Security Distro** | Arch-based build tuned for offensive, defensive and threat-hunting workflows |
| **Vape Detection IoT System** | ESP32 multi-sensor detector. Heuristic scoring across particulate, VOC, CO and climate to separate vaping from cigarettes and cooking smoke. Firestore backend |
| **Rommel Garcia Appointment System** | Production PHP / MySQL booking platform. Admin dashboard, FullCalendar, bcrypt auth, PDO prepared statements |
| **Work Immersion Website** | Led delivery end to end — architecture, backend, database, UI/UX, hosting, deployment |
| **Missing Presence** | Commissioned Godot 4 visual novel shipped for Windows. Branching narrative, save system, in-game minigames |

[All projects →](https://jashinsennin.github.io/Josh-Cinense-Portfolio/#work)

---

## Record

**Competition** — individual placements
- MetaCTF Flash CTF — top 17%, 163rd of 1000 (Jan 2025)
- HACKFORGOV Region 3 — 10th place (Jun 2024)
- HACKFORGOV Region 3 — 6th place (Sep 2023)

**Certification**
- SOC Member — LetsDefend
- [Operating Systems Basics](https://www.credly.com/badges/76a40b3c-e6a1-431d-9933-56809e82e6db/public_url) — Cisco
- [Network Defense](https://www.credly.com/badges/3b1cd866-f152-4d2c-b74b-e006c5a8441e/public_url) — Cisco
- [Cyber Threat Management](https://www.credly.com/badges/68ecbac7-869f-4214-95cf-6eb22bc60975/public_url) — Cisco
- [Python Essentials 1](https://www.credly.com/badges/473c1eee-04c3-47d2-adea-8beb9799e674/public_url) — Cisco

**Education**
BS Information Technology, *Cum Laude* — Our Lady of the Sacred Heart College of Guimba
Founder and Director, Special Projects — JPCS OLSHCO Chapter

[Full record →](https://jashinsennin.github.io/Josh-Cinense-Portfolio/#record)

---

## Contact

- **Site** — [jashinsennin.github.io/Josh-Cinense-Portfolio](https://jashinsennin.github.io/Josh-Cinense-Portfolio/)
- **Email** — jacercinense@gmail.com
- **LinkedIn** — [cinense-josh-vengco](https://www.linkedin.com/in/cinense-josh-vengco/)
- **GitHub** — [JASHiNSENNiN](https://github.com/JASHiNSENNiN)

---

## About this repository

Source for the portfolio site. Static — no build step, no framework, no package manager.

```
index.html    section shells + metadata + JSON-LD
script.js     content data, render, console, project filter
styles.css    @layer tokens, base, layout, components, effects, motion, fx
fx.js         GSAP, vanilla-tilt, Typed.js, tsParticles, Rough Notation
```

Run locally with any static server:

```bash
python3 -m http.server 8080
```
