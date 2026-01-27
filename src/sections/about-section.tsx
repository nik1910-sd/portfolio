import Section from "../components/section";

export default function AboutSection() {
    return (
        <div id='about-section'>
            <Section   title="About">
            <div className="text-sm/6.5">
                <p>
                   I'm Nikhil Kumar, a fourth-year robotics and artificial intelligence
                    B.Tech student who is passionate about creating intelligent, scalable digital solutions.
                     I approach software engineering with an emphasis on efficiency and optimized logic 
                     because my technical foundation is based on a solid understanding of data structures and algorithms.
                </p>
                <p className="mt-5">
                   As a Full-Stack Developer, I bridge the gap between solid backend architectures and smooth user interfaces, 
                   leveraging a strong technical foundation in Next.js and the MERN stack." I am especially
                    interested in the nexus between web development and generative AI, using contemporary 
                    APIs to produce AI-powered, high-impact applications.

                </p>
            </div>
        </Section>
        </div>
        
    );
}