import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import PageShell from '../components/PageShell';
import Eric from '../assets/images/staff/eric.jpg';
import Jamie from '../assets/images/staff/jamie.jpg';

const profiles = [
  {
    id: 1,
    name: 'Eric Zabel',
    bio: [
      'Eric is a 3rd generation memorialist and current owner of Zabel Monuments. Eric is involved in all aspects of the business with a focus on lay-out, design and customization. Eric and his wife Claire, have three children. Away from work Eric enjoys cooking, camping and spending time with family and friends. Eric is a member of the Kansas City Barbeque Society and is a certified BBQ Judge.',
    ],
    image: Eric,
  },
  {
    id: 2,
    name: 'Karie Hessel',
    bio: [
      'Karie manages the Manitowoc office and fills in at our other locations when needed. Karie enjoys working with families and handles all aspects of customer service, including sales of a memorial for a loved one or pet, pre-need memorials, final dates and cleaning on existing markers. When not at work, Karie enjoys such hobbies as painting, reading and traveling.',
    ],
    image: null,
  },
  {
    id: 3,
    name: 'Jamie Steeno',
    bio: [
      'Like you, Jamie believes that everyone’s story is worth telling, either in a printed image or on stone.',
      'Jamie Steeno has come to Zabel Monuments with a diverse background. Jamie has her Master of Photography Degree, she has been earning both state and international awards telling stories with her photography. Jamie also has an Associates Degree in Accounting and a Master in Leadership and Communications.',
      'Jamie believes in volunteering, Givers Gain. She gets involved in raising money in her community for 5 to 6 charities each year. She volunteers on several boards. Jamie is currently the President of Wisconsin Professional Photographers Association, Inc, and has been involved since 2013. WPPA brings education to any photographer that wishes to get involved. She has her Fellowship with WPPA and is a member of the American Society of Photographers and Professional Photographers of America.',
      'Jamie enjoys traveling the National Parks via hiking or riding her Harley, continued education, teaching and living her DASH.',
      'Stop by and meet Jamie, let her document your story in stone at our Green Bay Store.',
    ],
    image: Jamie,
  },
  {
    id: 4,
    name: 'Craig Rozmarynowski',
    bio: [
      'Craig comes to Zabel’s with 15 years of construction experience. Craig runs the shop, including all sandblasting of memorials, painting and inscriptions. Craig takes pride in his work and makes sure everything leaving the shop passes his strict quality inspection. When Craig is not working, he enjoys spending time with his family and hunting.',
    ],
    image: null,
  },
  {
    id: 5,
    name: 'John Zabel',
    bio: [
      'John is a 2nd generation memorialist and past owner of Zabel Monuments. John was involved in all aspects of the business. Now retired, John enjoys his time “up nort” in Three Lakes at his cabin with his wife Nancy. John and Nancy have three adult children and eight grandchildren. He is a member of Redeemer Lutheran Church and the Manitowoc Yacht Club.',
    ],
    image: null,
  },
];

export default function Staff() {
  return (
    <Layout
      title="Meet Our Staff | Zabel Monuments"
      description="Meet our caring staff that is here to help you with anything that you may need."
      urlPath="staff"
    >
      <PageShell>
        <StaffPageStyles>
          <h2>Meet our staff</h2>
          <div className="grid">
            {profiles.map(p => (
              <div key={p.id} className="grid-item">
                {p.image && (
                  <div className="photo">
                    <img src={p.image} alt={p.name} />
                  </div>
                )}

                <div className="details">
                  <h3>{p.name}</h3>
                  {p.bio.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </StaffPageStyles>
      </PageShell>
    </Layout>
  );
}

const StaffPageStyles = styled.div`
  .grid-item {
    padding: 2.25rem 0 2rem;
    display: flex;
    gap: 2.5rem;
    border-bottom: 1px solid #e2e8f0;

    &:first-of-type {
      padding-top: 1.125rem;
    }

    &:last-of-type {
      padding-bottom: 0;
      border-bottom: 0;
    }
  }

  .photo {
    max-width: 10rem;
    width: 100%;
    flex-shrink: 0;

    img {
      width: 100%;
      border: 6px solid #fff;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    }
  }

  h3 {
    margin: 0 0 1rem;
    font-family: 'poppins', sans-serif;
    font-size: 1.125rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #1e293b;
  }

  p {
    margin: 0 0 1.5rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  @media (max-width: 991px) {
    .photo {
      max-width: 8rem;
    }
  }
`;
