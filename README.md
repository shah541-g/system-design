# Low Level Design (LLD) Roadmap — 2 Hours/Day Edition (v2 — 1 task/day fixed)

## Goal
University ke SE/SRE/SCD/SQE/SPM/SRENG material ko use kertay hoay, hands-on practice say LLD seekhna aur ek interview-ready, GitHub-portfolio-worthy **Task Management System** capstone banana.

## Key Decisions (locked in)
- **Primary language: TypeScript** — internship reinforcement (Angular), pairs naturally with the capstone, enough OOP (classes, interfaces, generics, access modifiers) to demonstrate SOLID/patterns clearly. Design skill is language-agnostic — transfers to Java/C# in 1-2 days if a specific interview needs it.
- **Vertical slice approach**: har milestone ke baad capstone **Task Manager** ko bhi update kerna hai — sirf isolated exercises nahi
- **Daily time budget: 2 hours** — **har din sirf EK system/task** (v1 mein kuch din 2 systems combine ho gaye thay, ab har jagah split kar diya gaya hai)
- Total: **46 days (~6.5 weeks)**
- Har din ke end par: mini deliverable + git commit — koi bhi din "sirf reading" nahi hai

## Daily Time Split (120 min)
| Block | Time |
|---|---|
| Study (slides/book) | 20-25 min |
| Worked Example / Practice / Challenge | 80-90 min |
| Notes + Revision Checklist | 10 min |
| Git Commit | 5 min |

## Folder Reference (your directory)
- Requirements/SRS → `1- SE/Slides`, `2- SRE/Books`, `2- SRE/Slides`
- UML → `4- SQE/Books`, `4- SQE/Slides`
- SOLID / Design Principles → `3- SCD/Labs/SOLID Principles.pdf`, `3- SCD/Slides/Desirable Characteristics of Design.pdf`
- Design Patterns → `3- SCD/Slides/Design Patterns.pdf`
- Refactoring → `3- SCD/Slides/Refactoring.pdf`, `3- SCD/Slides/Michael Feathers concepts.pdf`, `3- SCD/Slides/Defensive Programming.pdf`
- Testing → `1- SE/Slides/Lec9-ComponentTesting.pdf`, `Lec10-Integration&SystemTesting.pdf`, `Lec11-AutomatedTesting.pdf`, `3- SCD/Slides/Software Testing.pdf`

---

# WEEK 1 — Requirements → Domain Model (Days 1-8)
*No UML, no code. Sirf thinking clear kerni hai: problem → requirements → use cases → domain model.*

## Day 1 — Worked Example: Library Management
**Read:** `1- SE/Slides/Lec4-RequirementEngineering.pdf`, `Lec5-RequirementModeling.pdf`
- [ ] Functional + Non-functional requirements likho
- [ ] Use cases identify karo
- [ ] Domain model (entities + relationships) banao
- [ ] Notes: FR vs NFR ka farak apne alfaaz mein likho
- [ ] Commit: `day-01-library-requirements`

## Day 2 — Worked Example: ATM
**Read:** `1- SE/Slides/Lec9_SRS.pdf`
- [ ] Requirements + Use Cases + Domain Model (ATM ke liye)
- [ ] Commit: `day-02-atm-requirements`

## Day 3 — Worked Example: Food Delivery App
- [ ] Requirements + Use Cases + Domain Model
- [ ] Notes: teenon worked examples ka domain model compare karo — pattern nazar aa raha hai?
- [ ] Commit: `day-03-food-delivery-requirements`

## Day 4 — Practice: Gym Management System
**Do yourself, no code:**
- [ ] Requirements
- [ ] Use Cases
- [ ] Domain Model
- [ ] Commit: `day-04-gym-management-practice`

## Day 5 — Practice: Hospital Management System
- [ ] Requirements + Use Cases + Domain Model
- [ ] Commit: `day-05-hospital-practice`

## Day 6 — Practice: Hostel Management System
- [ ] Requirements + Use Cases + Domain Model
- [ ] Commit: `day-06-hostel-practice`

## Day 7 — Challenge: Netflix / Uber / LinkedIn
**Sirf identify karo — full requirements nahi, time-boxed. Teenon light hain isliye same din theek hai:**
- [ ] Netflix: Actors, Features, Entities
- [ ] Uber: Actors, Features, Entities
- [ ] LinkedIn: Actors, Features, Entities
- [ ] Commit: `day-07-challenge-actors-entities`

## Day 8 — Deliverable: Task Manager (SRS + Requirements)
**Capstone Phase 1 begins:**
- [ ] SRS document
- [ ] Functional + Non-functional requirements
- [ ] User Stories
- [ ] Use Cases
- [ ] Domain Model
- [ ] Revision: Explain "Domain Model vs Class Diagram ka farak" bina notes dekhay
- [ ] Commit: `day-08-taskmanager-requirements-srs`

---

# WEEK 2 — UML Thinking (Days 9-16)
*Ab requirements ko diagrams mein convert kerna hai. Still no code.*

## Day 9 — Worked Example: Library — Class + Sequence Diagram
**Read:** `4- SQE/Slides/Week 2.pdf`, `Week 3.pdf` (Class Diagram basics)
- [ ] Class Diagram
- [ ] Sequence Diagram (1 flow, e.g. "issue book")
- [ ] Commit: `day-09-library-uml`

## Day 10 — Worked Example: ATM — Class + Sequence Diagram
- [ ] Class Diagram
- [ ] Sequence Diagram ("withdraw cash" flow)
- [ ] Commit: `day-10-atm-uml`

## Day 11 — Worked Example: Hospital — Class + Sequence Diagram
- [ ] Class Diagram
- [ ] Sequence Diagram ("book appointment" flow)
- [ ] Commit: `day-11-hospital-uml`

## Day 12 — Practice: Bank System
- [ ] Class Diagram
- [ ] Sequence Diagram
- [ ] Commit: `day-12-bank-uml-practice`

## Day 13 — Practice: School System
- [ ] Class Diagram
- [ ] Commit: `day-13-school-uml-practice`

## Day 14 — Practice: Chat App
- [ ] Class Diagram
- [ ] Commit: `day-14-chatapp-uml-practice`

## Day 15 — Challenge: WhatsApp / Instagram / Spotify (pick 1, sirf UML)
- [ ] Class Diagram of the chosen system
- [ ] Commit: `day-15-challenge-uml`

## Day 16 — Deliverable: Task Manager (Full UML Package)
**Capstone Phase 2:**
- [ ] Class Diagram
- [ ] Sequence Diagram (kam se kam 2 flows: "create task", "assign task")
- [ ] Package Diagram
- [ ] Revision: Class vs Sequence vs Package diagram — kis situation mein kaunsa use hota hai, explain bina notes
- [ ] Commit: `day-16-taskmanager-full-uml`

---

# WEEK 3 — SOLID Principles (Days 17-24)
*Ab coding start. Language: TypeScript.*

## Day 17 — Worked Example: Coffee Machine (Refactor without → with SOLID)
**Read:** `3- SCD/Labs/SOLID Principles.pdf`
- [ ] "Bad" version code likho (violations ke saath)
- [ ] SOLID apply kerke refactor karo
- [ ] Commit: `day-17-coffee-machine-solid`

## Day 18 — Worked Example: Notification Service (Email/SMS/Push)
- [ ] SRP + OCP focus — strategy-style structure
- [ ] Commit: `day-18-notification-service-solid`

## Day 19 — Worked Example: Payment Gateway (JazzCash/Stripe/PayPal)
- [ ] Interface-driven design, DIP focus
- [ ] Commit: `day-19-payment-gateway-solid`

## Day 20 — Practice: Logger
- [ ] Code required, apply SOLID
- [ ] Commit: `day-20-logger-solid-practice`

## Day 21 — Practice: Authentication System
- [ ] Full SOLID implementation
- [ ] Commit: `day-21-auth-solid-practice`

## Day 22 — Practice: File Storage System
- [ ] Interface + 2 concrete implementations (local + cloud), SOLID applied
- [ ] Commit: `day-22-filestorage-solid-practice`

## Day 23 — Challenge: Parking Lot (or Shopping Cart — pick one, time-boxed)
- [ ] Full code, SOLID applied
- [ ] Commit: `day-23-challenge-solid`

## Day 24 — Deliverable: Apply SOLID to Task Manager
**Capstone Phase 3:**
- [ ] Task Manager ka initial code likho (TypeScript), SOLID principles ke sath
- [ ] Revision: SRP, OCP, LSP, ISP, DIP — har aik ko Task Manager se ek concrete example ke sath explain karo, bina notes
- [ ] Commit: `day-24-taskmanager-solid`

---

# WEEK 4 — Design Patterns (Days 25-31)
**Read:** `3- SCD/Slides/Design Patterns.pdf` (Factory, Strategy, Observer, Builder, Adapter, Repository)

## Day 25 — Worked Example: Notification Strategy Pattern
- [ ] Strategy pattern implement karo (Day 18 ka Notification Service extend karo)
- [ ] Commit: `day-25-notification-strategy`

## Day 26 — Worked Example: Payment Factory Pattern
- [ ] Factory pattern (Day 19 ka Payment Gateway extend karo)
- [ ] Commit: `day-26-payment-factory`

## Day 27 — Worked Example: Document Builder Pattern
- [ ] Builder pattern
- [ ] Commit: `day-27-document-builder`

## Day 28 — Practice: Game Characters OR Shipping (pick 1)
- [ ] Observer or Factory pattern practice
- [ ] Commit: `day-28-practice-pattern`

## Day 29 — Challenge: Hotel Booking OR Ride Sharing (pick 1)
- [ ] Design discussion + partial code (Repository + Strategy/Factory mix)
- [ ] Commit: `day-29-challenge-pattern`

## Day 30 — Deliverable: Task Manager — Patterns Part 1
**Capstone Phase 4a:**
- [ ] Repository pattern integrate karo (data access ke liye)
- [ ] Factory pattern integrate karo (task creation ke liye)
- [ ] Commit: `day-30-taskmanager-patterns-1`

## Day 31 — Deliverable: Task Manager — Patterns Part 2
**Capstone Phase 4b:**
- [ ] Strategy pattern (e.g. sorting/filtering tasks)
- [ ] Observer pattern (e.g. task status change notifications)
- [ ] Revision: har pattern ke liye "yeh kis problem ko solve karta hai" — bina notes explain karo
- [ ] Commit: `day-31-taskmanager-patterns-2`

---

# WEEK 5 — Refactoring + Testing (Days 32-43)

## Day 32 — Worked Example: God Class Refactor
**Read:** `3- SCD/Slides/Refactoring.pdf`
- [ ] God Class identify → refactor karo
- [ ] Commit: `day-32-god-class-refactor`

## Day 33 — Worked Example: Long Method Refactor
**Read:** `3- SCD/Slides/Michael Feathers concepts.pdf`
- [ ] Long Method refactor
- [ ] Commit: `day-33-long-method-refactor`

## Day 34 — Worked Example: Duplicate Code Refactor
- [ ] Duplicate Code refactor
- [ ] Commit: `day-34-duplicate-code-refactor`

## Day 35 — Practice: Student System OR Payroll (pick 1)
- [ ] Refactor exercise
- [ ] Commit: `day-35-refactor-practice`

## Day 36 — Challenge: Legacy Hospital / CRM / POS (pick 1)
- [ ] Legacy-style messy code ko refactor karo
- [ ] Commit: `day-36-challenge-legacy-refactor`

## Day 37 — Deliverable: Task Manager Refactor
**Capstone Phase 5:**
- [ ] Puray Task Manager codebase ka refactoring pass
- [ ] Commit: `day-37-taskmanager-refactor`

## Day 38 — Worked Example: Calculator — Unit Tests
**Read:** `1- SE/Slides/Lec9-ComponentTesting.pdf`
- [ ] Unit tests likho
- [ ] Commit: `day-38-calculator-tests`

## Day 39 — Worked Example: Login Module — Unit Tests
- [ ] Unit tests likho
- [ ] Commit: `day-39-login-module-tests`

## Day 40 — Worked Example: Shopping Cart — Unit + Integration Tests
**Read:** `1- SE/Slides/Lec10-Integration&SystemTesting.pdf`
- [ ] Unit + integration tests
- [ ] Commit: `day-40-shopping-cart-tests`

## Day 41 — Practice: ATM OR Bank OR Todo (pick 1)
- [ ] Tests likho
- [ ] Commit: `day-41-practice-tests`

## Day 42 — Challenge: Chess OR Booking OR Inventory (pick 1)
- [ ] Tests likho
- [ ] Commit: `day-42-challenge-tests`

## Day 43 — Deliverable: Task Manager — Unit + Integration Tests
**Capstone Phase 6:**
- [ ] Unit tests (core logic)
- [ ] Integration tests (repository + service layer)
- [ ] Revision: Unit vs Integration test ka farak, apne code se example dekar explain karo
- [ ] Commit: `day-43-taskmanager-tests`

---

# WEEK 6 — Final Capstone Assembly (Days 44-46)

## Day 44 — Capstone Review: Requirements → UML
- [ ] Phase 1-2 review: SRS, Use Cases, Domain Model, Class/Sequence/Package diagrams — sab ek README mein consolidate karo
- [ ] Commit: `day-44-capstone-docs-consolidation`

## Day 45 — Capstone Review: Implementation → Patterns
- [ ] Phase 3-4 review: code clean karo, SOLID + patterns ka final check
- [ ] README mein architecture diagram/explanation add karo
- [ ] Commit: `day-45-capstone-code-review`

## Day 46 — Capstone Finalize: Testing + Portfolio Polish
- [ ] Phase 5-6 review: refactoring + tests final check, test coverage note karo
- [ ] GitHub README polish (badges, setup instructions, architecture overview)
- [ ] Commit: `day-46-capstone-final`

**Capstone complete ho jane ke baad tumhare paas hoga:**
Requirements ✅ → SRS ✅ → Use Cases ✅ → Domain Model ✅ → Class Diagram ✅ → Sequence Diagram ✅ → Full TypeScript Implementation ✅ → SOLID ✅ → 4 Design Patterns ✅ → Refactored Code ✅ → Unit + Integration Tests ✅

---

# Reference Section

## Coverage Summary
| System | Requirements | UML | Code | Tests |
|---|---|---|---|---|
| Library | ✅ | ✅ | — | — |
| ATM | ✅ | ✅ | — | ✅ (practice) |
| Food Delivery | ✅ | — | — | — |
| Gym / Hospital / Hostel | ✅ | Hospital only | — | — |
| Bank / School / Chat App | — | ✅ | — | ✅ Bank |
| Coffee Machine / Notification / Payment | — | — | ✅ SOLID | — |
| Logger / Auth / File Storage | — | — | ✅ SOLID | — |
| Parking Lot / Shopping Cart | — | — | ✅ SOLID | — |
| Notification Strategy / Payment Factory / Document Builder | — | — | ✅ Patterns | — |
| Ride Sharing / Hotel Booking | — | Discussion | ✅ Patterns | — |
| Legacy Hospital/CRM/POS | Existing | Existing | ✅ Refactor | — |
| Calculator / Login / Shopping Cart | — | — | — | ✅ |
| **Task Manager (Capstone)** | ✅ | ✅ | ✅ | ✅ |

## Language Note
- Roadmap TypeScript mein hai. Agar kabhi kisi specific company/interview ke liye Java ya C# chahiye ho, wahi design (classes, SOLID, patterns) usi din 1-2 ghante mein translate ho jayega — concepts same rahenge, sirf syntax badlega.

## SOLID Quick Checklist
- [ ] **S**RP — class ki ek hi wajah honi chahiye badalne ki
- [ ] **O**CP — extension ke liye open, modification ke liye closed
- [ ] **L**SP — subclass, parent class ki jagah use ho sakni chahiye bina behavior break kiye
- [ ] **I**SP — chhoti, specific interfaces — client ko unused methods implement na kerne padein
- [ ] **D**IP — high-level modules, low-level modules par directly depend na karein — abstraction par depend karein

## Design Pattern Cheat Sheet
| Pattern | Problem it solves |
|---|---|
| Factory | Object creation logic ko caller se hide kerna |
| Strategy | Runtime par algorithm/behavior switch karna |
| Observer | Ek object change ho to dependents ko notify kerna |
| Builder | Complex object ko step-by-step construct kerna |
| Adapter | Incompatible interfaces ko compatible banana |
| Repository | Data access logic ko business logic se separate kerna |

## Common Mistakes to Avoid
- Design patterns ko "force fit" karna jahan simple code kaafi ho
- UML diagrams ko implementation se pehle detail mein perfect kerne ki koshish (iterate karo, perfect mat socho)
- SOLID ko rules ki tarah follow kerna bina "kyun" samjhay
- Tests ko end mein "extra kaam" samajhna instead of design ka part

## Interview Prep Questions (self-test after each week)
- Week 1-2: "Requirements se Class Diagram tak kaise pohnchoge? Domain model kyun zaroori hai?"
- Week 3: "SRP aur SOC (Separation of Concerns) mein farak?"
- Week 4: "Factory vs Builder — kab kaunsa use karoge?"
- Week 5-6: "Refactoring aur re-engineering mein farak? Legacy code ko safely refactor kaise karoge (Michael Feathers approach)?"
