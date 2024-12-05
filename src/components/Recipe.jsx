import ReactMarkdown from "react-markdown";
// eslint-disable-next-line react/prop-types
const Recipe = ({ recipe }) => {
  return (
    <section
      aria-live="polite"
      className="lg:mx-[250px] md:mx-[100px] sm:mx-[52px] mx-[16px]"
    >
      <h1 className="md:text-2xl text-xl font-semibold lg:my-4 md:my-3 my-2">
        Chef Mistral says:
      </h1>
      <ReactMarkdown className="flex flex-col gap-3 my-4 mb-8 text-[#475467]">
        {recipe}
      </ReactMarkdown>
    </section>
  );
};

export default Recipe;
