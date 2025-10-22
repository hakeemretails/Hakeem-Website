1. Purpose
HakkemFleet is a logistics booking app that allows customers to request company-owned trucks for bulk deliveries. The company manages all trucks, drivers, and bookings. The app lets users quickly fill in delivery details, get a price estimate, receive a booking ID, and pay on delivery.

2. Core Features (MVP)
User Side
Book a Truck Form: Users enter pickup state, destination state, truck type, and basic load details.


Unique Booking ID: Each booking gets a unique code (e.g., BH-2025-0001) to track delivery status.


Simple Price Estimate: Price calculated using predefined rates based on state-to-state routes.


Booking Confirmation: After submitting, users receive their booking ID and confirmation details.


Track Delivery: Users enter their booking ID to check delivery progress (Pending → Confirmed → Completed).


Contact Support: Direct phone call for help.


Payment: Pay on delivery only (no online payments).


Note: Admin functionality will be built separately using Next.js and is not part of this mobile app project.

3. Technical Stack (MVP)

**Frontend Framework:**
- Expo (React Native framework)
- React Native (Expo)
- Expo Router (file-based routing)

**Backend & Database:**
- Supabase (PostgreSQL database)

**Expo Libraries & Services:**
- Expo Linking (for phone call integration)
- Expo Constants (for app configuration)

**Development Tools:**
- TypeScript (for type safety)
- ESLint (code linting)
- Expo CLI (development and building)

**Payments:**
- Pay on delivery only (no payment integration required)

**Additional Libraries:**
- React Hook Form (form management)
- Expo Vector Icons (icon library)



4. User Flow (MVP)
User opens the app and fills out the "Book a Truck" form (pickup state, destination state, truck type, basic load details).


The system calculates a simple price estimate using predefined rates.


User confirms the booking and gets a unique booking ID (BH-2025-0001).


User manually checks delivery status by entering their booking ID (Pending → Confirmed → Completed).


Delivery is completed, and user pays on delivery.



5. Non-Functional Requirements
No Authentication: Users do not need an account.


Data Storage: Bookings and records stored securely in Supabase Postgres.


Compliance: Fully meets Google Play policy (no personal tracking or unnecessary data collection).

primary: #0D2B4F
secondary: #333333
accent1: #00B4D8
accent2: #FF6B00
backgroundLight: #F4F6F8
backgroundDark: #081A2B
textPrimary: #FFFFFF
textSecondary: #1C1C1C