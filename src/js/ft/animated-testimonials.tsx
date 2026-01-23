import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive(prev => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div
      className="px py md:px lg:px mx-auto max-w-sm md:max-w-4xl"
      style={
        {
          '--px': 'var(--ft-container-px, 4)',
          '--py': 'var(--ft-container-py, 20)',
          '--md-px': 'var(--ft-container-md-px, 8)',
          '--lg-px': 'var(--ft-container-lg-px, 12)',
        } as React.CSSProperties
      }
    >
      <div
        className="display-grid grid-cols gap md:grid-cols relative"
        style={
          {
            '--gap': 'var(--ft-grid-gap, 20)',
            '--grid-cols': 'var(--ft-grid-cols, 1)',
            '--md-grid-cols': 'var(--ft-grid-cols-md, 2)',
          } as React.CSSProperties
        }
      >
        <div>
          <div
            className="h relative w-full"
            style={
              { '--h': 'var(--ft-image-height, 80)' } as React.CSSProperties
            }
          >
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                  }}
                  className="inset absolute origin-bottom"
                  style={{ '--inset': '0' } as React.CSSProperties}
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div
          className="py display-flex flex-col justify-between"
          style={{ '--py': 'var(--ft-content-py, 4)' } as React.CSSProperties}
        >
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
            }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {testimonials[active].name}
            </h3>
            <p
              className="color dark:color text-sm"
              style={
                {
                  '--color':
                    'var(--ft-designation-color, var(--color-gray-500))',
                  '--dark-color':
                    'var(--ft-designation-color-dark, var(--color-neutral-500))',
                } as React.CSSProperties
              }
            >
              {testimonials[active].designation}
            </p>
            <motion.p
              className="mt color dark:color display-flex flex-wrap text-lg"
              style={
                {
                  '--mt': 'var(--ft-quote-mt, 8)',
                  '--color': 'var(--ft-quote-color, var(--color-gray-500))',
                  '--dark-color':
                    'var(--ft-quote-color-dark, var(--color-neutral-300))',
                } as React.CSSProperties
              }
            >
              {testimonials[active].quote.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: 'blur(10px)',
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: 'blur(0px)',
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: 'easeInOut',
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div
            className="display-flex gap pt md:pt"
            style={
              {
                '--gap': 'var(--ft-button-gap, 4)',
                '--pt': 'var(--ft-button-pt, 12)',
                '--md-pt': 'var(--ft-button-md-pt, 0)',
              } as React.CSSProperties
            }
          >
            <button
              onClick={handlePrev}
              className="display-flex h w bg dark:bg items-center justify-center rounded-full"
              style={
                {
                  '--h': 'var(--ft-button-size, 7)',
                  '--w': 'var(--ft-button-size, 7)',
                  '--bg': 'var(--ft-button-bg, var(--color-gray-100))',
                  '--dark-bg':
                    'var(--ft-button-bg-dark, var(--color-neutral-800))',
                } as React.CSSProperties
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="color dark:color duration h w nav-arrow-prev transition-transform"
                style={
                  {
                    '--h': 'var(--ft-button-icon-size, 5)',
                    '--w': 'var(--ft-button-icon-size, 5)',
                    '--color':
                      'var(--ft-button-icon-color, var(--color-black))',
                    '--dark-color':
                      'var(--ft-button-icon-color-dark, var(--color-neutral-400))',
                    '--duration': 'var(--ft-button-transition-duration, 300)',
                  } as React.CSSProperties
                }
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="display-flex h w bg dark:bg items-center justify-center rounded-full"
              style={
                {
                  '--h': 'var(--ft-button-size, 7)',
                  '--w': 'var(--ft-button-size, 7)',
                  '--bg': 'var(--ft-button-bg, var(--color-gray-100))',
                  '--dark-bg':
                    'var(--ft-button-bg-dark, var(--color-neutral-800))',
                } as React.CSSProperties
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="color dark:color duration h w nav-arrow-next transition-transform"
                style={
                  {
                    '--h': 'var(--ft-button-icon-size, 5)',
                    '--w': 'var(--ft-button-icon-size, 5)',
                    '--color':
                      'var(--ft-button-icon-color, var(--color-black))',
                    '--dark-color':
                      'var(--ft-button-icon-color-dark, var(--color-neutral-400))',
                    '--duration': 'var(--ft-button-transition-duration, 300)',
                  } as React.CSSProperties
                }
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

document
  .querySelectorAll('[data-ft-animated-testimonials]')
  .forEach(container => {
    const configScript = container.querySelector('script[data-fn="props"]');

    let defaultProps = {
      testimonials: [],
    };

    if (configScript) {
      try {
        const props = JSON.parse(configScript.textContent || '{}');
        defaultProps = { ...defaultProps, ...props };
      } catch (error) {
        console.error('Failed to parse testimonials config:', error);
      }
    }

    const root = createRoot(container as HTMLElement);

    root.render(
      <AnimatedTestimonials testimonials={defaultProps.testimonials} />,
    );
  });
