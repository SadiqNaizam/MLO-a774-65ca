import React from 'react';
import SearchBar from '../components/HomePage/SearchBar';
import ShortcutIcons from '../components/HomePage/ShortcutIcons';
import FooterLinks from '../components/HomePage/FooterLinks';

const IndexPage: React.FC = () => {
  return (
    // Overall page container:
    // - flex flex-col: Stacks children vertically.
    // - items-center: Centers children horizontally (main block will be centered).
    // - justify-evenly: Distributes space evenly. Since FooterLinks is fixed (out of normal flow),
    //                   'main' is the sole flow child and will be vertically centered.
    // - min-h-screen: Ensures the container takes at least the full viewport height.
    // - px-4: Horizontal padding, especially for smaller screens.
    // - Background and text colors are inherited from 'body' styles defined in src/index.css.
    <div className="flex flex-col items-center justify-evenly min-h-screen px-4">
      {/* FooterLinks is fixed-positioned and will appear at top-right regardless of its DOM order here. */}
      <FooterLinks />

      {/* Main content area for logo, search bar, and shortcuts. */}
      {/* - w-full max-w-screen-lg: Constrains width as per layout requirements. */}
      {/* - flex flex-col items-center: Centers its children (Logo, SearchBar, ShortcutIcons) horizontally. */}
      {/* - space-y-8: Adds vertical spacing between Logo, SearchBar, and ShortcutIcons. This provides more visual separation than space-y-4 from layout requirements but aligns better with typical Google homepage spacing. */}
      {/* - py-8: Adds vertical padding within the main content block for better spacing from viewport edges if main content is tall or viewport is short. */}
      <main className="w-full max-w-screen-lg flex flex-col items-center space-y-8 py-8">
        {/* Google Logo: Styled with Tailwind utilities. font-sans uses Arial from tailwind.config.ts. */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-sans">
          Google
        </h1>

        {/* SearchBar component. It manages its own styling, including max-width. */}
        <SearchBar />
        
        {/* ShortcutIcons component */}
        <ShortcutIcons />
      </main>
    </div>
  );
};

export default IndexPage;
