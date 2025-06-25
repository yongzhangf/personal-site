import Particles from "@/components/animations/background/particles";
import BlurText from "@/components/animations/text/blur-text";
import ShinyText from "@/components/animations/text/shiny-text";
import LocalizedLink from "@/components/localized-link";
import { buttonVariants } from "@/components/ui/button";
import { getDictionary, LangProps } from "@/lib/dictionaries";
import { page_routes } from "@/lib/routes-config";

export default async function Home({ params }: LangProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return (
    <div className="flex sm:min-h-[85.5vh] min-h-[85vh] flex-col items-center justify-center text-center px-2 sm:py-8 py-12">
      <div className="w-full h-full absolute z-[-1]">
        <Particles
          particleColors={new Map([
            ['light', ['#000000', '#EE82EE', '#4169E1']],
            ['dark', ['#ffffff', '#eeeeee', '#e3e3e3']],
          ])}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
       </div>
      <BlurText
        text={dict.home.main_header}
        delay={150}
        animateBy="words"
        direction="top"
        className="text-6xl mb-8"
      />
      <ShinyText text={dict.home.sub_header} disabled={false} speed={3} className='mb-8 sm:text-lg max-w-[1200px] text-muted-foreground custom-class' />
      <div className="flex flex-row items-center gap-5">
        <LocalizedLink
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          {dict.home.get_started}
        </LocalizedLink>
        <LocalizedLink
          href="/blog"
          className={buttonVariants({
            variant: "secondary",
            className: "px-6",
            size: "lg",
          })}
        >
          {dict.home.read_blog}
        </LocalizedLink>
      </div>
    </div>
  );
}
