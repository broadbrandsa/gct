# Project Structure
```
src/
├── app/                    # Next.js App Router
│   ├── globals.css         # Design system & animations
│   ├── layout.tsx          # Root layout with LockScreen
│   └── page.tsx            # Main proposal page
├── components/
│   ├── LockScreen.tsx      # 4-digit code gate
│   ├── sections/           # All proposal sections
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── ExecutiveSummary.tsx
│   │   ├── ProductOverview.tsx
│   │   ├── DBOTSection.tsx
│   │   ├── CXGSection.tsx
│   │   ├── TeSIMSection.tsx
│   │   ├── CyberInsuranceSection.tsx
│   │   ├── BitdefenderSection.tsx
│   │   ├── XaniteSection.tsx
│   │   ├── PersaicSection.tsx
│   │   ├── CombinedCommercial.tsx
│   │   ├── WhyMVNE.tsx
│   │   ├── NextSteps.tsx
│   │   └── Footer.tsx
│   └── ui/                 # shadcn/ui primitives
├── lib/                    # Utility functions
└── content/                # Static content data
public/
├── logos/                  # Brand logos (MVNE, GCT)
├── images/                 # Hero backgrounds
└── favicon.svg
docs/                       # Project documentation
```
