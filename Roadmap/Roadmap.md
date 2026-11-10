# Full Roadmap Tracker — Java + Spring Boot + HLD/System Design

**Off:** Sat & Sun

Har phase ke start pe resource link diya hai, aur har row mein completion ke waqt jo git commit karna hai wo already likha hua hai — bas us din ka kaam khatam karke wahi commit message use kar dena.

## PHASE 0 — Java Full Course (CoderArmy, 57 videos)

**Pace:** 2 videos/day | 29 working days

**Resource:** https://www.youtube.com/playlist?list=PLQEaRBV9gAFsR15tNo2QLF9d2qc-c018p

*(Note: source doc mein sirf HLD phase ke commits explicitly diye the. Java/Spring Boot ke liye same convention pe commit names bana diye hain — agar tum koi aur naming chahte ho to bata dena.)*

| Day | Videos | Commit (on completion) |
| --- | --- | --- |
| 1 | 1–2 | `java-day-01-videos-1-2` |
| 2 | 3–4 | `java-day-02-videos-3-4` |
| 3 | 5–6 | `java-day-03-videos-5-6` |
| 4 | 7–8 | `java-day-04-videos-7-8` |
| 5 | 9–10 | `java-day-05-videos-9-10` |
| 6 | 11–12 | `java-day-06-videos-11-12` |
| 7 | 13–14 | `java-day-07-videos-13-14` |
| 8 | 15–16 | `java-day-08-videos-15-16` |
| 9 | 17–18 | `java-day-09-videos-17-18` |
| 10 | 19–20 | `java-day-10-videos-19-20` |
| 11 | 21–22 | `java-day-11-videos-21-22` |
| 12 | 23–24 | `java-day-12-videos-23-24` |
| 13 | 25–26 | `java-day-13-videos-25-26` |
| 14 | 27–28 | `java-day-14-videos-27-28` |
| 15 | 29–30 | `java-day-15-videos-29-30` |
| 16 | 31–32 | `java-day-16-videos-31-32` |
| 17 | 33–34 | `java-day-17-videos-33-34` |
| 18 | 35–36 | `java-day-18-videos-35-36` |
| 19 | 37–38 | `java-day-19-videos-37-38` |
| 20 | 39–40 | `java-day-20-videos-39-40` |
| 21 | 41–42 | `java-day-21-videos-41-42` |
| 22 | 43–44 | `java-day-22-videos-43-44` |
| 23 | 45–46 | `java-day-23-videos-45-46` |
| 24 | 47–48 | `java-day-24-videos-47-48` |
| 25 | 49–50 | `java-day-25-videos-49-50` |
| 26 | 51–52 | `java-day-26-videos-51-52` |
| 27 | 53–54 | `java-day-27-videos-53-54` |
| 28 | 55–56 | `java-day-28-videos-55-56` |
| 29 | 57 (last video) | `java-day-29-video-57-final` |

## PHASE 0.5 — Spring Boot Full Course (CoderArmy, 41 videos)

**Pace:** 2 videos/day | 21 working days

**Resource:** https://www.youtube.com/playlist?list=PLEYgx5hMdopw *(source doc mein ye playlist ID incomplete lag rahi thi — link confirm/verify kar lena before starting.)*

| Day | Videos | Commit (on completion) |
| --- | --- | --- |
| 1 | 1–2 | `spring-day-01-videos-1-2` |
| 2 | 3–4 | `spring-day-02-videos-3-4` |
| 3 | 5–6 | `spring-day-03-videos-5-6` |
| 4 | 7–8 | `spring-day-04-videos-7-8` |
| 5 | 9–10 | `spring-day-05-videos-9-10` |
| 6 | 11–12 | `spring-day-06-videos-11-12` |
| 7 | 13–14 | `spring-day-07-videos-13-14` |
| 8 | 15–16 | `spring-day-08-videos-15-16` |
| 9 | 17–18 | `spring-day-09-videos-17-18` |
| 10 | 19–20 | `spring-day-10-videos-19-20` |
| 11 | 21–22 | `spring-day-11-videos-21-22` |
| 12 | 23–24 | `spring-day-12-videos-23-24` |
| 13 | 25–26 | `spring-day-13-videos-25-26` |
| 14 | 27–28 | `spring-day-14-videos-27-28` |
| 15 | 29–30 | `spring-day-15-videos-29-30` |
| 16 | 31–32 | `spring-day-16-videos-31-32` |
| 17 | 33–34 | `spring-day-17-videos-33-34` |
| 18 | 35–36 | `spring-day-18-videos-35-36` |
| 19 | 37–38 | `spring-day-19-videos-37-38` |
| 20 | 39–40 | `spring-day-20-videos-39-40` |
| 21 | 41 (last video) | `spring-day-21-video-41-final` |

*(Spring Boot khatam hote hi agle working day se seedha HLD start.)*

## PHASE 1 — High Level Design (HLD) — 2 Hours/Day

**48 working days | One system per day rule**

**Primary resources (all weeks):**

- donnemartin/system-design-primer — https://github.com/donnemartin/system-design-primer
- ashishps1/awesome-system-design-resources — https://github.com/ashishps1/awesome-system-design-resources

Full 15-repo list is in the Reference Section at the end of this file.

### Week 1 — Foundations + Core Concepts (Target: Distributed Session Store)

**Resources:** system-design-primer, alex/what-happens-when — https://github.com/alex/what-happens-when

| Day | Topic | Commit (on completion) |
| --- | --- | --- |
| 1 | Networking Foundations | `hld-day-01-networking-foundations` |
| 2 | Scalability/Availability/Reliability/SPOF | `hld-day-02-scalability-availability` |
| 3 | CAP Theorem + PACELC | `hld-day-03-cap-pacelc` |
| 4 | Session Store: Consistency + Availability | `hld-day-04-session-store-consistency-availability` |
| 5 | Session Store: Hashing + Partition Challenge | `hld-day-05-session-store-hashing-partition` |
| 6 | Session Store: Fault Tolerance + Deliverable | `hld-day-06-session-store-deliverable` |

### Week 2 — Networking & API Layer (Target: Ride-Hailing App API)

**Resources:** system-design-primer, ashishps1, Chalarangelo/30-seconds-of-code — https://github.com/Chalarangelo/30-seconds-of-code, CodingChallengesFYI/SharedSolutions — https://github.com/CodingChallengesFYI/SharedSolutions

| Day | Topic | Commit (on completion) |
| --- | --- | --- |
| 7 | DNS + Load Balancing | `hld-day-07-dns-loadbalancing` |
| 8 | Reverse Proxy + API Gateway | `hld-day-08-reverse-proxy-gateway` |
| 9 | CDN | `hld-day-09-cdn` |
| 10 | Ride API: Contract + Style Decision | `hld-day-10-ride-api-contract` |
| 11 | Ride API: Real-Time Tracking | `hld-day-11-ride-api-realtime` |
| 12 | Ride API: Idempotency + Rate Limiter + Deliverable | `hld-day-12-ride-api-deliverable` |

### Week 3 — Database Layer (Target: Ride-Tracking App DB)

**Resources:** system-design-primer, ashishps1, awesome-scalability — https://github.com/binhnguyennus/awesome-scalability

| Day | Topic | Commit (on completion) |
| --- | --- | --- |
| 13 | ACID + SQL vs NoSQL | `hld-day-13-acid-sql-nosql` |
| 14 | Database Indexes + Bloom Filters | `hld-day-14-indexes-bloom-filters` |
| 15 | Replication | `hld-day-15-replication` |
| 16 | Ride DB: Sharding + Federation | `hld-day-16-ride-db-sharding-federation` |
| 17 | Ride DB: Denormalization + Tuning Challenge | `hld-day-17-ride-db-denormalization-tuning` |
| 18 | Ride DB: Architecture + Scaling Plan + Deliverable | `hld-day-18-ride-db-deliverable` |

### Week 4 — Caching Layer (Target: Product Catalog Caching Layer)

**Resources:** ashishps1, InterviewReady/system-design-resources — https://github.com/InterviewReady/system-design-resources, awesome-scalability, CodingChallengesFYI/SharedSolutions

| Day | Topic | Commit (on completion) |
| --- | --- | --- |
| 19 | Caching 101 + Strategies | `hld-day-19-caching-strategies` |
| 20 | Cache Eviction Policies | `hld-day-20-cache-eviction` |
| 21 | Distributed Caching | `hld-day-21-distributed-caching` |
| 22 | Catalog: Cache Strategy + CDN Split | `hld-day-22-catalog-cache-strategy` |
| 23 | Catalog: Case Study + Build Challenge | `hld-day-23-catalog-case-study-build` |
| 24 | Catalog: Invalidation + Stampede + Deliverable | `hld-day-24-catalog-caching-deliverable` |

### Week 5 — Async, Messaging & Distributed Systems (Target: Order-Processing Async Pipeline)

**Resources:** ashishps1, InterviewReady/system-design-resources, arpit20adlakha/Computer-Science-Papers-For-System-Design — https://github.com/arpit20adlakha/Computer-Science-Papers-For-System-Design

| Day | Topic | Commit (on completion) |
| --- | --- | --- |
| 25 | Message Queues + Pub/Sub | `hld-day-25-mq-pubsub` |
| 26 | Change Data Capture + Event-Driven Basics | `hld-day-26-cdc-event-driven` |
| 27 | Heartbeats + Service Discovery | `hld-day-27-heartbeats-service-discovery` |
| 28 | Order Pipeline: Queue Structure + Leader Election | `hld-day-28-order-pipeline-queue-consensus` |
| 29 | Order Pipeline: Locking + Consensus Challenge | `hld-day-29-order-pipeline-locking-consensus` |
| 30 | Order Pipeline: Gossip + Circuit Breaker + Deliverable | `hld-day-30-order-pipeline-deliverable` |

### Week 6 — Architecture Patterns + Tradeoffs (Target: any 1 sample system)

**Resources:** ashishps1, addyosmani/essential-js-design-patterns — https://github.com/addyosmani/essential-js-design-patterns

| Day | Topic | Commit (on completion) |
| --- | --- | --- |
| 31 | Client-Server + Microservices Architecture | `hld-day-31-client-server-microservices` |
| 32 | Serverless + Event-Driven Architecture | `hld-day-32-serverless-event-driven` |
| 33 | P2P Architecture + Pattern Selection | `hld-day-33-p2p-pattern-selection` |
| 34 | Tradeoffs Part 1 | `hld-day-34-tradeoffs-1` |
| 35 | Tradeoffs Part 2 | `hld-day-35-tradeoffs-2` |
| 36 | Tradeoffs Part 3 + Deliverable | `hld-day-36-tradeoffs-deliverable` |

### Week 7 — Easy Interview Problems, Hands-On (full interview format daily)

**Resources:** system-design-primer, ashishps1, 30-seconds-of-code, InterviewReady/system-design-resources

| Day | Topic | Commit (on completion) |
| --- | --- | --- |
| 37 | Design URL Shortener (TinyURL) | `hld-day-37-url-shortener` |
| 38 | Design Rate Limiter (full interview format) | `hld-day-38-rate-limiter-full-design` |
| 39 | Design Parking Garage | `hld-day-39-parking-garage-scale` |
| 40 | Design Distributed Key-Value Store / Cache | `hld-day-40-distributed-kv-store` |
| 41 | Design Authentication System | `hld-day-41-authentication-system` |
| 42 | Design Web Crawler (Review Day) | `hld-day-42-web-crawler-review` |

### Week 8 — Medium + Hard, Capstone

**Resources:** ashishps1 Medium/Hard list, system-design-primer, design-guru/grokking-system-design (verify exact repo URL yourself, source doc naming was slightly inconsistent), yangshun/tech-interview-handbook — https://github.com/yangshun/tech-interview-handbook

| Day | Topic | Commit (on completion) |
| --- | --- | --- |
| 43 | Design WhatsApp / Chat App | `hld-day-43-whatsapp` |
| 44 | Design Instagram/Twitter Feed | `hld-day-44-social-feed` |
| 45 | Design Netflix / YouTube | `hld-day-45-video-streaming` |
| 46 | Design Notification & Scheduling System | `hld-day-46-notification-job-scheduler` |
| 47 | Design Uber — Part 1 (Capstone) | `hld-day-47-uber-capstone-draft` |
| 48 | Design Uber — Part 2, Capstone Finalize | `hld-day-48-capstone-final` |

## Reference Section — Full Repo List (all 15, for HLD phase)

1. design-guru/grokking-system-design
2. yangshun/tech-interview-handbook
3. kdn251/interviews
4. alex/what-happens-when
5. Chalarangelo/30-seconds-of-code
6. codersguild/System-Design
7. arpit20adlakha/Computer-Science-Papers-For-System-Design
8. InterviewReady/system-design-resources
9. arpit20adlakha/Data-Structure-Algorithms-LLD-HLD
10. kilimchoi/engineering-blogs
11. donnemartin/system-design-primer
12. addyosmani/essential-js-design-patterns
13. binhnguyennus/awesome-scalability
14. ashishps1/awesome-system-design-resources
15. CodingChallengesFYI/SharedSolutions

**Tip:** is file ko apne roadmap-tracker Streamlit app ke sath ya manually use kar sakte ho — jis din ka kaam ho jaye, us row ka commit message copy karke wahi commit kar dena.