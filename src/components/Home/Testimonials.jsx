import React, { useState, useRef, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  { review: "This product changed our workflow completely!", company: "TechCorp", subtitle: "CEO", stars: 5 },
  { review: "Excellent service and support.", company: "FinSolutions", subtitle: "Manager", stars: 4 },
  { review: "Highly recommend this to all startups.", company: "StartupX", subtitle: "Founder", stars: 5 },
  { review: "Great experience overall.", company: "DesignPro", subtitle: "Creative Lead", stars: 4 },
  { review: "Reliable and efficient.", company: "BuildIt", subtitle: "Project Head", stars: 5 },
  { review: "Outstanding quality and support.", company: "NextGen", subtitle: "CTO", stars: 5 },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  // 1. Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // 2. 🌟 CRITICAL FIX: Scroll to the correct position when currentIndex changes 🌟
  useEffect(() => {
    if (containerRef.current) {
      // Calculate the width of one card (including its padding/margin)
      const cardWidth = containerRef.current.offsetWidth / cardsPerView;
      
      // Scroll smoothly to the starting position of the current card index
      containerRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex, cardsPerView]);


  // Button navigation
  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };
  const handleNext = () => {
    // Ensure we don't scroll past the last set of visible cards
    setCurrentIndex(prev => Math.min(prev + 1, testimonials.length - cardsPerView));
  };

  // Drag/Touch logic
  const startDrag = (clientX) => {
    isDragging.current = true;
    startX.current = clientX;
    scrollStart.current = containerRef.current.scrollLeft;
    // Optional: Add a class to disable text selection during drag
    containerRef.current.style.cursor = 'grabbing';
    containerRef.current.style.userSelect = 'none';
  };

  const onMouseDown = (e) => startDrag(e.pageX);
  const onTouchStart = (e) => startDrag(e.touches[0].clientX);

  const onMove = (clientX) => {
    if (!isDragging.current) return;
    const walk = startX.current - clientX;
    // This allows visual dragging
    containerRef.current.scrollLeft = scrollStart.current + walk;
  };

  const onMouseMove = (e) => onMove(e.pageX);
  const onTouchMove = (e) => onMove(e.touches[0].clientX);

  const stopDrag = () => {
    if (!isDragging.current) return; // Important check
    isDragging.current = false;

    // Reset cursor/selection styles
    containerRef.current.style.cursor = 'grab';
    containerRef.current.style.userSelect = 'auto';

    // Snap to closest card by updating currentIndex
    const cardWidth = containerRef.current.offsetWidth / cardsPerView;
    const scrollPosition = containerRef.current.scrollLeft;
    const newIndex = Math.round(scrollPosition / cardWidth);

    // Update state to snap and trigger the useEffect scroll for smooth final position
    setCurrentIndex(Math.min(Math.max(newIndex, 0), testimonials.length - cardsPerView));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          // Disable button when at the start
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-2 rounded-full z-10 
            ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-600'} transition-opacity`}
          aria-label="Previous testimonials"
        >
          &#10094;
        </button>

        {/* Right Button */}
        <button
          onClick={handleNext}
          // Disable button when at the end
          disabled={currentIndex >= testimonials.length - cardsPerView}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-2 rounded-full z-10 
            ${currentIndex >= testimonials.length - cardsPerView ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-600'} transition-opacity`}
          aria-label="Next testimonials"
        >
          &#10095;
        </button>

        {/* Cards Container */}
        <div
          ref={containerRef}
          // IMPORTANT: Removed scroll-smooth because we are controlling smooth scrolling with the useEffect's 'behavior: smooth'
          className="flex overflow-hidden cursor-grab" 
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={stopDrag}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2"
              // Use template literal correctly for the width style
              style={{ width: `${100 / cardsPerView}%` }} 
            >
              <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col justify-between">
                <p className="text-gray-700 mb-4">"{item.review}"</p>
                <h3 className="text-lg font-semibold">{item.company}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.subtitle}</p>
                <div className="flex">
                  {/* Rating Stars */}
                  {Array(item.stars).fill(0).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;