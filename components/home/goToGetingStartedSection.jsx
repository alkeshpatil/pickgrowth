export default function GoToGetingStartedSection() {
  const goToGetStartedSection = () => {
    console.log("clicked");
    console.log(window.scrollTo);
    // console.log(getStartedSection.current.offsetTop);
    window.scrollTo({
      top: 0,
 
      behavior: "smooth",
    });
  };
  return (
    <div>
      <button onClick={() => goToGetStartedSection()}>This is button</button>
    </div>
  );
}
