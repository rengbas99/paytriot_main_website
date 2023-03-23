import ClientListSlider from './ClientListSlider';
import HeroComponent from './HeroComponent';
import ToolkitComponent from './ToolkitComponent';

export default function LandingHero() {
  return (
    <>
      <section className="hero" id="textswitch">
        <HeroComponent />
        <ClientListSlider />
        <ToolkitComponent />
      </section>
    </>
  );
}
