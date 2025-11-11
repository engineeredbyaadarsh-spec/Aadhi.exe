/**
 * Home Component
 * ----------------------------
 * This component renders a personal dictionary-style profile section for "Aadarsh".
 * The layout uses Tailwind CSS for responsive styling, and presents information
 * such as name pronunciation, definitions, a brief description, and related terms.
 *
 * Design Philosophy:
 * - Minimalist and clean visual hierarchy.
 * - Blue monochromatic palette (#0525E9) for modern contrast.
 * - Responsive typography and spacing.
 * - Fully accessible (semantic HTML and clear content structure).
 */

export default function Home() {
  /**
   * Array of related keywords displayed under "Similar:"
   * These tags describe the professional scope or related skills.
   */
  const similarTags = [
    "engineer",
    "developer",
    "coder",
    "product designer",
    "ui/ux",
  ];

  return (
    /**
     * ============================
     * ROOT WRAPPER
     * ============================
     * Centers all content both vertically and horizontally.
     * Sets full-screen height and white background.
     * Uses Tailwind's responsive paddings and disables text selection.
     */
    <div className="flex flex-col items-center justify-center w-full h-screen bg-[#ffffff] text-[#0525E9] sm:p-10 px-3 select-none">
      {/* 
        ============================
        CONTENT CONTAINER
        ============================
        - Restricts max width for better readability.
        - Applies consistent vertical spacing between content blocks.
        - Aligns items to the left (start) for a natural text layout.
      */}
      <div className="flex flex-col items-start justify-center max-w-2xl w-full px-6 sm:px-0 space-y-6">
        {/* 
          =======================================
          SECTION: Name and Pronunciation
          =======================================
          - Displays the name "Aadarsh" as a title with large font size.
          - Below it, the phonetic pronunciation is shown in Devanagari script.
        */}
        <div className="flex flex-col items-start justify-center space-y-1">
          <h1 className="font-sans text-4xl sm:text-5xl font-semibold tracking-tight">
            Aadarsh
          </h1>
          <p className="font-sans text-[17px] sm:text-[20px]">/आदर्श/</p>
        </div>

        {/* 
          =======================================
          SECTION: Definitions
          =======================================
          - Mimics dictionary-style entries with ordered numbering.
          - Explains two primary professional roles.
        */}
        <div className="flex flex-col items-start justify-center space-y-2">
          <p className="font-sans text-[16px] sm:text-[18px]">noun</p>
          <ol className="list-decimal list-inside space-y-3">
            <li className="font-sans text-[16px] sm:text-[19px] leading-relaxed">
              Front-end <span className="font-semibold">engineer</span>, a
              person who builds the visual and interactive part of a website or
              an application.
            </li>
            <li className="font-sans text-[16px] sm:text-[19px] leading-relaxed">
              <span className="font-semibold">Designer</span>, a creator who
              creates digital products that are usable and beautiful.
            </li>
          </ol>
        </div>

        {/* 
          =======================================
          SECTION: Description
          =======================================
          - Provides a narrative-style sentence describing Aadarsh.
          - Highlights independence and craftsmanship in design and engineering.
        */}
        <div className="flex flex-col items-start justify-center space-y-2">
          <p className="font-sans text-[16px] sm:text-[18px]">description</p>
          <p className="font-sans text-[16px] sm:text-[19px] leading-relaxed">
            An independent{" "}
            <span className="font-semibold">software engineer</span> and{" "}
            <span className="font-semibold">designer</span> based in Kerala,
            India, with the ability to give soul to every pixel.
          </p>
        </div>

        {/* 
          =======================================
          SECTION: Similar
          =======================================
          - Lists skill tags or professional identities similar to the main role.
          - Uses Tailwind borders and rounded pills for a clean tag design.
          - Tags are dynamically rendered from the `similarTags` array.
        */}
        <div className="flex flex-col items-start justify-center space-y-2">
          <p className="font-sans text-[16px] sm:text-[18px]">Similar:</p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {similarTags.map((tag) => (
              <span
                key={tag} // Each tag must have a unique key for React's reconciliation.
                className="border border-[#0525E9] rounded-full px-3 py-1 text-[12px] sm:text-[14px] font-sans"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
