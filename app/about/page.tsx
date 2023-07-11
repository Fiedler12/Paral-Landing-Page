export const metadata = {
    title: 'About - Paral',
    description: 'Page description',
  }
  
  import Hero from '@/components/hero'
  import Illustration from '@/public/images/hero-illustration.svg'
  
  export default function About() {
    return (
      <section className="relative overflow-hidden">
      {/* Bg gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-[640px] md:mx-0 text-center md:text-left">
            <div data-aos="zoom-out">
            </div>
            <p className="text-xl text-gray-400 mb-10" data-aos="zoom-out" data-aos-delay="200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum purus ut ex fringilla tincidunt. Suspendisse dictum risus sem, at malesuada nunc gravida non. Aliquam fringilla quam a maximus interdum. Cras sollicitudin condimentum neque sed tincidunt. Cras ut augue et felis vulputate tincidunt. 
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <div>
                <a className="btn text-gray-300 bg-gradient-to-t from-gray-800 to-gray-700 hover:to-gray-800 w-full shadow-lg" href="#0">
                  Explore Docs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }