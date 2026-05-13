// WSC 2026 — Source data from the Summary of Decisions Draft v2.0 and the Day One Visual Summary.

export type Motion = {
  id: string;
  number: string;
  source: string;
  topic: string;
  motion: string;
  intent: string;
  initialStraw?: string;
  initialPct?: string;
  initialNote?: string;
  finalVote?: string;
  finalPct?: string;
  finalNote?: string;
  outcome: 'adopted-isp' | 'adopted-final' | 'failed' | 'amendment-failed' | 'withdrawn';
  tag?: 'car' | 'cat' | 'mf';
};

export const adoptedMotions: Motion[] = [
  {
    id: 'm1',
    number: '1',
    source: 'World Board',
    topic: 'IP #21 Staying Clean in Isolation',
    motion: 'Approve the revised IP #21, Staying Clean in Isolation, as Fellowship-approved recovery literature to replace the current IP #21, The Loner—Staying Clean in Isolation.',
    intent: 'To update this IP originally approved in 1986 with current Fellowship experience.',
    initialStraw: '130–1–0–0',
    initialPct: '99.24%',
    initialNote: 'Consensus support',
    finalVote: '130–0–0–0',
    finalPct: '100%',
    finalNote: 'Unanimous support',
    outcome: 'adopted-final',
    tag: 'car'
  },
  {
    id: 'm2',
    number: '2',
    source: 'World Board',
    topic: '2026–2029 Strategic Plan',
    motion: 'Adopt the collaboratively created 2026–2029 NA World Services Strategic Plan.',
    intent: 'To approve the results of the collaborative planning that began at WSC 2023 and continued with zonal and conference participant involvement.',
    initialStraw: '122–4–4–1',
    initialPct: '93.85%',
    initialNote: 'Consensus support',
    outcome: 'adopted-isp',
    tag: 'car'
  },
  {
    id: 'm3',
    number: '3',
    source: 'World Board',
    topic: 'WCNA every 5 years',
    motion:
      'Hold the World Convention of Narcotics Anonymous (WCNA) every 5 years, beginning in 2028. Location to be determined by the World Board based on fiscal and geographic considerations that lend themselves to a revenue-neutral event.',
    intent: 'Guidelines for WCNA that reflect the changing nature of large events worldwide and support the prudent use of Fellowship resources.',
    initialStraw: '87–36–7–1',
    initialPct: '66.92%',
    initialNote: 'Strong support',
    finalVote: '101–29–2–0',
    finalPct: '76.52%',
    finalNote: 'Strong support — Motion carries',
    outcome: 'adopted-final',
    tag: 'car'
  },
  {
    id: 'm4',
    number: '4',
    source: 'Arizona Region (Co-makers: Florida, Ohio, NorCal, SoCal, Sweden, UK, Utah)',
    topic: 'Booklength literature on inmate tablets',
    motion:
      'Direct the World Board to create a project plan for WSC 2029 to research the opportunities and obstacles of providing booklength pieces of literature to the incarcerated, on tablets, in addition to IPs and the audio Basic Text that already exist.',
    intent: 'To give the Conference and Fellowship the ability to meaningfully discuss making booklength literature available to the incarcerated on tablets.',
    initialStraw: '87–29–9–6',
    initialPct: '69.60%',
    initialNote: 'Strong support',
    finalVote: '102–26–2–1',
    finalPct: '78.40%',
    finalNote: 'Strong support — Motion carries',
    outcome: 'adopted-final',
    tag: 'car'
  },
  {
    id: 'm6',
    number: '6',
    source: 'World Board',
    topic: 'Project Plan: Fellowship Awareness & Engagement with PR',
    motion: 'Approve the project plan for Fellowship Awareness and Engagement with PR Service.',
    intent: 'To approve the project plan as presented.',
    initialStraw: '137–3–6–0',
    initialPct: '93.84%',
    initialNote: 'Consensus support',
    outcome: 'adopted-isp',
    tag: 'cat'
  },
  {
    id: 'm7',
    number: '7',
    source: 'World Board',
    topic: 'Project Plan: Raising Public Awareness of NA',
    motion: 'Approve the project plan for Raising Public Awareness of NA.',
    intent: 'To approve the project plan as presented.',
    initialStraw: '134–4–8–0',
    initialPct: '91.78%',
    initialNote: 'Consensus support',
    outcome: 'adopted-isp',
    tag: 'cat'
  },
  {
    id: 'm8',
    number: '8',
    source: 'World Board',
    topic: 'New Recovery Informational Pamphlets',
    motion: 'Approve the project plan for New Recovery Informational Pamphlets. Focus: Disruptive & Predatory Behavior.',
    intent: 'To approve the project plan as presented.',
    initialStraw: '135–5–6–0',
    initialPct: '92.47%',
    initialNote: 'Consensus support',
    outcome: 'adopted-isp',
    tag: 'cat'
  },
  {
    id: 'm9',
    number: '9',
    source: 'World Board',
    topic: 'Revising Existing Recovery IPs',
    motion: 'Approve the project plan for Revising Existing Recovery Informational Pamphlets. Focus: take the next steps on gender-neutral language in NA literature, beginning with IP #1.',
    intent: 'To approve the project plan as presented.',
    initialStraw: '133–8–5–0',
    initialPct: '91.10%',
    initialNote: 'Consensus support',
    outcome: 'adopted-isp',
    tag: 'cat'
  },
  {
    id: 'm10',
    number: '10',
    source: 'World Board',
    topic: 'Issue Discussion Topics (IDTs)',
    motion: 'Approve the project plan for Issue Discussion Topics. Focus: Attracting members to service & mentoring them; Welcoming members; Group and area service.',
    intent: 'To approve the project plan as presented.',
    initialStraw: '131–5–10–0',
    initialPct: '89.73%',
    initialNote: 'Consensus support',
    outcome: 'adopted-isp',
    tag: 'cat'
  },
  {
    id: 'm11',
    number: '11',
    source: 'World Board',
    topic: 'New & Revised Service Tools',
    motion: 'Approve the project plan for New and Revised Service Tools. Focus: Revise A Guide to Local Services and The Group Booklet (incl. IP #2 The Group).',
    intent: 'To approve the project plan as presented.',
    initialStraw: '131–5–9–1',
    initialPct: '90.34%',
    initialNote: 'Consensus support',
    outcome: 'adopted-isp',
    tag: 'cat'
  },
  {
    id: 'm12',
    number: '12',
    source: 'World Board',
    topic: 'Safety, Belonging & Gender-Neutral Language',
    motion: 'Approve the project plan for Safety and Belonging / Gender-Neutral Language.',
    intent: 'To approve the project plan as presented.',
    initialStraw: '101–27–12–6',
    initialPct: '72.14%',
    initialNote: 'Strong support',
    finalVote: '115–24–3–4',
    finalPct: '80.99%',
    finalNote: 'Consensus support — Motion carried',
    outcome: 'adopted-final',
    tag: 'cat'
  },
  {
    id: 'm13',
    number: '13',
    source: 'World Board',
    topic: 'DRT/MAT — Helping Members Take Root',
    motion: 'Approve the project plan for DRT/MAT—Helping Members Take Root.',
    intent: 'To approve the project plan as presented.',
    initialStraw: '129–11–5–1',
    initialPct: '88.97%',
    initialNote: 'Consensus support',
    outcome: 'adopted-isp',
    tag: 'cat'
  },
  {
    id: 'm14',
    number: '14',
    source: 'World Board',
    topic: 'Generational & Cultural Diversity',
    motion: 'Approve the project plan for Generational and Cultural Diversity.',
    intent: 'To approve the project plan as presented.',
    initialStraw: '122–11–10–3',
    initialPct: '85.31%',
    initialNote: 'Consensus support',
    outcome: 'adopted-isp',
    tag: 'cat'
  },
  {
    id: 'm15',
    number: '15',
    source: 'World Board',
    topic: 'Three-Year Conference Cycle',
    motion: 'Approve the project plan for Three-Year Conference Cycle.',
    intent: 'To approve the project plan as presented.',
    initialStraw: '133–7–6–0',
    initialPct: '91.10%',
    initialNote: 'Consensus support',
    outcome: 'adopted-isp',
    tag: 'cat'
  },
  {
    id: 'm16',
    number: '16',
    source: 'World Board',
    topic: '2026–2029 NA World Services Budget',
    motion: 'Approve the 2026–2029 Narcotics Anonymous World Services, Inc., Budget.',
    intent: 'To approve the budget as presented.',
    initialStraw: '125–7–13–1',
    initialPct: '86.21%',
    initialNote: 'Consensus support',
    outcome: 'adopted-isp',
    tag: 'cat'
  },
  {
    id: 'm17',
    number: '17',
    source: 'World Board',
    topic: 'Seat Afghanistan Region',
    motion: 'To seat Afghanistan Region.',
    intent: 'To seat Afghanistan Region at the World Service Conference.',
    initialStraw: '124–11–8–3',
    initialPct: '86.71%',
    initialNote: 'Consensus support',
    outcome: 'adopted-isp',
    tag: 'cat'
  },
  {
    id: 'm18',
    number: '18',
    source: 'World Board',
    topic: 'Seat Region 10 Brazil',
    motion: 'To seat Region 10 Brazil.',
    intent: 'To seat Region 10 Brazil at the World Service Conference.',
    initialStraw: '114–18–11–3',
    initialPct: '79.72%',
    initialNote: 'Strong support',
    finalVote: '127–14–2–3',
    finalPct: '88.81%',
    finalNote: 'Consensus support — Motion carried',
    outcome: 'adopted-final',
    tag: 'cat'
  },
  {
    id: 'm19',
    number: '19',
    source: 'World Board',
    topic: 'Remove “roll call votes” from GWSNA',
    motion: 'To reflect current practice by removing "roll call votes" from GWSNA (pg. 68) beginning WSC 2026.',
    intent: 'To remove an old process that is no longer needed for decision making.',
    initialStraw: '107–16–6–2',
    initialPct: '82.95%',
    initialNote: 'Consensus support',
    outcome: 'adopted-isp',
    tag: 'cat'
  },
  {
    id: 'm20',
    number: '20',
    source: 'World Board',
    topic: 'Reconsidering a Decision',
    motion:
      "Add language to GWSNA allowing a participant to request a decision be reconsidered during the same business session, provided new information has come to light. At the cofacilitators' discretion.",
    intent: 'To offer an opportunity for reconsidering a decision if new information comes to light.',
    initialStraw: '112–10–8–1',
    initialPct: '86.15%',
    initialNote: 'Consensus support',
    outcome: 'adopted-isp',
    tag: 'cat'
  },
  {
    id: 'm21',
    number: '21',
    source: 'World Board',
    topic: '2026–2029 Reimbursement Policy',
    motion: 'Adopt the 2026–2029 Reimbursement Policy.',
    intent: 'To adopt the reimbursement policy as presented.',
    initialStraw: '136–2–6–2',
    initialPct: '94.44%',
    initialNote: 'Consensus support',
    outcome: 'adopted-isp',
    tag: 'cat'
  },
  {
    id: 'm22',
    number: '22',
    source: 'World Board',
    topic: '2025 Interim WSC Minutes',
    motion: 'Approve the 2025 Interim World Service Conference minutes.',
    intent: 'To approve the minutes as presented.',
    initialStraw: '122–2–4–3',
    initialPct: '95.31%',
    initialNote: 'Consensus support',
    outcome: 'adopted-isp',
    tag: 'cat'
  },
  {
    id: 'mf2',
    number: 'MF-2',
    source: 'World Board',
    topic: 'No longer utilize a Seating Workgroup',
    motion: 'To adopt as WSC policy: To no longer utilize a seating workgroup.',
    intent: 'Criteria for seating already exists in GWSNA. Staff and the WB verify criteria.',
    initialStraw: '129–10–1–2',
    initialPct: '92.14%',
    initialNote: 'Consensus support',
    outcome: 'adopted-isp',
    tag: 'mf'
  },
  {
    id: 'mf3',
    number: 'MF-3',
    source: 'World Board',
    topic: 'CAR Survey & Project Ideas',
    motion:
      'Project ideas will be offered and prioritized through the CAR Survey rather than being presented through individual motions. For the 2026–29 cycle, CPs will submit ideas for recovery literature, IDTs, or service material for possible inclusion in the CAR Survey.',
    intent: 'Streamline how project plans get to the Conference floor while keeping member voice central.',
    initialStraw: '124–14–3–4',
    initialPct: '87.94%',
    initialNote: 'Consensus support',
    outcome: 'adopted-isp',
    tag: 'mf'
  }
];

export const failedMotions: Motion[] = [
  {
    id: 'm5',
    number: '5',
    source: 'South Florida Region (Co-makers: Iran, Nepal, UK)',
    topic: 'AI Interpretation for WSC Meetings',
    motion:
      'Direct the World Board to implement artificial intelligence (AI) interpretation solutions for WSC meetings (in-person and virtual) to replace the current human live language interpretation.',
    intent: 'To eliminate language barriers, ensure all voices are heard globally, enhance communication and reduce interpretation errors.',
    initialStraw: '24–102–5–0',
    initialPct: '18.32%',
    initialNote: 'Consensus not in support — failed at Initial Straw Poll',
    outcome: 'failed',
    tag: 'car'
  },
  {
    id: 'mf1',
    number: 'MF-1',
    source: 'World Board',
    topic: 'Auto-final at 80% Initial Straw Poll',
    motion: 'If a motion has consensus in an initial straw poll (80% or more in support or not in support), the cofacilitators will announce the results as a final decision.',
    intent: 'Motion withdrawn — issue to be revisited at the Interim WSC.',
    initialStraw: '83–50–7–4',
    initialPct: '59.29%',
    initialNote: 'Lack of strong support — withdrawn with WSC permission',
    outcome: 'withdrawn',
    tag: 'mf'
  }
];

export const motion3Amendments = [
  {
    id: '3-a1',
    maker: 'Arizona Region',
    summary: 'Change WCNA from every 5 years to every 3 years.',
    rationale: 'Five years is too long; our fellowship is aging and many may not be able to attend if frequency is reduced.',
    finalVote: '43–82–3–3',
    finalPct: '33.59%',
    outcome: 'Amendment fails'
  },
  {
    id: '3-a2',
    maker: 'Brazilian Zonal Forum',
    summary: 'Add a “Financial Planning and Risk Mitigation” section to WCNA Guidelines requiring scalable planning practices.',
    rationale: 'Encourage scalable planning practices that reduce financial exposure and help ensure WCNA events remain financially responsible.',
    finalVote: '55–65–5–6',
    finalPct: '44.00%',
    outcome: 'Amendment fails'
  },
  {
    id: '3-a3',
    maker: 'German-Speaking Region (Co-makers: Iran, Australia, Italy, Norway)',
    summary: 'Specify Frankfurt, Germany as the location for WCNA 2028 and add language giving zones a voice in future locations.',
    rationale: 'Ensure WCNA location selection considers diverse cultural, linguistic and economic circumstances — not solely financial indicators.',
    finalVote: '20–87–18–6',
    finalPct: '16.00%',
    outcome: 'Failed at Initial Straw Poll'
  },
  {
    id: '3-a4',
    maker: 'Finland Region',
    summary: 'Replace the proposed WCNA location-selection process with a zonal bidding model.',
    rationale: 'A zonal bidding process would create a clearer, more inclusive method for selecting locations and encourage global participation.',
    finalVote: '44–75–6–5',
    finalPct: '35.20%',
    outcome: 'Amendment fails'
  }
];

export const elected = {
  worldBoard: [
    { name: 'Allyse M', region: 'Connecticut Region' },
    { name: 'Danny G', region: 'Northern New Jersey Region' },
    { name: 'Eduardo G', region: 'HOW Brazil Region' },
    { name: 'Hammed A-T', region: 'Kuwait Region' },
    { name: 'Jade T', region: 'Southern California Region' },
    { name: 'Jessica B', region: 'North Carolina Region', ncRegion: true },
    { name: 'Jorge M', region: 'Colombia Region' },
    { name: 'Michael B', region: 'Volunteer Region' },
    { name: 'Pam T', region: 'OK Region' },
    { name: 'Yoel G', region: 'Israel Region' }
  ],
  hrp: [
    { name: 'Bella A', region: 'Australian Region' },
    { name: 'Cindi B', region: 'OK Region' },
    { name: 'Troy B', region: 'Connecticut Region' }
  ],
  cofacilitator: [{ name: 'Tina N', region: 'Region 51' }]
};

export const participation = {
  voting: 148,
  rdsZds: 134,
  alternates: 113,
  worldBoard: 15,
  remote: 43,
  countries: 47,
  languages: 31,
  meetings: 78945,
  men: 183,
  women: 81,
  nonbinary: 2,
  firstTimeSeated: ['Brazil Central', 'Iran Region #1', 'Nordeste Brazil', 'Rio Grande do Sul', 'Thailand'],
  newlySeated: ['Afghanistan Region', 'Region 10 Brazil']
};

export const carSurveyResults = {
  newLit: [
    { label: 'Disruptive & Predatory Behavior', delegate: 49, member: 30, recommended: true },
    { label: 'Welcoming Newcomers', delegate: 34, member: 30 },
    { label: 'New Step Guide', delegate: 29, member: 25 },
    { label: 'DRT/MAT', delegate: 27, member: 28 },
    { label: '12 Concepts', delegate: 21, member: 22 },
    { label: 'Virtual Recovery', delegate: 17, member: 22 },
    { label: 'Women in Recovery', delegate: 16, member: 22 },
    { label: 'No new recovery lit.', delegate: 7, member: 11 }
  ],
  revisedLit: [
    { label: 'Step Working Guides', delegate: 43, member: 27 },
    { label: 'Tradition 11 (social media)', delegate: 34, member: 26 },
    { label: 'Gender-neutral language', delegate: 25, member: 22, recommended: true },
    { label: 'In Times of Illness', delegate: 28, member: 23 },
    { label: 'Behind the Walls', delegate: 19, member: 12 },
    { label: 'God → Higher Power', delegate: 8, member: 27 },
    { label: 'IP #26 Accessibility', delegate: 16, member: 10 },
    { label: 'IP #24 Money Matters', delegate: 8, member: 5 },
    { label: 'No revisions', delegate: 4, member: 13 }
  ],
  newService: [
    { label: 'Mentorship in Service', delegate: 30, member: 17 },
    { label: 'Virtual Service', delegate: 24, member: 17 },
    { label: 'Fellowship Development', delegate: 24, member: 8 },
    { label: 'GSR Orientation Guide', delegate: 26, member: 15 },
    { label: 'Area Service Basics', delegate: 8, member: 11 },
    { label: 'PR Tools Gov/CJ', delegate: 12, member: 7 },
    { label: 'Trusted Servant Dev.', delegate: 9, member: 11 }
  ],
  revisedService: [
    { label: 'The Group Booklet', delegate: 51, member: 41, recommended: true },
    { label: 'Guide to Local Services', delegate: 47, member: 25, recommended: true },
    { label: 'Disruptive/Violent Behavior', delegate: 32, member: 28 },
    { label: 'SP Social Media', delegate: 24, member: 21 },
    { label: 'H&I Handbook', delegate: 13, member: 10 },
    { label: 'PR Handbook', delegate: 11, member: 7 }
  ],
  idts: [
    { label: 'Attracting Members to Service', delegate: 50, member: 35, recommended: true },
    { label: 'Disruptive & Predatory Behavior', delegate: 47, member: 35 },
    { label: 'Decision-Making/Delegation', delegate: 19, member: 10 },
    { label: 'Unity', delegate: 17, member: 19 },
    { label: 'Helping Addicts Find Us', delegate: 19, member: 24 },
    { label: 'Social Media', delegate: 13, member: 12 },
    { label: 'Funds, Fund Flow, Fundraising', delegate: 12, member: 10 },
    { label: 'Retaining Oldtimers', delegate: 5, member: 16 }
  ]
};

export const discussionSummaries = [
  {
    title: 'Tradition 11 & Modernizing the Policy',
    questions: ['Are we willing to revise the policy in GWSNA p. 44?', 'What might a revision of the Tradition itself look like?'],
    body: "We were all over the map. There wasn't consensus. Some wanted to keep the policy; those who wanted change had a variety of ideas — different kinds of group registries, raising the threshold for a vote to above 2/3 or 80%, using technology to optimize group capture. The World Board will use CPs to collaboratively create a CAR motion on a new policy.",
    quote: '“Every change we make in literature is for the future generation.” — German Speaking Region'
  },
  {
    title: 'Group Booklet & Guide to Local Services',
    questions: ['What makes an NA group an NA group?', 'How do we capture the different ways groups express those things?', 'How do we reach members who serve at the group level?'],
    body: 'Both RD groups (120 of 139) agreed that all groups use Fellowship-approved literature, plus six points already in The Group Booklet. Additional themes: virtual, hybrid and in-person meetings; encouraging people into service and mentorship; reaching members through personal outreach and more technology.',
    quote: "“We've been discussing this for 10 years. Is it finally going to happen?” — California Mid-State"
  },
  {
    title: 'Welcoming Newcomers',
    questions: ['What works in your groups for welcoming members?', 'How do we carry these discussions to a group level?'],
    body: 'Focused and concrete outreach: actively inviting people, remembering their names, reaching out directly, and asking them to fellowship. Groups should inventory themselves: how well are we doing at that?',
    quote: '“How we treat people matters.” — World Board'
  },
  {
    title: 'Making NA Service More Welcoming & Relevant',
    questions: ['How can we make service more welcoming and relevant?', 'How can we better mentor and support our trusted servants?'],
    body: "Atmosphere of recovery in service: make service fun. Don't be confrontational. Don't be a pain in the ass (#DBAD). Concrete suggestions included overlapping terms and task-based service.",
    quote: '“We need to walk together and not drag people along.”'
  }
];

export const newIdeaTop = [
  { maker: 'World Board', topic: 'Fellowship Development', proposal: 'Making NA service more welcoming and relevant — mentorship & supporting trusted servants.', yes: 65, no: 16 },
  { maker: 'World Board', topic: 'Tradition Eleven', proposal: 'Revising Tradition 11 to modernize the expression "press, radio, and film."', yes: 60, no: 22 },
  { maker: 'World Board', topic: 'Local Services', proposal: 'Modernizing The Group Booklet — what makes an NA group an NA group?', yes: 56, no: 26 },
  { maker: 'World Board', topic: 'Fellowship Development', proposal: 'Welcoming Newcomers — second priority in the CAR Survey new recovery literature.', yes: 55, no: 25 },
  { maker: 'World Board', topic: 'Local Services', proposal: 'Service material for area services — capture what is working best.', yes: 53, no: 27 },
  { maker: 'Chicagoland Region', topic: 'DRT/MAT', proposal: "A booklet of members' experiences with MAT (like Reaching Out).", yes: 51, no: 30 },
  { maker: 'African Zonal Forum', topic: 'Local Services', proposal: 'Strengthen local service in Africa — diversity, growth, untapped connection.', yes: 47, no: 31 }
];

// Patrick represents the CAROLINA REGION. North Carolina Region is a separate (sibling) region.
// The Carolinas — Carolina Region + NC Region + SC Region — share a state-line and a lot of
// service relationships, so the conference moments below matter to us even when they belong
// to our neighbors next door.

export const carolinasItems = [
  {
    type: 'elected',
    region: 'North Carolina Region',
    title: 'Jessica B. — Elected to the World Board',
    detail:
      'The neighboring North Carolina Region had its delegate elected to the 10-seat World Board. She joins members from Connecticut, Northern New Jersey, HOW Brazil, Kuwait, Southern California, Colombia, Volunteer, OK, and Israel regions. Big news for the Carolinas — and a service relationship to lean on for our region in the cycle ahead.'
  },
  {
    type: 'nominated',
    region: 'North Carolina Region',
    title: 'Jacob S. — Stood for Cofacilitator',
    detail: "NC's Regional Delegate Jacob S. also stood for Cofacilitator alongside Tina N. of Region 51. Tina was elected."
  },
  {
    type: 'idea',
    region: 'North Carolina Region',
    title: 'NC New Idea: Amendments in Straw Polls',
    detail:
      'North Carolina submitted a new idea: "There needs to be a different process for dealing with amendments in straw polls. It does not make sense to have discussion/vote on amendments when the original motion has consensus not in support." The idea drew 36 yes / 40 no — it didn\'t make Friday\'s discussion list, but the conversation continues.'
  }
];

export const budget = {
  totalIncome: '$25,777,452',
  totalExpenses: '$26,851,984',
  excessRevenue: '-$1,074,531',
  fellowshipContributions: '$6,103,490',
  fy2025Contributions: '$2,093,503',
  recurringContributors: 968,
  groupsContributed: 3227,
  costPerMeetingYear: '$161',
  literatureIncome: '$19.3M (75% of operating income)',
  expensesBreakdown: [
    { area: 'Literature Production & Distribution', total: '$10,739,593', pct: 40 },
    { area: 'Fellowship Development', total: '$8,061,385', pct: 30 },
    { area: 'World Service Conference Support', total: '$5,805,685', pct: 22 },
    { area: 'Events', total: '$1,086,233', pct: 4 }
  ]
};

export const meetingsByRegion = [
  { region: 'Western Europe', count: 5537, growth: '+23%', share: '7%' },
  { region: 'Iran', count: 25613, growth: '+8%', share: '32%' },
  { region: 'Middle-East', count: 849, growth: '+1%', share: '1%' },
  { region: 'Africa', count: 470, growth: '+38%', share: '0.6%' },
  { region: 'USA', count: 23769, growth: '+1%', share: '30%' },
  { region: 'Canada', count: 1666, growth: '+24%', share: '2%' },
  { region: 'Central America', count: 3821, growth: '+24%', share: '5%' },
  { region: 'South America', count: 3333, growth: '+14%', share: '4%' },
  { region: 'Brazil', count: 5028, growth: '+5%', share: '6%' },
  { region: 'Eastern Europe', count: 1179, growth: '+36%', share: '1%' },
  { region: 'Russia', count: 4919, growth: '+26%', share: '6%' },
  { region: 'Asia Pacific', count: 2761, growth: '+16%', share: '3%' }
];

export const sections = [
  { id: 'cover', label: 'Cover', short: '01' },
  { id: 'glance', label: 'At a Glance', short: '02' },
  { id: 'theme', label: 'Our Common Welfare', short: '03' },
  { id: 'carolina', label: 'From the NC Region', short: '04' },
  { id: 'decided', label: 'What We Decided', short: '05' },
  { id: 'failed', label: "What Didn't Pass", short: '06' },
  { id: 'survey', label: 'What Members Want', short: '07' },
  { id: 'discussions', label: 'New Conversations', short: '08' },
  { id: 'elections', label: 'Trusted Servants', short: '09' },
  { id: 'budget', label: 'The Numbers', short: '10' },
  { id: 'ahead', label: 'The Road Ahead', short: '11' },
  { id: 'closing', label: 'Closing', short: '12' }
];
