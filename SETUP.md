# Setup Guide for Paradox House

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` and add your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173`

## Supabase Setup

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Once your project is created, go to Settings > API
3. Copy your Project URL and anon/public key
4. Add them to your `.env` file

## Project Structure

```
src/
  components/          # React components
    Hero.tsx          # Hero section with large title
    About.tsx         # About section
    Hotels.tsx        # Hotels/Locations showcase
    ResidencyBanner.tsx  # Residency program banner
    Activities.tsx    # Activities section
    Protocols.tsx     # Protocols section
    Gallery.tsx       # Image gallery
    PartOfParadox.tsx # Part of Paradox section
    Ecosystem.tsx     # Ecosystem/Access tiers
    Booking.tsx       # Booking section
    Footer.tsx        # Footer with links
    Navigation.tsx    # Top navigation
  lib/
    supabase.ts       # Supabase client
    supabase-example.ts  # Example usage
  App.tsx             # Main app component
  main.tsx            # Entry point
```

## Using Supabase

See `src/lib/supabase-example.ts` for examples of how to:
- Fetch data from tables
- Insert new records
- Set up real-time subscriptions

Example usage in a component:
```typescript
import { supabase } from './lib/supabase'

// Fetch data
const { data, error } = await supabase
  .from('your_table')
  .select('*')
```

## Customization

### Colors
Colors are defined in `tailwind.config.js`:
- `paradox-bg`: #ede9e4 (background)
- `paradox-dark`: #170f0b (dark text)
- `paradox-black`: #222 (black)
- `paradox-brown`: #bdb4af (brown accents)
- `paradox-gray`: #7a6f6a (gray text)
- `paradox-light`: #edece3 (light text)

### Fonts
- **Anton**: Used for large headings (loaded from Google Fonts)
- **Inter**: Used for body text and UI elements (loaded from Google Fonts)
- **Clash Grotesk**: Used in design (fallback to Inter if not available)

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Notes

- Images are loaded from Figma's CDN (valid for 7 days)
- For production, you should download and host images locally
- The design uses absolute positioning in some places - consider making responsive adjustments for mobile
- Clash Grotesk font may need to be purchased or loaded from a CDN for exact design match
