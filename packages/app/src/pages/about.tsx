import { NextPage } from "next";
import Head from "next/head";

const AboutPage: NextPage = () => {
  return (
    <div className="mt-10">
      <Head>
        <title>About Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-neutral-100 backdrop-blur-md bg-opacity-10 rounded-xl ml-auto mr-auto max-w-2xl px-6 py-8">
        <p className="text-neutral-200">
          So we are a bunch of budding developers 🧑🏻‍💻 ,who attended their first
          hackathon at LPU organized by iNeuron.Not gonna lie, from the very
          first minute, we thought of nothing less than winning ✌🏻 this.Keep in
          mind, not all of us are developers neither we had the proper knowledge
          of the techstack 🤖 for the project. Still we believed and rightly
          so,because our product was so much better than everyone else's.
        </p>
        <br />
        <p className="text-neutral-200">
          From taking days to weeks to code a simple feature in codebase, we
          built a whole working fullstack application in less than 24 hours 😅.
        </p>

        <br />
        <p className="text-neutral-200">
          Unfortunately some bugs 👾 came at the end, we couldn't deploy the app
          properly. Alas we lost our chance to win 2 lacs 😢. Geez we even made
          plans for a goa trip while we were at it 😂.
        </p>

        <br />
        <p className="text-neutral-200">
          Sure, it was dissapointing to not win, but it has made our resolve
          even stronger.I believe the the hackathon was not conducted properly,
          nor we were evaluated fairly.Regardless of the judgement, we thank the
          iNeuron team and Techstack LPU for organizing this event.Personally,
          for me it's been a huge learning experience and I'm sure all of my
          teammates agree with my statement.
        </p>

        <br />
        <p className="text-neutral-200">
          Our team name was <span className="font-bold">Sure AlphaQ</span> and
          team members were{" "}
          <span className="font-medium">Arsh, Melon(me),Ravi, Ayush</span>. Huge
          thanks 🙌 to all my teammates for doing this with me. Special thanks
          to Arsh for designing this flawless UI and Ravi for coming up the
          name, helping us dockerizing the server and also for writing the docs.
          Go check out our github repo for more info 😉.
        </p>
        <br />

        <p className="text-neutral-200">
          <span className="font-bold"> Sure AlphaQ </span>😜 all the way 💪🏻🥳
          (kudos to you xD if you guessed what it means)
        </p>
      </div>
    </div>
  );
};
export default AboutPage;
