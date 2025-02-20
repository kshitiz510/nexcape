import Input from "../components/Input";
import Button from "../components/Button";
import React from "react";
import { MessageSquare, Heart } from "lucide-react";
import homePhoneScreens from "../assets/home-phone-screens.png";
import piggyBank from "../assets/piggy-bank.jpg";
import piggyBankPhone from "../assets/piggy-bank-phone.png";

export const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <div className="text-xl font-semibold text-[#18181b]">Nexcape Labs</div>

        <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
          <Input
            type="search"
            placeholder="Search for Solutions"
            className="w-full bg-white border-gray-200"
          />
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="hidden md:block text-[#71717a] hover:text-[#18181b]">
            Services Offered
          </a>
          <Button className="bg-[#ffd015] text-[#18181b] hover:bg-[#ffd015]/90">
            Join Us Today
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="px-4 py-12 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#18181b] leading-tight">
                Empowering Startups to Thrive
              </h1>
              <p className="text-xl text-[#71717a] max-w-xl">
                At Nexcape Labs, we specialize in transforming innovative ideas into successful
                funding journeys. Our expert team guides startups through every step of the
                fundraising process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#ffd015] text-[#18181b] hover:bg-[#ffd015]/90 text-lg px-8"
                >
                  Get Started Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#71717a] text-[#71717a] hover:bg-gray-50 text-lg px-8"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative h-[500px] md:h-[600px]">
              <div className="absolute inset-0 bg-[#eef2ff] rounded-full blur-3xl opacity-70" />
              <div className="relative h-full flex items-center justify-center">
                <img src={homePhoneScreens} alt="Mobile app showcase" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export const PurposePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8 space-y-12">
      {/* Our Purpose Section */}
      <div className="max-w-4xl bg-gray-900 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center p-4">
          <img
            src={piggyBank}
            alt="Piggy bank with a hand inserting a Bitcoin coin"
            className="rounded-xl"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 p-4">
          <h2 className="text-yellow-400 text-2xl font-bold mb-4">Our Purpose</h2>
          <p className="text-lg">
            Nexcape Labs exists to empower entrepreneurs with the resources and knowledge necessary
            to secure funding and achieve their business goals.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl text-center">
        <h2 className="text-3xl font-bold mb-2">Why Choose Us?</h2>
        <p className="text-gray-400 mb-8">Your Success is Our Mission</p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Comprehensive Strategy",
              description:
                "We develop tailored business strategies that align with your vision and market needs, ensuring a solid foundation for your startup.",
            },
            {
              title: "Pitch Deck Excellence",
              description:
                "Our team crafts compelling pitch decks that effectively communicate your value proposition to potential investors.",
            },
            {
              title: "Investor Connections",
              description:
                "Leverage our extensive network to connect with investors who are eager to support innovative startups like yours.",
            },
            {
              title: "Financial Planning",
              description:
                "We provide expert financial planning services to help you manage your resources and maximize your funding potential.",
            },
            {
              title: "Ongoing Support",
              description:
                "Our commitment to your success continues beyond funding, offering guidance and support as you grow your business.",
            },
            {
              title: "Our Process",
              description:
                "A streamlined approach to fundraising that ensures clarity and efficiency at every stage.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col items-center text-center"
            >
              <MessageSquare className="text-yellow-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const GradientDivider = () => {
  return <div className="h-16 w-full bg-gradient-to-b from-black to-white"></div>;
};
export const ReverseGradient = () => {
  return <div className="h-16 w-full bg-gradient-to-t from-black to-white"></div>;
};

export const KeyBenefits = () => {
  return (
    <section className="container mx-auto px-4 py-16 max-w-7xl">
      <h2 className="text-5xl flex align-middle justify-center font-bold italic text-[#18181b]">
        Key Benefits
      </h2>
      <p className="text-[#71717a] py-3 flex align-middle justify-center text-lg">
        Unlock your startup's potential with our expert guidance.
      </p>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-12">
          <div className="space-y-4 text-center lg:text-left"></div>

          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-[#18181b]">Tailored Strategies</h3>
              <p className="text-[#71717a]">
                We create customized plans to meet your unique fundraising needs.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-[#18181b]">Expert Mentorship</h3>
              <p className="text-[#71717a]">
                Learn from industry veterans who have successfully navigated the funding landscape.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-[#18181b]">Investor Connections</h3>
              <p className="text-[#71717a]">
                Gain access to a network of investors eager to support innovative startups.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 relative h-[600px] w-full max-w-[400px] mx-auto lg:ml-auto">
          <img
            src={piggyBankPhone}
            alt="Mobile app interface showing a piggy bank illustration"
            className="object-contain h-full"
          />
        </div>
      </div>
    </section>
  );
};

const teamMembers = [
  {
    name: "John Doe",
    role: "Funding Strategist",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nexcape__Copy_-IFlhhqYSMR6MHLlnppltRhEkwnhpnt.png",
  },
  {
    name: "Jane Smith",
    role: "Pitch Deck Expert",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nexcape__Copy_-IFlhhqYSMR6MHLlnppltRhEkwnhpnt.png",
  },
  {
    name: "Emily Johnson",
    role: "Investor Relations",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nexcape__Copy_-IFlhhqYSMR6MHLlnppltRhEkwnhpnt.png",
  },
  {
    name: "Michael Brown",
    role: "Financial Advisor",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nexcape__Copy_-IFlhhqYSMR6MHLlnppltRhEkwnhpnt.png",
  },
  {
    name: "Sarah Davis",
    role: "Business Consultant",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nexcape__Copy_-IFlhhqYSMR6MHLlnppltRhEkwnhpnt.png",
  },
  {
    name: "David Wilson",
    role: "Marketing Specialist",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nexcape__Copy_-IFlhhqYSMR6MHLlnppltRhEkwnhpnt.png",
  },
  {
    name: "Laura Garcia",
    role: "Startup Coach",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nexcape__Copy_-IFlhhqYSMR6MHLlnppltRhEkwnhpnt.png",
  },
  {
    name: "James Martinez",
    role: "Growth Hacker",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nexcape__Copy_-IFlhhqYSMR6MHLlnppltRhEkwnhpnt.png",
  },
];

export const TeamSection = () => {
  return (
    <section className="py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#18181b] mb-4">Meet Our Team</h2>
        <p className="text-[#71717a] text-lg md:text-xl max-w-3xl mx-auto mb-16">
          Our experienced mentors are dedicated to guiding you through every step of your
          fundraising journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                <img
                  src={`https://s3-alpha-sig.figma.com/img/d3d9/5c3a/bc56197727b955208b48d8adff8fc170?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R5-WNgKKFA4ZM1ZRuGksw8JfxhPhkmij4BCUORz2OGDLGKcsaeI76yMTAx5IGOSCy-p5fz7hBxmx8VDCOOH8TgiSpzsK5EExjjmQ9BvEZqzV78T1~YVIzKHqzZfqAPxcRnOBVIMnRC-FojNQNCVpXVTnS6HV7kbzpYHF3Qb28sq2GvY9ixbOCj6I0VeJM0Zw26uEphsTakATnrMt3fRelXwlq1akGo~4Qm24T4Y~XIpc43DH-lgXeyIJ3yQakIdCBTFBdUnBilwfKg6vW4XkyRG0WhpzX5XUv17JoHNeq5McCtXCcLaDk67LGS5-y58IDnZlPsNf0hnATH3vk9hTLg__`}
                  alt={`${member.name}'s profile`}
                  className="rounded-full object-cover"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h3 className="text-xl font-semibold text-[#18181b] mb-1">{member.name}</h3>
              <p className="text-[#b3b3b3]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    // Footer Section
    <footer className="w-full bg-gray-900 text-gray-400 p-8">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <div>
          <div className="flex items-center mb-4">
            <Heart className="text-white mr-2" />
            <span className="text-lg font-bold">Nexcape Labs</span>
          </div>
          <p>Funding Your Future</p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 md:mt-0">
          {[
            "Company",
            "About",
            "Careers",
            "Newsroom",
            "Our Services",
            "Consulting",
            "Pitch Decks",
            "Networking",
            "Social",
            "Twitter",
            "Instagram",
            "Threads",
            "Legal",
            "Terms",
            "Privacy",
          ].map((link, index) => (
            <a key={index} href="#" className="hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export const ContactUsForm = () => {
  return (
    <div className="flex items-center justify-center bg-white p-12 w-full">
      <div className="bg-white rounded-2xl p-16 w-full max-w-2xl text-center">
        <h2 className="text-6xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-500 mb-10 text-lg">We're here to help you succeed.</p>

        <form className="flex flex-col md:flex-row items-center justify-center gap-6">
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full md:w-2/3 p-4 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:border-yellow-400"
            required
          />
          <button
            type="submit"
            className="bg-yellow-400 text-white font-semibold px-8 py-4 rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
