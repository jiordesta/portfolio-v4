export default function Testimonials() {
  const testimonials = [
    {
      name: "Anonymous",
      rating: "5/5",
      feedback:
        "I recently worked with a full-stack web developer who truly impressed me with their expertise. They were able to develop a responsive and user-friendly website for my business that exceeded my expectations. Their attention to detail and commitment to delivering high-quality results were evident throughout the project. I highly recommend their services to anyone looking for top-notch web development.",
      image: "/icons/default-img.svg",
    },
    {
      name: "Xian Ybanez",
      rating: "5/5",
      feedback:
        "I recently hired a full-stack web developer to create a website for my business, and I was impressed by their professionalism and expertise. They took the time to understand my needs and provided valuable insights throughout the development process. While there were some minor issues along the way, they were quick to address them and ensure that I was satisfied with the final product. I would recommend their services to others seeking reliable web development solutions.",
      image: "/images/xian.jpg",
    },
    {
      name: "Sheena",
      rating: "5/5",
      feedback:
        "Working with this full-stack web developer has been a delight. They have a keen eye for detail and a deep understanding of web development. The website they created for my project not only looks great but also performs exceptionally well. Their professionalism and dedication to delivering top-notch results are truly commendable. I would highly recommend their services to anyone in need of web development expertise.",
      image: "/images/sheena.jpg",
    },
    {
      name: "Andge Guerzon",
      rating: "5/5",
      feedback:
        "I recently had the pleasure of working with a talented full-stack web developer, and I must say, I was thoroughly impressed. They were able to bring my ideas to life with precision and creativity, delivering a website that exceeded my expectations. Their attention to detail and commitment to excellence were evident throughout the project. I would highly recommend their services to anyone looking for exceptional web development.",
      image: "/icons/default-img.svg",
    },
    {
      name: "Anonymous",
      rating: "5/5",
      feedback:
        "I recently had the pleasure of collaborating with a talented full-stack web developer, and I couldn't be happier with the results. They were able to develop a website for my business that perfectly captured our brand identity and resonated with our target audience. Their attention to detail and commitment to delivering high-quality work were evident throughout the project. I highly recommend their services to anyone in need of web development expertise.",
      image: "/icons/default-img.svg",
    },
  ];

  type Testimony = {
    name: String;
    rating: String;
    feedback: String;
    image: String;
  };

  interface TestimonyProps {
    testimony: Testimony;
  }

  const Testimony = ({ testimony }: TestimonyProps) => {
    const { name, rating, feedback, image } = testimony;
    return (
      <div>
        <div className="bg-color2 rounded-lg p-1 h-[200px] drop-shadow-lg">
          <div className="space-y-4 max-h-[140px] overflow-auto">
            <div className="flex justify-between bg-color2">
              <h1>{name}</h1>
              <h1>{rating}</h1>
            </div>
            <div>
              <p>{feedback}</p>
            </div>
          </div>
        </div>
        <div className="h-[60px] flex justify-center items-center translate-y-[-25px]">
          <div className="h-[120px] w-[120px] rounded-full border-8 border-color1 bg-color2">
            <img
              src={`${image}`}
              className="object-cover w-full h-full rounded-full"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative">
      <div className="min-h-screen w-full flex flex-col lg:flex-row px-[1rem] pb-[6rem] gap-4">
        <div className="w-full lg:w-1/2 relative">
          <div className="md:sticky top-[4rem] space-y-[1rem]">
            <h1>What my clients say?</h1>
            <p>
              I just wanted to share some fantastic feedback I've been hearing
              from my clients about how I handle things. They're really
              impressed with my ability to juggle both front-end and back-end
              development seamlessly. Plus, they appreciate my clear
              communication and reliability in hitting deadlines. They see me as
              a true partner they can count on.
            </p>

            <div className="w-full flex justify-end px-[1rem]">
              <button
                className="bg-color2 rounded-full p-1 flex justify-center items-center gap-2 drop-shadow-lg pe-2"
                onClick={() => {
                  window.open(
                    `${"https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRQBxLBZcSWgVmrkVCVLmRgDfMpHHvrTQWqcFDfwTTxkfTmCwLjcRqZMQqMCMrMlcmQKMN"}`,
                    "_blank"
                  );
                }}
              >
                <div className="rounded-full bg-color3 p-1 glowBox">
                  <img src="/icons/contact.svg" width={25} alt="" />
                </div>
                <h1 className="glowText">contact now!</h1>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-[1rem]">
          {testimonials.map((testimony, index) => {
            return <Testimony key={index} testimony={testimony} />;
          })}
        </div>
      </div>
    </section>
  );
}
