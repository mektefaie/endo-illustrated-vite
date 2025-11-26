const steps = [
  {
    title: '1. Understanding & Research',
    description:
      'Clarifying the goal of the illustration, gathering references, reviewing anatomy, and ensuring scientific accuracy.',
    image: 'joining-canals',
    imagePosition: 'right',
  },
  {
    title: '2. Concept & Planning',
    description:
      'Developing the visual approach, creating rough sketches or thumbnails, and determining the composition or narrative.',
    image: 'joining-canals',
    imagePosition: 'left',
  },
  {
    title: '3. Creating the Illustration',
    description:
      'Producing the detailed drawing, rendering, painting, or 3D model—building the core visual piece from the approved concept.',
    image: 'joining-canals',
    imagePosition: 'right',
  },
  {
    title: '4. Refinement & Review',
    description:
      'Polishing details, adjusting accuracy, integrating labels or graphics, and making revisions based on feedback.',
    image: 'joining-canals',
    imagePosition: 'left',
  },
  {
    title: '5. Finalization & Delivery',
    description:
      'Preparing final files, exporting in the needed formats, and delivering the completed illustration.',
    image: 'joining-canals',
    imagePosition: 'right',
  },
];

const Process = () => {
  return (
    <section
      id="process"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 *:relative"
    >
      {/* main div encompassing the section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="tracking-wide bg-gradient-to-b from-white to-pink-200 bg-clip-text text-transparent">
              Concept to Illustration
            </span>
            <br />
            <span className="tracking-wide bg-gradient-to-b from-pink-400 to-pink-500 bg-clip-text text-transparent">
              Simple to Understand
            </span>
          </h2>
        </div>

        {/* individual projects */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-32">
          {steps.map((step, key) => (
            <div
              key={key}
              className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${
                step.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* image section */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-pink-500/20
                  rounded-xl sm:rounded-2xl transition-all duration-500"
                  />
                  <div
                    className="relative bg-pink-900/50 backdrop-blur-sm border border-pink-800/50
                  rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border-1
                  group-hover:border-pink-600/50 transition-all duration-300"
                  >
                    {/* image  */}
                    Project
                  </div>
                </div>
              </div>
              {/* text section */}
              <div className="flex-1 w-full">
                <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                  <h3 className="text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-base text-xl sm:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Process;
