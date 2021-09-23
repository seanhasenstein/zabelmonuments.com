import React from 'react';
import styled from 'styled-components';

const testimonials = [
  {
    id: 1,
    quote:
      'Thank you for all your help. You were so compassionate and informational. You made a difficult task very easy. We are so pleased with the marker. We tell everyone to go to you for the best looking markers. Thank you again!',
    from: 'A. Meyer',
  },
  {
    id: 2,
    quote:
      'Chris’ headstone has brought me more comfort than you could ever know. I thank you for the advice you’ve offered and the love that went into that beautiful pair of hearts. He would have loved it, this I am certain of. Thank you from the bottom of my heart.',
    from: 'D. Brey',
  },
  {
    id: 3,
    quote:
      'Thank you so much for the beautiful monument. The workmanship is outstanding, but mostly we want to thank you for helping us through this tough time. It took us so long to come to terms with our son’s death but you made it bearable.',
    from: 'Cindy & Dick Herrmann',
  },
  {
    id: 4,
    quote:
      'Thank you so much for doing such a wonderful job with our headstone. Your sales lady Sharon helped us so much with her compassion and over the top personal service. She took something that I thought would be a difficult process and made it easy. The monument is all that we wanted and more, it brought tears to our eyes. Thank you again for your wonderful service.',
    from: 'H. Lorfeld',
  },
  {
    id: 5,
    quote:
      'I can’t thank you enough for taking the stone out on Aug. 19th. It meant so much to me. The entire family, went to the cemetery that Friday night to see the bench. The kids thought it was perfect.',
    from: 'Denise Mecha',
  },
  {
    id: 6,
    quote:
      'I wish I could express how wonderful it is to find someone like you who took the time to take a personal interest. You made me feel like an individual, not just the next item on a schedule. Bless you for that personal interest. You are a very warm and caring person. God bless and take care.',
    from: 'Jean Engle',
  },
  {
    id: 7,
    quote:
      'You and your colleagues at Zabel come into people’s lives when they are at their most terrible point, and you leave them with a sense of closure and healing, secure in the feeling that things have been done right. You have been patient, rigorous and professional but most of all, you have been kind and helpful when I most needed it.',
    from: 'Ben Zion',
  },
  {
    id: 8,
    quote:
      'Thank you so much for the wonderful job you did on Renee’s headstone. Everyone is so pleased and it really is beautiful! Your patience, help and suggestions were more than anyone could expect. It has been a great experience working with you.',
    from: 'Jeannine Herzog & Family',
  },
  {
    id: 9,
    quote:
      'We are so grateful for your kindness and thoughtfulness with our son’s monument. It was a very tough time for us and you treated us with tenderness and respect, yet you were able to keep us directed on it without being pushy. The stone turned out beautiful. We have been receiving a lot of compliments on your work. Thanks so much for all your time and help.',
    from: 'Gerald & Michell Hoerth',
  },
  {
    id: 10,
    quote:
      'We saw our stone today. It is even better than I pictured it in my mind. Although we made changes all the way, you were always patient. You were truly concerned with us being pleased with the final outcome. The artist that completed the family tree did superb work. I love the way he made the branches stand out! Beautiful contrast. Thanks to all of you at Zabel.',
    from: 'Ted & Luanne Bergstrom',
  },
];

export default function Testimonials() {
  const [activeQuote, setActiveQuote] = React.useState(0);

  const handlePrevClick = () => {
    if (activeQuote === 0) {
      return;
    }
    setActiveQuote(prevQuote => prevQuote - 1);
  };

  const handleNextClick = () => {
    if (activeQuote === testimonials.length - 1) {
      return;
    }
    setActiveQuote(prevQuote => prevQuote + 1);
  };

  return (
    <TestimonialsStyles activeQuote={activeQuote}>
      <div className="testimonial-container">
        <div className="testimonials-wrapper">
          <h3>Testimonials</h3>
          <div className="grid">
            {testimonials.map((t, i, a) => (
              <div
                key={t.id}
                className={`grid-item ${activeQuote === i ? 'active' : ''}`}
              >
                <blockquote>"{t.quote}"</blockquote>
                <div className="from">{t.from}</div>
                <div className="count">
                  {i + 1} of {a.length}
                </div>
              </div>
            ))}
          </div>
          <div className="buttons">
            <button
              type="button"
              onClick={handlePrevClick}
              disabled={activeQuote === 0}
            >
              <span className="sr-only">Previous Testimonial</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNextClick}
              disabled={activeQuote === testimonials.length - 1}
            >
              <span className="sr-only">Next Testimonial</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </TestimonialsStyles>
  );
}

const TestimonialsStyles = styled.div`
  padding: 0 1.5rem 6rem;
  width: 100%;
  overflow-x: hidden;

  .testimonial-container {
    margin: 0 auto;
    max-width: 62.5rem;
    width: 100%;
  }

  h3 {
    margin: 0 0 2rem;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    text-align: center;
    color: #0369a1;
  }

  .grid {
    margin: 0 auto;
    max-width: 54rem;
    width: 100%;
    display: flex;
  }

  .grid-item {
    margin: 0 auto;
    padding: 2.5rem 3rem;
    position: relative;
    width: 100%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    border-radius: 0.125rem;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    transform: ${props => `translateX(${props.activeQuote * -100}%)`};
    opacity: 0;

    &.active {
      opacity: 1;
      transition: transform 500ms ease-out, opacity 500ms linear 100ms;
    }
  }

  blockquote {
    margin: 0 auto 1.5rem;
    max-width: 42rem;
    width: 100%;
    font-size: 0.9375rem;
    text-align: center;
    line-height: 1.65;
    color: #334155;
  }

  .from {
    font-family: 'Merriweather', serif;
    font-size: 0.9375rem;
    font-weight: 600;
    font-style: italic;
    letter-spacing: 0.075em;
    text-align: center;
    color: #1e293b;
  }

  .count {
    position: absolute;
    width: 4rem;
    right: 0.75rem;
    bottom: 1.25rem;
    font-family: 'Merriweather', serif;
    font-size: 0.75rem;
    font-style: italic;
    color: #94a3b8;
    text-align: center;
  }

  .buttons {
    margin: 1.5rem 0 0;
    display: flex;
    justify-content: center;
    gap: 0.5rem;

    button {
      padding: 0.375rem 0.5rem;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      border: none;
      color: #94a3b8;
      cursor: pointer;
      background-color: #fff;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

      &:hover {
        color: #475569;
        box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
          rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.075) 0px 2px 3px 0px;
      }

      &:disabled {
        color: #e2e8f0;
        background-color: rgba(255, 255, 255, 0.75);
        box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
          rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
      }

      svg {
        height: 1.25rem;
        width: 1.25rem;
      }
    }
  }

  @media (max-width: 500px) {
    .grid-item {
      padding: 2rem;
    }

    .count {
      bottom: -2.5rem;
      right: unset;
      left: 0;
    }

    .buttons {
      justify-content: flex-end;
    }
  }
`;
