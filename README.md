# Paradox House

A luxury retreat website built with Vite, React, TypeScript, and Supabase.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

Then add your Supabase credentials:
- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

3. Run the development server:
```bash
npm run dev
```

## Tech Stack

- **Vite**: Fast build tool and dev server
- **React 19**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Supabase**: Backend as a service (database, auth, etc.)

## Project Structure

```
src/
  components/     # React components
  lib/           # Utilities (Supabase client, etc.)
  App.tsx        # Main app component
  main.tsx       # Entry point
```

## Features

- Hero section with large typography
- About section with image gallery
- Hotels/Locations showcase
- Residency program information
- Activities and protocols
- Gallery
- Ecosystem/Access tiers
- Booking modal with Supabase integration
- Footer with contact information

## Booking System

The booking system includes a modal form that collects:
- Name, Email, Phone Number
- Reason for visit
- PX membership status
- Member status
- Cohort information

All bookings are saved to Supabase. Make sure to set up the `bookings` table using the SQL schema provided in `supabase-schema.sql`.

## Fonts

The design uses custom fonts:
- **Anton**: For large headings
- **Clash Grotesk**: For body text and headings (may need to be purchased or loaded from CDN)
- **Inter**: For UI elements

## Supabase Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from the project settings
3. Add them to your `.env` file
4. Run the SQL schema to create the bookings table:
   - Go to your Supabase project dashboard
   - Navigate to SQL Editor
   - Run the SQL from `supabase-schema.sql` to create the `bookings` table

## Development

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
