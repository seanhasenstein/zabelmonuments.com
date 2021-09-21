import React from 'react';
import styled from 'styled-components';

const quotes = [
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

const direction = {
  prev: 'PREVIOUS',
  next: 'NEXT',
};

export default function Testimonials() {
  const [activeQuote, setActiveQuote] = React.useState(0);

  const handleClick = dir => {
    if (dir === direction.next) {
      if (activeQuote === quotes.length - 1) {
        setActiveQuote(0);
      } else {
        setActiveQuote(activeQuote + 1);
      }
    }

    if (dir === direction.prev) {
      if (activeQuote === 0) {
        setActiveQuote(quotes.length - 1);
      } else {
        setActiveQuote(activeQuote - 1);
      }
    }
  };

  return (
    <TestimonialStyles>
      <div className="inner">
        <div className="card">
          <h3>Testimonials</h3>
          <blockquote>"{quotes[activeQuote].quote}"</blockquote>
          <p className="from">{quotes[activeQuote].from}</p>
          <div className="count">
            {activeQuote + 1} of {quotes.length}
          </div>
        </div>
        <div>
          <button
            className="prev-btn"
            onClick={() => handleClick(direction.prev)}
          >
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
            className="next-btn"
            onClick={() => handleClick(direction.next)}
          >
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
    </TestimonialStyles>
  );
}

const TestimonialStyles = styled.div`
  padding: 5rem 0 8rem;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f8fafc;

  .inner {
    margin: 0 auto;
    position: relative;
    max-width: 60rem;
    width: 100%;
  }

  .card {
    padding: 3.5rem 4rem 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 0.125rem;
    border: 1px solid #e2e8f0;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -1150px;
      width: 1000px;
      height: 100%;
      background-color: #fff;
      border-radius: 0.125rem;
      border: 1px solid #e2e8f0;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: -1150px;
      width: 1000px;
      height: 100%;
      background-color: #fff;
      border-radius: 0.125rem;
      border: 1px solid #e2e8f0;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    }
  }

  h3 {
    margin: 0 0 1.5rem;
    font-family: 'Poppins', sans-serif;
    font-size: 1.25rem;
    font-weight: 600;
    color: #94a3b8;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.25em;
  }

  blockquote {
    margin: 0 0 1.5rem;
    padding: 0;
    min-height: 8rem;
    display: flex;
    align-items: center;
    line-height: 2;
    color: #475569;
    text-align: center;
  }

  .from {
    margin: 0;
    font-family: 'Merriweather', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    font-style: italic;
    color: #0f172a;
    letter-spacing: 0.2em;
    text-align: center;
  }

  .count {
    margin: 1.75rem auto 0;
    padding: 0.375rem 0.75rem;
    display: inline-flex;
    font-family: 'Merriweather', sans-serif;
    font-size: 0.8125rem;
    font-weight: 600;
    font-style: italic;
    color: #e2e8f0;
    letter-spacing: 0.1em;
    text-shadow: 0 1px 0 #0f172a;
    text-align: center;
    line-height: 1;
    background-color: #475569;
    border: 1px solid #334155;
    box-shadow: inset 0 1px 1px #64748b;
    border-radius: 9999px;
  }

  .prev-btn,
  .next-btn {
    padding: 0.5rem;
    position: absolute;
    top: 10.875rem;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #94a3b8;
    cursor: pointer;
    border-radius: 9999px;
    border: 2px solid transparent;

    &:hover {
      color: #475569;
    }

    svg {
      height: 1.5rem;
      width: 1.5rem;
    }
  }

  .prev-btn {
    left: -90px;
  }

  .next-btn {
    right: -90px;
  }
`;
