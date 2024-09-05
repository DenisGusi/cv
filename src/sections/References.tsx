const testimonials = [
    {
      body: 'Denis is someone who wants to use his skills to make the Internet a better and more accessible place. He quickly got up to speed and has been involved in several projects. Denis makes sure no one is forgotten and has a positive, cheerful personality, making him fun to work with. I was very pleased with his performance. I wish him all the best in his future endeavors.',
      author: {
        name: 'Akram Alraai',
        handle: 'CEO of Elara Digital GmbH',
        imageUrl:
          'https://media.licdn.com/dms/image/v2/C4E03AQFzSF1LEcXHew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1645739315505?e=1730937600&v=beta&t=J0fi9GenEtWGPGfxc3NiNSAgHxCXrBfuz-ah7LJX9BU',
      },
    },
    {
        body: "Denis is a powerhouse of information and energy. He brings the positivity in any team he's in, and I had the opportunity to witness this first-hand. He voluntarily picked up on multiple projects that provided immense value to the product. He has the skill of being able to focus and drill down on the right questions at the opportune time, which is always sooner than later. Denis has also been a pleasure to pair-program with, bringing in more than equal energy and value to the table always.",
        author: {
          name: 'Amruth Pillai',
          handle: 'Senior Frontend Developer at Elara Digital GmbH',
          imageUrl:
            'https://media.licdn.com/dms/image/v2/C5103AQEUfnd5mMyt2A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1543861825161?e=1730937600&v=beta&t=9kC1IB9JfcAnF1ByK5v8BQXyPnxO0Vz9HfB1FfL_m-U',
        },
      },
      {
        body: 'Denis is a frontend developer that really takes pride in his craft. He is a very kind person, emphatic, always responding rapidly, and an enrichment for every team and company. He puts great thought into all of his work and is really caring about the little (but important!) details. Denis always puts the user and his experience first and tries to deliver the best possible user experience. Denis was my direct report for only four months and I am sorry that our ways had to part due to reasons out of our control. But even in this four months it was clear that Denis has great potential.',
        author: {
          name: 'Sascha Timme',
          handle: 'Head of Development of Elara Digital GmbH (at the Time)',
          imageUrl:
            'https://media.licdn.com/dms/image/v2/C4D03AQHVRt0GbE0PcA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1579422318316?e=1730937600&v=beta&t=ZR6kqBfviKL17R2B_Tq7DjR3V9RCqsC7Yl08Ukzi_Hw',
        },
      },
      {
        body: 'Denis worked as a Junior Frontend Developer at onvista media GmbH, and he was an absolute standout from day one. Denis was dedicated, reliable, and a quick problem-solver, always delivering high-quality work on time. His positive attitude and willingness to collaborate made him an essential part of the team.',
        author: {
          name: 'Patrick Gollmer',
          handle: 'Team Lead Frontend Development at onvista media GmbH',
          imageUrl:
            'https://media.licdn.com/dms/image/v2/C5603AQEw6toFtHzq-g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1517784815947?e=1730937600&v=beta&t=6LyOOYeBLxqp4Tt-WpQ0uWZ0k2PupLowXQZxeC01kpM',
        },
      },
      {
        body: 'Denis was an outstanding Product Owner at Energieausweis48, bringing vision, leadership, and exceptional execution to our product development. His deep understanding of our market and his ability to prioritize and deliver features that truly moved the needle made him an invaluable asset to the company. Denis consistently exceeded expectations, and his strategic insight helped propel our product to new heights. It was with great regret that, due to the acquisition of Energieausweis48 by ImmobilienScout24, we had to part ways. Denis would be a tremendous asset to any organization—his talent and dedication are unmatched.',
        author: {
          name: 'Sascha Engels-Ziemann',
          handle: 'CEO of Energieausweis48',
          imageUrl:
            'https://media.licdn.com/dms/image/v2/C4D03AQG93chwLeaY0A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1636558674880?e=1730937600&v=beta&t=ettHOVTWpOCOVk24DEwL8ngBUvNEuLHV-hIWepbnjGU',
        },
      },
  ]
  
  export default function References() {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-zinc-300">References</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Don't take only my word for it.
            </p>
          </div>
          <div className="mx-auto mt-8 flow-root max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                  <figure className="rounded-2xl bg-zinc-800 p-4 text-sm leading-6">
                    <blockquote className="text-white">
                      <p>{`“${testimonial.body}”`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <img alt="" src={testimonial.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                      <div>
                        <div className="font-semibold text-zinc-300">{testimonial.author.name}</div>
                        <div className="text-zinc-400">{testimonial.author.handle}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }