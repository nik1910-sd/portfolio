 import Section from "../components/section";
 import collegeLogo from "/assets/logo.webp?url";

export default function EducationSection() {
    return (
        <Section title="Education">
            <div className="w-full border border-zinc-300 p-6 rounded-xl">
                <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                            <img
                                src={collegeLogo}
                                alt="Education"
                                width={25}
                                height={25}
                                className="size-5.5"
                            />
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-zinc-900">
                                B.Tech in Robotics & AI
                            </h3>
                            <div className="text-zinc-700">CGC University</div>
                        </div>
                    </div>
                    <div className="text-zinc-700">Sep 2022 - May 2026</div>
                </div>
                <p className="mt-6 text-zinc-700">By creating useful, scalable software products, I concentrate on applying academic knowledge to the real world.</p>
            </div>

        </Section>
    );
}